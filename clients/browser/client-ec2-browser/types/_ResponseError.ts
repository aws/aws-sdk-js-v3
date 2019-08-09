/**
 * <p>Describes the error that's returned when you cannot delete a launch template version.</p>
 */
export interface _ResponseError {
  /**
   * <p>The error code.</p>
   */
  Code?:
    | "launchTemplateIdDoesNotExist"
    | "launchTemplateIdMalformed"
    | "launchTemplateNameDoesNotExist"
    | "launchTemplateNameMalformed"
    | "launchTemplateVersionDoesNotExist"
    | "unexpectedError"
    | string;

  /**
   * <p>The error message, if applicable.</p>
   */
  Message?: string;
}

export type _UnmarshalledResponseError = _ResponseError;
