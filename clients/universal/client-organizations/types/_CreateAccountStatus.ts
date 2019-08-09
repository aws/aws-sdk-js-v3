/**
 * <p>Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an AWS account or an AWS GovCloud (US) account in an organization.</p>
 */
export interface _CreateAccountStatus {
  /**
   * <p>The unique identifier (ID) that references this request. You get this value from the response of the initial <a>CreateAccount</a> request to create the account.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an create account request ID string requires "car-" followed by from 8 to 32 lower-case letters or digits.</p>
   */
  Id?: string;

  /**
   * <p>The account name given to the account when it was created.</p>
   */
  AccountName?: string;

  /**
   * <p>The status of the request.</p>
   */
  State?: "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | string;

  /**
   * <p>The date and time that the request was made for the account creation.</p>
   */
  RequestedTimestamp?: Date | string | number;

  /**
   * <p>The date and time that the account was created and the request completed.</p>
   */
  CompletedTimestamp?: Date | string | number;

  /**
   * <p>If the account was created successfully, the unique identifier (ID) of the new account.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12 digits.</p>
   */
  AccountId?: string;

  /**
   * <p>If the account was created successfully, the unique identifier (ID) of the new account in the AWS GovCloud (US) Region.</p>
   */
  GovCloudAccountId?: string;

  /**
   * <p>If the request failed, a description of the reason for the failure.</p> <ul> <li> <p>ACCOUNT_LIMIT_EXCEEDED: The account could not be created because you have reached the limit on the number of accounts in your organization.</p> </li> <li> <p>EMAIL_ALREADY_EXISTS: The account could not be created because another AWS account with that email address already exists.</p> </li> <li> <p>INVALID_ADDRESS: The account could not be created because the address you provided is not valid.</p> </li> <li> <p>INVALID_EMAIL: The account could not be created because the email address you provided is not valid.</p> </li> <li> <p>INTERNAL_FAILURE: The account could not be created because of an internal failure. Try again later. If the problem persists, contact Customer Support.</p> </li> </ul>
   */
  FailureReason?:
    | "ACCOUNT_LIMIT_EXCEEDED"
    | "EMAIL_ALREADY_EXISTS"
    | "INVALID_ADDRESS"
    | "INVALID_EMAIL"
    | "CONCURRENT_ACCOUNT_MODIFICATION"
    | "INTERNAL_FAILURE"
    | string;
}

export interface _UnmarshalledCreateAccountStatus extends _CreateAccountStatus {
  /**
   * <p>The date and time that the request was made for the account creation.</p>
   */
  RequestedTimestamp?: Date;

  /**
   * <p>The date and time that the account was created and the request completed.</p>
   */
  CompletedTimestamp?: Date;
}
