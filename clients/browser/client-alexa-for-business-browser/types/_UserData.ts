/**
 * <p>Information related to a user.</p>
 */
export interface _UserData {
  /**
   * <p>The ARN of a user.</p>
   */
  UserArn?: string;

  /**
   * <p>The first name of a user.</p>
   */
  FirstName?: string;

  /**
   * <p>The last name of a user.</p>
   */
  LastName?: string;

  /**
   * <p>The email of a user.</p>
   */
  Email?: string;

  /**
   * <p>The enrollment status of a user.</p>
   */
  EnrollmentStatus?:
    | "INITIALIZED"
    | "PENDING"
    | "REGISTERED"
    | "DISASSOCIATING"
    | "DEREGISTERING"
    | string;

  /**
   * <p>The enrollment ARN of a user.</p>
   */
  EnrollmentId?: string;
}

export type _UnmarshalledUserData = _UserData;
