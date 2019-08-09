import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A <code>BatchWrite</code> exception has occurred.</p>
 */
export interface BatchWriteException
  extends __ServiceException__<_BatchWriteExceptionDetails> {
  name: "BatchWriteException";
}

export interface _BatchWriteExceptionDetails {
  /**
   * _BatchOperationIndex shape
   */
  Index?: number;

  /**
   * _BatchWriteExceptionType shape
   */
  Type?:
    | "InternalServiceException"
    | "ValidationException"
    | "InvalidArnException"
    | "LinkNameAlreadyInUseException"
    | "StillContainsLinksException"
    | "FacetValidationException"
    | "ObjectNotDetachedException"
    | "ResourceNotFoundException"
    | "AccessDeniedException"
    | "InvalidAttachmentException"
    | "NotIndexException"
    | "NotNodeException"
    | "IndexedAttributeMissingException"
    | "ObjectAlreadyDetachedException"
    | "NotPolicyException"
    | "DirectoryNotEnabledException"
    | "LimitExceededException"
    | "UnsupportedIndexTypeException"
    | string;

  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
