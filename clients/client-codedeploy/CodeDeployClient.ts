import {
  AddTagsToOnPremisesInstancesInput,
  BatchGetApplicationRevisionsInput,
  BatchGetApplicationRevisionsOutput,
  BatchGetApplicationsInput,
  BatchGetApplicationsOutput,
  BatchGetDeploymentGroupsInput,
  BatchGetDeploymentGroupsOutput,
  BatchGetDeploymentInstancesInput,
  BatchGetDeploymentInstancesOutput,
  BatchGetDeploymentTargetsInput,
  BatchGetDeploymentTargetsOutput,
  BatchGetDeploymentsInput,
  BatchGetDeploymentsOutput,
  BatchGetOnPremisesInstancesInput,
  BatchGetOnPremisesInstancesOutput,
  ContinueDeploymentInput,
  CreateApplicationInput,
  CreateApplicationOutput,
  CreateDeploymentConfigInput,
  CreateDeploymentConfigOutput,
  CreateDeploymentGroupInput,
  CreateDeploymentGroupOutput,
  CreateDeploymentInput,
  CreateDeploymentOutput,
  DeleteApplicationInput,
  DeleteDeploymentConfigInput,
  DeleteDeploymentGroupInput,
  DeleteDeploymentGroupOutput,
  DeleteGitHubAccountTokenInput,
  DeleteGitHubAccountTokenOutput,
  DeregisterOnPremisesInstanceInput,
  GetApplicationInput,
  GetApplicationOutput,
  GetApplicationRevisionInput,
  GetApplicationRevisionOutput,
  GetDeploymentConfigInput,
  GetDeploymentConfigOutput,
  GetDeploymentGroupInput,
  GetDeploymentGroupOutput,
  GetDeploymentInput,
  GetDeploymentInstanceInput,
  GetDeploymentInstanceOutput,
  GetDeploymentOutput,
  GetDeploymentTargetInput,
  GetDeploymentTargetOutput,
  GetOnPremisesInstanceInput,
  GetOnPremisesInstanceOutput,
  ListApplicationRevisionsInput,
  ListApplicationRevisionsOutput,
  ListApplicationsInput,
  ListApplicationsOutput,
  ListDeploymentConfigsInput,
  ListDeploymentConfigsOutput,
  ListDeploymentGroupsInput,
  ListDeploymentGroupsOutput,
  ListDeploymentInstancesInput,
  ListDeploymentInstancesOutput,
  ListDeploymentTargetsInput,
  ListDeploymentTargetsOutput,
  ListDeploymentsInput,
  ListDeploymentsOutput,
  ListGitHubAccountTokenNamesInput,
  ListGitHubAccountTokenNamesOutput,
  ListOnPremisesInstancesInput,
  ListOnPremisesInstancesOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  PutLifecycleEventHookExecutionStatusInput,
  PutLifecycleEventHookExecutionStatusOutput,
  RegisterApplicationRevisionInput,
  RegisterOnPremisesInstanceInput,
  RemoveTagsFromOnPremisesInstancesInput,
  SkipWaitTimeForInstanceTerminationInput,
  StopDeploymentInput,
  StopDeploymentOutput,
  TagResourceInput,
  TagResourceOutput,
  UntagResourceInput,
  UntagResourceOutput,
  UpdateApplicationInput,
  UpdateDeploymentGroupInput,
  UpdateDeploymentGroupOutput,
} from "./models/index";
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
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@aws-sdk/middleware-retry";
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
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AddTagsToOnPremisesInstancesInput
  | BatchGetApplicationRevisionsInput
  | BatchGetApplicationsInput
  | BatchGetDeploymentGroupsInput
  | BatchGetDeploymentInstancesInput
  | BatchGetDeploymentTargetsInput
  | BatchGetDeploymentsInput
  | BatchGetOnPremisesInstancesInput
  | ContinueDeploymentInput
  | CreateApplicationInput
  | CreateDeploymentConfigInput
  | CreateDeploymentGroupInput
  | CreateDeploymentInput
  | DeleteApplicationInput
  | DeleteDeploymentConfigInput
  | DeleteDeploymentGroupInput
  | DeleteGitHubAccountTokenInput
  | DeregisterOnPremisesInstanceInput
  | GetApplicationInput
  | GetApplicationRevisionInput
  | GetDeploymentConfigInput
  | GetDeploymentGroupInput
  | GetDeploymentInput
  | GetDeploymentInstanceInput
  | GetDeploymentTargetInput
  | GetOnPremisesInstanceInput
  | ListApplicationRevisionsInput
  | ListApplicationsInput
  | ListDeploymentConfigsInput
  | ListDeploymentGroupsInput
  | ListDeploymentInstancesInput
  | ListDeploymentTargetsInput
  | ListDeploymentsInput
  | ListGitHubAccountTokenNamesInput
  | ListOnPremisesInstancesInput
  | ListTagsForResourceInput
  | PutLifecycleEventHookExecutionStatusInput
  | RegisterApplicationRevisionInput
  | RegisterOnPremisesInstanceInput
  | RemoveTagsFromOnPremisesInstancesInput
  | SkipWaitTimeForInstanceTerminationInput
  | StopDeploymentInput
  | TagResourceInput
  | UntagResourceInput
  | UpdateApplicationInput
  | UpdateDeploymentGroupInput;

export type ServiceOutputTypes =
  | __MetadataBearer
  | BatchGetApplicationRevisionsOutput
  | BatchGetApplicationsOutput
  | BatchGetDeploymentGroupsOutput
  | BatchGetDeploymentInstancesOutput
  | BatchGetDeploymentTargetsOutput
  | BatchGetDeploymentsOutput
  | BatchGetOnPremisesInstancesOutput
  | CreateApplicationOutput
  | CreateDeploymentConfigOutput
  | CreateDeploymentGroupOutput
  | CreateDeploymentOutput
  | DeleteDeploymentGroupOutput
  | DeleteGitHubAccountTokenOutput
  | GetApplicationOutput
  | GetApplicationRevisionOutput
  | GetDeploymentConfigOutput
  | GetDeploymentGroupOutput
  | GetDeploymentInstanceOutput
  | GetDeploymentOutput
  | GetDeploymentTargetOutput
  | GetOnPremisesInstanceOutput
  | ListApplicationRevisionsOutput
  | ListApplicationsOutput
  | ListDeploymentConfigsOutput
  | ListDeploymentGroupsOutput
  | ListDeploymentInstancesOutput
  | ListDeploymentTargetsOutput
  | ListDeploymentsOutput
  | ListGitHubAccountTokenNamesOutput
  | ListOnPremisesInstancesOutput
  | ListTagsForResourceOutput
  | PutLifecycleEventHookExecutionStatusOutput
  | StopDeploymentOutput
  | TagResourceOutput
  | UntagResourceOutput
  | UpdateDeploymentGroupOutput;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
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
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type CodeDeployClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>>
  & ClientDefaults
  & RegionInputConfig
  & EndpointsInputConfig
  & AwsAuthInputConfig
  & RetryInputConfig
  & UserAgentInputConfig
  & HostHeaderInputConfig

export type CodeDeployClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions>
  & Required<ClientDefaults>
  & RegionResolvedConfig
  & EndpointsResolvedConfig
  & AwsAuthResolvedConfig
  & RetryResolvedConfig
  & UserAgentResolvedConfig
  & HostHeaderResolvedConfig

/**
 *
 *         <fullname>AWS CodeDeploy</fullname>
 *         <p>AWS CodeDeploy is a deployment service that automates application deployments to
 *             Amazon EC2 instances, on-premises instances running in your own facility, serverless
 *             AWS Lambda functions, or applications in an Amazon ECS service.</p>
 *         <p>You can deploy a nearly unlimited variety of application content, such as an updated
 *             Lambda function, updated applications in an Amazon ECS service, code, web and configuration
 *             files, executables, packages, scripts,
 *             multimedia files, and so on. AWS CodeDeploy can deploy application content stored in
 *             Amazon S3 buckets, GitHub repositories, or Bitbucket repositories. You do not need to
 *             make changes to your existing code before you can use AWS CodeDeploy.</p>
 *         <p>AWS CodeDeploy makes it easier for you to rapidly release new features, helps you
 *             avoid downtime during application deployment, and handles the complexity of updating
 *             your applications, without many of the risks associated with error-prone manual
 *             deployments.</p>
 *         <p>
 *             <b>AWS CodeDeploy Components</b>
 *         </p>
 *         <p>Use the information in this guide to help you work with the following AWS CodeDeploy
 *             components:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <b>Application</b>: A name that uniquely identifies
 *                     the application you want to deploy. AWS CodeDeploy uses this name, which
 *                     functions as a container, to ensure the correct combination of revision,
 *                     deployment configuration, and deployment group are referenced during a
 *                     deployment.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Deployment group</b>: A set of individual
 *                     instances, CodeDeploy Lambda deployment configuration settings, or an Amazon ECS
 *                     service and network details. A Lambda deployment group specifies how to route
 *                     traffic to a new version of a Lambda function. An Amazon ECS deployment group
 *                     specifies the service created in Amazon ECS to deploy, a load balancer, and a
 *                     listener to reroute production traffic to an updated containerized application.
 *                     An EC2/On-premises deployment group contains individually tagged instances,
 *                     Amazon EC2 instances in Amazon EC2 Auto Scaling groups, or both. All deployment
 *                     groups can specify optional trigger, alarm, and rollback settings.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Deployment configuration</b>: A set of deployment
 *                     rules and deployment success and failure conditions used by AWS CodeDeploy
 *                     during a deployment.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Deployment</b>: The process and the components used
 *                     when updating a Lambda function, a containerized application in an Amazon ECS
 *                     service, or of installing content on one or more instances. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Application revisions</b>: For an AWS Lambda
 *                     deployment, this is an AppSpec file that specifies the Lambda function to be
 *                     updated and one or more functions to validate deployment lifecycle events. For
 *                     an Amazon ECS deployment, this is an AppSpec file that specifies the Amazon ECS
 *                     task definition, container, and port where production traffic is rerouted. For
 *                     an EC2/On-premises deployment, this is an archive file that contains source
 *                     content—source code, webpages, executable files, and deployment scripts—along
 *                     with an AppSpec file. Revisions are stored in Amazon S3 buckets or GitHub
 *                     repositories. For Amazon S3, a revision is uniquely identified by its Amazon S3
 *                     object key and its ETag, version, or both. For GitHub, a revision is uniquely
 *                     identified by its commit ID.</p>
 *             </li>
 *          </ul>
 *         <p>This guide also contains information to help you get details about the instances in
 *             your deployments, to make on-premises instances available for AWS CodeDeploy
 *             deployments, to get details about a Lambda function deployment, and to get details about
 *             Amazon ECS service deployments.</p>
 *         <p>
 *             <b>AWS CodeDeploy Information Resources</b>
 *          </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide">AWS CodeDeploy
 *                         User Guide</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/">AWS
 *                         CodeDeploy API Reference Guide</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/cli/latest/reference/deploy/index.html">AWS
 *                         CLI Reference for AWS CodeDeploy</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a href="https://forums.aws.amazon.com/forum.jspa?forumID=179">AWS CodeDeploy
 *                         Developer Forum</a>
 *                 </p>
 *             </li>
 *          </ul>
 *
 */
export class CodeDeployClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CodeDeployClientResolvedConfig
> {
  readonly config: CodeDeployClientResolvedConfig;

  constructor(configuration: CodeDeployClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
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
  }
}
