import {
  CreateBackupPlanCommandInput,
  CreateBackupPlanCommandOutput
} from "./commands/CreateBackupPlanCommand";
import {
  CreateBackupSelectionCommandInput,
  CreateBackupSelectionCommandOutput
} from "./commands/CreateBackupSelectionCommand";
import {
  CreateBackupVaultCommandInput,
  CreateBackupVaultCommandOutput
} from "./commands/CreateBackupVaultCommand";
import {
  DeleteBackupPlanCommandInput,
  DeleteBackupPlanCommandOutput
} from "./commands/DeleteBackupPlanCommand";
import {
  DeleteBackupSelectionCommandInput,
  DeleteBackupSelectionCommandOutput
} from "./commands/DeleteBackupSelectionCommand";
import {
  DeleteBackupVaultAccessPolicyCommandInput,
  DeleteBackupVaultAccessPolicyCommandOutput
} from "./commands/DeleteBackupVaultAccessPolicyCommand";
import {
  DeleteBackupVaultCommandInput,
  DeleteBackupVaultCommandOutput
} from "./commands/DeleteBackupVaultCommand";
import {
  DeleteBackupVaultNotificationsCommandInput,
  DeleteBackupVaultNotificationsCommandOutput
} from "./commands/DeleteBackupVaultNotificationsCommand";
import {
  DeleteRecoveryPointCommandInput,
  DeleteRecoveryPointCommandOutput
} from "./commands/DeleteRecoveryPointCommand";
import {
  DescribeBackupJobCommandInput,
  DescribeBackupJobCommandOutput
} from "./commands/DescribeBackupJobCommand";
import {
  DescribeBackupVaultCommandInput,
  DescribeBackupVaultCommandOutput
} from "./commands/DescribeBackupVaultCommand";
import {
  DescribeCopyJobCommandInput,
  DescribeCopyJobCommandOutput
} from "./commands/DescribeCopyJobCommand";
import {
  DescribeProtectedResourceCommandInput,
  DescribeProtectedResourceCommandOutput
} from "./commands/DescribeProtectedResourceCommand";
import {
  DescribeRecoveryPointCommandInput,
  DescribeRecoveryPointCommandOutput
} from "./commands/DescribeRecoveryPointCommand";
import {
  DescribeRestoreJobCommandInput,
  DescribeRestoreJobCommandOutput
} from "./commands/DescribeRestoreJobCommand";
import {
  ExportBackupPlanTemplateCommandInput,
  ExportBackupPlanTemplateCommandOutput
} from "./commands/ExportBackupPlanTemplateCommand";
import {
  GetBackupPlanCommandInput,
  GetBackupPlanCommandOutput
} from "./commands/GetBackupPlanCommand";
import {
  GetBackupPlanFromJSONCommandInput,
  GetBackupPlanFromJSONCommandOutput
} from "./commands/GetBackupPlanFromJSONCommand";
import {
  GetBackupPlanFromTemplateCommandInput,
  GetBackupPlanFromTemplateCommandOutput
} from "./commands/GetBackupPlanFromTemplateCommand";
import {
  GetBackupSelectionCommandInput,
  GetBackupSelectionCommandOutput
} from "./commands/GetBackupSelectionCommand";
import {
  GetBackupVaultAccessPolicyCommandInput,
  GetBackupVaultAccessPolicyCommandOutput
} from "./commands/GetBackupVaultAccessPolicyCommand";
import {
  GetBackupVaultNotificationsCommandInput,
  GetBackupVaultNotificationsCommandOutput
} from "./commands/GetBackupVaultNotificationsCommand";
import {
  GetRecoveryPointRestoreMetadataCommandInput,
  GetRecoveryPointRestoreMetadataCommandOutput
} from "./commands/GetRecoveryPointRestoreMetadataCommand";
import {
  GetSupportedResourceTypesCommandInput,
  GetSupportedResourceTypesCommandOutput
} from "./commands/GetSupportedResourceTypesCommand";
import {
  ListBackupJobsCommandInput,
  ListBackupJobsCommandOutput
} from "./commands/ListBackupJobsCommand";
import {
  ListBackupPlanTemplatesCommandInput,
  ListBackupPlanTemplatesCommandOutput
} from "./commands/ListBackupPlanTemplatesCommand";
import {
  ListBackupPlanVersionsCommandInput,
  ListBackupPlanVersionsCommandOutput
} from "./commands/ListBackupPlanVersionsCommand";
import {
  ListBackupPlansCommandInput,
  ListBackupPlansCommandOutput
} from "./commands/ListBackupPlansCommand";
import {
  ListBackupSelectionsCommandInput,
  ListBackupSelectionsCommandOutput
} from "./commands/ListBackupSelectionsCommand";
import {
  ListBackupVaultsCommandInput,
  ListBackupVaultsCommandOutput
} from "./commands/ListBackupVaultsCommand";
import {
  ListCopyJobsCommandInput,
  ListCopyJobsCommandOutput
} from "./commands/ListCopyJobsCommand";
import {
  ListProtectedResourcesCommandInput,
  ListProtectedResourcesCommandOutput
} from "./commands/ListProtectedResourcesCommand";
import {
  ListRecoveryPointsByBackupVaultCommandInput,
  ListRecoveryPointsByBackupVaultCommandOutput
} from "./commands/ListRecoveryPointsByBackupVaultCommand";
import {
  ListRecoveryPointsByResourceCommandInput,
  ListRecoveryPointsByResourceCommandOutput
} from "./commands/ListRecoveryPointsByResourceCommand";
import {
  ListRestoreJobsCommandInput,
  ListRestoreJobsCommandOutput
} from "./commands/ListRestoreJobsCommand";
import {
  ListTagsCommandInput,
  ListTagsCommandOutput
} from "./commands/ListTagsCommand";
import {
  PutBackupVaultAccessPolicyCommandInput,
  PutBackupVaultAccessPolicyCommandOutput
} from "./commands/PutBackupVaultAccessPolicyCommand";
import {
  PutBackupVaultNotificationsCommandInput,
  PutBackupVaultNotificationsCommandOutput
} from "./commands/PutBackupVaultNotificationsCommand";
import {
  StartBackupJobCommandInput,
  StartBackupJobCommandOutput
} from "./commands/StartBackupJobCommand";
import {
  StartCopyJobCommandInput,
  StartCopyJobCommandOutput
} from "./commands/StartCopyJobCommand";
import {
  StartRestoreJobCommandInput,
  StartRestoreJobCommandOutput
} from "./commands/StartRestoreJobCommand";
import {
  StopBackupJobCommandInput,
  StopBackupJobCommandOutput
} from "./commands/StopBackupJobCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateBackupPlanCommandInput,
  UpdateBackupPlanCommandOutput
} from "./commands/UpdateBackupPlanCommand";
import {
  UpdateRecoveryPointLifecycleCommandInput,
  UpdateRecoveryPointLifecycleCommandOutput
} from "./commands/UpdateRecoveryPointLifecycleCommand";
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
  | CreateBackupPlanCommandInput
  | CreateBackupSelectionCommandInput
  | CreateBackupVaultCommandInput
  | DeleteBackupPlanCommandInput
  | DeleteBackupSelectionCommandInput
  | DeleteBackupVaultAccessPolicyCommandInput
  | DeleteBackupVaultCommandInput
  | DeleteBackupVaultNotificationsCommandInput
  | DeleteRecoveryPointCommandInput
  | DescribeBackupJobCommandInput
  | DescribeBackupVaultCommandInput
  | DescribeCopyJobCommandInput
  | DescribeProtectedResourceCommandInput
  | DescribeRecoveryPointCommandInput
  | DescribeRestoreJobCommandInput
  | ExportBackupPlanTemplateCommandInput
  | GetBackupPlanCommandInput
  | GetBackupPlanFromJSONCommandInput
  | GetBackupPlanFromTemplateCommandInput
  | GetBackupSelectionCommandInput
  | GetBackupVaultAccessPolicyCommandInput
  | GetBackupVaultNotificationsCommandInput
  | GetRecoveryPointRestoreMetadataCommandInput
  | GetSupportedResourceTypesCommandInput
  | ListBackupJobsCommandInput
  | ListBackupPlanTemplatesCommandInput
  | ListBackupPlanVersionsCommandInput
  | ListBackupPlansCommandInput
  | ListBackupSelectionsCommandInput
  | ListBackupVaultsCommandInput
  | ListCopyJobsCommandInput
  | ListProtectedResourcesCommandInput
  | ListRecoveryPointsByBackupVaultCommandInput
  | ListRecoveryPointsByResourceCommandInput
  | ListRestoreJobsCommandInput
  | ListTagsCommandInput
  | PutBackupVaultAccessPolicyCommandInput
  | PutBackupVaultNotificationsCommandInput
  | StartBackupJobCommandInput
  | StartCopyJobCommandInput
  | StartRestoreJobCommandInput
  | StopBackupJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateBackupPlanCommandInput
  | UpdateRecoveryPointLifecycleCommandInput;

export type ServiceOutputTypes =
  | CreateBackupPlanCommandOutput
  | CreateBackupSelectionCommandOutput
  | CreateBackupVaultCommandOutput
  | DeleteBackupPlanCommandOutput
  | DeleteBackupSelectionCommandOutput
  | DeleteBackupVaultAccessPolicyCommandOutput
  | DeleteBackupVaultCommandOutput
  | DeleteBackupVaultNotificationsCommandOutput
  | DeleteRecoveryPointCommandOutput
  | DescribeBackupJobCommandOutput
  | DescribeBackupVaultCommandOutput
  | DescribeCopyJobCommandOutput
  | DescribeProtectedResourceCommandOutput
  | DescribeRecoveryPointCommandOutput
  | DescribeRestoreJobCommandOutput
  | ExportBackupPlanTemplateCommandOutput
  | GetBackupPlanCommandOutput
  | GetBackupPlanFromJSONCommandOutput
  | GetBackupPlanFromTemplateCommandOutput
  | GetBackupSelectionCommandOutput
  | GetBackupVaultAccessPolicyCommandOutput
  | GetBackupVaultNotificationsCommandOutput
  | GetRecoveryPointRestoreMetadataCommandOutput
  | GetSupportedResourceTypesCommandOutput
  | ListBackupJobsCommandOutput
  | ListBackupPlanTemplatesCommandOutput
  | ListBackupPlanVersionsCommandOutput
  | ListBackupPlansCommandOutput
  | ListBackupSelectionsCommandOutput
  | ListBackupVaultsCommandOutput
  | ListCopyJobsCommandOutput
  | ListProtectedResourcesCommandOutput
  | ListRecoveryPointsByBackupVaultCommandOutput
  | ListRecoveryPointsByResourceCommandOutput
  | ListRestoreJobsCommandOutput
  | ListTagsCommandOutput
  | PutBackupVaultAccessPolicyCommandOutput
  | PutBackupVaultNotificationsCommandOutput
  | StartBackupJobCommandOutput
  | StartCopyJobCommandOutput
  | StartRestoreJobCommandOutput
  | StopBackupJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateBackupPlanCommandOutput
  | UpdateRecoveryPointLifecycleCommandOutput;

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

export type BackupClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type BackupClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <fullname>AWS Backup</fullname>
 *          <p>AWS Backup is a unified backup service designed to protect AWS services and their
 *          associated data. AWS Backup simplifies the creation, migration, restoration, and deletion
 *          of backups, while also providing reporting and auditing.</p>
 */
export class BackupClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  BackupClientResolvedConfig
> {
  readonly config: BackupClientResolvedConfig;

  constructor(configuration: BackupClientConfig) {
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
