import {
  AbortDocumentVersionUploadCommandInput,
  AbortDocumentVersionUploadCommandOutput,
} from "./commands/AbortDocumentVersionUploadCommand";
import { ActivateUserCommandInput, ActivateUserCommandOutput } from "./commands/ActivateUserCommand";
import {
  AddResourcePermissionsCommandInput,
  AddResourcePermissionsCommandOutput,
} from "./commands/AddResourcePermissionsCommand";
import { CreateCommentCommandInput, CreateCommentCommandOutput } from "./commands/CreateCommentCommand";
import {
  CreateCustomMetadataCommandInput,
  CreateCustomMetadataCommandOutput,
} from "./commands/CreateCustomMetadataCommand";
import { CreateFolderCommandInput, CreateFolderCommandOutput } from "./commands/CreateFolderCommand";
import { CreateLabelsCommandInput, CreateLabelsCommandOutput } from "./commands/CreateLabelsCommand";
import {
  CreateNotificationSubscriptionCommandInput,
  CreateNotificationSubscriptionCommandOutput,
} from "./commands/CreateNotificationSubscriptionCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { DeactivateUserCommandInput, DeactivateUserCommandOutput } from "./commands/DeactivateUserCommand";
import { DeleteCommentCommandInput, DeleteCommentCommandOutput } from "./commands/DeleteCommentCommand";
import {
  DeleteCustomMetadataCommandInput,
  DeleteCustomMetadataCommandOutput,
} from "./commands/DeleteCustomMetadataCommand";
import { DeleteDocumentCommandInput, DeleteDocumentCommandOutput } from "./commands/DeleteDocumentCommand";
import { DeleteFolderCommandInput, DeleteFolderCommandOutput } from "./commands/DeleteFolderCommand";
import {
  DeleteFolderContentsCommandInput,
  DeleteFolderContentsCommandOutput,
} from "./commands/DeleteFolderContentsCommand";
import { DeleteLabelsCommandInput, DeleteLabelsCommandOutput } from "./commands/DeleteLabelsCommand";
import {
  DeleteNotificationSubscriptionCommandInput,
  DeleteNotificationSubscriptionCommandOutput,
} from "./commands/DeleteNotificationSubscriptionCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import { DescribeActivitiesCommandInput, DescribeActivitiesCommandOutput } from "./commands/DescribeActivitiesCommand";
import { DescribeCommentsCommandInput, DescribeCommentsCommandOutput } from "./commands/DescribeCommentsCommand";
import {
  DescribeDocumentVersionsCommandInput,
  DescribeDocumentVersionsCommandOutput,
} from "./commands/DescribeDocumentVersionsCommand";
import {
  DescribeFolderContentsCommandInput,
  DescribeFolderContentsCommandOutput,
} from "./commands/DescribeFolderContentsCommand";
import { DescribeGroupsCommandInput, DescribeGroupsCommandOutput } from "./commands/DescribeGroupsCommand";
import {
  DescribeNotificationSubscriptionsCommandInput,
  DescribeNotificationSubscriptionsCommandOutput,
} from "./commands/DescribeNotificationSubscriptionsCommand";
import {
  DescribeResourcePermissionsCommandInput,
  DescribeResourcePermissionsCommandOutput,
} from "./commands/DescribeResourcePermissionsCommand";
import {
  DescribeRootFoldersCommandInput,
  DescribeRootFoldersCommandOutput,
} from "./commands/DescribeRootFoldersCommand";
import { DescribeUsersCommandInput, DescribeUsersCommandOutput } from "./commands/DescribeUsersCommand";
import { GetCurrentUserCommandInput, GetCurrentUserCommandOutput } from "./commands/GetCurrentUserCommand";
import { GetDocumentCommandInput, GetDocumentCommandOutput } from "./commands/GetDocumentCommand";
import { GetDocumentPathCommandInput, GetDocumentPathCommandOutput } from "./commands/GetDocumentPathCommand";
import { GetDocumentVersionCommandInput, GetDocumentVersionCommandOutput } from "./commands/GetDocumentVersionCommand";
import { GetFolderCommandInput, GetFolderCommandOutput } from "./commands/GetFolderCommand";
import { GetFolderPathCommandInput, GetFolderPathCommandOutput } from "./commands/GetFolderPathCommand";
import { GetResourcesCommandInput, GetResourcesCommandOutput } from "./commands/GetResourcesCommand";
import {
  InitiateDocumentVersionUploadCommandInput,
  InitiateDocumentVersionUploadCommandOutput,
} from "./commands/InitiateDocumentVersionUploadCommand";
import {
  RemoveAllResourcePermissionsCommandInput,
  RemoveAllResourcePermissionsCommandOutput,
} from "./commands/RemoveAllResourcePermissionsCommand";
import {
  RemoveResourcePermissionCommandInput,
  RemoveResourcePermissionCommandOutput,
} from "./commands/RemoveResourcePermissionCommand";
import { UpdateDocumentCommandInput, UpdateDocumentCommandOutput } from "./commands/UpdateDocumentCommand";
import {
  UpdateDocumentVersionCommandInput,
  UpdateDocumentVersionCommandOutput,
} from "./commands/UpdateDocumentVersionCommand";
import { UpdateFolderCommandInput, UpdateFolderCommandOutput } from "./commands/UpdateFolderCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
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
  | AbortDocumentVersionUploadCommandInput
  | ActivateUserCommandInput
  | AddResourcePermissionsCommandInput
  | CreateCommentCommandInput
  | CreateCustomMetadataCommandInput
  | CreateFolderCommandInput
  | CreateLabelsCommandInput
  | CreateNotificationSubscriptionCommandInput
  | CreateUserCommandInput
  | DeactivateUserCommandInput
  | DeleteCommentCommandInput
  | DeleteCustomMetadataCommandInput
  | DeleteDocumentCommandInput
  | DeleteFolderCommandInput
  | DeleteFolderContentsCommandInput
  | DeleteLabelsCommandInput
  | DeleteNotificationSubscriptionCommandInput
  | DeleteUserCommandInput
  | DescribeActivitiesCommandInput
  | DescribeCommentsCommandInput
  | DescribeDocumentVersionsCommandInput
  | DescribeFolderContentsCommandInput
  | DescribeGroupsCommandInput
  | DescribeNotificationSubscriptionsCommandInput
  | DescribeResourcePermissionsCommandInput
  | DescribeRootFoldersCommandInput
  | DescribeUsersCommandInput
  | GetCurrentUserCommandInput
  | GetDocumentCommandInput
  | GetDocumentPathCommandInput
  | GetDocumentVersionCommandInput
  | GetFolderCommandInput
  | GetFolderPathCommandInput
  | GetResourcesCommandInput
  | InitiateDocumentVersionUploadCommandInput
  | RemoveAllResourcePermissionsCommandInput
  | RemoveResourcePermissionCommandInput
  | UpdateDocumentCommandInput
  | UpdateDocumentVersionCommandInput
  | UpdateFolderCommandInput
  | UpdateUserCommandInput;

export type ServiceOutputTypes =
  | AbortDocumentVersionUploadCommandOutput
  | ActivateUserCommandOutput
  | AddResourcePermissionsCommandOutput
  | CreateCommentCommandOutput
  | CreateCustomMetadataCommandOutput
  | CreateFolderCommandOutput
  | CreateLabelsCommandOutput
  | CreateNotificationSubscriptionCommandOutput
  | CreateUserCommandOutput
  | DeactivateUserCommandOutput
  | DeleteCommentCommandOutput
  | DeleteCustomMetadataCommandOutput
  | DeleteDocumentCommandOutput
  | DeleteFolderCommandOutput
  | DeleteFolderContentsCommandOutput
  | DeleteLabelsCommandOutput
  | DeleteNotificationSubscriptionCommandOutput
  | DeleteUserCommandOutput
  | DescribeActivitiesCommandOutput
  | DescribeCommentsCommandOutput
  | DescribeDocumentVersionsCommandOutput
  | DescribeFolderContentsCommandOutput
  | DescribeGroupsCommandOutput
  | DescribeNotificationSubscriptionsCommandOutput
  | DescribeResourcePermissionsCommandOutput
  | DescribeRootFoldersCommandOutput
  | DescribeUsersCommandOutput
  | GetCurrentUserCommandOutput
  | GetDocumentCommandOutput
  | GetDocumentPathCommandOutput
  | GetDocumentVersionCommandOutput
  | GetFolderCommandOutput
  | GetFolderPathCommandOutput
  | GetResourcesCommandOutput
  | InitiateDocumentVersionUploadCommandOutput
  | RemoveAllResourcePermissionsCommandOutput
  | RemoveResourcePermissionCommandOutput
  | UpdateDocumentCommandOutput
  | UpdateDocumentVersionCommandOutput
  | UpdateFolderCommandOutput
  | UpdateUserCommandOutput;

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

export type WorkDocsClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type WorkDocsClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>The WorkDocs API is designed for the following use cases:</p>
 *         <ul>
 *             <li>
 *                 <p>File Migration: File migration applications are supported for users who
 *                     want to migrate their files from an on-premises or off-premises file system or
 *                     service. Users can insert files into a user directory structure, as well as
 *                     allow for basic metadata changes, such as modifications to the permissions of
 *                     files.</p>
 *             </li>
 *             <li>
 *                 <p>Security: Support security applications are supported for users who have
 *                     additional security needs, such as antivirus or data loss prevention. The API
 *                     actions, along with AWS CloudTrail, allow these applications to detect when
 *                     changes occur in Amazon WorkDocs. Then, the application can take the necessary
 *                     actions and replace the target file. If the target file violates the policy, the
 *                     application can also choose to email the user.</p>
 *             </li>
 *             <li>
 *                 <p>eDiscovery/Analytics: General administrative applications are supported,
 *                     such as eDiscovery and analytics. These applications can choose to mimic or
 *                     record the actions in an Amazon WorkDocs site, along with AWS CloudTrail, to
 *                     replicate data for eDiscovery, backup, or analytical applications.</p>
 *             </li>
 *          </ul>
 *         <p>All Amazon WorkDocs API actions are Amazon authenticated and certificate-signed.
 *             They not only require the use of the AWS SDK, but also allow for the exclusive use of
 *             IAM users and roles to help facilitate access, trust, and permission policies. By
 *             creating a role and allowing an IAM user to access the Amazon WorkDocs site, the IAM
 *             user gains full administrative visibility into the entire Amazon WorkDocs site (or as
 *             set in the IAM policy). This includes, but is not limited to, the ability to modify file
 *             permissions and upload any file to any user. This allows developers to perform the three
 *             use cases above, as well as give users the ability to grant access on a selective basis
 *             using the IAM model.</p>
 */
export class WorkDocsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkDocsClientResolvedConfig
> {
  readonly config: WorkDocsClientResolvedConfig;

  constructor(configuration: WorkDocsClientConfig) {
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
