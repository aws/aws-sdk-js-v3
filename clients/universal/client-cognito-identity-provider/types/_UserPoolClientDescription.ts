/**
 * <p>The description of the user pool client.</p>
 */
export interface _UserPoolClientDescription {
  /**
   * <p>The ID of the client associated with the user pool.</p>
   */
  ClientId?: string;

  /**
   * <p>The user pool ID for the user pool where you want to describe the user pool client.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The client name from the user pool client description.</p>
   */
  ClientName?: string;
}

export type _UnmarshalledUserPoolClientDescription = _UserPoolClientDescription;
