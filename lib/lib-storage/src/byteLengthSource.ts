import { runtimeConfig } from "./runtimeConfig";

/**
 * @internal
 */
export enum BYTE_LENGTH_SOURCE {
  EMPTY_INPUT = "a null or undefined Body",
  CONTENT_LENGTH = "the ContentLength property of the params set by the caller",
  STRING_LENGTH = "the encoded byte length of the Body string",
  TYPED_ARRAY = "the byteLength of a typed byte array such as Uint8Array",
  LENGTH = "the value of Body.length",
  SIZE = "the value of Body.size",
  START_END_DIFF = "the numeric difference between Body.start and Body.end",
  LSTAT = "the size of the file given by Body.path on disk as reported by lstatSync",
}

/**
 * The returned value should complete the sentence, "The byte count of the data was determined by ...".
 * @internal
 * @param input - to examine.
 * @param override - manually specified value.
 * @returns source of byte count information.
 */
export const byteLengthSource = (input: any, override?: number): BYTE_LENGTH_SOURCE | undefined => {
  if (override != null) {
    return BYTE_LENGTH_SOURCE.CONTENT_LENGTH;
  }

  if (input == null) {
    return BYTE_LENGTH_SOURCE.EMPTY_INPUT;
  }

  if (typeof input === "string") {
    return BYTE_LENGTH_SOURCE.STRING_LENGTH;
  }

  if (typeof input.byteLength === "number") {
    return BYTE_LENGTH_SOURCE.TYPED_ARRAY;
  } else if (typeof input.length === "number") {
    return BYTE_LENGTH_SOURCE.LENGTH;
  } else if (typeof input.size === "number") {
    return BYTE_LENGTH_SOURCE.SIZE;
  } else if (typeof input.start === "number" && typeof input.end === "number") {
    return BYTE_LENGTH_SOURCE.START_END_DIFF;
  } else if (runtimeConfig.isFileReadStream(input)) {
    try {
      runtimeConfig.lstatSync(input.path).size;
      return BYTE_LENGTH_SOURCE.LSTAT;
    } catch (error) {
      return undefined;
    }
  }
  return undefined;
};
