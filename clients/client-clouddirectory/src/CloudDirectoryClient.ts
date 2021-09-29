import { AddFacetToObjectCommandInput, AddFacetToObjectCommandOutput } from "./commands/AddFacetToObjectCommand";
import { ApplySchemaCommandInput, ApplySchemaCommandOutput } from "./commands/ApplySchemaCommand";
import { AttachObjectCommandInput, AttachObjectCommandOutput } from "./commands/AttachObjectCommand";
import { AttachPolicyCommandInput, AttachPolicyCommandOutput } from "./commands/AttachPolicyCommand";
import { AttachToIndexCommandInput, AttachToIndexCommandOutput } from "./commands/AttachToIndexCommand";
import { AttachTypedLinkCommandInput, AttachTypedLinkCommandOutput } from "./commands/AttachTypedLinkCommand";
import { BatchReadCommandInput, BatchReadCommandOutput } from "./commands/BatchReadCommand";
import { BatchWriteCommandInput, BatchWriteCommandOutput } from "./commands/BatchWriteCommand";
import { CreateDirectoryCommandInput, CreateDirectoryCommandOutput } from "./commands/CreateDirectoryCommand";
import { CreateFacetCommandInput, CreateFacetCommandOutput } from "./commands/CreateFacetCommand";
import { CreateIndexCommandInput, CreateIndexCommandOutput } from "./commands/CreateIndexCommand";
import { CreateObjectCommandInput, CreateObjectCommandOutput } from "./commands/CreateObjectCommand";
import { CreateSchemaCommandInput, CreateSchemaCommandOutput } from "./commands/CreateSchemaCommand";
import {
  CreateTypedLinkFacetCommandInput,
  CreateTypedLinkFacetCommandOutput,
} from "./commands/CreateTypedLinkFacetCommand";
import { DeleteDirectoryCommandInput, DeleteDirectoryCommandOutput } from "./commands/DeleteDirectoryCommand";
import { DeleteFacetCommandInput, DeleteFacetCommandOutput } from "./commands/DeleteFacetCommand";
import { DeleteObjectCommandInput, DeleteObjectCommandOutput } from "./commands/DeleteObjectCommand";
import { DeleteSchemaCommandInput, DeleteSchemaCommandOutput } from "./commands/DeleteSchemaCommand";
import {
  DeleteTypedLinkFacetCommandInput,
  DeleteTypedLinkFacetCommandOutput,
} from "./commands/DeleteTypedLinkFacetCommand";
import { DetachFromIndexCommandInput, DetachFromIndexCommandOutput } from "./commands/DetachFromIndexCommand";
import { DetachObjectCommandInput, DetachObjectCommandOutput } from "./commands/DetachObjectCommand";
import { DetachPolicyCommandInput, DetachPolicyCommandOutput } from "./commands/DetachPolicyCommand";
import { DetachTypedLinkCommandInput, DetachTypedLinkCommandOutput } from "./commands/DetachTypedLinkCommand";
import { DisableDirectoryCommandInput, DisableDirectoryCommandOutput } from "./commands/DisableDirectoryCommand";
import { EnableDirectoryCommandInput, EnableDirectoryCommandOutput } from "./commands/EnableDirectoryCommand";
import {
  GetAppliedSchemaVersionCommandInput,
  GetAppliedSchemaVersionCommandOutput,
} from "./commands/GetAppliedSchemaVersionCommand";
import { GetDirectoryCommandInput, GetDirectoryCommandOutput } from "./commands/GetDirectoryCommand";
import { GetFacetCommandInput, GetFacetCommandOutput } from "./commands/GetFacetCommand";
import { GetLinkAttributesCommandInput, GetLinkAttributesCommandOutput } from "./commands/GetLinkAttributesCommand";
import {
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput,
} from "./commands/GetObjectAttributesCommand";
import {
  GetObjectInformationCommandInput,
  GetObjectInformationCommandOutput,
} from "./commands/GetObjectInformationCommand";
import { GetSchemaAsJsonCommandInput, GetSchemaAsJsonCommandOutput } from "./commands/GetSchemaAsJsonCommand";
import {
  GetTypedLinkFacetInformationCommandInput,
  GetTypedLinkFacetInformationCommandOutput,
} from "./commands/GetTypedLinkFacetInformationCommand";
import {
  ListAppliedSchemaArnsCommandInput,
  ListAppliedSchemaArnsCommandOutput,
} from "./commands/ListAppliedSchemaArnsCommand";
import {
  ListAttachedIndicesCommandInput,
  ListAttachedIndicesCommandOutput,
} from "./commands/ListAttachedIndicesCommand";
import {
  ListDevelopmentSchemaArnsCommandInput,
  ListDevelopmentSchemaArnsCommandOutput,
} from "./commands/ListDevelopmentSchemaArnsCommand";
import { ListDirectoriesCommandInput, ListDirectoriesCommandOutput } from "./commands/ListDirectoriesCommand";
import {
  ListFacetAttributesCommandInput,
  ListFacetAttributesCommandOutput,
} from "./commands/ListFacetAttributesCommand";
import { ListFacetNamesCommandInput, ListFacetNamesCommandOutput } from "./commands/ListFacetNamesCommand";
import {
  ListIncomingTypedLinksCommandInput,
  ListIncomingTypedLinksCommandOutput,
} from "./commands/ListIncomingTypedLinksCommand";
import { ListIndexCommandInput, ListIndexCommandOutput } from "./commands/ListIndexCommand";
import {
  ListManagedSchemaArnsCommandInput,
  ListManagedSchemaArnsCommandOutput,
} from "./commands/ListManagedSchemaArnsCommand";
import {
  ListObjectAttributesCommandInput,
  ListObjectAttributesCommandOutput,
} from "./commands/ListObjectAttributesCommand";
import { ListObjectChildrenCommandInput, ListObjectChildrenCommandOutput } from "./commands/ListObjectChildrenCommand";
import {
  ListObjectParentPathsCommandInput,
  ListObjectParentPathsCommandOutput,
} from "./commands/ListObjectParentPathsCommand";
import { ListObjectParentsCommandInput, ListObjectParentsCommandOutput } from "./commands/ListObjectParentsCommand";
import { ListObjectPoliciesCommandInput, ListObjectPoliciesCommandOutput } from "./commands/ListObjectPoliciesCommand";
import {
  ListOutgoingTypedLinksCommandInput,
  ListOutgoingTypedLinksCommandOutput,
} from "./commands/ListOutgoingTypedLinksCommand";
import {
  ListPolicyAttachmentsCommandInput,
  ListPolicyAttachmentsCommandOutput,
} from "./commands/ListPolicyAttachmentsCommand";
import {
  ListPublishedSchemaArnsCommandInput,
  ListPublishedSchemaArnsCommandOutput,
} from "./commands/ListPublishedSchemaArnsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTypedLinkFacetAttributesCommandInput,
  ListTypedLinkFacetAttributesCommandOutput,
} from "./commands/ListTypedLinkFacetAttributesCommand";
import {
  ListTypedLinkFacetNamesCommandInput,
  ListTypedLinkFacetNamesCommandOutput,
} from "./commands/ListTypedLinkFacetNamesCommand";
import { LookupPolicyCommandInput, LookupPolicyCommandOutput } from "./commands/LookupPolicyCommand";
import { PublishSchemaCommandInput, PublishSchemaCommandOutput } from "./commands/PublishSchemaCommand";
import { PutSchemaFromJsonCommandInput, PutSchemaFromJsonCommandOutput } from "./commands/PutSchemaFromJsonCommand";
import {
  RemoveFacetFromObjectCommandInput,
  RemoveFacetFromObjectCommandOutput,
} from "./commands/RemoveFacetFromObjectCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateFacetCommandInput, UpdateFacetCommandOutput } from "./commands/UpdateFacetCommand";
import {
  UpdateLinkAttributesCommandInput,
  UpdateLinkAttributesCommandOutput,
} from "./commands/UpdateLinkAttributesCommand";
import {
  UpdateObjectAttributesCommandInput,
  UpdateObjectAttributesCommandOutput,
} from "./commands/UpdateObjectAttributesCommand";
import { UpdateSchemaCommandInput, UpdateSchemaCommandOutput } from "./commands/UpdateSchemaCommand";
import {
  UpdateTypedLinkFacetCommandInput,
  UpdateTypedLinkFacetCommandOutput,
} from "./commands/UpdateTypedLinkFacetCommand";
import {
  UpgradeAppliedSchemaCommandInput,
  UpgradeAppliedSchemaCommandOutput,
} from "./commands/UpgradeAppliedSchemaCommand";
import {
  UpgradePublishedSchemaCommandInput,
  UpgradePublishedSchemaCommandOutput,
} from "./commands/UpgradePublishedSchemaCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
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
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
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
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AddFacetToObjectCommandInput
  | ApplySchemaCommandInput
  | AttachObjectCommandInput
  | AttachPolicyCommandInput
  | AttachToIndexCommandInput
  | AttachTypedLinkCommandInput
  | BatchReadCommandInput
  | BatchWriteCommandInput
  | CreateDirectoryCommandInput
  | CreateFacetCommandInput
  | CreateIndexCommandInput
  | CreateObjectCommandInput
  | CreateSchemaCommandInput
  | CreateTypedLinkFacetCommandInput
  | DeleteDirectoryCommandInput
  | DeleteFacetCommandInput
  | DeleteObjectCommandInput
  | DeleteSchemaCommandInput
  | DeleteTypedLinkFacetCommandInput
  | DetachFromIndexCommandInput
  | DetachObjectCommandInput
  | DetachPolicyCommandInput
  | DetachTypedLinkCommandInput
  | DisableDirectoryCommandInput
  | EnableDirectoryCommandInput
  | GetAppliedSchemaVersionCommandInput
  | GetDirectoryCommandInput
  | GetFacetCommandInput
  | GetLinkAttributesCommandInput
  | GetObjectAttributesCommandInput
  | GetObjectInformationCommandInput
  | GetSchemaAsJsonCommandInput
  | GetTypedLinkFacetInformationCommandInput
  | ListAppliedSchemaArnsCommandInput
  | ListAttachedIndicesCommandInput
  | ListDevelopmentSchemaArnsCommandInput
  | ListDirectoriesCommandInput
  | ListFacetAttributesCommandInput
  | ListFacetNamesCommandInput
  | ListIncomingTypedLinksCommandInput
  | ListIndexCommandInput
  | ListManagedSchemaArnsCommandInput
  | ListObjectAttributesCommandInput
  | ListObjectChildrenCommandInput
  | ListObjectParentPathsCommandInput
  | ListObjectParentsCommandInput
  | ListObjectPoliciesCommandInput
  | ListOutgoingTypedLinksCommandInput
  | ListPolicyAttachmentsCommandInput
  | ListPublishedSchemaArnsCommandInput
  | ListTagsForResourceCommandInput
  | ListTypedLinkFacetAttributesCommandInput
  | ListTypedLinkFacetNamesCommandInput
  | LookupPolicyCommandInput
  | PublishSchemaCommandInput
  | PutSchemaFromJsonCommandInput
  | RemoveFacetFromObjectCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateFacetCommandInput
  | UpdateLinkAttributesCommandInput
  | UpdateObjectAttributesCommandInput
  | UpdateSchemaCommandInput
  | UpdateTypedLinkFacetCommandInput
  | UpgradeAppliedSchemaCommandInput
  | UpgradePublishedSchemaCommandInput;

export type ServiceOutputTypes =
  | AddFacetToObjectCommandOutput
  | ApplySchemaCommandOutput
  | AttachObjectCommandOutput
  | AttachPolicyCommandOutput
  | AttachToIndexCommandOutput
  | AttachTypedLinkCommandOutput
  | BatchReadCommandOutput
  | BatchWriteCommandOutput
  | CreateDirectoryCommandOutput
  | CreateFacetCommandOutput
  | CreateIndexCommandOutput
  | CreateObjectCommandOutput
  | CreateSchemaCommandOutput
  | CreateTypedLinkFacetCommandOutput
  | DeleteDirectoryCommandOutput
  | DeleteFacetCommandOutput
  | DeleteObjectCommandOutput
  | DeleteSchemaCommandOutput
  | DeleteTypedLinkFacetCommandOutput
  | DetachFromIndexCommandOutput
  | DetachObjectCommandOutput
  | DetachPolicyCommandOutput
  | DetachTypedLinkCommandOutput
  | DisableDirectoryCommandOutput
  | EnableDirectoryCommandOutput
  | GetAppliedSchemaVersionCommandOutput
  | GetDirectoryCommandOutput
  | GetFacetCommandOutput
  | GetLinkAttributesCommandOutput
  | GetObjectAttributesCommandOutput
  | GetObjectInformationCommandOutput
  | GetSchemaAsJsonCommandOutput
  | GetTypedLinkFacetInformationCommandOutput
  | ListAppliedSchemaArnsCommandOutput
  | ListAttachedIndicesCommandOutput
  | ListDevelopmentSchemaArnsCommandOutput
  | ListDirectoriesCommandOutput
  | ListFacetAttributesCommandOutput
  | ListFacetNamesCommandOutput
  | ListIncomingTypedLinksCommandOutput
  | ListIndexCommandOutput
  | ListManagedSchemaArnsCommandOutput
  | ListObjectAttributesCommandOutput
  | ListObjectChildrenCommandOutput
  | ListObjectParentPathsCommandOutput
  | ListObjectParentsCommandOutput
  | ListObjectPoliciesCommandOutput
  | ListOutgoingTypedLinksCommandOutput
  | ListPolicyAttachmentsCommandOutput
  | ListPublishedSchemaArnsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTypedLinkFacetAttributesCommandOutput
  | ListTypedLinkFacetNamesCommandOutput
  | LookupPolicyCommandOutput
  | PublishSchemaCommandOutput
  | PutSchemaFromJsonCommandOutput
  | RemoveFacetFromObjectCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateFacetCommandOutput
  | UpdateLinkAttributesCommandOutput
  | UpdateObjectAttributesCommandOutput
  | UpdateSchemaCommandOutput
  | UpdateTypedLinkFacetCommandOutput
  | UpgradeAppliedSchemaCommandOutput
  | UpgradePublishedSchemaCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type CloudDirectoryClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of CloudDirectoryClient class constructor that set the region, credentials and other options.
 */
export interface CloudDirectoryClientConfig extends CloudDirectoryClientConfigType {}

type CloudDirectoryClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of CloudDirectoryClient class. This is resolved and normalized from the {@link CloudDirectoryClientConfig | constructor configuration interface}.
 */
export interface CloudDirectoryClientResolvedConfig extends CloudDirectoryClientResolvedConfigType {}

/**
 * <fullname>Amazon Cloud Directory</fullname>
 *          <p>Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the
 *       development and management of cloud-scale web, mobile, and IoT applications. This guide
 *       describes the Cloud Directory operations that you can call programmatically and includes
 *       detailed information on data types and errors. For information about Cloud Directory features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory
 *         Service</a> and the <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/what_is_cloud_directory.html">Amazon Cloud Directory Developer Guide</a>.</p>
 */
export class CloudDirectoryClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudDirectoryClientResolvedConfig
> {
  /**
   * The resolved configuration of CloudDirectoryClient class. This is resolved and normalized from the {@link CloudDirectoryClientConfig | constructor configuration interface}.
   */
  readonly config: CloudDirectoryClientResolvedConfig;

  constructor(configuration: CloudDirectoryClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
