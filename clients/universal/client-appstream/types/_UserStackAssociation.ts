/**
 * <p>Describes a user in the user pool and the associated stack.</p>
 */
export interface _UserStackAssociation {
  /**
   * <p>The name of the stack that is associated with the user.</p>
   */
  StackName: string;

  /**
   * <p>The email address of the user who is associated with the stack.</p> <note> <p>Users' email addresses are case-sensitive.</p> </note>
   */
  UserName: string;

  /**
   * <p>The authentication type for the user.</p>
   */
  AuthenticationType: "API" | "SAML" | "USERPOOL" | string;

  /**
   * <p>Specifies whether a welcome email is sent to a user after the user is created in the user pool.</p>
   */
  SendEmailNotification?: boolean;
}

export type _UnmarshalledUserStackAssociation = _UserStackAssociation;
