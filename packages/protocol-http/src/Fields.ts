import { Field } from "./Field";
import { FieldPosition } from "./FieldPosition";

export type FieldsOptions = { fields?: Field[]; encoding?: string; };

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
    this.entries[field.name] = field;
  }

  /**
   *  Retrieve {@link Field} entry by name.
   * 
   * @param name The name of the {@link Field} entry
   *  to retrieve
   * @returns The {@link Field} if it exists.
   */
  public getField(name: string): Field | undefined {
    return this.entries[name];
  }

  /**
   * Delete entry from collection.
   * 
   * @param name Name of the entry to delete.
   */ 
  public removeField(name: string): void {
    delete this.entries[name];
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
}
