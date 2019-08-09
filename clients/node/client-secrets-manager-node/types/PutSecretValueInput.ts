import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutSecretValueInput shape
 */
export interface PutSecretValueInput {
  /**
   * <p>Specifies the secret to which you want to add a new version. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret. The secret must already exist.</p> <note> <p>If you specify an ARN, we generally recommend that you specify a complete ARN. You can specify a partial ARN too—for example, if you don’t include the final hyphen and six random characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN match can work as long as it uniquely matches only one secret. However, if your secret has a name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six characters to the ARN) and you try to use that as a partial ARN, then those characters cause Secrets Manager to assume that you’re specifying a complete ARN. This confusion can cause unexpected results. To avoid this situation, we recommend that you don’t create secret names that end with a hyphen followed by six characters.</p> </note>
   */
  SecretId: string;

  /**
   * <p>(Optional) Specifies a unique identifier for the new version of the secret. </p> <note> <p>If you use the AWS CLI or one of the AWS SDK to call this operation, then you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes that in the request. If you don't use the SDK and instead generate a raw HTTP request to the Secrets Manager service endpoint, then you must generate a <code>ClientRequestToken</code> yourself for new versions and include that value in the request. </p> </note> <p>This value helps ensure idempotency. Secrets Manager uses this value to prevent the accidental creation of duplicate versions if there are failures and retries during the Lambda rotation function's processing. We recommend that you generate a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID-type</a> value to ensure uniqueness within the specified secret. </p> <ul> <li> <p>If the <code>ClientRequestToken</code> value isn't already associated with a version of the secret then a new version of the secret is created. </p> </li> <li> <p>If a version with this value already exists and that version's <code>SecretString</code> or <code>SecretBinary</code> values are the same as those in the request then the request is ignored (the operation is idempotent). </p> </li> <li> <p>If a version with this value already exists and that version's <code>SecretString</code> and <code>SecretBinary</code> values are different from those in the request then the request fails because you cannot modify an existing secret version. You can only create new versions to store new secret values.</p> </li> </ul> <p>This value becomes the <code>VersionId</code> of the new version.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>(Optional) Specifies binary data that you want to encrypt and store in the new version of the secret. To use this parameter in the command-line tools, we recommend that you store your binary data in a file and then use the appropriate technique for your tool to pass the contents of the file as a parameter. Either <code>SecretBinary</code> or <code>SecretString</code> must have a value, but not both. They cannot both be empty.</p> <p>This parameter is not accessible if the secret using the Secrets Manager console.</p> <p/>
   */
  SecretBinary?: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>(Optional) Specifies text data that you want to encrypt and store in this new version of the secret. Either <code>SecretString</code> or <code>SecretBinary</code> must have a value, but not both. They cannot both be empty.</p> <p>If you create this secret by using the Secrets Manager console then Secrets Manager puts the protected secret text in only the <code>SecretString</code> parameter. The Secrets Manager console stores the information as a JSON structure of key/value pairs that the default Lambda rotation function knows how to parse.</p> <p>For storing multiple values, we recommend that you use a JSON text string argument and specify key/value pairs. For information on how to format a JSON parameter for the various command line tool environments, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json">Using JSON for Parameters</a> in the <i>AWS CLI User Guide</i>.</p> <p> For example:</p> <p> <code>[{"username":"bob"},{"password":"abc123xyz456"}]</code> </p> <p>If your command-line tool or SDK requires quotation marks around the parameter, you should use single quotes to avoid confusion with the double quotes required in the JSON text.</p>
   */
  SecretString?: string;

  /**
   * <p>(Optional) Specifies a list of staging labels that are attached to this version of the secret. These staging labels are used to track the versions through the rotation process by the Lambda rotation function.</p> <p>A staging label must be unique to a single version of the secret. If you specify a staging label that's already associated with a different version of the same secret then that staging label is automatically removed from the other version and attached to this version.</p> <p>If you do not specify a value for <code>VersionStages</code> then Secrets Manager automatically moves the staging label <code>AWSCURRENT</code> to this new version.</p>
   */
  VersionStages?: Array<string> | Iterable<string>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
