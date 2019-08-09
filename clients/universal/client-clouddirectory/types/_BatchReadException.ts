/**
 * <p>The batch read exception structure, which contains the exception type and message.</p>
 */
export interface _BatchReadException {
  /**
   * <p>A type of exception, such as <code>InvalidArnException</code>.</p>
   */
  Type?:
    | "ValidationException"
    | "InvalidArnException"
    | "ResourceNotFoundException"
    | "InvalidNextTokenException"
    | "AccessDeniedException"
    | "NotNodeException"
    | "FacetValidationException"
    | "CannotListParentOfRootException"
    | "NotIndexException"
    | "NotPolicyException"
    | "DirectoryNotEnabledException"
    | "LimitExceededException"
    | "InternalServiceException"
    | string;

  /**
   * <p>An exception message that is associated with the failure.</p>
   */
  Message?: string;
}

export type _UnmarshalledBatchReadException = _BatchReadException;
