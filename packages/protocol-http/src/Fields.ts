import { Field, FieldOptions } from "./Field";
import { FieldPosition } from "./FieldPosition";

export type FieldsOptions = { fields?: Field[]; encoding?: string };

/**
 * Collection of Field entries mapped by name.
 */
export class Fields {
  private readonly entries: Record<string, Field> = {};
  private readonly encoding: string;

  constructor({ fields = [], encoding = "utf-8" }: FieldsOptions) {
    fields.forEach(this.setField.bind(this));
    this.encoding = encoding;
  }

  /**
   * Set entry for a {@link Field} name. The `name`
   * attribute will be used to key the collection.
   *
   * @param field The {@link Field} to set.
   */
  public setField(field: Field): void {
    this.entries[field.name.toLowerCase()] = field;
  }

  /**
   *  Retrieve {@link Field} entry by name.
   *
   * @param name The name of the {@link Field} entry
   *  to retrieve
   * @returns The {@link Field} if it exists.
   */
  public getField(name: string): Field | undefined {
    return this.entries[name.toLowerCase()];
  }

  /**
   * Delete entry from collection.
   *
   * @param name Name of the entry to delete.
   */
  public removeField(name: string): void {
    delete this.entries[name.toLowerCase()];
  }

  /**
   * Helper function for retrieving specific types of fields.
   * Used to grab all headers or all trailers.
   *
   * @param kind {@link FieldPosition} of entries to retrieve.
   * @returns The {@link Field} entries with the specified
   *  {@link FieldPosition}.
   */
  public getByType(kind: FieldPosition): Field[] {
    return Object.values(this.entries).filter((field) => field.kind === kind);
  }

  /**
   * Retrieves all the {@link Field}s in the collection.
   * Includes headers and trailers.
   *
   * @returns All fields in the collection.
   */
  public getAll(): Field[] {
    return Object.values(this.entries);
  }

  /**
   * Utility for creating {@link Fields} without having to
   * construct each {@link Field} individually.
   *
   * @param fieldsToCreate List of arguments used to create each
   *  {@link Field}.
   * @param encoding Optional encoding of resultant {@link Fields}.
   * @returns The {@link Fields} instance.
   */
  public static from(fieldsToCreate: FieldOptions[], encoding?: string): Fields {
    return fieldsToCreate.reduce((fields, fieldArgs) => {
      fields.setField(new Field(fieldArgs));
      return fields;
    }, new Fields({ encoding }));
  }
}
