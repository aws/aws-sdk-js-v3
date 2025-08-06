import { NumericValue } from "@smithy/core/serde";

/**
 * A rare character used as a control.
 * @internal
 */
const NUMERIC_CONTROL_CHAR = String.fromCharCode(925) as "Ν";

/**
 * Serializes BigInt and NumericValue to JSON-number.
 * @internal
 */
export class JsonReplacer {
  /**
   * Stores placeholder key to true serialized value lookup.
   */
  private readonly values = new Map<string, string>();
  private counter = 0;
  private stage = 0;

  /**
   * Creates a jsonReplacer function that reserves big integer and big decimal values
   * for later replacement.
   */
  public createReplacer() {
    if (this.stage === 1) {
      throw new Error("@aws-sdk/core/protocols - JsonReplacer already created.");
    }
    if (this.stage === 2) {
      throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
    }
    this.stage = 1;

    return (key: string, value: unknown) => {
      if (value instanceof NumericValue) {
        const v = `${NUMERIC_CONTROL_CHAR + "nv" + this.counter++}_` + value.string;
        this.values.set(`"${v}"`, value.string);
        return v;
      }
      if (typeof value === "bigint") {
        const s = value.toString();
        const v = `${NUMERIC_CONTROL_CHAR + "b" + this.counter++}_` + s;
        this.values.set(`"${v}"`, s);
        return v;
      }
      return value;
    };
  }

  /**
   * Replaces placeholder keys with their true values.
   */
  public replaceInJson(json: string): string {
    if (this.stage === 0) {
      throw new Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
    }
    if (this.stage === 2) {
      throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
    }
    this.stage = 2;
    if (this.counter === 0) {
      return json;
    }
    for (const [key, value] of this.values) {
      json = json.replace(key, value);
    }
    return json;
  }
}
