import { FieldPosition } from "./FieldPosition";

export type FieldOptions = {
  name: string;
  kind?: FieldPosition;
  values?: string[];
};

/**
 * A name-value pair representing a single field
 * transmitted in an HTTP Request or Response.
 *
 * The kind will dictate metadata placement within
 * an HTTP message.
 *
 * All field names are case insensitive and
 * case-variance must be treated as equivalent.
 * Names MAY be normalized but SHOULD be preserved
 * for accuracy during transmission.
 */
export class Field {
  public readonly name: string;
  public readonly kind: FieldPosition;

  public values: string[];

  constructor({ name, kind = FieldPosition.HEADER, values = [] }: FieldOptions) {
    this.name = name;
    this.kind = kind;
    this.values = values;
  }

  /**
   * Appends a value to the field.
   *
   * @param value The value to append.
   */
  public add(value: string): void {
    this.values.push(value);
  }

  /**
   * Overwrite existing field values.
   *
   * @param values The new field values.
   */
  public set(values: string[]): void {
    this.values = values;
  }

  /**
   * Remove all matching entries from list.
   *
   * @param value Value to remove.
   */
  public remove(value: string): void {
    this.values = this.values.filter((v) => v !== value);
  }

  /**
   * Get comma-delimited string.
   *
   * @returns String representation of {@link Field}.
   */
  public toString(): string {
    // Values with spaces or commas MUST be double-quoted
    return this.values.map((v) => (v.includes(",") || v.includes(" ") ? `"${v}"` : v)).join(", ");
  }

  /**
   * Get string values as a list
   *
   * @returns Values in {@link Field} as a list.
   */
  public get(): string[] {
    return this.values;
  }
}
