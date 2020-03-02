import {
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput
} from "./commands/AddTagsToResourceCommand";
import {
  ApplyPendingMaintenanceActionCommandInput,
  ApplyPendingMaintenanceActionCommandOutput
} from "./commands/ApplyPendingMaintenanceActionCommand";
import {
  CreateEndpointCommandInput,
  CreateEndpointCommandOutput
} from "./commands/CreateEndpointCommand";
import {
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput
} from "./commands/CreateEventSubscriptionCommand";
import {
  CreateReplicationInstanceCommandInput,
  CreateReplicationInstanceCommandOutput
} from "./commands/CreateReplicationInstanceCommand";
import {
  CreateReplicationSubnetGroupCommandInput,
  CreateReplicationSubnetGroupCommandOutput
} from "./commands/CreateReplicationSubnetGroupCommand";
import {
  CreateReplicationTaskCommandInput,
  CreateReplicationTaskCommandOutput
} from "./commands/CreateReplicationTaskCommand";
import {
  DeleteCertificateCommandInput,
  DeleteCertificateCommandOutput
} from "./commands/DeleteCertificateCommand";
import {
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput
} from "./commands/DeleteConnectionCommand";
import {
  DeleteEndpointCommandInput,
  DeleteEndpointCommandOutput
} from "./commands/DeleteEndpointCommand";
import {
  DeleteEventSubscriptionCommandInput,
  DeleteEventSubscriptionCommandOutput
} from "./commands/DeleteEventSubscriptionCommand";
import {
  DeleteReplicationInstanceCommandInput,
  DeleteReplicationInstanceCommandOutput
} from "./commands/DeleteReplicationInstanceCommand";
import {
  DeleteReplicationSubnetGroupCommandInput,
  DeleteReplicationSubnetGroupCommandOutput
} from "./commands/DeleteReplicationSubnetGroupCommand";
import {
  DeleteReplicationTaskCommandInput,
  DeleteReplicationTaskCommandOutput
} from "./commands/DeleteReplicationTaskCommand";
import {
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput
} from "./commands/DescribeAccountAttributesCommand";
import {
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput
} from "./commands/DescribeCertificatesCommand";
import {
  DescribeConnectionsCommandInput,
  DescribeConnectionsCommandOutput
} from "./commands/DescribeConnectionsCommand";
import {
  DescribeEndpointTypesCommandInput,
  DescribeEndpointTypesCommandOutput
} from "./commands/DescribeEndpointTypesCommand";
import {
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput
} from "./commands/DescribeEndpointsCommand";
import {
  DescribeEventCategoriesCommandInput,
  DescribeEventCategoriesCommandOutput
} from "./commands/DescribeEventCategoriesCommand";
import {
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput
} from "./commands/DescribeEventSubscriptionsCommand";
import {
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput
} from "./commands/DescribeEventsCommand";
import {
  DescribeOrderableReplicationInstancesCommandInput,
  DescribeOrderableReplicationInstancesCommandOutput
} from "./commands/DescribeOrderableReplicationInstancesCommand";
import {
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput
} from "./commands/DescribePendingMaintenanceActionsCommand";
import {
  DescribeRefreshSchemasStatusCommandInput,
  DescribeRefreshSchemasStatusCommandOutput
} from "./commands/DescribeRefreshSchemasStatusCommand";
import {
  DescribeReplicationInstanceTaskLogsCommandInput,
  DescribeReplicationInstanceTaskLogsCommandOutput
} from "./commands/DescribeReplicationInstanceTaskLogsCommand";
import {
  DescribeReplicationInstancesCommandInput,
  DescribeReplicationInstancesCommandOutput
} from "./commands/DescribeReplicationInstancesCommand";
import {
  DescribeReplicationSubnetGroupsCommandInput,
  DescribeReplicationSubnetGroupsCommandOutput
} from "./commands/DescribeReplicationSubnetGroupsCommand";
import {
  DescribeReplicationTaskAssessmentResultsCommandInput,
  DescribeReplicationTaskAssessmentResultsCommandOutput
} from "./commands/DescribeReplicationTaskAssessmentResultsCommand";
import {
  DescribeReplicationTasksCommandInput,
  DescribeReplicationTasksCommandOutput
} from "./commands/DescribeReplicationTasksCommand";
import {
  DescribeSchemasCommandInput,
  DescribeSchemasCommandOutput
} from "./commands/DescribeSchemasCommand";
import {
  DescribeTableStatisticsCommandInput,
  DescribeTableStatisticsCommandOutput
} from "./commands/DescribeTableStatisticsCommand";
import {
  ImportCertificateCommandInput,
  ImportCertificateCommandOutput
} from "./commands/ImportCertificateCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  ModifyEndpointCommandInput,
  ModifyEndpointCommandOutput
} from "./commands/ModifyEndpointCommand";
import {
  ModifyEventSubscriptionCommandInput,
  ModifyEventSubscriptionCommandOutput
} from "./commands/ModifyEventSubscriptionCommand";
import {
  ModifyReplicationInstanceCommandInput,
  ModifyReplicationInstanceCommandOutput
} from "./commands/ModifyReplicationInstanceCommand";
import {
  ModifyReplicationSubnetGroupCommandInput,
  ModifyReplicationSubnetGroupCommandOutput
} from "./commands/ModifyReplicationSubnetGroupCommand";
import {
  ModifyReplicationTaskCommandInput,
  ModifyReplicationTaskCommandOutput
} from "./commands/ModifyReplicationTaskCommand";
import {
  RebootReplicationInstanceCommandInput,
  RebootReplicationInstanceCommandOutput
} from "./commands/RebootReplicationInstanceCommand";
import {
  RefreshSchemasCommandInput,
  RefreshSchemasCommandOutput
} from "./commands/RefreshSchemasCommand";
import {
  ReloadTablesCommandInput,
  ReloadTablesCommandOutput
} from "./commands/ReloadTablesCommand";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput
} from "./commands/RemoveTagsFromResourceCommand";
import {
  StartReplicationTaskAssessmentCommandInput,
  StartReplicationTaskAssessmentCommandOutput
} from "./commands/StartReplicationTaskAssessmentCommand";
import {
  StartReplicationTaskCommandInput,
  StartReplicationTaskCommandOutput
} from "./commands/StartReplicationTaskCommand";
import {
  StopReplicationTaskCommandInput,
  StopReplicationTaskCommandOutput
} from "./commands/StopReplicationTaskCommand";
import {
  TestConnectionCommandInput,
  TestConnectionCommandOutput
} from "./commands/TestConnectionCommand";
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
  | AddTagsToResourceCommandInput
  | ApplyPendingMaintenanceActionCommandInput
  | CreateEndpointCommandInput
  | CreateEventSubscriptionCommandInput
  | CreateReplicationInstanceCommandInput
  | CreateReplicationSubnetGroupCommandInput
  | CreateReplicationTaskCommandInput
  | DeleteCertificateCommandInput
  | DeleteConnectionCommandInput
  | DeleteEndpointCommandInput
  | DeleteEventSubscriptionCommandInput
  | DeleteReplicationInstanceCommandInput
  | DeleteReplicationSubnetGroupCommandInput
  | DeleteReplicationTaskCommandInput
  | DescribeAccountAttributesCommandInput
  | DescribeCertificatesCommandInput
  | DescribeConnectionsCommandInput
  | DescribeEndpointTypesCommandInput
  | DescribeEndpointsCommandInput
  | DescribeEventCategoriesCommandInput
  | DescribeEventSubscriptionsCommandInput
  | DescribeEventsCommandInput
  | DescribeOrderableReplicationInstancesCommandInput
  | DescribePendingMaintenanceActionsCommandInput
  | DescribeRefreshSchemasStatusCommandInput
  | DescribeReplicationInstanceTaskLogsCommandInput
  | DescribeReplicationInstancesCommandInput
  | DescribeReplicationSubnetGroupsCommandInput
  | DescribeReplicationTaskAssessmentResultsCommandInput
  | DescribeReplicationTasksCommandInput
  | DescribeSchemasCommandInput
  | DescribeTableStatisticsCommandInput
  | ImportCertificateCommandInput
  | ListTagsForResourceCommandInput
  | ModifyEndpointCommandInput
  | ModifyEventSubscriptionCommandInput
  | ModifyReplicationInstanceCommandInput
  | ModifyReplicationSubnetGroupCommandInput
  | ModifyReplicationTaskCommandInput
  | RebootReplicationInstanceCommandInput
  | RefreshSchemasCommandInput
  | ReloadTablesCommandInput
  | RemoveTagsFromResourceCommandInput
  | StartReplicationTaskAssessmentCommandInput
  | StartReplicationTaskCommandInput
  | StopReplicationTaskCommandInput
  | TestConnectionCommandInput;

export type ServiceOutputTypes =
  | AddTagsToResourceCommandOutput
  | ApplyPendingMaintenanceActionCommandOutput
  | CreateEndpointCommandOutput
  | CreateEventSubscriptionCommandOutput
  | CreateReplicationInstanceCommandOutput
  | CreateReplicationSubnetGroupCommandOutput
  | CreateReplicationTaskCommandOutput
  | DeleteCertificateCommandOutput
  | DeleteConnectionCommandOutput
  | DeleteEndpointCommandOutput
  | DeleteEventSubscriptionCommandOutput
  | DeleteReplicationInstanceCommandOutput
  | DeleteReplicationSubnetGroupCommandOutput
  | DeleteReplicationTaskCommandOutput
  | DescribeAccountAttributesCommandOutput
  | DescribeCertificatesCommandOutput
  | DescribeConnectionsCommandOutput
  | DescribeEndpointTypesCommandOutput
  | DescribeEndpointsCommandOutput
  | DescribeEventCategoriesCommandOutput
  | DescribeEventSubscriptionsCommandOutput
  | DescribeEventsCommandOutput
  | DescribeOrderableReplicationInstancesCommandOutput
  | DescribePendingMaintenanceActionsCommandOutput
  | DescribeRefreshSchemasStatusCommandOutput
  | DescribeReplicationInstanceTaskLogsCommandOutput
  | DescribeReplicationInstancesCommandOutput
  | DescribeReplicationSubnetGroupsCommandOutput
  | DescribeReplicationTaskAssessmentResultsCommandOutput
  | DescribeReplicationTasksCommandOutput
  | DescribeSchemasCommandOutput
  | DescribeTableStatisticsCommandOutput
  | ImportCertificateCommandOutput
  | ListTagsForResourceCommandOutput
  | ModifyEndpointCommandOutput
  | ModifyEventSubscriptionCommandOutput
  | ModifyReplicationInstanceCommandOutput
  | ModifyReplicationSubnetGroupCommandOutput
  | ModifyReplicationTaskCommandOutput
  | RebootReplicationInstanceCommandOutput
  | RefreshSchemasCommandOutput
  | ReloadTablesCommandOutput
  | RemoveTagsFromResourceCommandOutput
  | StartReplicationTaskAssessmentCommandOutput
  | StartReplicationTaskCommandOutput
  | StopReplicationTaskCommandOutput
  | TestConnectionCommandOutput;

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

export type DatabaseMigrationServiceClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type DatabaseMigrationServiceClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <fullname>AWS Database Migration Service</fullname>
 *          <p>AWS Database Migration Service (AWS DMS) can migrate your data to and from the most
 *          widely used commercial and open-source databases such as Oracle, PostgreSQL, Microsoft SQL
 *          Server, Amazon Redshift, MariaDB, Amazon Aurora, MySQL, and SAP Adaptive Server Enterprise
 *          (ASE). The service supports homogeneous migrations such as Oracle to Oracle, as well as
 *          heterogeneous migrations between different database platforms, such as Oracle to MySQL or
 *          SQL Server to PostgreSQL.</p>
 *          <p>For more information about AWS DMS, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html">What Is AWS Database Migration Service?</a>
 *          in the <i>AWS Database Migration User Guide.</i>
 *          </p>
 */
export class DatabaseMigrationServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DatabaseMigrationServiceClientResolvedConfig
> {
  readonly config: DatabaseMigrationServiceClientResolvedConfig;

  constructor(configuration: DatabaseMigrationServiceClientConfig) {
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
