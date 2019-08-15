import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteResolverInput: _Structure_ = {
  type: "structure",
  required: ["apiId", "typeName", "fieldName"],
  members: {
    apiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    typeName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "typeName"
    },
    fieldName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "fieldName"
    }
  }
};
