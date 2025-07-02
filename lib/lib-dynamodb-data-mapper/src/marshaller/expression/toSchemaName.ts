import { AttributePath } from "../../expressions";
import { ItemSchema, ItemSchemaType } from "../../schema";

export function toSchemaName(path: AttributePath | string, schema: ItemSchema): AttributePath {
  if (typeof path === "string") {
    path = new AttributePath(path);
  }
  const elements = path.elements.map((el) => ({ ...el }));

  let cursor: ItemSchemaType = {
    type: "Document",
    members: schema,
  };
  for (const element of elements) {
    if (element.type === "AttributeName" && cursor && cursor.type === "Document") {
      const { name } = element;
      element.name = getSchemaName(name, cursor.members);
      cursor = cursor.members[name];
    } else if (element.type === "ListIndex" && cursor && cursor.type === "List") {
      cursor = (cursor as any).memberType;
    } else {
      break;
    }
  }

  return new AttributePath(elements);
}

export function getSchemaName(propertyName: string, schema: ItemSchema): string {
  const fieldSchema = schema[propertyName];
  if (fieldSchema) {
    const { attributeName = propertyName } = fieldSchema;
    return attributeName;
  }

  return propertyName;
}
