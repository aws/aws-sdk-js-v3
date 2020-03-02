import {
  CreateGroupCommandInput,
  CreateGroupCommandOutput
} from "./commands/CreateGroupCommand";
import {
  DeleteGroupCommandInput,
  DeleteGroupCommandOutput
} from "./commands/DeleteGroupCommand";
import {
  GetGroupCommandInput,
  GetGroupCommandOutput
} from "./commands/GetGroupCommand";
import {
  GetGroupQueryCommandInput,
  GetGroupQueryCommandOutput
} from "./commands/GetGroupQueryCommand";
import {
  GetTagsCommandInput,
  GetTagsCommandOutput
} from "./commands/GetTagsCommand";
import {
  ListGroupResourcesCommandInput,
  ListGroupResourcesCommandOutput
} from "./commands/ListGroupResourcesCommand";
import {
  ListGroupsCommandInput,
  ListGroupsCommandOutput
} from "./commands/ListGroupsCommand";
import {
  SearchResourcesCommandInput,
  SearchResourcesCommandOutput
} from "./commands/SearchResourcesCommand";
import { TagCommandInput, TagCommandOutput } from "./commands/TagCommand";
import { UntagCommandInput, UntagCommandOutput } from "./commands/UntagCommand";
import {
  UpdateGroupCommandInput,
  UpdateGroupCommandOutput
} from "./commands/UpdateGroupCommand";
import {
  UpdateGroupQueryCommandInput,
  UpdateGroupQueryCommandOutput
} from "./commands/UpdateGroupQueryCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
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
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CreateGroupCommandInput
  | DeleteGroupCommandInput
  | GetGroupCommandInput
  | GetGroupQueryCommandInput
  | GetTagsCommandInput
  | ListGroupResourcesCommandInput
  | ListGroupsCommandInput
  | SearchResourcesCommandInput
  | TagCommandInput
  | UntagCommandInput
  | UpdateGroupCommandInput
  | UpdateGroupQueryCommandInput;

export type ServiceOutputTypes =
  | CreateGroupCommandOutput
  | DeleteGroupCommandOutput
  | GetGroupCommandOutput
  | GetGroupQueryCommandOutput
  | GetTagsCommandOutput
  | ListGroupResourcesCommandOutput
  | ListGroupsCommandOutput
  | SearchResourcesCommandOutput
  | TagCommandOutput
  | UntagCommandOutput
  | UpdateGroupCommandOutput
  | UpdateGroupQueryCommandOutput;

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
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type ResourceGroupsClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type ResourceGroupsClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>AWS Resource Groups</fullname>
 *          <p>AWS Resource Groups lets you organize AWS resources such as Amazon EC2 instances,
 *       Amazon Relational Database Service databases, and Amazon S3 buckets into groups using criteria
 *       that you define as tags. A resource group is a collection of resources that match the resource
 *       types specified in a query, and share one or more tags or portions of tags. You can create a
 *       group of resources based on their roles in your cloud infrastructure, lifecycle stages,
 *       regions, application layers, or virtually any criteria. Resource groups enable you to automate
 *       management tasks, such as those in AWS Systems Manager Automation documents, on tag-related
 *       resources in AWS Systems Manager. Groups of tagged resources also let you quickly view a
 *       custom console in AWS Systems Manager that shows AWS Config compliance and other monitoring
 *       data about member resources.</p>
 *          <p>To create a resource group, build a resource query, and specify tags that identify
 *       the criteria that members of the group have in common. Tags are key-value pairs.</p>
 *          <p>For more information about Resource Groups, see the <a href="https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html">AWS Resource Groups User
 *         Guide</a>.</p>
 *          <p>AWS Resource Groups uses a REST-compliant API that you can use to perform the following types of operations.</p>
 *          <ul>
 *             <li>
 *                <p>Create, Read, Update, and Delete (CRUD) operations on resource groups and resource query entities</p>
 *             </li>
 *             <li>
 *                <p>Applying, editing, and removing tags from resource groups</p>
 *             </li>
 *             <li>
 *                <p>Resolving resource group member ARNs so they can be returned as search results</p>
 *             </li>
 *             <li>
 *                <p>Getting data about resources that are members of a group</p>
 *             </li>
 *             <li>
 *                <p>Searching AWS resources based on a resource query</p>
 *             </li>
 *          </ul>
 */
export class ResourceGroupsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ResourceGroupsClientResolvedConfig
> {
  readonly config: ResourceGroupsClientResolvedConfig;

  constructor(configuration: ResourceGroupsClientConfig) {
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

  destroy(): void {}
}
