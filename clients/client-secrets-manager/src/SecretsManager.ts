import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CancelRotateSecretCommand,
  CancelRotateSecretCommandInput,
  CancelRotateSecretCommandOutput,
} from "./commands/CancelRotateSecretCommand";
import {
  CreateSecretCommand,
  CreateSecretCommandInput,
  CreateSecretCommandOutput,
} from "./commands/CreateSecretCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteSecretCommand,
  DeleteSecretCommandInput,
  DeleteSecretCommandOutput,
} from "./commands/DeleteSecretCommand";
import {
  DescribeSecretCommand,
  DescribeSecretCommandInput,
  DescribeSecretCommandOutput,
} from "./commands/DescribeSecretCommand";
import {
  GetRandomPasswordCommand,
  GetRandomPasswordCommandInput,
  GetRandomPasswordCommandOutput,
} from "./commands/GetRandomPasswordCommand";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import {
  GetSecretValueCommand,
  GetSecretValueCommandInput,
  GetSecretValueCommandOutput,
} from "./commands/GetSecretValueCommand";
import { ListSecretsCommand, ListSecretsCommandInput, ListSecretsCommandOutput } from "./commands/ListSecretsCommand";
import {
  ListSecretVersionIdsCommand,
  ListSecretVersionIdsCommandInput,
  ListSecretVersionIdsCommandOutput,
} from "./commands/ListSecretVersionIdsCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  PutSecretValueCommand,
  PutSecretValueCommandInput,
  PutSecretValueCommandOutput,
} from "./commands/PutSecretValueCommand";
import {
  RemoveRegionsFromReplicationCommand,
  RemoveRegionsFromReplicationCommandInput,
  RemoveRegionsFromReplicationCommandOutput,
} from "./commands/RemoveRegionsFromReplicationCommand";
import {
  ReplicateSecretToRegionsCommand,
  ReplicateSecretToRegionsCommandInput,
  ReplicateSecretToRegionsCommandOutput,
} from "./commands/ReplicateSecretToRegionsCommand";
import {
  RestoreSecretCommand,
  RestoreSecretCommandInput,
  RestoreSecretCommandOutput,
} from "./commands/RestoreSecretCommand";
import {
  RotateSecretCommand,
  RotateSecretCommandInput,
  RotateSecretCommandOutput,
} from "./commands/RotateSecretCommand";
import {
  StopReplicationToReplicaCommand,
  StopReplicationToReplicaCommandInput,
  StopReplicationToReplicaCommandOutput,
} from "./commands/StopReplicationToReplicaCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateSecretCommand,
  UpdateSecretCommandInput,
  UpdateSecretCommandOutput,
} from "./commands/UpdateSecretCommand";
import {
  UpdateSecretVersionStageCommand,
  UpdateSecretVersionStageCommandInput,
  UpdateSecretVersionStageCommandOutput,
} from "./commands/UpdateSecretVersionStageCommand";
import {
  ValidateResourcePolicyCommand,
  ValidateResourcePolicyCommandInput,
  ValidateResourcePolicyCommandOutput,
} from "./commands/ValidateResourcePolicyCommand";
import { SecretsManagerClient } from "./SecretsManagerClient";

/**
 * <fullname>Amazon Web Services Secrets Manager</fullname>
 *          <p>Amazon Web Services Secrets Manager provides a service to enable you to store, manage, and retrieve, secrets.</p>
 *
 *          <p>This guide provides descriptions of the Secrets Manager API. For more information about using this
 *       service, see the <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/introduction.html">Amazon Web Services Secrets Manager User Guide</a>.</p>
 *
 *          <p>
 *             <b>API Version</b>
 *          </p>
 *
 *          <p>This version of the Secrets Manager API Reference documents the Secrets Manager API version 2017-10-17.</p>
 *          <note>
 *             <p>As an alternative to using the API, you can use one of the Amazon Web Services SDKs, which consist of
 *         libraries and sample code for various programming languages and platforms such as Java,
 *         Ruby, .NET, iOS, and Android. The SDKs provide a convenient way to create programmatic
 *         access to Amazon Web Services Secrets Manager. For example, the SDKs provide cryptographically signing requests,
 *         managing errors, and retrying requests automatically. For more information about the Amazon Web Services
 *         SDKs, including downloading and installing them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          </note>
 *          <p>We recommend you use the Amazon Web Services SDKs to make programmatic API calls to Secrets Manager. However, you
 *       also can use the Secrets Manager HTTP Query API to make direct calls to the Secrets Manager web service. To learn
 *       more about the Secrets Manager HTTP Query API, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/query-requests.html">Making Query Requests</a> in the
 *       <i>Amazon Web Services Secrets Manager User Guide</i>. </p>
 *          <p>Secrets Manager API supports GET and POST requests for all actions, and doesn't require you to use
 *       GET for some actions and POST for others. However, GET requests are subject to the limitation
 *       size of a URL. Therefore, for operations that require larger sizes, use a POST request.</p>
 *
 *
 *
 *
 *
 *
 *
 *          <p>
 *             <b>Support and Feedback for Amazon Web Services Secrets Manager</b>
 *          </p>
 *
 *          <p>We welcome your feedback. Send your comments to <a href="mailto:awssecretsmanager-feedback@amazon.com">awssecretsmanager-feedback@amazon.com</a>, or post your feedback and questions in the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=296">Amazon Web Services Secrets Manager Discussion Forum</a>. For more
 *       information about the Amazon Web Services Discussion Forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums
 *         Help</a>.</p>
 *
 *          <p>
 *             <b>How examples are presented</b>
 *          </p>
 *
 *          <p>The JSON that Amazon Web Services Secrets Manager expects as your request parameters and the service returns as a
 *       response to HTTP query requests contain single, long strings without line breaks or white
 *       space formatting. The JSON shown in the examples displays the code formatted with both line
 *       breaks and white space to improve readability. When example input parameters can also cause
 *       long strings extending beyond the screen, you can insert line breaks to enhance readability.
 *       You should always submit the input as a single JSON text string.</p>
 *
 *
 *          <p>
 *             <b>Logging API Requests</b>
 *          </p>
 *          <p>Amazon Web Services Secrets Manager supports Amazon Web Services CloudTrail, a service that records Amazon Web Services API calls for your Amazon Web Services
 *       account and delivers log files to an Amazon S3 bucket. By using information that's collected
 *       by Amazon Web Services CloudTrail, you can determine the requests successfully made to Secrets Manager, who made the
 *       request, when it was made, and so on. For more about Amazon Web Services Secrets Manager and support for Amazon Web Services
 *       CloudTrail, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/monitoring.html#monitoring_cloudtrail">Logging
 *         Amazon Web Services Secrets Manager Events with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Secrets Manager User Guide</i>.
 *       To learn more about CloudTrail, including enabling it and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">Amazon Web Services CloudTrail User Guide</a>.</p>
 */
export class SecretsManager extends SecretsManagerClient {
  /**
   * <p>Turns off automatic rotation, and if a rotation is currently in
   *       progress, cancels the rotation.</p>
   *          <p>To turn on automatic rotation again, call <a>RotateSecret</a>.</p>
   *          <note>
   *             <p>If you cancel a rotation in progress, it can leave the <code>VersionStage</code>
   *         labels in an unexpected state. Depending on the step of the rotation in progress, you might
   *         need to remove the staging label <code>AWSPENDING</code> from the partially created version, specified
   *         by the <code>VersionId</code> response value. We recommend you also evaluate the partially rotated
   *         new version to see if it should be deleted. You can delete a version by removing all staging labels
   *         from it.</p>
   *          </note>
   */
  public cancelRotateSecret(
    args: CancelRotateSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelRotateSecretCommandOutput>;
  public cancelRotateSecret(
    args: CancelRotateSecretCommandInput,
    cb: (err: any, data?: CancelRotateSecretCommandOutput) => void
  ): void;
  public cancelRotateSecret(
    args: CancelRotateSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelRotateSecretCommandOutput) => void
  ): void;
  public cancelRotateSecret(
    args: CancelRotateSecretCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelRotateSecretCommandOutput) => void),
    cb?: (err: any, data?: CancelRotateSecretCommandOutput) => void
  ): Promise<CancelRotateSecretCommandOutput> | void {
    const command = new CancelRotateSecretCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new secret. A <i>secret</i> is a set of credentials, such as a
   *       user name and password, that you store in an encrypted form in Secrets Manager. The secret also
   *       includes the connection information to access a database or other service, which Secrets Manager
   *       doesn't encrypt. A secret in Secrets Manager consists of both the protected secret data and the
   *       important information needed to manage the secret.</p>
   *          <p>For information about creating a secret in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_create-basic-secret.html">Create a secret</a>.</p>
   *          <p>To create a secret, you can provide the secret value to be encrypted in either the
   *       <code>SecretString</code> parameter or the <code>SecretBinary</code> parameter, but not both.
   *       If you include <code>SecretString</code> or <code>SecretBinary</code>
   *       then Secrets Manager creates an initial secret version and automatically attaches the staging
   *       label <code>AWSCURRENT</code> to it.</p>
   *          <p>If you don't specify an KMS encryption key, Secrets Manager uses the Amazon Web Services managed key
   *       <code>aws/secretsmanager</code>. If this key
   *       doesn't already exist in your account, then Secrets Manager creates it for you automatically. All
   *       users and roles in the Amazon Web Services account automatically have access to use <code>aws/secretsmanager</code>.
   *       Creating <code>aws/secretsmanager</code> can result in a one-time significant delay in returning the
   *       result.</p>
   *          <p>If the secret is in a different Amazon Web Services account from the credentials calling the API, then
   *       you can't use <code>aws/secretsmanager</code> to encrypt the secret, and you must create
   *       and use a customer managed KMS key. </p>
   */
  public createSecret(
    args: CreateSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSecretCommandOutput>;
  public createSecret(args: CreateSecretCommandInput, cb: (err: any, data?: CreateSecretCommandOutput) => void): void;
  public createSecret(
    args: CreateSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSecretCommandOutput) => void
  ): void;
  public createSecret(
    args: CreateSecretCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSecretCommandOutput) => void),
    cb?: (err: any, data?: CreateSecretCommandOutput) => void
  ): Promise<CreateSecretCommandOutput> | void {
    const command = new CreateSecretCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the resource-based permission policy attached to the secret. To attach a policy to
   *       a secret, use <a>PutResourcePolicy</a>.</p>
   */
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): Promise<DeleteResourcePolicyCommandOutput> | void {
    const command = new DeleteResourcePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a secret and all of its versions. You can specify a recovery
   *       window during which you can restore the secret. The minimum recovery window is 7 days.
   *       The default recovery window is 30 days. Secrets Manager attaches a <code>DeletionDate</code> stamp to
   *       the secret that specifies the end of the recovery window. At the end of the recovery window,
   *       Secrets Manager deletes the secret permanently.</p>
   *          <p>For information about deleting a secret in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_delete-secret.html">https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_delete-secret.html</a>. </p>
   *          <p>Secrets Manager performs the permanent secret deletion at the end of the waiting period as a
   *         background task with low priority. There is no guarantee of a specific time after the
   *         recovery window for the permanent delete to occur.</p>
   *          <p>At any time before recovery window ends, you can use <a>RestoreSecret</a> to
   *       remove the <code>DeletionDate</code> and cancel the deletion of the secret.</p>
   *          <p>In a secret scheduled for deletion, you cannot access the encrypted secret value.
   *       To access that information, first cancel the deletion with <a>RestoreSecret</a> and then retrieve the information.</p>
   */
  public deleteSecret(
    args: DeleteSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSecretCommandOutput>;
  public deleteSecret(args: DeleteSecretCommandInput, cb: (err: any, data?: DeleteSecretCommandOutput) => void): void;
  public deleteSecret(
    args: DeleteSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSecretCommandOutput) => void
  ): void;
  public deleteSecret(
    args: DeleteSecretCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSecretCommandOutput) => void),
    cb?: (err: any, data?: DeleteSecretCommandOutput) => void
  ): Promise<DeleteSecretCommandOutput> | void {
    const command = new DeleteSecretCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the details of a secret. It does not include the encrypted secret value. Secrets Manager
   *       only returns fields that have a value in the response. </p>
   */
  public describeSecret(
    args: DescribeSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSecretCommandOutput>;
  public describeSecret(
    args: DescribeSecretCommandInput,
    cb: (err: any, data?: DescribeSecretCommandOutput) => void
  ): void;
  public describeSecret(
    args: DescribeSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSecretCommandOutput) => void
  ): void;
  public describeSecret(
    args: DescribeSecretCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSecretCommandOutput) => void),
    cb?: (err: any, data?: DescribeSecretCommandOutput) => void
  ): Promise<DescribeSecretCommandOutput> | void {
    const command = new DescribeSecretCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Generates a random password. We recommend that you specify the
   *       maximum length and include every character type that the system you are generating a password
   *       for can support.</p>
   */
  public getRandomPassword(
    args: GetRandomPasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRandomPasswordCommandOutput>;
  public getRandomPassword(
    args: GetRandomPasswordCommandInput,
    cb: (err: any, data?: GetRandomPasswordCommandOutput) => void
  ): void;
  public getRandomPassword(
    args: GetRandomPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRandomPasswordCommandOutput) => void
  ): void;
  public getRandomPassword(
    args: GetRandomPasswordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRandomPasswordCommandOutput) => void),
    cb?: (err: any, data?: GetRandomPasswordCommandOutput) => void
  ): Promise<GetRandomPasswordCommandOutput> | void {
    const command = new GetRandomPasswordCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the JSON text of the resource-based policy document attached to the
   *       secret. For more information about permissions policies attached to a secret, see
   *       <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-policies.html">Permissions
   *         policies attached to a secret</a>.</p>
   */
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): Promise<GetResourcePolicyCommandOutput> | void {
    const command = new GetResourcePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the contents of the encrypted fields <code>SecretString</code> or
   *         <code>SecretBinary</code> from the specified version of a secret, whichever contains
   *       content.</p>
   *          <p>For information about retrieving the secret value in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets.html">Retrieve secrets</a>. </p>
   *          <p>To run this command, you must have <code>secretsmanager:GetSecretValue</code> permissions.
   *       If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key
   *       <code>aws/secretsmanager</code>, then you also need <code>kms:Decrypt</code> permissions for that key.</p>
   */
  public getSecretValue(
    args: GetSecretValueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSecretValueCommandOutput>;
  public getSecretValue(
    args: GetSecretValueCommandInput,
    cb: (err: any, data?: GetSecretValueCommandOutput) => void
  ): void;
  public getSecretValue(
    args: GetSecretValueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSecretValueCommandOutput) => void
  ): void;
  public getSecretValue(
    args: GetSecretValueCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSecretValueCommandOutput) => void),
    cb?: (err: any, data?: GetSecretValueCommandOutput) => void
  ): Promise<GetSecretValueCommandOutput> | void {
    const command = new GetSecretValueCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the secrets that are stored by Secrets Manager in the Amazon Web Services account. </p>
   *          <p>To list the versions of a secret, use <a>ListSecretVersionIds</a>.</p>
   *          <p>To get the secret value from <code>SecretString</code> or <code>SecretBinary</code>,
   *       call <a>GetSecretValue</a>.</p>
   *          <p>For information about finding secrets in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_search-secret.html">Enhanced search capabilities
   *       for secrets in Secrets Manager</a>.</p>
   *          <p>
   *             <b>Minimum
   *         permissions</b>
   *          </p>
   *          <p>To run this command, you must have <code>secretsmanager:ListSecrets</code> permissions.</p>
   */
  public listSecrets(args: ListSecretsCommandInput, options?: __HttpHandlerOptions): Promise<ListSecretsCommandOutput>;
  public listSecrets(args: ListSecretsCommandInput, cb: (err: any, data?: ListSecretsCommandOutput) => void): void;
  public listSecrets(
    args: ListSecretsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecretsCommandOutput) => void
  ): void;
  public listSecrets(
    args: ListSecretsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSecretsCommandOutput) => void),
    cb?: (err: any, data?: ListSecretsCommandOutput) => void
  ): Promise<ListSecretsCommandOutput> | void {
    const command = new ListSecretsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the versions for a secret. </p>
   *          <p>To list the secrets in the account, use <a>ListSecrets</a>.</p>
   *          <p>To get the secret value from <code>SecretString</code> or <code>SecretBinary</code>,
   *       call <a>GetSecretValue</a>.</p>
   *
   *          <p>
   *             <b>Minimum
   *       permissions</b>
   *          </p>
   *          <p>To run this command, you must have <code>secretsmanager:ListSecretVersionIds</code> permissions.</p>
   */
  public listSecretVersionIds(
    args: ListSecretVersionIdsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecretVersionIdsCommandOutput>;
  public listSecretVersionIds(
    args: ListSecretVersionIdsCommandInput,
    cb: (err: any, data?: ListSecretVersionIdsCommandOutput) => void
  ): void;
  public listSecretVersionIds(
    args: ListSecretVersionIdsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecretVersionIdsCommandOutput) => void
  ): void;
  public listSecretVersionIds(
    args: ListSecretVersionIdsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSecretVersionIdsCommandOutput) => void),
    cb?: (err: any, data?: ListSecretVersionIdsCommandOutput) => void
  ): Promise<ListSecretVersionIdsCommandOutput> | void {
    const command = new ListSecretVersionIdsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attaches a resource-based permission policy to a secret. A resource-based policy is
   *       optional. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control for Secrets Manager</a>
   *          </p>
   *          <p>For information about attaching a policy in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-based-policies.html">Attach a
   *       permissions policy to a secret</a>.</p>
   */
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): Promise<PutResourcePolicyCommandOutput> | void {
    const command = new PutResourcePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new version with a new encrypted secret value and attaches it to the secret. The
   *       version can contain a new <code>SecretString</code> value or a new <code>SecretBinary</code> value. </p>
   *          <p>We recommend you avoid calling <code>PutSecretValue</code> at a sustained rate of more than
   *       once every 10 minutes. When you update the secret value, Secrets Manager creates a new version
   *       of the secret. Secrets Manager removes outdated versions when there are more than 100, but it does not
   *       remove versions created less than 24 hours ago. If you call <code>PutSecretValue</code> more
   *       than once every 10 minutes, you create more versions than Secrets Manager removes, and you will reach
   *       the quota for secret versions.</p>
   *          <p>You can specify the staging labels to attach to the new version in <code>VersionStages</code>.
   *       If you don't include <code>VersionStages</code>, then Secrets Manager automatically
   *       moves the staging label <code>AWSCURRENT</code> to this version. If this operation creates
   *       the first version for the secret, then Secrets Manager
   *         automatically attaches the staging label <code>AWSCURRENT</code> to it .</p>
   *          <p>If this operation moves the staging label <code>AWSCURRENT</code> from another version to this
   *       version, then Secrets Manager also automatically moves the staging label <code>AWSPREVIOUS</code> to
   *       the version that <code>AWSCURRENT</code> was removed from.</p>
   *          <p>This operation is idempotent. If a version with a <code>VersionId</code> with the same
   *       value as the <code>ClientRequestToken</code> parameter already exists, and you specify the
   *       same secret data, the operation succeeds but does nothing. However, if the secret data is
   *       different, then the operation fails because you can't modify an existing version; you can
   *       only create new ones.</p>
   */
  public putSecretValue(
    args: PutSecretValueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSecretValueCommandOutput>;
  public putSecretValue(
    args: PutSecretValueCommandInput,
    cb: (err: any, data?: PutSecretValueCommandOutput) => void
  ): void;
  public putSecretValue(
    args: PutSecretValueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSecretValueCommandOutput) => void
  ): void;
  public putSecretValue(
    args: PutSecretValueCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutSecretValueCommandOutput) => void),
    cb?: (err: any, data?: PutSecretValueCommandOutput) => void
  ): Promise<PutSecretValueCommandOutput> | void {
    const command = new PutSecretValueCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>For a secret that is replicated to other Regions, deletes the secret replicas from the Regions you specify.</p>
   */
  public removeRegionsFromReplication(
    args: RemoveRegionsFromReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveRegionsFromReplicationCommandOutput>;
  public removeRegionsFromReplication(
    args: RemoveRegionsFromReplicationCommandInput,
    cb: (err: any, data?: RemoveRegionsFromReplicationCommandOutput) => void
  ): void;
  public removeRegionsFromReplication(
    args: RemoveRegionsFromReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveRegionsFromReplicationCommandOutput) => void
  ): void;
  public removeRegionsFromReplication(
    args: RemoveRegionsFromReplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveRegionsFromReplicationCommandOutput) => void),
    cb?: (err: any, data?: RemoveRegionsFromReplicationCommandOutput) => void
  ): Promise<RemoveRegionsFromReplicationCommandOutput> | void {
    const command = new RemoveRegionsFromReplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Replicates the secret to a new Regions. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create-manage-multi-region-secrets.html">Multi-Region secrets</a>.</p>
   */
  public replicateSecretToRegions(
    args: ReplicateSecretToRegionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReplicateSecretToRegionsCommandOutput>;
  public replicateSecretToRegions(
    args: ReplicateSecretToRegionsCommandInput,
    cb: (err: any, data?: ReplicateSecretToRegionsCommandOutput) => void
  ): void;
  public replicateSecretToRegions(
    args: ReplicateSecretToRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplicateSecretToRegionsCommandOutput) => void
  ): void;
  public replicateSecretToRegions(
    args: ReplicateSecretToRegionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReplicateSecretToRegionsCommandOutput) => void),
    cb?: (err: any, data?: ReplicateSecretToRegionsCommandOutput) => void
  ): Promise<ReplicateSecretToRegionsCommandOutput> | void {
    const command = new ReplicateSecretToRegionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels the scheduled deletion of a secret by removing the <code>DeletedDate</code> time
   *       stamp. You can access a secret again after it has been restored.</p>
   */
  public restoreSecret(
    args: RestoreSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreSecretCommandOutput>;
  public restoreSecret(
    args: RestoreSecretCommandInput,
    cb: (err: any, data?: RestoreSecretCommandOutput) => void
  ): void;
  public restoreSecret(
    args: RestoreSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreSecretCommandOutput) => void
  ): void;
  public restoreSecret(
    args: RestoreSecretCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreSecretCommandOutput) => void),
    cb?: (err: any, data?: RestoreSecretCommandOutput) => void
  ): Promise<RestoreSecretCommandOutput> | void {
    const command = new RestoreSecretCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Configures and starts the asynchronous process of rotating the secret.</p>
   *          <p>If you include the
   *       configuration parameters, the operation sets the values for the secret and then immediately
   *       starts a rotation. If you don't include the configuration parameters, the operation starts a
   *       rotation with the values already stored in the secret. For more information about rotation,
   *       see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html">Rotate secrets</a>.</p>
   *          <p>To configure rotation, you include the ARN of an Amazon Web Services Lambda function and the schedule
   *       for the rotation. The Lambda rotation function creates a new
   *       version of the secret and creates or updates the credentials on the database or service to
   *       match. After testing the new credentials, the function marks the new secret version with the staging
   *       label <code>AWSCURRENT</code>. Then anyone who retrieves the secret gets the new version. For more
   *       information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html">How rotation works</a>.</p>
   *          <p>When rotation is successful, the <code>AWSPENDING</code> staging label might be attached to the same
   *       version as the <code>AWSCURRENT</code> version, or it might not be attached to any version.</p>
   *          <p>If the <code>AWSPENDING</code> staging label is present but not attached to the same version as
   *       <code>AWSCURRENT</code>, then any later invocation of <code>RotateSecret</code> assumes that a previous
   *       rotation request is still in progress and returns an error.</p>
   *          <p>To run this command, you must have <code>secretsmanager:RotateSecret</code> permissions and
   *       <code>lambda:InvokeFunction</code> permissions on the function specified in the secret's metadata.</p>
   */
  public rotateSecret(
    args: RotateSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RotateSecretCommandOutput>;
  public rotateSecret(args: RotateSecretCommandInput, cb: (err: any, data?: RotateSecretCommandOutput) => void): void;
  public rotateSecret(
    args: RotateSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RotateSecretCommandOutput) => void
  ): void;
  public rotateSecret(
    args: RotateSecretCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RotateSecretCommandOutput) => void),
    cb?: (err: any, data?: RotateSecretCommandOutput) => void
  ): Promise<RotateSecretCommandOutput> | void {
    const command = new RotateSecretCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the link between the replica secret and the primary secret and promotes the replica to a primary secret in the replica Region.</p>
   *          <p>You must call this operation from the Region in which you want to promote the replica to a primary secret.</p>
   */
  public stopReplicationToReplica(
    args: StopReplicationToReplicaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopReplicationToReplicaCommandOutput>;
  public stopReplicationToReplica(
    args: StopReplicationToReplicaCommandInput,
    cb: (err: any, data?: StopReplicationToReplicaCommandOutput) => void
  ): void;
  public stopReplicationToReplica(
    args: StopReplicationToReplicaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopReplicationToReplicaCommandOutput) => void
  ): void;
  public stopReplicationToReplica(
    args: StopReplicationToReplicaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopReplicationToReplicaCommandOutput) => void),
    cb?: (err: any, data?: StopReplicationToReplicaCommandOutput) => void
  ): Promise<StopReplicationToReplicaCommandOutput> | void {
    const command = new StopReplicationToReplicaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attaches tags to a secret. Tags consist of a key name and a value. Tags are part of the
   *       secret's metadata. They are not associated with specific versions of the secret. This operation appends tags to the existing list of tags.</p>
   *             <p>The following restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                <p>Maximum number of tags per secret: 50</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length: 127 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length: 255 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use the <code>aws:</code> prefix in your tag names or values because Amazon Web Services reserves it
   *             for Amazon Web Services use. You can't edit or delete tag names or values with this
   *               prefix. Tags with this prefix do not count against your tags per secret limit.</p>
   *             </li>
   *             <li>
   *                <p>If you use your tagging schema across multiple services and resources,
   *               other services might have restrictions on allowed characters. Generally
   *               allowed characters: letters, spaces, and numbers representable in UTF-8, plus the
   *               following special characters: + - = . _ : / @.</p>
   *             </li>
   *          </ul>
   *
   *          <important>
   *             <p>If you use tags as part of your security strategy, then adding or removing a tag can
   *         change permissions. If successfully completing this operation would result in you losing
   *         your permissions for this secret, then the operation is blocked and returns an Access Denied
   *         error.</p>
   *          </important>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes specific tags from a secret.</p>
   *          <p>This operation is idempotent. If a requested tag is not attached to the secret, no error
   *       is returned and the secret metadata is unchanged.</p>
   *          <important>
   *             <p>If you use tags as part of your security strategy, then removing a tag can change
   *         permissions. If successfully completing this operation would result in you losing your
   *         permissions for this secret, then the operation is blocked and returns an Access Denied
   *         error.</p>
   *          </important>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the details of a secret, including metadata and the secret value. To change the secret value, you can also use <a>PutSecretValue</a>.</p>
   *          <p>To change the rotation configuration of a secret, use <a>RotateSecret</a> instead.</p>
   *
   *          <p>We recommend you avoid calling <code>UpdateSecret</code> at a sustained rate of more than
   *       once every 10 minutes. When you call <code>UpdateSecret</code> to update the secret value, Secrets Manager creates a new version
   *       of the secret. Secrets Manager removes outdated versions when there are more than 100, but it does not
   *       remove versions created less than 24 hours ago. If you update the secret value more
   *       than once every 10 minutes, you create more versions than Secrets Manager removes, and you will reach
   *       the quota for secret versions.</p>
   *          <p>If you include <code>SecretString</code> or <code>SecretBinary</code> to create a new
   *       secret version, Secrets Manager automatically attaches the staging label <code>AWSCURRENT</code> to the new
   *       version. </p>
   *          <p>If you call this operation with a <code>VersionId</code> that matches an existing version's
   *       <code>ClientRequestToken</code>, the operation results in an error. You can't modify an existing
   *       version, you can only create a new version. To remove a version, remove all staging labels from it. See
   *     <a>UpdateSecretVersionStage</a>.</p>
   *          <p>If you don't specify an KMS encryption key, Secrets Manager uses the Amazon Web Services managed key
   *       <code>aws/secretsmanager</code>. If this key doesn't already exist in your account, then Secrets Manager
   *       creates it for you automatically. All users and roles in the Amazon Web Services account automatically have access
   *       to use <code>aws/secretsmanager</code>. Creating <code>aws/secretsmanager</code> can result in a one-time
   *       significant delay in returning the result.  </p>
   *          <p>If the secret is in a different Amazon Web Services account from the credentials calling the API, then you can't
   *       use <code>aws/secretsmanager</code> to encrypt the secret, and you must create and use a customer managed key. </p>
   *
   *          <p>To run this command, you must have <code>secretsmanager:UpdateSecret</code> permissions. If you use a
   *       customer managed key, you must also have <code>kms:GenerateDataKey</code> and <code>kms:Decrypt</code> permissions .</p>
   */
  public updateSecret(
    args: UpdateSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecretCommandOutput>;
  public updateSecret(args: UpdateSecretCommandInput, cb: (err: any, data?: UpdateSecretCommandOutput) => void): void;
  public updateSecret(
    args: UpdateSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecretCommandOutput) => void
  ): void;
  public updateSecret(
    args: UpdateSecretCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSecretCommandOutput) => void),
    cb?: (err: any, data?: UpdateSecretCommandOutput) => void
  ): Promise<UpdateSecretCommandOutput> | void {
    const command = new UpdateSecretCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the staging labels attached to a version of a secret. Secrets Manager uses staging labels to
   *       track a version as it progresses through the secret rotation process. Each staging label can be
   *       attached to only one version at a time. To add a staging label to a version when it is already
   *       attached to another version, Secrets Manager first removes it from the other version first and
   *       then attaches it to this one. For more information about versions and staging labels, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/getting-started.html#term_version">Concepts: Version</a>. </p>
   *          <p>The staging labels that you specify in the <code>VersionStage</code> parameter are added
   *       to the existing list of staging labels for the version. </p>
   *          <p>You can move the <code>AWSCURRENT</code> staging label to this version by including it in this
   *       call.</p>
   *          <note>
   *             <p>Whenever you move <code>AWSCURRENT</code>, Secrets Manager automatically moves the label <code>AWSPREVIOUS</code>
   *         to the version that <code>AWSCURRENT</code> was removed from.</p>
   *          </note>
   *          <p>If this action results in the last label being removed from a version, then the version is
   *       considered to be 'deprecated' and can be deleted by Secrets Manager.</p>
   */
  public updateSecretVersionStage(
    args: UpdateSecretVersionStageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecretVersionStageCommandOutput>;
  public updateSecretVersionStage(
    args: UpdateSecretVersionStageCommandInput,
    cb: (err: any, data?: UpdateSecretVersionStageCommandOutput) => void
  ): void;
  public updateSecretVersionStage(
    args: UpdateSecretVersionStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecretVersionStageCommandOutput) => void
  ): void;
  public updateSecretVersionStage(
    args: UpdateSecretVersionStageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSecretVersionStageCommandOutput) => void),
    cb?: (err: any, data?: UpdateSecretVersionStageCommandOutput) => void
  ): Promise<UpdateSecretVersionStageCommandOutput> | void {
    const command = new UpdateSecretVersionStageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Validates that a resource policy does not grant a wide range of principals access to
   *       your secret. A resource-based policy is optional for secrets.</p>
   *          <p>The API performs three checks when validating the policy:</p>
   *          <ul>
   *             <li>
   *                <p>Sends a call to <a href="https://aws.amazon.com/blogs/security/protect-sensitive-data-in-the-cloud-with-automated-reasoning-zelkova/">Zelkova</a>, an automated reasoning engine, to ensure your resource policy does not
   *           allow broad access to your secret, for example policies that use a wildcard for the principal.</p>
   *             </li>
   *             <li>
   *                <p>Checks for correct syntax in a policy.</p>
   *             </li>
   *             <li>
   *                <p>Verifies the policy does not lock out a caller.</p>
   *             </li>
   *          </ul>
   */
  public validateResourcePolicy(
    args: ValidateResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateResourcePolicyCommandOutput>;
  public validateResourcePolicy(
    args: ValidateResourcePolicyCommandInput,
    cb: (err: any, data?: ValidateResourcePolicyCommandOutput) => void
  ): void;
  public validateResourcePolicy(
    args: ValidateResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateResourcePolicyCommandOutput) => void
  ): void;
  public validateResourcePolicy(
    args: ValidateResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ValidateResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: ValidateResourcePolicyCommandOutput) => void
  ): Promise<ValidateResourcePolicyCommandOutput> | void {
    const command = new ValidateResourcePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
