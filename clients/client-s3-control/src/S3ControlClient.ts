// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getHostPrefixDeduplicationPlugin,
  resolveS3ControlConfig,
  S3ControlInputConfig,
  S3ControlResolvedConfig,
} from "@aws-sdk/middleware-sdk-s3-control";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  StreamHasher as __StreamHasher,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";
import { Readable } from "stream";

import {
  defaultS3ControlHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociateAccessGrantsIdentityCenterCommandInput,
  AssociateAccessGrantsIdentityCenterCommandOutput,
} from "./commands/AssociateAccessGrantsIdentityCenterCommand";
import { CreateAccessGrantCommandInput, CreateAccessGrantCommandOutput } from "./commands/CreateAccessGrantCommand";
import {
  CreateAccessGrantsInstanceCommandInput,
  CreateAccessGrantsInstanceCommandOutput,
} from "./commands/CreateAccessGrantsInstanceCommand";
import {
  CreateAccessGrantsLocationCommandInput,
  CreateAccessGrantsLocationCommandOutput,
} from "./commands/CreateAccessGrantsLocationCommand";
import { CreateAccessPointCommandInput, CreateAccessPointCommandOutput } from "./commands/CreateAccessPointCommand";
import {
  CreateAccessPointForObjectLambdaCommandInput,
  CreateAccessPointForObjectLambdaCommandOutput,
} from "./commands/CreateAccessPointForObjectLambdaCommand";
import { CreateBucketCommandInput, CreateBucketCommandOutput } from "./commands/CreateBucketCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import {
  CreateMultiRegionAccessPointCommandInput,
  CreateMultiRegionAccessPointCommandOutput,
} from "./commands/CreateMultiRegionAccessPointCommand";
import {
  CreateStorageLensGroupCommandInput,
  CreateStorageLensGroupCommandOutput,
} from "./commands/CreateStorageLensGroupCommand";
import { DeleteAccessGrantCommandInput, DeleteAccessGrantCommandOutput } from "./commands/DeleteAccessGrantCommand";
import {
  DeleteAccessGrantsInstanceCommandInput,
  DeleteAccessGrantsInstanceCommandOutput,
} from "./commands/DeleteAccessGrantsInstanceCommand";
import {
  DeleteAccessGrantsInstanceResourcePolicyCommandInput,
  DeleteAccessGrantsInstanceResourcePolicyCommandOutput,
} from "./commands/DeleteAccessGrantsInstanceResourcePolicyCommand";
import {
  DeleteAccessGrantsLocationCommandInput,
  DeleteAccessGrantsLocationCommandOutput,
} from "./commands/DeleteAccessGrantsLocationCommand";
import { DeleteAccessPointCommandInput, DeleteAccessPointCommandOutput } from "./commands/DeleteAccessPointCommand";
import {
  DeleteAccessPointForObjectLambdaCommandInput,
  DeleteAccessPointForObjectLambdaCommandOutput,
} from "./commands/DeleteAccessPointForObjectLambdaCommand";
import {
  DeleteAccessPointPolicyCommandInput,
  DeleteAccessPointPolicyCommandOutput,
} from "./commands/DeleteAccessPointPolicyCommand";
import {
  DeleteAccessPointPolicyForObjectLambdaCommandInput,
  DeleteAccessPointPolicyForObjectLambdaCommandOutput,
} from "./commands/DeleteAccessPointPolicyForObjectLambdaCommand";
import {
  DeleteAccessPointScopeCommandInput,
  DeleteAccessPointScopeCommandOutput,
} from "./commands/DeleteAccessPointScopeCommand";
import { DeleteBucketCommandInput, DeleteBucketCommandOutput } from "./commands/DeleteBucketCommand";
import {
  DeleteBucketLifecycleConfigurationCommandInput,
  DeleteBucketLifecycleConfigurationCommandOutput,
} from "./commands/DeleteBucketLifecycleConfigurationCommand";
import { DeleteBucketPolicyCommandInput, DeleteBucketPolicyCommandOutput } from "./commands/DeleteBucketPolicyCommand";
import {
  DeleteBucketReplicationCommandInput,
  DeleteBucketReplicationCommandOutput,
} from "./commands/DeleteBucketReplicationCommand";
import {
  DeleteBucketTaggingCommandInput,
  DeleteBucketTaggingCommandOutput,
} from "./commands/DeleteBucketTaggingCommand";
import { DeleteJobTaggingCommandInput, DeleteJobTaggingCommandOutput } from "./commands/DeleteJobTaggingCommand";
import {
  DeleteMultiRegionAccessPointCommandInput,
  DeleteMultiRegionAccessPointCommandOutput,
} from "./commands/DeleteMultiRegionAccessPointCommand";
import {
  DeletePublicAccessBlockCommandInput,
  DeletePublicAccessBlockCommandOutput,
} from "./commands/DeletePublicAccessBlockCommand";
import {
  DeleteStorageLensConfigurationCommandInput,
  DeleteStorageLensConfigurationCommandOutput,
} from "./commands/DeleteStorageLensConfigurationCommand";
import {
  DeleteStorageLensConfigurationTaggingCommandInput,
  DeleteStorageLensConfigurationTaggingCommandOutput,
} from "./commands/DeleteStorageLensConfigurationTaggingCommand";
import {
  DeleteStorageLensGroupCommandInput,
  DeleteStorageLensGroupCommandOutput,
} from "./commands/DeleteStorageLensGroupCommand";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand";
import {
  DescribeMultiRegionAccessPointOperationCommandInput,
  DescribeMultiRegionAccessPointOperationCommandOutput,
} from "./commands/DescribeMultiRegionAccessPointOperationCommand";
import {
  DissociateAccessGrantsIdentityCenterCommandInput,
  DissociateAccessGrantsIdentityCenterCommandOutput,
} from "./commands/DissociateAccessGrantsIdentityCenterCommand";
import { GetAccessGrantCommandInput, GetAccessGrantCommandOutput } from "./commands/GetAccessGrantCommand";
import {
  GetAccessGrantsInstanceCommandInput,
  GetAccessGrantsInstanceCommandOutput,
} from "./commands/GetAccessGrantsInstanceCommand";
import {
  GetAccessGrantsInstanceForPrefixCommandInput,
  GetAccessGrantsInstanceForPrefixCommandOutput,
} from "./commands/GetAccessGrantsInstanceForPrefixCommand";
import {
  GetAccessGrantsInstanceResourcePolicyCommandInput,
  GetAccessGrantsInstanceResourcePolicyCommandOutput,
} from "./commands/GetAccessGrantsInstanceResourcePolicyCommand";
import {
  GetAccessGrantsLocationCommandInput,
  GetAccessGrantsLocationCommandOutput,
} from "./commands/GetAccessGrantsLocationCommand";
import { GetAccessPointCommandInput, GetAccessPointCommandOutput } from "./commands/GetAccessPointCommand";
import {
  GetAccessPointConfigurationForObjectLambdaCommandInput,
  GetAccessPointConfigurationForObjectLambdaCommandOutput,
} from "./commands/GetAccessPointConfigurationForObjectLambdaCommand";
import {
  GetAccessPointForObjectLambdaCommandInput,
  GetAccessPointForObjectLambdaCommandOutput,
} from "./commands/GetAccessPointForObjectLambdaCommand";
import {
  GetAccessPointPolicyCommandInput,
  GetAccessPointPolicyCommandOutput,
} from "./commands/GetAccessPointPolicyCommand";
import {
  GetAccessPointPolicyForObjectLambdaCommandInput,
  GetAccessPointPolicyForObjectLambdaCommandOutput,
} from "./commands/GetAccessPointPolicyForObjectLambdaCommand";
import {
  GetAccessPointPolicyStatusCommandInput,
  GetAccessPointPolicyStatusCommandOutput,
} from "./commands/GetAccessPointPolicyStatusCommand";
import {
  GetAccessPointPolicyStatusForObjectLambdaCommandInput,
  GetAccessPointPolicyStatusForObjectLambdaCommandOutput,
} from "./commands/GetAccessPointPolicyStatusForObjectLambdaCommand";
import {
  GetAccessPointScopeCommandInput,
  GetAccessPointScopeCommandOutput,
} from "./commands/GetAccessPointScopeCommand";
import { GetBucketCommandInput, GetBucketCommandOutput } from "./commands/GetBucketCommand";
import {
  GetBucketLifecycleConfigurationCommandInput,
  GetBucketLifecycleConfigurationCommandOutput,
} from "./commands/GetBucketLifecycleConfigurationCommand";
import { GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput } from "./commands/GetBucketPolicyCommand";
import {
  GetBucketReplicationCommandInput,
  GetBucketReplicationCommandOutput,
} from "./commands/GetBucketReplicationCommand";
import { GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput } from "./commands/GetBucketTaggingCommand";
import {
  GetBucketVersioningCommandInput,
  GetBucketVersioningCommandOutput,
} from "./commands/GetBucketVersioningCommand";
import { GetDataAccessCommandInput, GetDataAccessCommandOutput } from "./commands/GetDataAccessCommand";
import { GetJobTaggingCommandInput, GetJobTaggingCommandOutput } from "./commands/GetJobTaggingCommand";
import {
  GetMultiRegionAccessPointCommandInput,
  GetMultiRegionAccessPointCommandOutput,
} from "./commands/GetMultiRegionAccessPointCommand";
import {
  GetMultiRegionAccessPointPolicyCommandInput,
  GetMultiRegionAccessPointPolicyCommandOutput,
} from "./commands/GetMultiRegionAccessPointPolicyCommand";
import {
  GetMultiRegionAccessPointPolicyStatusCommandInput,
  GetMultiRegionAccessPointPolicyStatusCommandOutput,
} from "./commands/GetMultiRegionAccessPointPolicyStatusCommand";
import {
  GetMultiRegionAccessPointRoutesCommandInput,
  GetMultiRegionAccessPointRoutesCommandOutput,
} from "./commands/GetMultiRegionAccessPointRoutesCommand";
import {
  GetPublicAccessBlockCommandInput,
  GetPublicAccessBlockCommandOutput,
} from "./commands/GetPublicAccessBlockCommand";
import {
  GetStorageLensConfigurationCommandInput,
  GetStorageLensConfigurationCommandOutput,
} from "./commands/GetStorageLensConfigurationCommand";
import {
  GetStorageLensConfigurationTaggingCommandInput,
  GetStorageLensConfigurationTaggingCommandOutput,
} from "./commands/GetStorageLensConfigurationTaggingCommand";
import {
  GetStorageLensGroupCommandInput,
  GetStorageLensGroupCommandOutput,
} from "./commands/GetStorageLensGroupCommand";
import { ListAccessGrantsCommandInput, ListAccessGrantsCommandOutput } from "./commands/ListAccessGrantsCommand";
import {
  ListAccessGrantsInstancesCommandInput,
  ListAccessGrantsInstancesCommandOutput,
} from "./commands/ListAccessGrantsInstancesCommand";
import {
  ListAccessGrantsLocationsCommandInput,
  ListAccessGrantsLocationsCommandOutput,
} from "./commands/ListAccessGrantsLocationsCommand";
import { ListAccessPointsCommandInput, ListAccessPointsCommandOutput } from "./commands/ListAccessPointsCommand";
import {
  ListAccessPointsForDirectoryBucketsCommandInput,
  ListAccessPointsForDirectoryBucketsCommandOutput,
} from "./commands/ListAccessPointsForDirectoryBucketsCommand";
import {
  ListAccessPointsForObjectLambdaCommandInput,
  ListAccessPointsForObjectLambdaCommandOutput,
} from "./commands/ListAccessPointsForObjectLambdaCommand";
import {
  ListCallerAccessGrantsCommandInput,
  ListCallerAccessGrantsCommandOutput,
} from "./commands/ListCallerAccessGrantsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListMultiRegionAccessPointsCommandInput,
  ListMultiRegionAccessPointsCommandOutput,
} from "./commands/ListMultiRegionAccessPointsCommand";
import {
  ListRegionalBucketsCommandInput,
  ListRegionalBucketsCommandOutput,
} from "./commands/ListRegionalBucketsCommand";
import {
  ListStorageLensConfigurationsCommandInput,
  ListStorageLensConfigurationsCommandOutput,
} from "./commands/ListStorageLensConfigurationsCommand";
import {
  ListStorageLensGroupsCommandInput,
  ListStorageLensGroupsCommandOutput,
} from "./commands/ListStorageLensGroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutAccessGrantsInstanceResourcePolicyCommandInput,
  PutAccessGrantsInstanceResourcePolicyCommandOutput,
} from "./commands/PutAccessGrantsInstanceResourcePolicyCommand";
import {
  PutAccessPointConfigurationForObjectLambdaCommandInput,
  PutAccessPointConfigurationForObjectLambdaCommandOutput,
} from "./commands/PutAccessPointConfigurationForObjectLambdaCommand";
import {
  PutAccessPointPolicyCommandInput,
  PutAccessPointPolicyCommandOutput,
} from "./commands/PutAccessPointPolicyCommand";
import {
  PutAccessPointPolicyForObjectLambdaCommandInput,
  PutAccessPointPolicyForObjectLambdaCommandOutput,
} from "./commands/PutAccessPointPolicyForObjectLambdaCommand";
import {
  PutAccessPointScopeCommandInput,
  PutAccessPointScopeCommandOutput,
} from "./commands/PutAccessPointScopeCommand";
import {
  PutBucketLifecycleConfigurationCommandInput,
  PutBucketLifecycleConfigurationCommandOutput,
} from "./commands/PutBucketLifecycleConfigurationCommand";
import { PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput } from "./commands/PutBucketPolicyCommand";
import {
  PutBucketReplicationCommandInput,
  PutBucketReplicationCommandOutput,
} from "./commands/PutBucketReplicationCommand";
import { PutBucketTaggingCommandInput, PutBucketTaggingCommandOutput } from "./commands/PutBucketTaggingCommand";
import {
  PutBucketVersioningCommandInput,
  PutBucketVersioningCommandOutput,
} from "./commands/PutBucketVersioningCommand";
import { PutJobTaggingCommandInput, PutJobTaggingCommandOutput } from "./commands/PutJobTaggingCommand";
import {
  PutMultiRegionAccessPointPolicyCommandInput,
  PutMultiRegionAccessPointPolicyCommandOutput,
} from "./commands/PutMultiRegionAccessPointPolicyCommand";
import {
  PutPublicAccessBlockCommandInput,
  PutPublicAccessBlockCommandOutput,
} from "./commands/PutPublicAccessBlockCommand";
import {
  PutStorageLensConfigurationCommandInput,
  PutStorageLensConfigurationCommandOutput,
} from "./commands/PutStorageLensConfigurationCommand";
import {
  PutStorageLensConfigurationTaggingCommandInput,
  PutStorageLensConfigurationTaggingCommandOutput,
} from "./commands/PutStorageLensConfigurationTaggingCommand";
import {
  SubmitMultiRegionAccessPointRoutesCommandInput,
  SubmitMultiRegionAccessPointRoutesCommandOutput,
} from "./commands/SubmitMultiRegionAccessPointRoutesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAccessGrantsLocationCommandInput,
  UpdateAccessGrantsLocationCommandOutput,
} from "./commands/UpdateAccessGrantsLocationCommand";
import { UpdateJobPriorityCommandInput, UpdateJobPriorityCommandOutput } from "./commands/UpdateJobPriorityCommand";
import { UpdateJobStatusCommandInput, UpdateJobStatusCommandOutput } from "./commands/UpdateJobStatusCommand";
import {
  UpdateStorageLensGroupCommandInput,
  UpdateStorageLensGroupCommandOutput,
} from "./commands/UpdateStorageLensGroupCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AssociateAccessGrantsIdentityCenterCommandInput
  | CreateAccessGrantCommandInput
  | CreateAccessGrantsInstanceCommandInput
  | CreateAccessGrantsLocationCommandInput
  | CreateAccessPointCommandInput
  | CreateAccessPointForObjectLambdaCommandInput
  | CreateBucketCommandInput
  | CreateJobCommandInput
  | CreateMultiRegionAccessPointCommandInput
  | CreateStorageLensGroupCommandInput
  | DeleteAccessGrantCommandInput
  | DeleteAccessGrantsInstanceCommandInput
  | DeleteAccessGrantsInstanceResourcePolicyCommandInput
  | DeleteAccessGrantsLocationCommandInput
  | DeleteAccessPointCommandInput
  | DeleteAccessPointForObjectLambdaCommandInput
  | DeleteAccessPointPolicyCommandInput
  | DeleteAccessPointPolicyForObjectLambdaCommandInput
  | DeleteAccessPointScopeCommandInput
  | DeleteBucketCommandInput
  | DeleteBucketLifecycleConfigurationCommandInput
  | DeleteBucketPolicyCommandInput
  | DeleteBucketReplicationCommandInput
  | DeleteBucketTaggingCommandInput
  | DeleteJobTaggingCommandInput
  | DeleteMultiRegionAccessPointCommandInput
  | DeletePublicAccessBlockCommandInput
  | DeleteStorageLensConfigurationCommandInput
  | DeleteStorageLensConfigurationTaggingCommandInput
  | DeleteStorageLensGroupCommandInput
  | DescribeJobCommandInput
  | DescribeMultiRegionAccessPointOperationCommandInput
  | DissociateAccessGrantsIdentityCenterCommandInput
  | GetAccessGrantCommandInput
  | GetAccessGrantsInstanceCommandInput
  | GetAccessGrantsInstanceForPrefixCommandInput
  | GetAccessGrantsInstanceResourcePolicyCommandInput
  | GetAccessGrantsLocationCommandInput
  | GetAccessPointCommandInput
  | GetAccessPointConfigurationForObjectLambdaCommandInput
  | GetAccessPointForObjectLambdaCommandInput
  | GetAccessPointPolicyCommandInput
  | GetAccessPointPolicyForObjectLambdaCommandInput
  | GetAccessPointPolicyStatusCommandInput
  | GetAccessPointPolicyStatusForObjectLambdaCommandInput
  | GetAccessPointScopeCommandInput
  | GetBucketCommandInput
  | GetBucketLifecycleConfigurationCommandInput
  | GetBucketPolicyCommandInput
  | GetBucketReplicationCommandInput
  | GetBucketTaggingCommandInput
  | GetBucketVersioningCommandInput
  | GetDataAccessCommandInput
  | GetJobTaggingCommandInput
  | GetMultiRegionAccessPointCommandInput
  | GetMultiRegionAccessPointPolicyCommandInput
  | GetMultiRegionAccessPointPolicyStatusCommandInput
  | GetMultiRegionAccessPointRoutesCommandInput
  | GetPublicAccessBlockCommandInput
  | GetStorageLensConfigurationCommandInput
  | GetStorageLensConfigurationTaggingCommandInput
  | GetStorageLensGroupCommandInput
  | ListAccessGrantsCommandInput
  | ListAccessGrantsInstancesCommandInput
  | ListAccessGrantsLocationsCommandInput
  | ListAccessPointsCommandInput
  | ListAccessPointsForDirectoryBucketsCommandInput
  | ListAccessPointsForObjectLambdaCommandInput
  | ListCallerAccessGrantsCommandInput
  | ListJobsCommandInput
  | ListMultiRegionAccessPointsCommandInput
  | ListRegionalBucketsCommandInput
  | ListStorageLensConfigurationsCommandInput
  | ListStorageLensGroupsCommandInput
  | ListTagsForResourceCommandInput
  | PutAccessGrantsInstanceResourcePolicyCommandInput
  | PutAccessPointConfigurationForObjectLambdaCommandInput
  | PutAccessPointPolicyCommandInput
  | PutAccessPointPolicyForObjectLambdaCommandInput
  | PutAccessPointScopeCommandInput
  | PutBucketLifecycleConfigurationCommandInput
  | PutBucketPolicyCommandInput
  | PutBucketReplicationCommandInput
  | PutBucketTaggingCommandInput
  | PutBucketVersioningCommandInput
  | PutJobTaggingCommandInput
  | PutMultiRegionAccessPointPolicyCommandInput
  | PutPublicAccessBlockCommandInput
  | PutStorageLensConfigurationCommandInput
  | PutStorageLensConfigurationTaggingCommandInput
  | SubmitMultiRegionAccessPointRoutesCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAccessGrantsLocationCommandInput
  | UpdateJobPriorityCommandInput
  | UpdateJobStatusCommandInput
  | UpdateStorageLensGroupCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateAccessGrantsIdentityCenterCommandOutput
  | CreateAccessGrantCommandOutput
  | CreateAccessGrantsInstanceCommandOutput
  | CreateAccessGrantsLocationCommandOutput
  | CreateAccessPointCommandOutput
  | CreateAccessPointForObjectLambdaCommandOutput
  | CreateBucketCommandOutput
  | CreateJobCommandOutput
  | CreateMultiRegionAccessPointCommandOutput
  | CreateStorageLensGroupCommandOutput
  | DeleteAccessGrantCommandOutput
  | DeleteAccessGrantsInstanceCommandOutput
  | DeleteAccessGrantsInstanceResourcePolicyCommandOutput
  | DeleteAccessGrantsLocationCommandOutput
  | DeleteAccessPointCommandOutput
  | DeleteAccessPointForObjectLambdaCommandOutput
  | DeleteAccessPointPolicyCommandOutput
  | DeleteAccessPointPolicyForObjectLambdaCommandOutput
  | DeleteAccessPointScopeCommandOutput
  | DeleteBucketCommandOutput
  | DeleteBucketLifecycleConfigurationCommandOutput
  | DeleteBucketPolicyCommandOutput
  | DeleteBucketReplicationCommandOutput
  | DeleteBucketTaggingCommandOutput
  | DeleteJobTaggingCommandOutput
  | DeleteMultiRegionAccessPointCommandOutput
  | DeletePublicAccessBlockCommandOutput
  | DeleteStorageLensConfigurationCommandOutput
  | DeleteStorageLensConfigurationTaggingCommandOutput
  | DeleteStorageLensGroupCommandOutput
  | DescribeJobCommandOutput
  | DescribeMultiRegionAccessPointOperationCommandOutput
  | DissociateAccessGrantsIdentityCenterCommandOutput
  | GetAccessGrantCommandOutput
  | GetAccessGrantsInstanceCommandOutput
  | GetAccessGrantsInstanceForPrefixCommandOutput
  | GetAccessGrantsInstanceResourcePolicyCommandOutput
  | GetAccessGrantsLocationCommandOutput
  | GetAccessPointCommandOutput
  | GetAccessPointConfigurationForObjectLambdaCommandOutput
  | GetAccessPointForObjectLambdaCommandOutput
  | GetAccessPointPolicyCommandOutput
  | GetAccessPointPolicyForObjectLambdaCommandOutput
  | GetAccessPointPolicyStatusCommandOutput
  | GetAccessPointPolicyStatusForObjectLambdaCommandOutput
  | GetAccessPointScopeCommandOutput
  | GetBucketCommandOutput
  | GetBucketLifecycleConfigurationCommandOutput
  | GetBucketPolicyCommandOutput
  | GetBucketReplicationCommandOutput
  | GetBucketTaggingCommandOutput
  | GetBucketVersioningCommandOutput
  | GetDataAccessCommandOutput
  | GetJobTaggingCommandOutput
  | GetMultiRegionAccessPointCommandOutput
  | GetMultiRegionAccessPointPolicyCommandOutput
  | GetMultiRegionAccessPointPolicyStatusCommandOutput
  | GetMultiRegionAccessPointRoutesCommandOutput
  | GetPublicAccessBlockCommandOutput
  | GetStorageLensConfigurationCommandOutput
  | GetStorageLensConfigurationTaggingCommandOutput
  | GetStorageLensGroupCommandOutput
  | ListAccessGrantsCommandOutput
  | ListAccessGrantsInstancesCommandOutput
  | ListAccessGrantsLocationsCommandOutput
  | ListAccessPointsCommandOutput
  | ListAccessPointsForDirectoryBucketsCommandOutput
  | ListAccessPointsForObjectLambdaCommandOutput
  | ListCallerAccessGrantsCommandOutput
  | ListJobsCommandOutput
  | ListMultiRegionAccessPointsCommandOutput
  | ListRegionalBucketsCommandOutput
  | ListStorageLensConfigurationsCommandOutput
  | ListStorageLensGroupsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutAccessGrantsInstanceResourcePolicyCommandOutput
  | PutAccessPointConfigurationForObjectLambdaCommandOutput
  | PutAccessPointPolicyCommandOutput
  | PutAccessPointPolicyForObjectLambdaCommandOutput
  | PutAccessPointScopeCommandOutput
  | PutBucketLifecycleConfigurationCommandOutput
  | PutBucketPolicyCommandOutput
  | PutBucketReplicationCommandOutput
  | PutBucketTaggingCommandOutput
  | PutBucketVersioningCommandOutput
  | PutJobTaggingCommandOutput
  | PutMultiRegionAccessPointPolicyCommandOutput
  | PutPublicAccessBlockCommandOutput
  | PutStorageLensConfigurationCommandOutput
  | PutStorageLensConfigurationTaggingCommandOutput
  | SubmitMultiRegionAccessPointRoutesCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccessGrantsLocationCommandOutput
  | UpdateJobPriorityCommandOutput
  | UpdateJobStatusCommandOutput
  | UpdateStorageLensGroupCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

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
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * A function that, given a hash constructor and a stream, calculates the
   * hash of the streamed value.
   * @internal
   */
  streamHasher?: __StreamHasher<Readable> | __StreamHasher<Blob>;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
   * that computes MD5 hashes.
   * @internal
   */
  md5?: __ChecksumConstructor | __HashConstructor;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type S3ControlClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  S3ControlInputConfig &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of S3ControlClient class constructor that set the region, credentials and other options.
 */
export interface S3ControlClientConfig extends S3ControlClientConfigType {}

/**
 * @public
 */
export type S3ControlClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  S3ControlResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of S3ControlClient class. This is resolved and normalized from the {@link S3ControlClientConfig | constructor configuration interface}.
 */
export interface S3ControlClientResolvedConfig extends S3ControlClientResolvedConfigType {}

/**
 * <p> Amazon Web Services S3 Control provides access to Amazon S3 control plane actions. </p>
 * @public
 */
export class S3ControlClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  S3ControlClientResolvedConfig
> {
  /**
   * The resolved configuration of S3ControlClient class. This is resolved and normalized from the {@link S3ControlClientConfig | constructor configuration interface}.
   */
  readonly config: S3ControlClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<S3ControlClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveS3ControlConfig(_config_6);
    const _config_8 = resolveHttpAuthSchemeConfig(_config_7);
    const _config_9 = resolveRuntimeExtensions(_config_8, configuration?.extensions || []);
    this.config = _config_9;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getHostPrefixDeduplicationPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultS3ControlHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: S3ControlClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
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
