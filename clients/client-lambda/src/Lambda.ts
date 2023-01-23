// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AddLayerVersionPermissionCommand,
  AddLayerVersionPermissionCommandInput,
  AddLayerVersionPermissionCommandOutput,
} from "./commands/AddLayerVersionPermissionCommand";
import {
  AddPermissionCommand,
  AddPermissionCommandInput,
  AddPermissionCommandOutput,
} from "./commands/AddPermissionCommand";
import { CreateAliasCommand, CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import {
  CreateCodeSigningConfigCommand,
  CreateCodeSigningConfigCommandInput,
  CreateCodeSigningConfigCommandOutput,
} from "./commands/CreateCodeSigningConfigCommand";
import {
  CreateEventSourceMappingCommand,
  CreateEventSourceMappingCommandInput,
  CreateEventSourceMappingCommandOutput,
} from "./commands/CreateEventSourceMappingCommand";
import {
  CreateFunctionCommand,
  CreateFunctionCommandInput,
  CreateFunctionCommandOutput,
} from "./commands/CreateFunctionCommand";
import {
  CreateFunctionUrlConfigCommand,
  CreateFunctionUrlConfigCommandInput,
  CreateFunctionUrlConfigCommandOutput,
} from "./commands/CreateFunctionUrlConfigCommand";
import { DeleteAliasCommand, DeleteAliasCommandInput, DeleteAliasCommandOutput } from "./commands/DeleteAliasCommand";
import {
  DeleteCodeSigningConfigCommand,
  DeleteCodeSigningConfigCommandInput,
  DeleteCodeSigningConfigCommandOutput,
} from "./commands/DeleteCodeSigningConfigCommand";
import {
  DeleteEventSourceMappingCommand,
  DeleteEventSourceMappingCommandInput,
  DeleteEventSourceMappingCommandOutput,
} from "./commands/DeleteEventSourceMappingCommand";
import {
  DeleteFunctionCodeSigningConfigCommand,
  DeleteFunctionCodeSigningConfigCommandInput,
  DeleteFunctionCodeSigningConfigCommandOutput,
} from "./commands/DeleteFunctionCodeSigningConfigCommand";
import {
  DeleteFunctionCommand,
  DeleteFunctionCommandInput,
  DeleteFunctionCommandOutput,
} from "./commands/DeleteFunctionCommand";
import {
  DeleteFunctionConcurrencyCommand,
  DeleteFunctionConcurrencyCommandInput,
  DeleteFunctionConcurrencyCommandOutput,
} from "./commands/DeleteFunctionConcurrencyCommand";
import {
  DeleteFunctionEventInvokeConfigCommand,
  DeleteFunctionEventInvokeConfigCommandInput,
  DeleteFunctionEventInvokeConfigCommandOutput,
} from "./commands/DeleteFunctionEventInvokeConfigCommand";
import {
  DeleteFunctionUrlConfigCommand,
  DeleteFunctionUrlConfigCommandInput,
  DeleteFunctionUrlConfigCommandOutput,
} from "./commands/DeleteFunctionUrlConfigCommand";
import {
  DeleteLayerVersionCommand,
  DeleteLayerVersionCommandInput,
  DeleteLayerVersionCommandOutput,
} from "./commands/DeleteLayerVersionCommand";
import {
  DeleteProvisionedConcurrencyConfigCommand,
  DeleteProvisionedConcurrencyConfigCommandInput,
  DeleteProvisionedConcurrencyConfigCommandOutput,
} from "./commands/DeleteProvisionedConcurrencyConfigCommand";
import {
  GetAccountSettingsCommand,
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput,
} from "./commands/GetAccountSettingsCommand";
import { GetAliasCommand, GetAliasCommandInput, GetAliasCommandOutput } from "./commands/GetAliasCommand";
import {
  GetCodeSigningConfigCommand,
  GetCodeSigningConfigCommandInput,
  GetCodeSigningConfigCommandOutput,
} from "./commands/GetCodeSigningConfigCommand";
import {
  GetEventSourceMappingCommand,
  GetEventSourceMappingCommandInput,
  GetEventSourceMappingCommandOutput,
} from "./commands/GetEventSourceMappingCommand";
import {
  GetFunctionCodeSigningConfigCommand,
  GetFunctionCodeSigningConfigCommandInput,
  GetFunctionCodeSigningConfigCommandOutput,
} from "./commands/GetFunctionCodeSigningConfigCommand";
import { GetFunctionCommand, GetFunctionCommandInput, GetFunctionCommandOutput } from "./commands/GetFunctionCommand";
import {
  GetFunctionConcurrencyCommand,
  GetFunctionConcurrencyCommandInput,
  GetFunctionConcurrencyCommandOutput,
} from "./commands/GetFunctionConcurrencyCommand";
import {
  GetFunctionConfigurationCommand,
  GetFunctionConfigurationCommandInput,
  GetFunctionConfigurationCommandOutput,
} from "./commands/GetFunctionConfigurationCommand";
import {
  GetFunctionEventInvokeConfigCommand,
  GetFunctionEventInvokeConfigCommandInput,
  GetFunctionEventInvokeConfigCommandOutput,
} from "./commands/GetFunctionEventInvokeConfigCommand";
import {
  GetFunctionUrlConfigCommand,
  GetFunctionUrlConfigCommandInput,
  GetFunctionUrlConfigCommandOutput,
} from "./commands/GetFunctionUrlConfigCommand";
import {
  GetLayerVersionByArnCommand,
  GetLayerVersionByArnCommandInput,
  GetLayerVersionByArnCommandOutput,
} from "./commands/GetLayerVersionByArnCommand";
import {
  GetLayerVersionCommand,
  GetLayerVersionCommandInput,
  GetLayerVersionCommandOutput,
} from "./commands/GetLayerVersionCommand";
import {
  GetLayerVersionPolicyCommand,
  GetLayerVersionPolicyCommandInput,
  GetLayerVersionPolicyCommandOutput,
} from "./commands/GetLayerVersionPolicyCommand";
import { GetPolicyCommand, GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import {
  GetProvisionedConcurrencyConfigCommand,
  GetProvisionedConcurrencyConfigCommandInput,
  GetProvisionedConcurrencyConfigCommandOutput,
} from "./commands/GetProvisionedConcurrencyConfigCommand";
import {
  GetRuntimeManagementConfigCommand,
  GetRuntimeManagementConfigCommandInput,
  GetRuntimeManagementConfigCommandOutput,
} from "./commands/GetRuntimeManagementConfigCommand";
import { InvokeAsyncCommand, InvokeAsyncCommandInput, InvokeAsyncCommandOutput } from "./commands/InvokeAsyncCommand";
import { InvokeCommand, InvokeCommandInput, InvokeCommandOutput } from "./commands/InvokeCommand";
import { ListAliasesCommand, ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import {
  ListCodeSigningConfigsCommand,
  ListCodeSigningConfigsCommandInput,
  ListCodeSigningConfigsCommandOutput,
} from "./commands/ListCodeSigningConfigsCommand";
import {
  ListEventSourceMappingsCommand,
  ListEventSourceMappingsCommandInput,
  ListEventSourceMappingsCommandOutput,
} from "./commands/ListEventSourceMappingsCommand";
import {
  ListFunctionEventInvokeConfigsCommand,
  ListFunctionEventInvokeConfigsCommandInput,
  ListFunctionEventInvokeConfigsCommandOutput,
} from "./commands/ListFunctionEventInvokeConfigsCommand";
import {
  ListFunctionsByCodeSigningConfigCommand,
  ListFunctionsByCodeSigningConfigCommandInput,
  ListFunctionsByCodeSigningConfigCommandOutput,
} from "./commands/ListFunctionsByCodeSigningConfigCommand";
import {
  ListFunctionsCommand,
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput,
} from "./commands/ListFunctionsCommand";
import {
  ListFunctionUrlConfigsCommand,
  ListFunctionUrlConfigsCommandInput,
  ListFunctionUrlConfigsCommandOutput,
} from "./commands/ListFunctionUrlConfigsCommand";
import { ListLayersCommand, ListLayersCommandInput, ListLayersCommandOutput } from "./commands/ListLayersCommand";
import {
  ListLayerVersionsCommand,
  ListLayerVersionsCommandInput,
  ListLayerVersionsCommandOutput,
} from "./commands/ListLayerVersionsCommand";
import {
  ListProvisionedConcurrencyConfigsCommand,
  ListProvisionedConcurrencyConfigsCommandInput,
  ListProvisionedConcurrencyConfigsCommandOutput,
} from "./commands/ListProvisionedConcurrencyConfigsCommand";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import {
  ListVersionsByFunctionCommand,
  ListVersionsByFunctionCommandInput,
  ListVersionsByFunctionCommandOutput,
} from "./commands/ListVersionsByFunctionCommand";
import {
  PublishLayerVersionCommand,
  PublishLayerVersionCommandInput,
  PublishLayerVersionCommandOutput,
} from "./commands/PublishLayerVersionCommand";
import {
  PublishVersionCommand,
  PublishVersionCommandInput,
  PublishVersionCommandOutput,
} from "./commands/PublishVersionCommand";
import {
  PutFunctionCodeSigningConfigCommand,
  PutFunctionCodeSigningConfigCommandInput,
  PutFunctionCodeSigningConfigCommandOutput,
} from "./commands/PutFunctionCodeSigningConfigCommand";
import {
  PutFunctionConcurrencyCommand,
  PutFunctionConcurrencyCommandInput,
  PutFunctionConcurrencyCommandOutput,
} from "./commands/PutFunctionConcurrencyCommand";
import {
  PutFunctionEventInvokeConfigCommand,
  PutFunctionEventInvokeConfigCommandInput,
  PutFunctionEventInvokeConfigCommandOutput,
} from "./commands/PutFunctionEventInvokeConfigCommand";
import {
  PutProvisionedConcurrencyConfigCommand,
  PutProvisionedConcurrencyConfigCommandInput,
  PutProvisionedConcurrencyConfigCommandOutput,
} from "./commands/PutProvisionedConcurrencyConfigCommand";
import {
  PutRuntimeManagementConfigCommand,
  PutRuntimeManagementConfigCommandInput,
  PutRuntimeManagementConfigCommandOutput,
} from "./commands/PutRuntimeManagementConfigCommand";
import {
  RemoveLayerVersionPermissionCommand,
  RemoveLayerVersionPermissionCommandInput,
  RemoveLayerVersionPermissionCommandOutput,
} from "./commands/RemoveLayerVersionPermissionCommand";
import {
  RemovePermissionCommand,
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput,
} from "./commands/RemovePermissionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateAliasCommand, UpdateAliasCommandInput, UpdateAliasCommandOutput } from "./commands/UpdateAliasCommand";
import {
  UpdateCodeSigningConfigCommand,
  UpdateCodeSigningConfigCommandInput,
  UpdateCodeSigningConfigCommandOutput,
} from "./commands/UpdateCodeSigningConfigCommand";
import {
  UpdateEventSourceMappingCommand,
  UpdateEventSourceMappingCommandInput,
  UpdateEventSourceMappingCommandOutput,
} from "./commands/UpdateEventSourceMappingCommand";
import {
  UpdateFunctionCodeCommand,
  UpdateFunctionCodeCommandInput,
  UpdateFunctionCodeCommandOutput,
} from "./commands/UpdateFunctionCodeCommand";
import {
  UpdateFunctionConfigurationCommand,
  UpdateFunctionConfigurationCommandInput,
  UpdateFunctionConfigurationCommandOutput,
} from "./commands/UpdateFunctionConfigurationCommand";
import {
  UpdateFunctionEventInvokeConfigCommand,
  UpdateFunctionEventInvokeConfigCommandInput,
  UpdateFunctionEventInvokeConfigCommandOutput,
} from "./commands/UpdateFunctionEventInvokeConfigCommand";
import {
  UpdateFunctionUrlConfigCommand,
  UpdateFunctionUrlConfigCommandInput,
  UpdateFunctionUrlConfigCommandOutput,
} from "./commands/UpdateFunctionUrlConfigCommand";
import { LambdaClient } from "./LambdaClient";

/**
 * <fullname>Lambda</fullname>
 *          <p>
 *             <b>Overview</b>
 *          </p>
 *          <p>Lambda is a compute service that lets you run code without provisioning or managing servers.
 *         Lambda runs your code on a high-availability compute infrastructure and performs all of the
 *       administration of the compute resources, including server and operating system maintenance, capacity provisioning
 *       and automatic scaling, code monitoring and logging. With Lambda, you can run code for virtually any
 *       type of application or backend service. For more information about the Lambda service, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/welcome.html">What is Lambda</a> in the <b>Lambda Developer Guide</b>.</p>
 *          <p>The <i>Lambda API Reference</i> provides information about
 *       each of the API methods, including details about the parameters in each API request and
 *       response. </p>
 *          <p></p>
 *          <p>You can use Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command
 *       line tools to access the API. For installation instructions, see <a href="http://aws.amazon.com/tools/">Tools for
 *         Amazon Web Services</a>. </p>
 *          <p>For a list of Region-specific endpoints that Lambda supports,
 *       see <a href="https://docs.aws.amazon.com/general/latest/gr/lambda-service.html/">Lambda
 *         endpoints and quotas </a> in the <i>Amazon Web Services General Reference.</i>. </p>
 *          <p>When making the API calls, you will need to
 *       authenticate your request by providing a signature. Lambda supports signature version 4. For more information,
 *       see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 signing process</a> in the
 *       <i>Amazon Web Services General Reference.</i>. </p>
 *          <p>
 *             <b>CA certificates</b>
 *          </p>
 *          <p>Because Amazon Web Services SDKs use the CA certificates from your computer, changes to the certificates on the Amazon Web Services servers
 *         can cause connection failures when you attempt to use an SDK. You can prevent these failures by keeping your
 *         computer's CA certificates and operating system up-to-date. If you encounter this issue in a corporate
 *         environment and do not manage your own computer, you might need to ask an administrator to assist with the
 *         update process. The following list shows minimum operating system and Java versions:</p>
 *          <ul>
 *             <li>
 *                <p>Microsoft Windows versions that have updates from January 2005 or later installed contain at least one
 *             of the required CAs in their trust list. </p>
 *             </li>
 *             <li>
 *                <p>Mac OS X 10.4 with Java for Mac OS X 10.4 Release 5 (February 2007), Mac OS X 10.5 (October 2007), and
 *             later versions contain at least one of the required CAs in their trust list. </p>
 *             </li>
 *             <li>
 *                <p>Red Hat Enterprise Linux 5 (March 2007), 6, and 7 and CentOS 5, 6, and 7 all contain at least one of the
 *             required CAs in their default trusted CA list. </p>
 *             </li>
 *             <li>
 *                <p>Java 1.4.2_12 (May 2006), 5 Update 2 (March 2005), and all later versions, including Java 6 (December
 *             2006), 7, and 8, contain at least one of the required CAs in their default trusted CA list. </p>
 *             </li>
 *          </ul>
 *          <p>When accessing the Lambda management console or Lambda API endpoints, whether through browsers or
 *         programmatically, you will need to ensure your client machines support any of the following CAs: </p>
 *          <ul>
 *             <li>
 *                <p>Amazon Root CA 1</p>
 *             </li>
 *             <li>
 *                <p>Starfield Services Root Certificate Authority - G2</p>
 *             </li>
 *             <li>
 *                <p>Starfield Class 2 Certification Authority</p>
 *             </li>
 *          </ul>
 *          <p>Root certificates from the first two authorities are available from <a href="https://www.amazontrust.com/repository/">Amazon trust services</a>, but keeping your computer
 *         up-to-date is the more straightforward solution. To learn more about ACM-provided certificates, see <a href="http://aws.amazon.com/certificate-manager/faqs/#certificates">Amazon Web Services Certificate Manager FAQs.</a>
 *          </p>
 */
export class Lambda extends LambdaClient {
  /**
   * <p>Adds permissions to the resource-based policy of a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
   *         layer</a>. Use this action to grant layer
   *       usage permission to other accounts. You can grant permission to a single account, all accounts in an organization,
   *       or all Amazon Web Services accounts.  </p>
   *          <p>To revoke permission, call <a>RemoveLayerVersionPermission</a> with the statement ID that you
   *       specified when you added it.</p>
   */
  public addLayerVersionPermission(
    args: AddLayerVersionPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddLayerVersionPermissionCommandOutput>;
  public addLayerVersionPermission(
    args: AddLayerVersionPermissionCommandInput,
    cb: (err: any, data?: AddLayerVersionPermissionCommandOutput) => void
  ): void;
  public addLayerVersionPermission(
    args: AddLayerVersionPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddLayerVersionPermissionCommandOutput) => void
  ): void;
  public addLayerVersionPermission(
    args: AddLayerVersionPermissionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddLayerVersionPermissionCommandOutput) => void),
    cb?: (err: any, data?: AddLayerVersionPermissionCommandOutput) => void
  ): Promise<AddLayerVersionPermissionCommandOutput> | void {
    const command = new AddLayerVersionPermissionCommand(args);
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
   * <p>Grants an Amazon Web Service, Amazon Web Services account, or Amazon Web Services organization
   *       permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict
   *       access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name
   *       (ARN) of that version or alias to invoke the function. Note: Lambda does not support adding policies
   *       to version $LATEST.</p>
   *          <p>To grant permission to another account, specify the account ID as the <code>Principal</code>. To grant
   *       permission to an organization defined in Organizations, specify the organization ID as the
   *         <code>PrincipalOrgID</code>. For Amazon Web Services, the principal is a domain-style identifier that
   *       the service defines, such as <code>s3.amazonaws.com</code> or <code>sns.amazonaws.com</code>. For Amazon Web Services, you can also specify the ARN of the associated resource as the <code>SourceArn</code>. If
   *       you grant permission to a service principal without specifying the source, other accounts could potentially
   *       configure resources in their account to invoke your Lambda function.</p>
   *          <p>This operation adds a statement to a resource-based permissions policy for the function. For more information
   *       about function policies, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">Using resource-based policies for Lambda</a>.</p>
   */
  public addPermission(
    args: AddPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddPermissionCommandOutput>;
  public addPermission(
    args: AddPermissionCommandInput,
    cb: (err: any, data?: AddPermissionCommandOutput) => void
  ): void;
  public addPermission(
    args: AddPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddPermissionCommandOutput) => void
  ): void;
  public addPermission(
    args: AddPermissionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddPermissionCommandOutput) => void),
    cb?: (err: any, data?: AddPermissionCommandOutput) => void
  ): Promise<AddPermissionCommandOutput> | void {
    const command = new AddPermissionCommand(args);
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
   * <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a> for a
   *       Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a
   *       different version.</p>
   *          <p>You can also map an alias to split invocation requests between two versions. Use the
   *         <code>RoutingConfig</code> parameter to specify a second version and the percentage of invocation requests that
   *       it receives.</p>
   */
  public createAlias(args: CreateAliasCommandInput, options?: __HttpHandlerOptions): Promise<CreateAliasCommandOutput>;
  public createAlias(args: CreateAliasCommandInput, cb: (err: any, data?: CreateAliasCommandOutput) => void): void;
  public createAlias(
    args: CreateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAliasCommandOutput) => void
  ): void;
  public createAlias(
    args: CreateAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAliasCommandOutput) => void),
    cb?: (err: any, data?: CreateAliasCommandOutput) => void
  ): Promise<CreateAliasCommandOutput> | void {
    const command = new CreateAliasCommand(args);
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
   * <p>Creates a code signing configuration. A <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">code signing configuration</a> defines a list of
   *       allowed signing profiles and defines the code-signing validation policy (action to be taken if deployment
   *       validation checks fail). </p>
   */
  public createCodeSigningConfig(
    args: CreateCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCodeSigningConfigCommandOutput>;
  public createCodeSigningConfig(
    args: CreateCodeSigningConfigCommandInput,
    cb: (err: any, data?: CreateCodeSigningConfigCommandOutput) => void
  ): void;
  public createCodeSigningConfig(
    args: CreateCodeSigningConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCodeSigningConfigCommandOutput) => void
  ): void;
  public createCodeSigningConfig(
    args: CreateCodeSigningConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCodeSigningConfigCommandOutput) => void),
    cb?: (err: any, data?: CreateCodeSigningConfigCommandOutput) => void
  ): Promise<CreateCodeSigningConfigCommandOutput> | void {
    const command = new CreateCodeSigningConfigCommand(args);
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
   * <p>Creates a mapping between an event source and an Lambda function. Lambda reads items from the event source and invokes the function.</p>
   *          <p>For details about how to configure different event sources, see the following topics. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping">
   *             Amazon DynamoDB Streams</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping">
   *             Amazon Kinesis</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource">
   *             Amazon SQS</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping">
   *             Amazon MQ and RabbitMQ</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html">
   *             Amazon MSK</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html">
   *             Apache Kafka</a>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The following error handling options are available only for stream sources (DynamoDB and Kinesis):</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BisectBatchOnFunctionError</code> – If the function returns an error, split the batch in two and retry.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DestinationConfig</code> – Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MaximumRecordAgeInSeconds</code> – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MaximumRetryAttempts</code> – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ParallelizationFactor</code> – Process multiple batches from each shard concurrently.</p>
   *             </li>
   *          </ul>
   *          <p>For information about which configuration parameters apply to each event source, see the following topics.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-params">
   *           Amazon DynamoDB Streams</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-params">
   *           Amazon Kinesis</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params">
   *           Amazon SQS</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-params">
   *           Amazon MQ and RabbitMQ</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-parms">
   *           Amazon MSK</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-kafka-parms">
   *           Apache Kafka</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createEventSourceMapping(
    args: CreateEventSourceMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventSourceMappingCommandOutput>;
  public createEventSourceMapping(
    args: CreateEventSourceMappingCommandInput,
    cb: (err: any, data?: CreateEventSourceMappingCommandOutput) => void
  ): void;
  public createEventSourceMapping(
    args: CreateEventSourceMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventSourceMappingCommandOutput) => void
  ): void;
  public createEventSourceMapping(
    args: CreateEventSourceMappingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEventSourceMappingCommandOutput) => void),
    cb?: (err: any, data?: CreateEventSourceMappingCommandOutput) => void
  ): Promise<CreateEventSourceMappingCommandOutput> | void {
    const command = new CreateEventSourceMappingCommand(args);
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
   * <p>Creates a Lambda function. To create a function, you need a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html">deployment package</a> and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role">execution role</a>. The
   *       deployment package is a .zip file archive or container image that contains your function code. The execution role
   *       grants the function permission to use Amazon Web Services, such as Amazon CloudWatch Logs for log
   *       streaming and X-Ray for request tracing.</p>
   *          <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container
   *         image</a>, then you set the package type to <code>Image</code>. For a container image, the code property
   *       must include the URI of a container image in the Amazon ECR registry. You do not need to specify the
   *       handler and runtime properties.</p>
   *          <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>, then
   *       you set the package type to <code>Zip</code>. For a .zip file archive, the code property specifies the location of
   *       the .zip file. You must also specify the handler and runtime properties. The code in the deployment package must
   *       be compatible with the target instruction set architecture of the function (<code>x86-64</code> or
   *         <code>arm64</code>). If you do not specify the architecture, then the default value is
   *       <code>x86-64</code>.</p>
   *          <p>When you create a function, Lambda provisions an instance of the function and its supporting
   *       resources. If your function connects to a VPC, this process can take a minute or so. During this time, you can't
   *       invoke or modify the function. The <code>State</code>, <code>StateReason</code>, and <code>StateReasonCode</code>
   *       fields in the response from <a>GetFunctionConfiguration</a> indicate when the function is ready to
   *       invoke. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda function states</a>.</p>
   *          <p>A function has an unpublished version, and can have published versions and aliases. The unpublished version
   *       changes when you update your function's code and configuration. A published version is a snapshot of your function
   *       code and configuration that can't be changed. An alias is a named resource that maps to a version, and can be
   *       changed to map to a different version. Use the <code>Publish</code> parameter to create version <code>1</code> of
   *       your function from its initial configuration.</p>
   *          <p>The other parameters let you configure version-specific and function-level settings. You can modify
   *       version-specific settings later with <a>UpdateFunctionConfiguration</a>. Function-level settings apply
   *       to both the unpublished and published versions of the function, and include tags (<a>TagResource</a>)
   *       and per-function concurrency limits (<a>PutFunctionConcurrency</a>).</p>
   *          <p>You can use code signing if your deployment package is a .zip file archive. To enable code signing for this
   *       function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with
   *         <a>UpdateFunctionCode</a>, Lambda checks that the code package has a valid signature from
   *       a trusted publisher. The code-signing configuration includes set of signing profiles, which define the trusted
   *       publishers for this function.</p>
   *          <p>If another Amazon Web Services account or an Amazon Web Service invokes your function, use <a>AddPermission</a> to grant permission by creating a resource-based Identity and Access Management (IAM) policy. You can grant permissions at the function level, on a version, or on an alias.</p>
   *          <p>To invoke your function directly, use <a>Invoke</a>. To invoke your function in response to events
   *       in other Amazon Web Services, create an event source mapping (<a>CreateEventSourceMapping</a>),
   *       or configure a function trigger in the other service. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html">Invoking Lambda
   *       functions</a>.</p>
   */
  public createFunction(
    args: CreateFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFunctionCommandOutput>;
  public createFunction(
    args: CreateFunctionCommandInput,
    cb: (err: any, data?: CreateFunctionCommandOutput) => void
  ): void;
  public createFunction(
    args: CreateFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFunctionCommandOutput) => void
  ): void;
  public createFunction(
    args: CreateFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFunctionCommandOutput) => void),
    cb?: (err: any, data?: CreateFunctionCommandOutput) => void
  ): Promise<CreateFunctionCommandOutput> | void {
    const command = new CreateFunctionCommand(args);
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
   * <p>Creates a Lambda function URL with the specified configuration parameters. A function URL is
   *       a dedicated HTTP(S) endpoint that you can use to invoke your function.</p>
   */
  public createFunctionUrlConfig(
    args: CreateFunctionUrlConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFunctionUrlConfigCommandOutput>;
  public createFunctionUrlConfig(
    args: CreateFunctionUrlConfigCommandInput,
    cb: (err: any, data?: CreateFunctionUrlConfigCommandOutput) => void
  ): void;
  public createFunctionUrlConfig(
    args: CreateFunctionUrlConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFunctionUrlConfigCommandOutput) => void
  ): void;
  public createFunctionUrlConfig(
    args: CreateFunctionUrlConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFunctionUrlConfigCommandOutput) => void),
    cb?: (err: any, data?: CreateFunctionUrlConfigCommandOutput) => void
  ): Promise<CreateFunctionUrlConfigCommandOutput> | void {
    const command = new CreateFunctionUrlConfigCommand(args);
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
   * <p>Deletes a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.</p>
   */
  public deleteAlias(args: DeleteAliasCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAliasCommandOutput>;
  public deleteAlias(args: DeleteAliasCommandInput, cb: (err: any, data?: DeleteAliasCommandOutput) => void): void;
  public deleteAlias(
    args: DeleteAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAliasCommandOutput) => void
  ): void;
  public deleteAlias(
    args: DeleteAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAliasCommandOutput) => void),
    cb?: (err: any, data?: DeleteAliasCommandOutput) => void
  ): Promise<DeleteAliasCommandOutput> | void {
    const command = new DeleteAliasCommand(args);
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
   * <p>Deletes the code signing configuration. You can delete the code signing configuration only if no function is
   *       using it. </p>
   */
  public deleteCodeSigningConfig(
    args: DeleteCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCodeSigningConfigCommandOutput>;
  public deleteCodeSigningConfig(
    args: DeleteCodeSigningConfigCommandInput,
    cb: (err: any, data?: DeleteCodeSigningConfigCommandOutput) => void
  ): void;
  public deleteCodeSigningConfig(
    args: DeleteCodeSigningConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCodeSigningConfigCommandOutput) => void
  ): void;
  public deleteCodeSigningConfig(
    args: DeleteCodeSigningConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCodeSigningConfigCommandOutput) => void),
    cb?: (err: any, data?: DeleteCodeSigningConfigCommandOutput) => void
  ): Promise<DeleteCodeSigningConfigCommandOutput> | void {
    const command = new DeleteCodeSigningConfigCommand(args);
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
   * <p>Deletes an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-invocation-modes.html">event source
   *         mapping</a>. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.</p>
   *          <p>When you delete an event source mapping, it enters a <code>Deleting</code> state and might not be completely
   *       deleted for several seconds.</p>
   */
  public deleteEventSourceMapping(
    args: DeleteEventSourceMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventSourceMappingCommandOutput>;
  public deleteEventSourceMapping(
    args: DeleteEventSourceMappingCommandInput,
    cb: (err: any, data?: DeleteEventSourceMappingCommandOutput) => void
  ): void;
  public deleteEventSourceMapping(
    args: DeleteEventSourceMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventSourceMappingCommandOutput) => void
  ): void;
  public deleteEventSourceMapping(
    args: DeleteEventSourceMappingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEventSourceMappingCommandOutput) => void),
    cb?: (err: any, data?: DeleteEventSourceMappingCommandOutput) => void
  ): Promise<DeleteEventSourceMappingCommandOutput> | void {
    const command = new DeleteEventSourceMappingCommand(args);
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
   * <p>Deletes a Lambda function. To delete a specific function version, use the <code>Qualifier</code> parameter.
   *       Otherwise, all versions and aliases are deleted.</p>
   *          <p>To delete Lambda event source mappings that invoke a function, use <a>DeleteEventSourceMapping</a>. For Amazon Web Services and resources that invoke your function
   *       directly, delete the trigger in the service where you originally configured it.</p>
   */
  public deleteFunction(
    args: DeleteFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFunctionCommandOutput>;
  public deleteFunction(
    args: DeleteFunctionCommandInput,
    cb: (err: any, data?: DeleteFunctionCommandOutput) => void
  ): void;
  public deleteFunction(
    args: DeleteFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFunctionCommandOutput) => void
  ): void;
  public deleteFunction(
    args: DeleteFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFunctionCommandOutput) => void),
    cb?: (err: any, data?: DeleteFunctionCommandOutput) => void
  ): Promise<DeleteFunctionCommandOutput> | void {
    const command = new DeleteFunctionCommand(args);
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
   * <p>Removes the code signing configuration from the function.</p>
   */
  public deleteFunctionCodeSigningConfig(
    args: DeleteFunctionCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFunctionCodeSigningConfigCommandOutput>;
  public deleteFunctionCodeSigningConfig(
    args: DeleteFunctionCodeSigningConfigCommandInput,
    cb: (err: any, data?: DeleteFunctionCodeSigningConfigCommandOutput) => void
  ): void;
  public deleteFunctionCodeSigningConfig(
    args: DeleteFunctionCodeSigningConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFunctionCodeSigningConfigCommandOutput) => void
  ): void;
  public deleteFunctionCodeSigningConfig(
    args: DeleteFunctionCodeSigningConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFunctionCodeSigningConfigCommandOutput) => void),
    cb?: (err: any, data?: DeleteFunctionCodeSigningConfigCommandOutput) => void
  ): Promise<DeleteFunctionCodeSigningConfigCommandOutput> | void {
    const command = new DeleteFunctionCodeSigningConfigCommand(args);
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
   * <p>Removes a concurrent execution limit from a function.</p>
   */
  public deleteFunctionConcurrency(
    args: DeleteFunctionConcurrencyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFunctionConcurrencyCommandOutput>;
  public deleteFunctionConcurrency(
    args: DeleteFunctionConcurrencyCommandInput,
    cb: (err: any, data?: DeleteFunctionConcurrencyCommandOutput) => void
  ): void;
  public deleteFunctionConcurrency(
    args: DeleteFunctionConcurrencyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFunctionConcurrencyCommandOutput) => void
  ): void;
  public deleteFunctionConcurrency(
    args: DeleteFunctionConcurrencyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFunctionConcurrencyCommandOutput) => void),
    cb?: (err: any, data?: DeleteFunctionConcurrencyCommandOutput) => void
  ): Promise<DeleteFunctionConcurrencyCommandOutput> | void {
    const command = new DeleteFunctionConcurrencyCommand(args);
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
   * <p>Deletes the configuration for asynchronous invocation for a function, version, or alias.</p>
   *          <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
   */
  public deleteFunctionEventInvokeConfig(
    args: DeleteFunctionEventInvokeConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFunctionEventInvokeConfigCommandOutput>;
  public deleteFunctionEventInvokeConfig(
    args: DeleteFunctionEventInvokeConfigCommandInput,
    cb: (err: any, data?: DeleteFunctionEventInvokeConfigCommandOutput) => void
  ): void;
  public deleteFunctionEventInvokeConfig(
    args: DeleteFunctionEventInvokeConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFunctionEventInvokeConfigCommandOutput) => void
  ): void;
  public deleteFunctionEventInvokeConfig(
    args: DeleteFunctionEventInvokeConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFunctionEventInvokeConfigCommandOutput) => void),
    cb?: (err: any, data?: DeleteFunctionEventInvokeConfigCommandOutput) => void
  ): Promise<DeleteFunctionEventInvokeConfigCommandOutput> | void {
    const command = new DeleteFunctionEventInvokeConfigCommand(args);
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
   * <p>Deletes a Lambda function URL. When you delete a function URL, you
   *       can't recover it. Creating a new function URL results in a different URL address.</p>
   */
  public deleteFunctionUrlConfig(
    args: DeleteFunctionUrlConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFunctionUrlConfigCommandOutput>;
  public deleteFunctionUrlConfig(
    args: DeleteFunctionUrlConfigCommandInput,
    cb: (err: any, data?: DeleteFunctionUrlConfigCommandOutput) => void
  ): void;
  public deleteFunctionUrlConfig(
    args: DeleteFunctionUrlConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFunctionUrlConfigCommandOutput) => void
  ): void;
  public deleteFunctionUrlConfig(
    args: DeleteFunctionUrlConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFunctionUrlConfigCommandOutput) => void),
    cb?: (err: any, data?: DeleteFunctionUrlConfigCommandOutput) => void
  ): Promise<DeleteFunctionUrlConfigCommandOutput> | void {
    const command = new DeleteFunctionUrlConfigCommand(args);
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
   * <p>Deletes a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
   *         layer</a>. Deleted versions can no longer be viewed or added to functions. To avoid
   *       breaking functions, a copy of the version remains in Lambda until no functions refer to it.</p>
   */
  public deleteLayerVersion(
    args: DeleteLayerVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLayerVersionCommandOutput>;
  public deleteLayerVersion(
    args: DeleteLayerVersionCommandInput,
    cb: (err: any, data?: DeleteLayerVersionCommandOutput) => void
  ): void;
  public deleteLayerVersion(
    args: DeleteLayerVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLayerVersionCommandOutput) => void
  ): void;
  public deleteLayerVersion(
    args: DeleteLayerVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLayerVersionCommandOutput) => void),
    cb?: (err: any, data?: DeleteLayerVersionCommandOutput) => void
  ): Promise<DeleteLayerVersionCommandOutput> | void {
    const command = new DeleteLayerVersionCommand(args);
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
   * <p>Deletes the provisioned concurrency configuration for a function.</p>
   */
  public deleteProvisionedConcurrencyConfig(
    args: DeleteProvisionedConcurrencyConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProvisionedConcurrencyConfigCommandOutput>;
  public deleteProvisionedConcurrencyConfig(
    args: DeleteProvisionedConcurrencyConfigCommandInput,
    cb: (err: any, data?: DeleteProvisionedConcurrencyConfigCommandOutput) => void
  ): void;
  public deleteProvisionedConcurrencyConfig(
    args: DeleteProvisionedConcurrencyConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProvisionedConcurrencyConfigCommandOutput) => void
  ): void;
  public deleteProvisionedConcurrencyConfig(
    args: DeleteProvisionedConcurrencyConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProvisionedConcurrencyConfigCommandOutput) => void),
    cb?: (err: any, data?: DeleteProvisionedConcurrencyConfigCommandOutput) => void
  ): Promise<DeleteProvisionedConcurrencyConfigCommandOutput> | void {
    const command = new DeleteProvisionedConcurrencyConfigCommand(args);
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
   * <p>Retrieves details about your account's <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limits</a> and usage in an Amazon Web Services Region.</p>
   */
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountSettingsCommandOutput>;
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccountSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): Promise<GetAccountSettingsCommandOutput> | void {
    const command = new GetAccountSettingsCommand(args);
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
   * <p>Returns details about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.</p>
   */
  public getAlias(args: GetAliasCommandInput, options?: __HttpHandlerOptions): Promise<GetAliasCommandOutput>;
  public getAlias(args: GetAliasCommandInput, cb: (err: any, data?: GetAliasCommandOutput) => void): void;
  public getAlias(
    args: GetAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAliasCommandOutput) => void
  ): void;
  public getAlias(
    args: GetAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAliasCommandOutput) => void),
    cb?: (err: any, data?: GetAliasCommandOutput) => void
  ): Promise<GetAliasCommandOutput> | void {
    const command = new GetAliasCommand(args);
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
   * <p>Returns information about the specified code signing configuration.</p>
   */
  public getCodeSigningConfig(
    args: GetCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCodeSigningConfigCommandOutput>;
  public getCodeSigningConfig(
    args: GetCodeSigningConfigCommandInput,
    cb: (err: any, data?: GetCodeSigningConfigCommandOutput) => void
  ): void;
  public getCodeSigningConfig(
    args: GetCodeSigningConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCodeSigningConfigCommandOutput) => void
  ): void;
  public getCodeSigningConfig(
    args: GetCodeSigningConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCodeSigningConfigCommandOutput) => void),
    cb?: (err: any, data?: GetCodeSigningConfigCommandOutput) => void
  ): Promise<GetCodeSigningConfigCommandOutput> | void {
    const command = new GetCodeSigningConfigCommand(args);
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
   * <p>Returns details about an event source mapping. You can get the identifier of a mapping from the output of
   *         <a>ListEventSourceMappings</a>.</p>
   */
  public getEventSourceMapping(
    args: GetEventSourceMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventSourceMappingCommandOutput>;
  public getEventSourceMapping(
    args: GetEventSourceMappingCommandInput,
    cb: (err: any, data?: GetEventSourceMappingCommandOutput) => void
  ): void;
  public getEventSourceMapping(
    args: GetEventSourceMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventSourceMappingCommandOutput) => void
  ): void;
  public getEventSourceMapping(
    args: GetEventSourceMappingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEventSourceMappingCommandOutput) => void),
    cb?: (err: any, data?: GetEventSourceMappingCommandOutput) => void
  ): Promise<GetEventSourceMappingCommandOutput> | void {
    const command = new GetEventSourceMappingCommand(args);
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
   * <p>Returns information about the function or function version, with a link to download the deployment package
   *       that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are
   *       returned.</p>
   */
  public getFunction(args: GetFunctionCommandInput, options?: __HttpHandlerOptions): Promise<GetFunctionCommandOutput>;
  public getFunction(args: GetFunctionCommandInput, cb: (err: any, data?: GetFunctionCommandOutput) => void): void;
  public getFunction(
    args: GetFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionCommandOutput) => void
  ): void;
  public getFunction(
    args: GetFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFunctionCommandOutput) => void),
    cb?: (err: any, data?: GetFunctionCommandOutput) => void
  ): Promise<GetFunctionCommandOutput> | void {
    const command = new GetFunctionCommand(args);
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
   * <p>Returns the code signing configuration for the specified function.</p>
   */
  public getFunctionCodeSigningConfig(
    args: GetFunctionCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFunctionCodeSigningConfigCommandOutput>;
  public getFunctionCodeSigningConfig(
    args: GetFunctionCodeSigningConfigCommandInput,
    cb: (err: any, data?: GetFunctionCodeSigningConfigCommandOutput) => void
  ): void;
  public getFunctionCodeSigningConfig(
    args: GetFunctionCodeSigningConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionCodeSigningConfigCommandOutput) => void
  ): void;
  public getFunctionCodeSigningConfig(
    args: GetFunctionCodeSigningConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFunctionCodeSigningConfigCommandOutput) => void),
    cb?: (err: any, data?: GetFunctionCodeSigningConfigCommandOutput) => void
  ): Promise<GetFunctionCodeSigningConfigCommandOutput> | void {
    const command = new GetFunctionCodeSigningConfigCommand(args);
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
   * <p>Returns details about the reserved concurrency configuration for a function. To set a concurrency limit for a
   *       function, use <a>PutFunctionConcurrency</a>.</p>
   */
  public getFunctionConcurrency(
    args: GetFunctionConcurrencyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFunctionConcurrencyCommandOutput>;
  public getFunctionConcurrency(
    args: GetFunctionConcurrencyCommandInput,
    cb: (err: any, data?: GetFunctionConcurrencyCommandOutput) => void
  ): void;
  public getFunctionConcurrency(
    args: GetFunctionConcurrencyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionConcurrencyCommandOutput) => void
  ): void;
  public getFunctionConcurrency(
    args: GetFunctionConcurrencyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFunctionConcurrencyCommandOutput) => void),
    cb?: (err: any, data?: GetFunctionConcurrencyCommandOutput) => void
  ): Promise<GetFunctionConcurrencyCommandOutput> | void {
    const command = new GetFunctionConcurrencyCommand(args);
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
   * <p>Returns the version-specific settings of a Lambda function or version. The output includes only options that
   *       can vary between versions of a function. To modify these settings, use <a>UpdateFunctionConfiguration</a>.</p>
   *          <p>To get all of a function's details, including function-level settings, use <a>GetFunction</a>.</p>
   */
  public getFunctionConfiguration(
    args: GetFunctionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFunctionConfigurationCommandOutput>;
  public getFunctionConfiguration(
    args: GetFunctionConfigurationCommandInput,
    cb: (err: any, data?: GetFunctionConfigurationCommandOutput) => void
  ): void;
  public getFunctionConfiguration(
    args: GetFunctionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionConfigurationCommandOutput) => void
  ): void;
  public getFunctionConfiguration(
    args: GetFunctionConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFunctionConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetFunctionConfigurationCommandOutput) => void
  ): Promise<GetFunctionConfigurationCommandOutput> | void {
    const command = new GetFunctionConfigurationCommand(args);
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
   * <p>Retrieves the configuration for asynchronous invocation for a function, version, or alias.</p>
   *          <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
   */
  public getFunctionEventInvokeConfig(
    args: GetFunctionEventInvokeConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFunctionEventInvokeConfigCommandOutput>;
  public getFunctionEventInvokeConfig(
    args: GetFunctionEventInvokeConfigCommandInput,
    cb: (err: any, data?: GetFunctionEventInvokeConfigCommandOutput) => void
  ): void;
  public getFunctionEventInvokeConfig(
    args: GetFunctionEventInvokeConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionEventInvokeConfigCommandOutput) => void
  ): void;
  public getFunctionEventInvokeConfig(
    args: GetFunctionEventInvokeConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFunctionEventInvokeConfigCommandOutput) => void),
    cb?: (err: any, data?: GetFunctionEventInvokeConfigCommandOutput) => void
  ): Promise<GetFunctionEventInvokeConfigCommandOutput> | void {
    const command = new GetFunctionEventInvokeConfigCommand(args);
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
   * <p>Returns details about a Lambda function URL.</p>
   */
  public getFunctionUrlConfig(
    args: GetFunctionUrlConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFunctionUrlConfigCommandOutput>;
  public getFunctionUrlConfig(
    args: GetFunctionUrlConfigCommandInput,
    cb: (err: any, data?: GetFunctionUrlConfigCommandOutput) => void
  ): void;
  public getFunctionUrlConfig(
    args: GetFunctionUrlConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionUrlConfigCommandOutput) => void
  ): void;
  public getFunctionUrlConfig(
    args: GetFunctionUrlConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFunctionUrlConfigCommandOutput) => void),
    cb?: (err: any, data?: GetFunctionUrlConfigCommandOutput) => void
  ): Promise<GetFunctionUrlConfigCommandOutput> | void {
    const command = new GetFunctionUrlConfigCommand(args);
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
   * <p>Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
   *         layer</a>, with a link to download the layer archive
   *         that's valid for 10 minutes.</p>
   */
  public getLayerVersion(
    args: GetLayerVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLayerVersionCommandOutput>;
  public getLayerVersion(
    args: GetLayerVersionCommandInput,
    cb: (err: any, data?: GetLayerVersionCommandOutput) => void
  ): void;
  public getLayerVersion(
    args: GetLayerVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLayerVersionCommandOutput) => void
  ): void;
  public getLayerVersion(
    args: GetLayerVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLayerVersionCommandOutput) => void),
    cb?: (err: any, data?: GetLayerVersionCommandOutput) => void
  ): Promise<GetLayerVersionCommandOutput> | void {
    const command = new GetLayerVersionCommand(args);
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
   * <p>Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
   *         layer</a>, with a link to download the layer archive
   *         that's valid for 10 minutes.</p>
   */
  public getLayerVersionByArn(
    args: GetLayerVersionByArnCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLayerVersionByArnCommandOutput>;
  public getLayerVersionByArn(
    args: GetLayerVersionByArnCommandInput,
    cb: (err: any, data?: GetLayerVersionByArnCommandOutput) => void
  ): void;
  public getLayerVersionByArn(
    args: GetLayerVersionByArnCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLayerVersionByArnCommandOutput) => void
  ): void;
  public getLayerVersionByArn(
    args: GetLayerVersionByArnCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLayerVersionByArnCommandOutput) => void),
    cb?: (err: any, data?: GetLayerVersionByArnCommandOutput) => void
  ): Promise<GetLayerVersionByArnCommandOutput> | void {
    const command = new GetLayerVersionByArnCommand(args);
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
   * <p>Returns the permission policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
   *         layer</a>. For more information, see <a>AddLayerVersionPermission</a>.</p>
   */
  public getLayerVersionPolicy(
    args: GetLayerVersionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLayerVersionPolicyCommandOutput>;
  public getLayerVersionPolicy(
    args: GetLayerVersionPolicyCommandInput,
    cb: (err: any, data?: GetLayerVersionPolicyCommandOutput) => void
  ): void;
  public getLayerVersionPolicy(
    args: GetLayerVersionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLayerVersionPolicyCommandOutput) => void
  ): void;
  public getLayerVersionPolicy(
    args: GetLayerVersionPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLayerVersionPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetLayerVersionPolicyCommandOutput) => void
  ): Promise<GetLayerVersionPolicyCommandOutput> | void {
    const command = new GetLayerVersionPolicyCommand(args);
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
   * <p>Returns the <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">resource-based IAM policy</a> for a function, version, or alias.</p>
   */
  public getPolicy(args: GetPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyCommandOutput>;
  public getPolicy(args: GetPolicyCommandInput, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
  public getPolicy(
    args: GetPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;
  public getPolicy(
    args: GetPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetPolicyCommandOutput) => void
  ): Promise<GetPolicyCommandOutput> | void {
    const command = new GetPolicyCommand(args);
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
   * <p>Retrieves the provisioned concurrency configuration for a function's alias or version.</p>
   */
  public getProvisionedConcurrencyConfig(
    args: GetProvisionedConcurrencyConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProvisionedConcurrencyConfigCommandOutput>;
  public getProvisionedConcurrencyConfig(
    args: GetProvisionedConcurrencyConfigCommandInput,
    cb: (err: any, data?: GetProvisionedConcurrencyConfigCommandOutput) => void
  ): void;
  public getProvisionedConcurrencyConfig(
    args: GetProvisionedConcurrencyConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProvisionedConcurrencyConfigCommandOutput) => void
  ): void;
  public getProvisionedConcurrencyConfig(
    args: GetProvisionedConcurrencyConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetProvisionedConcurrencyConfigCommandOutput) => void),
    cb?: (err: any, data?: GetProvisionedConcurrencyConfigCommandOutput) => void
  ): Promise<GetProvisionedConcurrencyConfigCommandOutput> | void {
    const command = new GetProvisionedConcurrencyConfigCommand(args);
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
   * <p>Retrieves the runtime management configuration for a function's version. If the runtime update mode is <b>Manual</b>, this includes the ARN of the
   *       runtime version and the runtime update mode. If the runtime update mode is <b>Auto</b> or <b>Function update</b>,
   *       this includes the runtime update mode and <code>null</code> is returned for the ARN. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.</p>
   */
  public getRuntimeManagementConfig(
    args: GetRuntimeManagementConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRuntimeManagementConfigCommandOutput>;
  public getRuntimeManagementConfig(
    args: GetRuntimeManagementConfigCommandInput,
    cb: (err: any, data?: GetRuntimeManagementConfigCommandOutput) => void
  ): void;
  public getRuntimeManagementConfig(
    args: GetRuntimeManagementConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRuntimeManagementConfigCommandOutput) => void
  ): void;
  public getRuntimeManagementConfig(
    args: GetRuntimeManagementConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRuntimeManagementConfigCommandOutput) => void),
    cb?: (err: any, data?: GetRuntimeManagementConfigCommandOutput) => void
  ): Promise<GetRuntimeManagementConfigCommandOutput> | void {
    const command = new GetRuntimeManagementConfigCommand(args);
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
   * <p>Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or
   *       asynchronously. To invoke a function asynchronously, set <code>InvocationType</code> to <code>Event</code>.</p>
   *          <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html">synchronous invocation</a>,
   *       details about the function response, including errors, are included in the response body and headers. For either
   *       invocation type, you can find more information in the <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html">execution log</a> and <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-x-ray.html">trace</a>.</p>
   *          <p>When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type,
   *       client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an
   *       error, Lambda executes the function up to two more times. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-retries.html">Error handling and automatic retries in
   *           Lambda</a>.</p>
   *          <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a>,
   *       Lambda adds events to a queue before sending them to your function. If your function does not have enough capacity
   *       to keep up with the queue, events may be lost. Occasionally, your function may receive the same event multiple
   *       times, even if no error occurs. To retain events that were not processed, configure your function with a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq">dead-letter queue</a>.</p>
   *          <p>The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that
   *       prevent your function from executing, such as permissions errors, <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">quota</a> errors, or issues with your function's code and
   *       configuration. For example, Lambda returns <code>TooManyRequestsException</code> if running the
   *       function would cause you to exceed a concurrency limit at either the account level
   *         (<code>ConcurrentInvocationLimitExceeded</code>) or function level
   *         (<code>ReservedFunctionConcurrentInvocationLimitExceeded</code>).</p>
   *          <p>For functions with a long timeout, your client might disconnect during synchronous invocation while it waits
   *       for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long
   *       connections with timeout or keep-alive settings.</p>
   *          <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action. For details on how to set up
   *       permissions for cross-account invocations, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke">Granting function
   *       access to other accounts</a>.</p>
   */
  public invoke(args: InvokeCommandInput, options?: __HttpHandlerOptions): Promise<InvokeCommandOutput>;
  public invoke(args: InvokeCommandInput, cb: (err: any, data?: InvokeCommandOutput) => void): void;
  public invoke(
    args: InvokeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeCommandOutput) => void
  ): void;
  public invoke(
    args: InvokeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InvokeCommandOutput) => void),
    cb?: (err: any, data?: InvokeCommandOutput) => void
  ): Promise<InvokeCommandOutput> | void {
    const command = new InvokeCommand(args);
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
   * @deprecated
   *
   * <important>
   *             <p>For asynchronous function invocation, use <a>Invoke</a>.</p>
   *          </important>
   *          <p>Invokes a function asynchronously.</p>
   */
  public invokeAsync(args: InvokeAsyncCommandInput, options?: __HttpHandlerOptions): Promise<InvokeAsyncCommandOutput>;
  public invokeAsync(args: InvokeAsyncCommandInput, cb: (err: any, data?: InvokeAsyncCommandOutput) => void): void;
  public invokeAsync(
    args: InvokeAsyncCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeAsyncCommandOutput) => void
  ): void;
  public invokeAsync(
    args: InvokeAsyncCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InvokeAsyncCommandOutput) => void),
    cb?: (err: any, data?: InvokeAsyncCommandOutput) => void
  ): Promise<InvokeAsyncCommandOutput> | void {
    const command = new InvokeAsyncCommand(args);
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
   * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">aliases</a>
   *       for a Lambda function.</p>
   */
  public listAliases(args: ListAliasesCommandInput, options?: __HttpHandlerOptions): Promise<ListAliasesCommandOutput>;
  public listAliases(args: ListAliasesCommandInput, cb: (err: any, data?: ListAliasesCommandOutput) => void): void;
  public listAliases(
    args: ListAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAliasesCommandOutput) => void
  ): void;
  public listAliases(
    args: ListAliasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAliasesCommandOutput) => void),
    cb?: (err: any, data?: ListAliasesCommandOutput) => void
  ): Promise<ListAliasesCommandOutput> | void {
    const command = new ListAliasesCommand(args);
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
   * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuring-codesigning.html">code
   *         signing configurations</a>. A request returns up to 10,000 configurations per
   *       call. You can use the <code>MaxItems</code> parameter to return fewer configurations per call. </p>
   */
  public listCodeSigningConfigs(
    args: ListCodeSigningConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCodeSigningConfigsCommandOutput>;
  public listCodeSigningConfigs(
    args: ListCodeSigningConfigsCommandInput,
    cb: (err: any, data?: ListCodeSigningConfigsCommandOutput) => void
  ): void;
  public listCodeSigningConfigs(
    args: ListCodeSigningConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCodeSigningConfigsCommandOutput) => void
  ): void;
  public listCodeSigningConfigs(
    args: ListCodeSigningConfigsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCodeSigningConfigsCommandOutput) => void),
    cb?: (err: any, data?: ListCodeSigningConfigsCommandOutput) => void
  ): Promise<ListCodeSigningConfigsCommandOutput> | void {
    const command = new ListCodeSigningConfigsCommand(args);
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
   * <p>Lists event source mappings. Specify an <code>EventSourceArn</code> to show only event source mappings for a
   *       single event source.</p>
   */
  public listEventSourceMappings(
    args: ListEventSourceMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventSourceMappingsCommandOutput>;
  public listEventSourceMappings(
    args: ListEventSourceMappingsCommandInput,
    cb: (err: any, data?: ListEventSourceMappingsCommandOutput) => void
  ): void;
  public listEventSourceMappings(
    args: ListEventSourceMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventSourceMappingsCommandOutput) => void
  ): void;
  public listEventSourceMappings(
    args: ListEventSourceMappingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEventSourceMappingsCommandOutput) => void),
    cb?: (err: any, data?: ListEventSourceMappingsCommandOutput) => void
  ): Promise<ListEventSourceMappingsCommandOutput> | void {
    const command = new ListEventSourceMappingsCommand(args);
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
   * <p>Retrieves a list of configurations for asynchronous invocation for a function.</p>
   *          <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
   */
  public listFunctionEventInvokeConfigs(
    args: ListFunctionEventInvokeConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFunctionEventInvokeConfigsCommandOutput>;
  public listFunctionEventInvokeConfigs(
    args: ListFunctionEventInvokeConfigsCommandInput,
    cb: (err: any, data?: ListFunctionEventInvokeConfigsCommandOutput) => void
  ): void;
  public listFunctionEventInvokeConfigs(
    args: ListFunctionEventInvokeConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFunctionEventInvokeConfigsCommandOutput) => void
  ): void;
  public listFunctionEventInvokeConfigs(
    args: ListFunctionEventInvokeConfigsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFunctionEventInvokeConfigsCommandOutput) => void),
    cb?: (err: any, data?: ListFunctionEventInvokeConfigsCommandOutput) => void
  ): Promise<ListFunctionEventInvokeConfigsCommandOutput> | void {
    const command = new ListFunctionEventInvokeConfigsCommand(args);
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
   * <p>Returns a list of Lambda functions, with the version-specific configuration of each. Lambda returns up to 50
   *       functions per call.</p>
   *          <p>Set <code>FunctionVersion</code> to <code>ALL</code> to include all published versions of each function in
   *       addition to the unpublished version.</p>
   *          <note>
   *             <p>The <code>ListFunctions</code> operation returns a subset of the <a>FunctionConfiguration</a> fields.
   *         To get the additional fields (State, StateReasonCode, StateReason, LastUpdateStatus, LastUpdateStatusReason,
   *         LastUpdateStatusReasonCode,  RuntimeVersionConfig) for a function or version, use <a>GetFunction</a>.</p>
   *          </note>
   */
  public listFunctions(
    args: ListFunctionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFunctionsCommandOutput>;
  public listFunctions(
    args: ListFunctionsCommandInput,
    cb: (err: any, data?: ListFunctionsCommandOutput) => void
  ): void;
  public listFunctions(
    args: ListFunctionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFunctionsCommandOutput) => void
  ): void;
  public listFunctions(
    args: ListFunctionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFunctionsCommandOutput) => void),
    cb?: (err: any, data?: ListFunctionsCommandOutput) => void
  ): Promise<ListFunctionsCommandOutput> | void {
    const command = new ListFunctionsCommand(args);
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
   * <p>List the functions that use the specified code signing configuration. You can use this method prior to deleting a
   *       code signing configuration, to verify that no functions are using it.</p>
   */
  public listFunctionsByCodeSigningConfig(
    args: ListFunctionsByCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFunctionsByCodeSigningConfigCommandOutput>;
  public listFunctionsByCodeSigningConfig(
    args: ListFunctionsByCodeSigningConfigCommandInput,
    cb: (err: any, data?: ListFunctionsByCodeSigningConfigCommandOutput) => void
  ): void;
  public listFunctionsByCodeSigningConfig(
    args: ListFunctionsByCodeSigningConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFunctionsByCodeSigningConfigCommandOutput) => void
  ): void;
  public listFunctionsByCodeSigningConfig(
    args: ListFunctionsByCodeSigningConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFunctionsByCodeSigningConfigCommandOutput) => void),
    cb?: (err: any, data?: ListFunctionsByCodeSigningConfigCommandOutput) => void
  ): Promise<ListFunctionsByCodeSigningConfigCommandOutput> | void {
    const command = new ListFunctionsByCodeSigningConfigCommand(args);
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
   * <p>Returns a list of Lambda function URLs for the specified function.</p>
   */
  public listFunctionUrlConfigs(
    args: ListFunctionUrlConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFunctionUrlConfigsCommandOutput>;
  public listFunctionUrlConfigs(
    args: ListFunctionUrlConfigsCommandInput,
    cb: (err: any, data?: ListFunctionUrlConfigsCommandOutput) => void
  ): void;
  public listFunctionUrlConfigs(
    args: ListFunctionUrlConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFunctionUrlConfigsCommandOutput) => void
  ): void;
  public listFunctionUrlConfigs(
    args: ListFunctionUrlConfigsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFunctionUrlConfigsCommandOutput) => void),
    cb?: (err: any, data?: ListFunctionUrlConfigsCommandOutput) => void
  ): Promise<ListFunctionUrlConfigsCommandOutput> | void {
    const command = new ListFunctionUrlConfigsCommand(args);
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
   * <p>Lists <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-layers.html">Lambda
   *         layers</a> and shows information about the latest version of each. Specify a
   *         <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime
   *         identifier</a> to list only layers that indicate that they're compatible with that
   *       runtime. Specify a compatible architecture to include only layers that are compatible with
   *       that  <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.</p>
   */
  public listLayers(args: ListLayersCommandInput, options?: __HttpHandlerOptions): Promise<ListLayersCommandOutput>;
  public listLayers(args: ListLayersCommandInput, cb: (err: any, data?: ListLayersCommandOutput) => void): void;
  public listLayers(
    args: ListLayersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLayersCommandOutput) => void
  ): void;
  public listLayers(
    args: ListLayersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLayersCommandOutput) => void),
    cb?: (err: any, data?: ListLayersCommandOutput) => void
  ): Promise<ListLayersCommandOutput> | void {
    const command = new ListLayersCommand(args);
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
   * <p>Lists the versions of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
   *         layer</a>. Versions that have been deleted aren't listed. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only
   *       versions that indicate that they're compatible with that runtime. Specify a compatible architecture to include only
   *       layer versions that are compatible with that architecture.</p>
   */
  public listLayerVersions(
    args: ListLayerVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLayerVersionsCommandOutput>;
  public listLayerVersions(
    args: ListLayerVersionsCommandInput,
    cb: (err: any, data?: ListLayerVersionsCommandOutput) => void
  ): void;
  public listLayerVersions(
    args: ListLayerVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLayerVersionsCommandOutput) => void
  ): void;
  public listLayerVersions(
    args: ListLayerVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLayerVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListLayerVersionsCommandOutput) => void
  ): Promise<ListLayerVersionsCommandOutput> | void {
    const command = new ListLayerVersionsCommand(args);
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
   * <p>Retrieves a list of provisioned concurrency configurations for a function.</p>
   */
  public listProvisionedConcurrencyConfigs(
    args: ListProvisionedConcurrencyConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProvisionedConcurrencyConfigsCommandOutput>;
  public listProvisionedConcurrencyConfigs(
    args: ListProvisionedConcurrencyConfigsCommandInput,
    cb: (err: any, data?: ListProvisionedConcurrencyConfigsCommandOutput) => void
  ): void;
  public listProvisionedConcurrencyConfigs(
    args: ListProvisionedConcurrencyConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProvisionedConcurrencyConfigsCommandOutput) => void
  ): void;
  public listProvisionedConcurrencyConfigs(
    args: ListProvisionedConcurrencyConfigsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProvisionedConcurrencyConfigsCommandOutput) => void),
    cb?: (err: any, data?: ListProvisionedConcurrencyConfigsCommandOutput) => void
  ): Promise<ListProvisionedConcurrencyConfigsCommandOutput> | void {
    const command = new ListProvisionedConcurrencyConfigsCommand(args);
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
   * <p>Returns a function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>. You can
   *       also view tags with <a>GetFunction</a>.</p>
   */
  public listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
  public listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
  public listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  public listTags(
    args: ListTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsCommandOutput) => void),
    cb?: (err: any, data?: ListTagsCommandOutput) => void
  ): Promise<ListTagsCommandOutput> | void {
    const command = new ListTagsCommand(args);
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
   * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">versions</a>,
   *       with the version-specific configuration of each. Lambda returns up to 50 versions per call.</p>
   */
  public listVersionsByFunction(
    args: ListVersionsByFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVersionsByFunctionCommandOutput>;
  public listVersionsByFunction(
    args: ListVersionsByFunctionCommandInput,
    cb: (err: any, data?: ListVersionsByFunctionCommandOutput) => void
  ): void;
  public listVersionsByFunction(
    args: ListVersionsByFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVersionsByFunctionCommandOutput) => void
  ): void;
  public listVersionsByFunction(
    args: ListVersionsByFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVersionsByFunctionCommandOutput) => void),
    cb?: (err: any, data?: ListVersionsByFunctionCommandOutput) => void
  ): Promise<ListVersionsByFunctionCommandOutput> | void {
    const command = new ListVersionsByFunctionCommand(args);
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
   * <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
   *         layer</a> from a ZIP archive. Each time you call <code>PublishLayerVersion</code> with the same
   *       layer name, a new version is created.</p>
   *          <p>Add layers to your function with <a>CreateFunction</a> or <a>UpdateFunctionConfiguration</a>.</p>
   */
  public publishLayerVersion(
    args: PublishLayerVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PublishLayerVersionCommandOutput>;
  public publishLayerVersion(
    args: PublishLayerVersionCommandInput,
    cb: (err: any, data?: PublishLayerVersionCommandOutput) => void
  ): void;
  public publishLayerVersion(
    args: PublishLayerVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishLayerVersionCommandOutput) => void
  ): void;
  public publishLayerVersion(
    args: PublishLayerVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PublishLayerVersionCommandOutput) => void),
    cb?: (err: any, data?: PublishLayerVersionCommandOutput) => void
  ): Promise<PublishLayerVersionCommandOutput> | void {
    const command = new PublishLayerVersionCommand(args);
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
   * <p>Creates a <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">version</a> from the
   *       current code and configuration of a function. Use versions to create a snapshot of your function code and
   *       configuration that doesn't change.</p>
   *          <p>Lambda doesn't publish a version if the function's configuration and code haven't changed since the last
   *       version. Use <a>UpdateFunctionCode</a> or <a>UpdateFunctionConfiguration</a> to update the
   *       function before publishing a version.</p>
   *          <p>Clients can invoke versions directly or with an alias. To create an alias, use <a>CreateAlias</a>.</p>
   */
  public publishVersion(
    args: PublishVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PublishVersionCommandOutput>;
  public publishVersion(
    args: PublishVersionCommandInput,
    cb: (err: any, data?: PublishVersionCommandOutput) => void
  ): void;
  public publishVersion(
    args: PublishVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishVersionCommandOutput) => void
  ): void;
  public publishVersion(
    args: PublishVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PublishVersionCommandOutput) => void),
    cb?: (err: any, data?: PublishVersionCommandOutput) => void
  ): Promise<PublishVersionCommandOutput> | void {
    const command = new PublishVersionCommand(args);
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
   * <p>Update the code signing configuration for the function. Changes to the code signing configuration take effect the
   *       next time a user tries to deploy a code package to the function. </p>
   */
  public putFunctionCodeSigningConfig(
    args: PutFunctionCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutFunctionCodeSigningConfigCommandOutput>;
  public putFunctionCodeSigningConfig(
    args: PutFunctionCodeSigningConfigCommandInput,
    cb: (err: any, data?: PutFunctionCodeSigningConfigCommandOutput) => void
  ): void;
  public putFunctionCodeSigningConfig(
    args: PutFunctionCodeSigningConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFunctionCodeSigningConfigCommandOutput) => void
  ): void;
  public putFunctionCodeSigningConfig(
    args: PutFunctionCodeSigningConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutFunctionCodeSigningConfigCommandOutput) => void),
    cb?: (err: any, data?: PutFunctionCodeSigningConfigCommandOutput) => void
  ): Promise<PutFunctionCodeSigningConfigCommandOutput> | void {
    const command = new PutFunctionCodeSigningConfigCommand(args);
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
   * <p>Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency
   *       level.</p>
   *          <p>Concurrency settings apply to the function as a whole, including all published versions and the unpublished
   *       version. Reserving concurrency both ensures that your function has capacity to process the specified number of
   *       events simultaneously, and prevents it from scaling beyond that level. Use <a>GetFunction</a> to see
   *       the current setting for a function.</p>
   *          <p>Use <a>GetAccountSettings</a> to see your Regional concurrency limit. You can reserve concurrency
   *       for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for
   *       functions that aren't configured with a per-function limit. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html">Lambda function scaling</a>.</p>
   */
  public putFunctionConcurrency(
    args: PutFunctionConcurrencyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutFunctionConcurrencyCommandOutput>;
  public putFunctionConcurrency(
    args: PutFunctionConcurrencyCommandInput,
    cb: (err: any, data?: PutFunctionConcurrencyCommandOutput) => void
  ): void;
  public putFunctionConcurrency(
    args: PutFunctionConcurrencyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFunctionConcurrencyCommandOutput) => void
  ): void;
  public putFunctionConcurrency(
    args: PutFunctionConcurrencyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutFunctionConcurrencyCommandOutput) => void),
    cb?: (err: any, data?: PutFunctionConcurrencyCommandOutput) => void
  ): Promise<PutFunctionConcurrencyCommandOutput> | void {
    const command = new PutFunctionConcurrencyCommand(args);
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
   * <p>Configures options for <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous
   *         invocation</a> on a function, version, or alias. If a configuration already exists for a function, version,
   *       or alias, this operation overwrites it. If you exclude any settings, they are removed. To set one option without
   *       affecting existing settings for other options, use <a>UpdateFunctionEventInvokeConfig</a>.</p>
   *          <p>By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains
   *       events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous
   *       invocation queue for too long, Lambda discards it. To retain discarded events, configure a dead-letter queue with
   *         <a>UpdateFunctionConfiguration</a>.</p>
   *          <p>To send an invocation record to a queue, topic, function, or event bus, specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations">destination</a>. You can configure separate destinations for successful invocations (on-success) and events
   *       that fail all processing attempts (on-failure). You can configure destinations in addition to or instead of a
   *       dead-letter queue.</p>
   */
  public putFunctionEventInvokeConfig(
    args: PutFunctionEventInvokeConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutFunctionEventInvokeConfigCommandOutput>;
  public putFunctionEventInvokeConfig(
    args: PutFunctionEventInvokeConfigCommandInput,
    cb: (err: any, data?: PutFunctionEventInvokeConfigCommandOutput) => void
  ): void;
  public putFunctionEventInvokeConfig(
    args: PutFunctionEventInvokeConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFunctionEventInvokeConfigCommandOutput) => void
  ): void;
  public putFunctionEventInvokeConfig(
    args: PutFunctionEventInvokeConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutFunctionEventInvokeConfigCommandOutput) => void),
    cb?: (err: any, data?: PutFunctionEventInvokeConfigCommandOutput) => void
  ): Promise<PutFunctionEventInvokeConfigCommandOutput> | void {
    const command = new PutFunctionEventInvokeConfigCommand(args);
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
   * <p>Adds a provisioned concurrency configuration to a function's alias or version.</p>
   */
  public putProvisionedConcurrencyConfig(
    args: PutProvisionedConcurrencyConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutProvisionedConcurrencyConfigCommandOutput>;
  public putProvisionedConcurrencyConfig(
    args: PutProvisionedConcurrencyConfigCommandInput,
    cb: (err: any, data?: PutProvisionedConcurrencyConfigCommandOutput) => void
  ): void;
  public putProvisionedConcurrencyConfig(
    args: PutProvisionedConcurrencyConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutProvisionedConcurrencyConfigCommandOutput) => void
  ): void;
  public putProvisionedConcurrencyConfig(
    args: PutProvisionedConcurrencyConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutProvisionedConcurrencyConfigCommandOutput) => void),
    cb?: (err: any, data?: PutProvisionedConcurrencyConfigCommandOutput) => void
  ): Promise<PutProvisionedConcurrencyConfigCommandOutput> | void {
    const command = new PutProvisionedConcurrencyConfigCommand(args);
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
   * <p>Sets the runtime management configuration for a function's version. For more information,
   *       see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.</p>
   */
  public putRuntimeManagementConfig(
    args: PutRuntimeManagementConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRuntimeManagementConfigCommandOutput>;
  public putRuntimeManagementConfig(
    args: PutRuntimeManagementConfigCommandInput,
    cb: (err: any, data?: PutRuntimeManagementConfigCommandOutput) => void
  ): void;
  public putRuntimeManagementConfig(
    args: PutRuntimeManagementConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRuntimeManagementConfigCommandOutput) => void
  ): void;
  public putRuntimeManagementConfig(
    args: PutRuntimeManagementConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRuntimeManagementConfigCommandOutput) => void),
    cb?: (err: any, data?: PutRuntimeManagementConfigCommandOutput) => void
  ): Promise<PutRuntimeManagementConfigCommandOutput> | void {
    const command = new PutRuntimeManagementConfigCommand(args);
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
   * <p>Removes a statement from the permissions policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
   *         layer</a>. For more information, see
   *         <a>AddLayerVersionPermission</a>.</p>
   */
  public removeLayerVersionPermission(
    args: RemoveLayerVersionPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveLayerVersionPermissionCommandOutput>;
  public removeLayerVersionPermission(
    args: RemoveLayerVersionPermissionCommandInput,
    cb: (err: any, data?: RemoveLayerVersionPermissionCommandOutput) => void
  ): void;
  public removeLayerVersionPermission(
    args: RemoveLayerVersionPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveLayerVersionPermissionCommandOutput) => void
  ): void;
  public removeLayerVersionPermission(
    args: RemoveLayerVersionPermissionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveLayerVersionPermissionCommandOutput) => void),
    cb?: (err: any, data?: RemoveLayerVersionPermissionCommandOutput) => void
  ): Promise<RemoveLayerVersionPermissionCommandOutput> | void {
    const command = new RemoveLayerVersionPermissionCommand(args);
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
   * <p>Revokes function-use permission from an Amazon Web Service or another Amazon Web Services account. You
   *       can get the ID of the statement from the output of <a>GetPolicy</a>.</p>
   */
  public removePermission(
    args: RemovePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemovePermissionCommandOutput>;
  public removePermission(
    args: RemovePermissionCommandInput,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;
  public removePermission(
    args: RemovePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;
  public removePermission(
    args: RemovePermissionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemovePermissionCommandOutput) => void),
    cb?: (err: any, data?: RemovePermissionCommandOutput) => void
  ): Promise<RemovePermissionCommandOutput> | void {
    const command = new RemovePermissionCommand(args);
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
   * <p>Adds <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to a function.</p>
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
   * <p>Removes <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> from a function.</p>
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
   * <p>Updates the configuration of a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.</p>
   */
  public updateAlias(args: UpdateAliasCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAliasCommandOutput>;
  public updateAlias(args: UpdateAliasCommandInput, cb: (err: any, data?: UpdateAliasCommandOutput) => void): void;
  public updateAlias(
    args: UpdateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAliasCommandOutput) => void
  ): void;
  public updateAlias(
    args: UpdateAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAliasCommandOutput) => void),
    cb?: (err: any, data?: UpdateAliasCommandOutput) => void
  ): Promise<UpdateAliasCommandOutput> | void {
    const command = new UpdateAliasCommand(args);
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
   * <p>Update the code signing configuration. Changes to the code signing configuration take effect the next time a
   *       user tries to deploy a code package to the function. </p>
   */
  public updateCodeSigningConfig(
    args: UpdateCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCodeSigningConfigCommandOutput>;
  public updateCodeSigningConfig(
    args: UpdateCodeSigningConfigCommandInput,
    cb: (err: any, data?: UpdateCodeSigningConfigCommandOutput) => void
  ): void;
  public updateCodeSigningConfig(
    args: UpdateCodeSigningConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCodeSigningConfigCommandOutput) => void
  ): void;
  public updateCodeSigningConfig(
    args: UpdateCodeSigningConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCodeSigningConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateCodeSigningConfigCommandOutput) => void
  ): Promise<UpdateCodeSigningConfigCommandOutput> | void {
    const command = new UpdateCodeSigningConfigCommand(args);
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
   * <p>Updates an event source mapping. You can change the function that Lambda invokes, or pause
   *       invocation and resume later from the same location.</p>
   *          <p>For details about how to configure different event sources, see the following topics. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping">
   *             Amazon DynamoDB Streams</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping">
   *             Amazon Kinesis</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource">
   *             Amazon SQS</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping">
   *             Amazon MQ and RabbitMQ</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html">
   *             Amazon MSK</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html">
   *             Apache Kafka</a>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The following error handling options are available only for stream sources (DynamoDB and Kinesis):</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BisectBatchOnFunctionError</code> – If the function returns an error, split the batch in two and retry.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DestinationConfig</code> – Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MaximumRecordAgeInSeconds</code> – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MaximumRetryAttempts</code> – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ParallelizationFactor</code> – Process multiple batches from each shard concurrently.</p>
   *             </li>
   *          </ul>
   *          <p>For information about which configuration parameters apply to each event source, see the following topics.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-params">
   *           Amazon DynamoDB Streams</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-params">
   *           Amazon Kinesis</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params">
   *           Amazon SQS</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-params">
   *           Amazon MQ and RabbitMQ</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-parms">
   *           Amazon MSK</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-kafka-parms">
   *           Apache Kafka</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public updateEventSourceMapping(
    args: UpdateEventSourceMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventSourceMappingCommandOutput>;
  public updateEventSourceMapping(
    args: UpdateEventSourceMappingCommandInput,
    cb: (err: any, data?: UpdateEventSourceMappingCommandOutput) => void
  ): void;
  public updateEventSourceMapping(
    args: UpdateEventSourceMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventSourceMappingCommandOutput) => void
  ): void;
  public updateEventSourceMapping(
    args: UpdateEventSourceMappingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEventSourceMappingCommandOutput) => void),
    cb?: (err: any, data?: UpdateEventSourceMappingCommandOutput) => void
  ): Promise<UpdateEventSourceMappingCommandOutput> | void {
    const command = new UpdateEventSourceMappingCommand(args);
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
   * <p>Updates a Lambda function's code. If code signing is enabled for the function, the code package
   *       must be signed by a trusted publisher. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Configuring code signing for Lambda</a>.</p>
   *          <p>If the function's package type is <code>Image</code>, then you must specify the code package in
   *         <code>ImageUri</code> as the URI of a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a> in the Amazon ECR registry.</p>
   *          <p>If the function's package type is <code>Zip</code>, then you must specify the deployment package as a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file
   *         archive</a>. Enter the Amazon S3 bucket and key of the code .zip file location. You can also provide
   *       the function code inline using the <code>ZipFile</code> field.</p>
   *          <p>The code in the deployment package must be compatible with the target instruction set architecture of the
   *       function (<code>x86-64</code> or <code>arm64</code>).</p>
   *          <p>The function's code is locked when you publish a version. You can't modify the code of a published version,
   *       only the unpublished version.</p>
   *          <note>
   *             <p>For a function defined as a container image, Lambda resolves the image tag to an image digest. In
   *           Amazon ECR, if you update the image tag to a new image, Lambda does not automatically
   *         update the function.</p>
   *          </note>
   */
  public updateFunctionCode(
    args: UpdateFunctionCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFunctionCodeCommandOutput>;
  public updateFunctionCode(
    args: UpdateFunctionCodeCommandInput,
    cb: (err: any, data?: UpdateFunctionCodeCommandOutput) => void
  ): void;
  public updateFunctionCode(
    args: UpdateFunctionCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFunctionCodeCommandOutput) => void
  ): void;
  public updateFunctionCode(
    args: UpdateFunctionCodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFunctionCodeCommandOutput) => void),
    cb?: (err: any, data?: UpdateFunctionCodeCommandOutput) => void
  ): Promise<UpdateFunctionCodeCommandOutput> | void {
    const command = new UpdateFunctionCodeCommand(args);
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
   * <p>Modify the version-specific settings of a Lambda function.</p>
   *          <p>When you update a function, Lambda provisions an instance of the function and its supporting
   *       resources. If your function connects to a VPC, this process can take a minute. During this time, you can't modify
   *       the function, but you can still invoke it. The <code>LastUpdateStatus</code>, <code>LastUpdateStatusReason</code>,
   *       and <code>LastUpdateStatusReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a>
   *       indicate when the update is complete and the function is processing events with the new configuration. For more
   *       information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda
   *         function states</a>.</p>
   *          <p>These settings can vary between versions of a function and are locked when you publish a version. You can't
   *       modify the configuration of a published version, only the unpublished version.</p>
   *          <p>To configure function concurrency, use <a>PutFunctionConcurrency</a>. To grant invoke permissions
   *       to an Amazon Web Services account or Amazon Web Service, use <a>AddPermission</a>.</p>
   */
  public updateFunctionConfiguration(
    args: UpdateFunctionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFunctionConfigurationCommandOutput>;
  public updateFunctionConfiguration(
    args: UpdateFunctionConfigurationCommandInput,
    cb: (err: any, data?: UpdateFunctionConfigurationCommandOutput) => void
  ): void;
  public updateFunctionConfiguration(
    args: UpdateFunctionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFunctionConfigurationCommandOutput) => void
  ): void;
  public updateFunctionConfiguration(
    args: UpdateFunctionConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFunctionConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateFunctionConfigurationCommandOutput) => void
  ): Promise<UpdateFunctionConfigurationCommandOutput> | void {
    const command = new UpdateFunctionConfigurationCommand(args);
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
   * <p>Updates the configuration for asynchronous invocation for a function, version, or alias.</p>
   *          <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
   */
  public updateFunctionEventInvokeConfig(
    args: UpdateFunctionEventInvokeConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFunctionEventInvokeConfigCommandOutput>;
  public updateFunctionEventInvokeConfig(
    args: UpdateFunctionEventInvokeConfigCommandInput,
    cb: (err: any, data?: UpdateFunctionEventInvokeConfigCommandOutput) => void
  ): void;
  public updateFunctionEventInvokeConfig(
    args: UpdateFunctionEventInvokeConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFunctionEventInvokeConfigCommandOutput) => void
  ): void;
  public updateFunctionEventInvokeConfig(
    args: UpdateFunctionEventInvokeConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFunctionEventInvokeConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateFunctionEventInvokeConfigCommandOutput) => void
  ): Promise<UpdateFunctionEventInvokeConfigCommandOutput> | void {
    const command = new UpdateFunctionEventInvokeConfigCommand(args);
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
   * <p>Updates the configuration for a Lambda function URL.</p>
   */
  public updateFunctionUrlConfig(
    args: UpdateFunctionUrlConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFunctionUrlConfigCommandOutput>;
  public updateFunctionUrlConfig(
    args: UpdateFunctionUrlConfigCommandInput,
    cb: (err: any, data?: UpdateFunctionUrlConfigCommandOutput) => void
  ): void;
  public updateFunctionUrlConfig(
    args: UpdateFunctionUrlConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFunctionUrlConfigCommandOutput) => void
  ): void;
  public updateFunctionUrlConfig(
    args: UpdateFunctionUrlConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFunctionUrlConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateFunctionUrlConfigCommandOutput) => void
  ): Promise<UpdateFunctionUrlConfigCommandOutput> | void {
    const command = new UpdateFunctionUrlConfigCommand(args);
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
