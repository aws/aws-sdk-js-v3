/**
 * <p>The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts.</p>
 */
export interface _Account {
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string;

  /**
   * <p>The Amazon Chime account name.</p>
   */
  Name: string;

  /**
   * <p>The Amazon Chime account type. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration Guide</i>.</p>
   */
  AccountType?:
    | "Team"
    | "EnterpriseDirectory"
    | "EnterpriseLWA"
    | "EnterpriseOIDC"
    | string;

  /**
   * <p>The Amazon Chime account creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date | string | number;

  /**
   * <p>The default license for the Amazon Chime account.</p>
   */
  DefaultLicense?: "Basic" | "Plus" | "Pro" | "ProTrial" | string;

  /**
   * <p>Supported licenses for the Amazon Chime account.</p>
   */
  SupportedLicenses?:
    | Array<"Basic" | "Plus" | "Pro" | "ProTrial" | string>
    | Iterable<"Basic" | "Plus" | "Pro" | "ProTrial" | string>;
}

export interface _UnmarshalledAccount extends _Account {
  /**
   * <p>The Amazon Chime account creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>Supported licenses for the Amazon Chime account.</p>
   */
  SupportedLicenses?: Array<"Basic" | "Plus" | "Pro" | "ProTrial" | string>;
}
