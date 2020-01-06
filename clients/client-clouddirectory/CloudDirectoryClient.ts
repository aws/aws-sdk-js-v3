import {
  AddFacetToObjectRequest,
  AddFacetToObjectResponse,
  ApplySchemaRequest,
  ApplySchemaResponse,
  AttachObjectRequest,
  AttachObjectResponse,
  AttachPolicyRequest,
  AttachPolicyResponse,
  AttachToIndexRequest,
  AttachToIndexResponse,
  AttachTypedLinkRequest,
  AttachTypedLinkResponse,
  BatchReadRequest,
  BatchReadResponse,
  BatchWriteRequest,
  BatchWriteResponse,
  CreateDirectoryRequest,
  CreateDirectoryResponse,
  CreateFacetRequest,
  CreateFacetResponse,
  CreateIndexRequest,
  CreateIndexResponse,
  CreateObjectRequest,
  CreateObjectResponse,
  CreateSchemaRequest,
  CreateSchemaResponse,
  CreateTypedLinkFacetRequest,
  CreateTypedLinkFacetResponse,
  DeleteDirectoryRequest,
  DeleteDirectoryResponse,
  DeleteFacetRequest,
  DeleteFacetResponse,
  DeleteObjectRequest,
  DeleteObjectResponse,
  DeleteSchemaRequest,
  DeleteSchemaResponse,
  DeleteTypedLinkFacetRequest,
  DeleteTypedLinkFacetResponse,
  DetachFromIndexRequest,
  DetachFromIndexResponse,
  DetachObjectRequest,
  DetachObjectResponse,
  DetachPolicyRequest,
  DetachPolicyResponse,
  DetachTypedLinkRequest,
  DisableDirectoryRequest,
  DisableDirectoryResponse,
  EnableDirectoryRequest,
  EnableDirectoryResponse,
  GetAppliedSchemaVersionRequest,
  GetAppliedSchemaVersionResponse,
  GetDirectoryRequest,
  GetDirectoryResponse,
  GetFacetRequest,
  GetFacetResponse,
  GetLinkAttributesRequest,
  GetLinkAttributesResponse,
  GetObjectAttributesRequest,
  GetObjectAttributesResponse,
  GetObjectInformationRequest,
  GetObjectInformationResponse,
  GetSchemaAsJsonRequest,
  GetSchemaAsJsonResponse,
  GetTypedLinkFacetInformationRequest,
  GetTypedLinkFacetInformationResponse,
  ListAppliedSchemaArnsRequest,
  ListAppliedSchemaArnsResponse,
  ListAttachedIndicesRequest,
  ListAttachedIndicesResponse,
  ListDevelopmentSchemaArnsRequest,
  ListDevelopmentSchemaArnsResponse,
  ListDirectoriesRequest,
  ListDirectoriesResponse,
  ListFacetAttributesRequest,
  ListFacetAttributesResponse,
  ListFacetNamesRequest,
  ListFacetNamesResponse,
  ListIncomingTypedLinksRequest,
  ListIncomingTypedLinksResponse,
  ListIndexRequest,
  ListIndexResponse,
  ListManagedSchemaArnsRequest,
  ListManagedSchemaArnsResponse,
  ListObjectAttributesRequest,
  ListObjectAttributesResponse,
  ListObjectChildrenRequest,
  ListObjectChildrenResponse,
  ListObjectParentPathsRequest,
  ListObjectParentPathsResponse,
  ListObjectParentsRequest,
  ListObjectParentsResponse,
  ListObjectPoliciesRequest,
  ListObjectPoliciesResponse,
  ListOutgoingTypedLinksRequest,
  ListOutgoingTypedLinksResponse,
  ListPolicyAttachmentsRequest,
  ListPolicyAttachmentsResponse,
  ListPublishedSchemaArnsRequest,
  ListPublishedSchemaArnsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTypedLinkFacetAttributesRequest,
  ListTypedLinkFacetAttributesResponse,
  ListTypedLinkFacetNamesRequest,
  ListTypedLinkFacetNamesResponse,
  LookupPolicyRequest,
  LookupPolicyResponse,
  PublishSchemaRequest,
  PublishSchemaResponse,
  PutSchemaFromJsonRequest,
  PutSchemaFromJsonResponse,
  RemoveFacetFromObjectRequest,
  RemoveFacetFromObjectResponse,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateFacetRequest,
  UpdateFacetResponse,
  UpdateLinkAttributesRequest,
  UpdateLinkAttributesResponse,
  UpdateObjectAttributesRequest,
  UpdateObjectAttributesResponse,
  UpdateSchemaRequest,
  UpdateSchemaResponse,
  UpdateTypedLinkFacetRequest,
  UpdateTypedLinkFacetResponse,
  UpgradeAppliedSchemaRequest,
  UpgradeAppliedSchemaResponse,
  UpgradePublishedSchemaRequest,
  UpgradePublishedSchemaResponse
} from "./models/index";
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
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AddFacetToObjectRequest
  | ApplySchemaRequest
  | AttachObjectRequest
  | AttachPolicyRequest
  | AttachToIndexRequest
  | AttachTypedLinkRequest
  | BatchReadRequest
  | BatchWriteRequest
  | CreateDirectoryRequest
  | CreateFacetRequest
  | CreateIndexRequest
  | CreateObjectRequest
  | CreateSchemaRequest
  | CreateTypedLinkFacetRequest
  | DeleteDirectoryRequest
  | DeleteFacetRequest
  | DeleteObjectRequest
  | DeleteSchemaRequest
  | DeleteTypedLinkFacetRequest
  | DetachFromIndexRequest
  | DetachObjectRequest
  | DetachPolicyRequest
  | DetachTypedLinkRequest
  | DisableDirectoryRequest
  | EnableDirectoryRequest
  | GetAppliedSchemaVersionRequest
  | GetDirectoryRequest
  | GetFacetRequest
  | GetLinkAttributesRequest
  | GetObjectAttributesRequest
  | GetObjectInformationRequest
  | GetSchemaAsJsonRequest
  | GetTypedLinkFacetInformationRequest
  | ListAppliedSchemaArnsRequest
  | ListAttachedIndicesRequest
  | ListDevelopmentSchemaArnsRequest
  | ListDirectoriesRequest
  | ListFacetAttributesRequest
  | ListFacetNamesRequest
  | ListIncomingTypedLinksRequest
  | ListIndexRequest
  | ListManagedSchemaArnsRequest
  | ListObjectAttributesRequest
  | ListObjectChildrenRequest
  | ListObjectParentPathsRequest
  | ListObjectParentsRequest
  | ListObjectPoliciesRequest
  | ListOutgoingTypedLinksRequest
  | ListPolicyAttachmentsRequest
  | ListPublishedSchemaArnsRequest
  | ListTagsForResourceRequest
  | ListTypedLinkFacetAttributesRequest
  | ListTypedLinkFacetNamesRequest
  | LookupPolicyRequest
  | PublishSchemaRequest
  | PutSchemaFromJsonRequest
  | RemoveFacetFromObjectRequest
  | TagResourceRequest
  | UntagResourceRequest
  | UpdateFacetRequest
  | UpdateLinkAttributesRequest
  | UpdateObjectAttributesRequest
  | UpdateSchemaRequest
  | UpdateTypedLinkFacetRequest
  | UpgradeAppliedSchemaRequest
  | UpgradePublishedSchemaRequest;

export type ServiceOutputTypes =
  | __MetadataBearer
  | AddFacetToObjectResponse
  | ApplySchemaResponse
  | AttachObjectResponse
  | AttachPolicyResponse
  | AttachToIndexResponse
  | AttachTypedLinkResponse
  | BatchReadResponse
  | BatchWriteResponse
  | CreateDirectoryResponse
  | CreateFacetResponse
  | CreateIndexResponse
  | CreateObjectResponse
  | CreateSchemaResponse
  | CreateTypedLinkFacetResponse
  | DeleteDirectoryResponse
  | DeleteFacetResponse
  | DeleteObjectResponse
  | DeleteSchemaResponse
  | DeleteTypedLinkFacetResponse
  | DetachFromIndexResponse
  | DetachObjectResponse
  | DetachPolicyResponse
  | DisableDirectoryResponse
  | EnableDirectoryResponse
  | GetAppliedSchemaVersionResponse
  | GetDirectoryResponse
  | GetFacetResponse
  | GetLinkAttributesResponse
  | GetObjectAttributesResponse
  | GetObjectInformationResponse
  | GetSchemaAsJsonResponse
  | GetTypedLinkFacetInformationResponse
  | ListAppliedSchemaArnsResponse
  | ListAttachedIndicesResponse
  | ListDevelopmentSchemaArnsResponse
  | ListDirectoriesResponse
  | ListFacetAttributesResponse
  | ListFacetNamesResponse
  | ListIncomingTypedLinksResponse
  | ListIndexResponse
  | ListManagedSchemaArnsResponse
  | ListObjectAttributesResponse
  | ListObjectChildrenResponse
  | ListObjectParentPathsResponse
  | ListObjectParentsResponse
  | ListObjectPoliciesResponse
  | ListOutgoingTypedLinksResponse
  | ListPolicyAttachmentsResponse
  | ListPublishedSchemaArnsResponse
  | ListTagsForResourceResponse
  | ListTypedLinkFacetAttributesResponse
  | ListTypedLinkFacetNamesResponse
  | LookupPolicyResponse
  | PublishSchemaResponse
  | PutSchemaFromJsonResponse
  | RemoveFacetFromObjectResponse
  | TagResourceResponse
  | UntagResourceResponse
  | UpdateFacetResponse
  | UpdateLinkAttributesResponse
  | UpdateObjectAttributesResponse
  | UpdateSchemaResponse
  | UpdateTypedLinkFacetResponse
  | UpgradeAppliedSchemaResponse
  | UpgradePublishedSchemaResponse;

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

export type CloudDirectoryClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type CloudDirectoryClientResolvedConfig = __SmithyResolvedConfiguration<
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
 *
 *          <fullname>Amazon Cloud Directory</fullname>
 *          <p>Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the
 *       development and management of cloud-scale web, mobile, and IoT applications. This guide
 *       describes the Cloud Directory operations that you can call programmatically and includes
 *       detailed information on data types and errors. For information about Cloud Directory features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory
 *         Service</a> and the <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/what_is_cloud_directory.html">Amazon Cloud Directory Developer Guide</a>.</p>
 *
 */
export class CloudDirectoryClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudDirectoryClientResolvedConfig
> {
  readonly config: CloudDirectoryClientResolvedConfig;

  constructor(configuration: CloudDirectoryClientConfig) {
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
