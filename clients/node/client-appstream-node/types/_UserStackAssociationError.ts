import {
  _UserStackAssociation,
  _UnmarshalledUserStackAssociation
} from "./_UserStackAssociation";

/**
 * <p>Describes the error that is returned when a user can’t be associated with or disassociated from a stack. </p>
 */
export interface _UserStackAssociationError {
  /**
   * <p>Information about the user and associated stack.</p>
   */
  UserStackAssociation?: _UserStackAssociation;

  /**
   * <p>The error code for the error that is returned when a user can’t be associated with or disassociated from a stack.</p>
   */
  ErrorCode?:
    | "STACK_NOT_FOUND"
    | "USER_NAME_NOT_FOUND"
    | "INTERNAL_ERROR"
    | string;

  /**
   * <p>The error message for the error that is returned when a user can’t be associated with or disassociated from a stack.</p>
   */
  ErrorMessage?: string;
}

export interface _UnmarshalledUserStackAssociationError
  extends _UserStackAssociationError {
  /**
   * <p>Information about the user and associated stack.</p>
   */
  UserStackAssociation?: _UnmarshalledUserStackAssociation;
}
