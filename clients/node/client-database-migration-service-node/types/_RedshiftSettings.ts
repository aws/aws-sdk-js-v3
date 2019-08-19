/**
 * <p/>
 */
export interface _RedshiftSettings {
  /**
   * <p>A value that indicates to allow any date format, including invalid formats such as 00/00/00 00:00:00, to be loaded without generating an error. You can choose <code>true</code> or <code>false</code> (the default).</p> <p>This parameter applies only to TIMESTAMP and DATE columns. Always use ACCEPTANYDATE with the DATEFORMAT parameter. If the date format for the data doesn't match the DATEFORMAT specification, Amazon Redshift inserts a NULL value into that field. </p>
   */
  AcceptAnyDate?: boolean;

  /**
   * <p>Code to run after connecting. This parameter should contain the code itself, not the name of a file containing the code.</p>
   */
  AfterConnectScript?: string;

  /**
   * <p>The location where the comma-separated value (.csv) files are stored before being uploaded to the S3 bucket. </p>
   */
  BucketFolder?: string;

  /**
   * <p>The name of the S3 bucket you want to use</p>
   */
  BucketName?: string;

  /**
   * <p>A value that sets the amount of time to wait (in milliseconds) before timing out, beginning from when you initially establish a connection.</p>
   */
  ConnectionTimeout?: number;

  /**
   * <p>The name of the Amazon Redshift data warehouse (service) that you are working with.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The date format that you are using. Valid values are <code>auto</code> (case-sensitive), your date format string enclosed in quotes, or NULL. If this parameter is left unset (NULL), it defaults to a format of 'YYYY-MM-DD'. Using <code>auto</code> recognizes most strings, even some that aren't supported when you use a date format string. </p> <p>If your date and time values use formats different from each other, set this to <code>auto</code>. </p>
   */
  DateFormat?: string;

  /**
   * <p>A value that specifies whether AWS DMS should migrate empty CHAR and VARCHAR fields as NULL. A value of <code>true</code> sets empty CHAR and VARCHAR fields to null. The default is <code>false</code>.</p>
   */
  EmptyAsNull?: boolean;

  /**
   * <p>The type of server-side encryption that you want to use for your data. This encryption type is part of the endpoint settings or the extra connections attributes for Amazon S3. You can choose either <code>SSE_S3</code> (the default) or <code>SSE_KMS</code>. To use <code>SSE_S3</code>, create an AWS Identity and Access Management (IAM) role with a policy that allows <code>"arn:aws:s3:::*"</code> to use the following actions: <code>"s3:PutObject", "s3:ListBucket"</code> </p>
   */
  EncryptionMode?: "sse-s3" | "sse-kms" | string;

  /**
   * <p>The number of threads used to upload a single file. This parameter accepts a value from 1 through 64. It defaults to 10.</p>
   */
  FileTransferUploadStreams?: number;

  /**
   * <p>The amount of time to wait (in milliseconds) before timing out, beginning from when you begin loading.</p>
   */
  LoadTimeout?: number;

  /**
   * <p>The maximum size (in KB) of any .csv file used to transfer data to Amazon Redshift. This accepts a value from 1 through 1,048,576. It defaults to 32,768 KB (32 MB).</p>
   */
  MaxFileSize?: number;

  /**
   * <p>The password for the user named in the <code>username</code> property.</p>
   */
  Password?: string;

  /**
   * <p>The port number for Amazon Redshift. The default value is 5439.</p>
   */
  Port?: number;

  /**
   * <p>A value that specifies to remove surrounding quotation marks from strings in the incoming data. All characters within the quotation marks, including delimiters, are retained. Choose <code>true</code> to remove quotation marks. The default is <code>false</code>.</p>
   */
  RemoveQuotes?: boolean;

  /**
   * <p>A list of characters that you want to replace. Use with <code>ReplaceChars</code>.</p>
   */
  ReplaceInvalidChars?: string;

  /**
   * <p>A value that specifies to replaces the invalid characters specified in <code>ReplaceInvalidChars</code>, substituting the specified characters instead. The default is <code>"?"</code>.</p>
   */
  ReplaceChars?: string;

  /**
   * <p>The name of the Amazon Redshift cluster you are using.</p>
   */
  ServerName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that has access to the Amazon Redshift service.</p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * <p>The AWS KMS key ID. If you are using <code>SSE_KMS</code> for the <code>EncryptionMode</code>, provide this key ID. The key that you use needs an attached policy that enables IAM user permissions and allows use of the key.</p>
   */
  ServerSideEncryptionKmsKeyId?: string;

  /**
   * <p>The time format that you want to use. Valid values are <code>auto</code> (case-sensitive), <code>'timeformat_string'</code>, <code>'epochsecs'</code>, or <code>'epochmillisecs'</code>. It defaults to 10. Using <code>auto</code> recognizes most strings, even some that aren't supported when you use a time format string. </p> <p>If your date and time values use formats different from each other, set this parameter to <code>auto</code>. </p>
   */
  TimeFormat?: string;

  /**
   * <p>A value that specifies to remove the trailing white space characters from a VARCHAR string. This parameter applies only to columns with a VARCHAR data type. Choose <code>true</code> to remove unneeded white space. The default is <code>false</code>.</p>
   */
  TrimBlanks?: boolean;

  /**
   * <p>A value that specifies to truncate data in columns to the appropriate number of characters, so that the data fits in the column. This parameter applies only to columns with a VARCHAR or CHAR data type, and rows with a size of 4 MB or less. Choose <code>true</code> to truncate data. The default is <code>false</code>.</p>
   */
  TruncateColumns?: boolean;

  /**
   * <p>An Amazon Redshift user name for a registered user.</p>
   */
  Username?: string;

  /**
   * <p>The size of the write buffer to use in rows. Valid values range from 1 through 2,048. The default is 1,024. Use this setting to tune performance. </p>
   */
  WriteBufferSize?: number;
}

export type _UnmarshalledRedshiftSettings = _RedshiftSettings;
