/**
 * <p/>
 */
export interface _MongoDbSettings {
  /**
   * <p>The user name you use to access the MongoDB source endpoint. </p>
   */
  Username?: string;

  /**
   * <p> The password for the user account you use to access the MongoDB source endpoint. </p>
   */
  Password?: string;

  /**
   * <p> The name of the server on the MongoDB source endpoint. </p>
   */
  ServerName?: string;

  /**
   * <p> The port value for the MongoDB source endpoint. </p>
   */
  Port?: number;

  /**
   * <p> The database name on the MongoDB source endpoint. </p>
   */
  DatabaseName?: string;

  /**
   * <p> The authentication type you use to access the MongoDB source endpoint.</p> <p>Valid values: NO, PASSWORD </p> <p>When NO is selected, user name and password parameters are not used and can be empty. </p>
   */
  AuthType?: "no" | "password" | string;

  /**
   * <p> The authentication mechanism you use to access the MongoDB source endpoint.</p> <p>Valid values: DEFAULT, MONGODB_CR, SCRAM_SHA_1 </p> <p>DEFAULT – For MongoDB version 2.x, use MONGODB_CR. For MongoDB version 3.x, use SCRAM_SHA_1. This attribute is not used when authType=No.</p>
   */
  AuthMechanism?: "default" | "mongodb_cr" | "scram_sha_1" | string;

  /**
   * <p> Specifies either document or table mode. </p> <p>Valid values: NONE, ONE</p> <p>Default value is NONE. Specify NONE to use document mode. Specify ONE to use table mode.</p>
   */
  NestingLevel?: "none" | "one" | string;

  /**
   * <p> Specifies the document ID. Use this attribute when <code>NestingLevel</code> is set to NONE. </p> <p>Default value is false. </p>
   */
  ExtractDocId?: string;

  /**
   * <p> Indicates the number of documents to preview to determine the document organization. Use this attribute when <code>NestingLevel</code> is set to ONE. </p> <p>Must be a positive value greater than 0. Default value is 1000.</p>
   */
  DocsToInvestigate?: string;

  /**
   * <p> The MongoDB database name. This attribute is not used when <code>authType=NO</code>. </p> <p>The default is admin.</p>
   */
  AuthSource?: string;

  /**
   * <p>The AWS KMS key identifier that is used to encrypt the content on the replication instance. If you don't specify a value for the <code>KmsKeyId</code> parameter, then AWS DMS uses your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p>
   */
  KmsKeyId?: string;
}

export type _UnmarshalledMongoDbSettings = _MongoDbSettings;
