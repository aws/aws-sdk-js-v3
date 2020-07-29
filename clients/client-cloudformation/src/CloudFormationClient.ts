import { CancelUpdateStackCommandInput, CancelUpdateStackCommandOutput } from "./commands/CancelUpdateStackCommand";
import {
  ContinueUpdateRollbackCommandInput,
  ContinueUpdateRollbackCommandOutput,
} from "./commands/ContinueUpdateRollbackCommand";
import { CreateChangeSetCommandInput, CreateChangeSetCommandOutput } from "./commands/CreateChangeSetCommand";
import { CreateStackCommandInput, CreateStackCommandOutput } from "./commands/CreateStackCommand";
import {
  CreateStackInstancesCommandInput,
  CreateStackInstancesCommandOutput,
} from "./commands/CreateStackInstancesCommand";
import { CreateStackSetCommandInput, CreateStackSetCommandOutput } from "./commands/CreateStackSetCommand";
import { DeleteChangeSetCommandInput, DeleteChangeSetCommandOutput } from "./commands/DeleteChangeSetCommand";
import { DeleteStackCommandInput, DeleteStackCommandOutput } from "./commands/DeleteStackCommand";
import {
  DeleteStackInstancesCommandInput,
  DeleteStackInstancesCommandOutput,
} from "./commands/DeleteStackInstancesCommand";
import { DeleteStackSetCommandInput, DeleteStackSetCommandOutput } from "./commands/DeleteStackSetCommand";
import { DeregisterTypeCommandInput, DeregisterTypeCommandOutput } from "./commands/DeregisterTypeCommand";
import {
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "./commands/DescribeAccountLimitsCommand";
import { DescribeChangeSetCommandInput, DescribeChangeSetCommandOutput } from "./commands/DescribeChangeSetCommand";
import {
  DescribeStackDriftDetectionStatusCommandInput,
  DescribeStackDriftDetectionStatusCommandOutput,
} from "./commands/DescribeStackDriftDetectionStatusCommand";
import {
  DescribeStackEventsCommandInput,
  DescribeStackEventsCommandOutput,
} from "./commands/DescribeStackEventsCommand";
import {
  DescribeStackInstanceCommandInput,
  DescribeStackInstanceCommandOutput,
} from "./commands/DescribeStackInstanceCommand";
import {
  DescribeStackResourceCommandInput,
  DescribeStackResourceCommandOutput,
} from "./commands/DescribeStackResourceCommand";
import {
  DescribeStackResourceDriftsCommandInput,
  DescribeStackResourceDriftsCommandOutput,
} from "./commands/DescribeStackResourceDriftsCommand";
import {
  DescribeStackResourcesCommandInput,
  DescribeStackResourcesCommandOutput,
} from "./commands/DescribeStackResourcesCommand";
import { DescribeStackSetCommandInput, DescribeStackSetCommandOutput } from "./commands/DescribeStackSetCommand";
import {
  DescribeStackSetOperationCommandInput,
  DescribeStackSetOperationCommandOutput,
} from "./commands/DescribeStackSetOperationCommand";
import { DescribeStacksCommandInput, DescribeStacksCommandOutput } from "./commands/DescribeStacksCommand";
import { DescribeTypeCommandInput, DescribeTypeCommandOutput } from "./commands/DescribeTypeCommand";
import {
  DescribeTypeRegistrationCommandInput,
  DescribeTypeRegistrationCommandOutput,
} from "./commands/DescribeTypeRegistrationCommand";
import { DetectStackDriftCommandInput, DetectStackDriftCommandOutput } from "./commands/DetectStackDriftCommand";
import {
  DetectStackResourceDriftCommandInput,
  DetectStackResourceDriftCommandOutput,
} from "./commands/DetectStackResourceDriftCommand";
import {
  DetectStackSetDriftCommandInput,
  DetectStackSetDriftCommandOutput,
} from "./commands/DetectStackSetDriftCommand";
import {
  EstimateTemplateCostCommandInput,
  EstimateTemplateCostCommandOutput,
} from "./commands/EstimateTemplateCostCommand";
import { ExecuteChangeSetCommandInput, ExecuteChangeSetCommandOutput } from "./commands/ExecuteChangeSetCommand";
import { GetStackPolicyCommandInput, GetStackPolicyCommandOutput } from "./commands/GetStackPolicyCommand";
import { GetTemplateCommandInput, GetTemplateCommandOutput } from "./commands/GetTemplateCommand";
import { GetTemplateSummaryCommandInput, GetTemplateSummaryCommandOutput } from "./commands/GetTemplateSummaryCommand";
import { ListChangeSetsCommandInput, ListChangeSetsCommandOutput } from "./commands/ListChangeSetsCommand";
import { ListExportsCommandInput, ListExportsCommandOutput } from "./commands/ListExportsCommand";
import { ListImportsCommandInput, ListImportsCommandOutput } from "./commands/ListImportsCommand";
import { ListStackInstancesCommandInput, ListStackInstancesCommandOutput } from "./commands/ListStackInstancesCommand";
import { ListStackResourcesCommandInput, ListStackResourcesCommandOutput } from "./commands/ListStackResourcesCommand";
import {
  ListStackSetOperationResultsCommandInput,
  ListStackSetOperationResultsCommandOutput,
} from "./commands/ListStackSetOperationResultsCommand";
import {
  ListStackSetOperationsCommandInput,
  ListStackSetOperationsCommandOutput,
} from "./commands/ListStackSetOperationsCommand";
import { ListStackSetsCommandInput, ListStackSetsCommandOutput } from "./commands/ListStackSetsCommand";
import { ListStacksCommandInput, ListStacksCommandOutput } from "./commands/ListStacksCommand";
import {
  ListTypeRegistrationsCommandInput,
  ListTypeRegistrationsCommandOutput,
} from "./commands/ListTypeRegistrationsCommand";
import { ListTypeVersionsCommandInput, ListTypeVersionsCommandOutput } from "./commands/ListTypeVersionsCommand";
import { ListTypesCommandInput, ListTypesCommandOutput } from "./commands/ListTypesCommand";
import {
  RecordHandlerProgressCommandInput,
  RecordHandlerProgressCommandOutput,
} from "./commands/RecordHandlerProgressCommand";
import { RegisterTypeCommandInput, RegisterTypeCommandOutput } from "./commands/RegisterTypeCommand";
import { SetStackPolicyCommandInput, SetStackPolicyCommandOutput } from "./commands/SetStackPolicyCommand";
import {
  SetTypeDefaultVersionCommandInput,
  SetTypeDefaultVersionCommandOutput,
} from "./commands/SetTypeDefaultVersionCommand";
import { SignalResourceCommandInput, SignalResourceCommandOutput } from "./commands/SignalResourceCommand";
import {
  StopStackSetOperationCommandInput,
  StopStackSetOperationCommandOutput,
} from "./commands/StopStackSetOperationCommand";
import { UpdateStackCommandInput, UpdateStackCommandOutput } from "./commands/UpdateStackCommand";
import {
  UpdateStackInstancesCommandInput,
  UpdateStackInstancesCommandOutput,
} from "./commands/UpdateStackInstancesCommand";
import { UpdateStackSetCommandInput, UpdateStackSetCommandOutput } from "./commands/UpdateStackSetCommand";
import {
  UpdateTerminationProtectionCommandInput,
  UpdateTerminationProtectionCommandOutput,
} from "./commands/UpdateTerminationProtectionCommand";
import { ValidateTemplateCommandInput, ValidateTemplateCommandOutput } from "./commands/ValidateTemplateCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CancelUpdateStackCommandInput
  | ContinueUpdateRollbackCommandInput
  | CreateChangeSetCommandInput
  | CreateStackCommandInput
  | CreateStackInstancesCommandInput
  | CreateStackSetCommandInput
  | DeleteChangeSetCommandInput
  | DeleteStackCommandInput
  | DeleteStackInstancesCommandInput
  | DeleteStackSetCommandInput
  | DeregisterTypeCommandInput
  | DescribeAccountLimitsCommandInput
  | DescribeChangeSetCommandInput
  | DescribeStackDriftDetectionStatusCommandInput
  | DescribeStackEventsCommandInput
  | DescribeStackInstanceCommandInput
  | DescribeStackResourceCommandInput
  | DescribeStackResourceDriftsCommandInput
  | DescribeStackResourcesCommandInput
  | DescribeStackSetCommandInput
  | DescribeStackSetOperationCommandInput
  | DescribeStacksCommandInput
  | DescribeTypeCommandInput
  | DescribeTypeRegistrationCommandInput
  | DetectStackDriftCommandInput
  | DetectStackResourceDriftCommandInput
  | DetectStackSetDriftCommandInput
  | EstimateTemplateCostCommandInput
  | ExecuteChangeSetCommandInput
  | GetStackPolicyCommandInput
  | GetTemplateCommandInput
  | GetTemplateSummaryCommandInput
  | ListChangeSetsCommandInput
  | ListExportsCommandInput
  | ListImportsCommandInput
  | ListStackInstancesCommandInput
  | ListStackResourcesCommandInput
  | ListStackSetOperationResultsCommandInput
  | ListStackSetOperationsCommandInput
  | ListStackSetsCommandInput
  | ListStacksCommandInput
  | ListTypeRegistrationsCommandInput
  | ListTypeVersionsCommandInput
  | ListTypesCommandInput
  | RecordHandlerProgressCommandInput
  | RegisterTypeCommandInput
  | SetStackPolicyCommandInput
  | SetTypeDefaultVersionCommandInput
  | SignalResourceCommandInput
  | StopStackSetOperationCommandInput
  | UpdateStackCommandInput
  | UpdateStackInstancesCommandInput
  | UpdateStackSetCommandInput
  | UpdateTerminationProtectionCommandInput
  | ValidateTemplateCommandInput;

export type ServiceOutputTypes =
  | CancelUpdateStackCommandOutput
  | ContinueUpdateRollbackCommandOutput
  | CreateChangeSetCommandOutput
  | CreateStackCommandOutput
  | CreateStackInstancesCommandOutput
  | CreateStackSetCommandOutput
  | DeleteChangeSetCommandOutput
  | DeleteStackCommandOutput
  | DeleteStackInstancesCommandOutput
  | DeleteStackSetCommandOutput
  | DeregisterTypeCommandOutput
  | DescribeAccountLimitsCommandOutput
  | DescribeChangeSetCommandOutput
  | DescribeStackDriftDetectionStatusCommandOutput
  | DescribeStackEventsCommandOutput
  | DescribeStackInstanceCommandOutput
  | DescribeStackResourceCommandOutput
  | DescribeStackResourceDriftsCommandOutput
  | DescribeStackResourcesCommandOutput
  | DescribeStackSetCommandOutput
  | DescribeStackSetOperationCommandOutput
  | DescribeStacksCommandOutput
  | DescribeTypeCommandOutput
  | DescribeTypeRegistrationCommandOutput
  | DetectStackDriftCommandOutput
  | DetectStackResourceDriftCommandOutput
  | DetectStackSetDriftCommandOutput
  | EstimateTemplateCostCommandOutput
  | ExecuteChangeSetCommandOutput
  | GetStackPolicyCommandOutput
  | GetTemplateCommandOutput
  | GetTemplateSummaryCommandOutput
  | ListChangeSetsCommandOutput
  | ListExportsCommandOutput
  | ListImportsCommandOutput
  | ListStackInstancesCommandOutput
  | ListStackResourcesCommandOutput
  | ListStackSetOperationResultsCommandOutput
  | ListStackSetOperationsCommandOutput
  | ListStackSetsCommandOutput
  | ListStacksCommandOutput
  | ListTypeRegistrationsCommandOutput
  | ListTypeVersionsCommandOutput
  | ListTypesCommandOutput
  | RecordHandlerProgressCommandOutput
  | RegisterTypeCommandOutput
  | SetStackPolicyCommandOutput
  | SetTypeDefaultVersionCommandOutput
  | SignalResourceCommandOutput
  | StopStackSetOperationCommandOutput
  | UpdateStackCommandOutput
  | UpdateStackInstancesCommandOutput
  | UpdateStackSetCommandOutput
  | UpdateTerminationProtectionCommandOutput
  | ValidateTemplateCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Provider function that return promise of a maxAttempts string
   */
  maxAttemptsDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type CloudFormationClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type CloudFormationClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>AWS CloudFormation</fullname>
 *          <p>AWS CloudFormation allows you to create and manage AWS infrastructure deployments
 *          predictably and repeatedly. You can use AWS CloudFormation to leverage AWS products, such
 *          as Amazon Elastic Compute Cloud, Amazon Elastic Block Store, Amazon Simple Notification
 *          Service, Elastic Load Balancing, and Auto Scaling to build highly-reliable, highly
 *          scalable, cost-effective applications without creating or configuring the underlying AWS
 *          infrastructure.</p>
 *          <p>With AWS CloudFormation, you declare all of your resources and dependencies in a
 *          template file. The template defines a collection of resources as a single unit called a
 *          stack. AWS CloudFormation creates and deletes all member resources of the stack together
 *          and manages all dependencies between the resources for you.</p>
 *          <p>For more information about AWS CloudFormation, see the <a href="http://aws.amazon.com/cloudformation/">AWS CloudFormation Product Page</a>.</p>
 *          <p>Amazon CloudFormation makes use of other AWS products. If you need additional
 *          technical information about a specific AWS product, you can find the product's technical
 *          documentation at <a href="https://docs.aws.amazon.com/">docs.aws.amazon.com</a>.</p>
 */
export class CloudFormationClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudFormationClientResolvedConfig
> {
  readonly config: CloudFormationClientResolvedConfig;

  constructor(configuration: CloudFormationClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
