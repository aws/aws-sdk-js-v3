// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  AssociateVehicleFleetCommandInput,
  AssociateVehicleFleetCommandOutput,
} from "./commands/AssociateVehicleFleetCommand";
import { BatchCreateVehicleCommandInput, BatchCreateVehicleCommandOutput } from "./commands/BatchCreateVehicleCommand";
import { BatchUpdateVehicleCommandInput, BatchUpdateVehicleCommandOutput } from "./commands/BatchUpdateVehicleCommand";
import { CreateCampaignCommandInput, CreateCampaignCommandOutput } from "./commands/CreateCampaignCommand";
import {
  CreateDecoderManifestCommandInput,
  CreateDecoderManifestCommandOutput,
} from "./commands/CreateDecoderManifestCommand";
import { CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import {
  CreateModelManifestCommandInput,
  CreateModelManifestCommandOutput,
} from "./commands/CreateModelManifestCommand";
import {
  CreateSignalCatalogCommandInput,
  CreateSignalCatalogCommandOutput,
} from "./commands/CreateSignalCatalogCommand";
import { CreateVehicleCommandInput, CreateVehicleCommandOutput } from "./commands/CreateVehicleCommand";
import { DeleteCampaignCommandInput, DeleteCampaignCommandOutput } from "./commands/DeleteCampaignCommand";
import {
  DeleteDecoderManifestCommandInput,
  DeleteDecoderManifestCommandOutput,
} from "./commands/DeleteDecoderManifestCommand";
import { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import {
  DeleteModelManifestCommandInput,
  DeleteModelManifestCommandOutput,
} from "./commands/DeleteModelManifestCommand";
import {
  DeleteSignalCatalogCommandInput,
  DeleteSignalCatalogCommandOutput,
} from "./commands/DeleteSignalCatalogCommand";
import { DeleteVehicleCommandInput, DeleteVehicleCommandOutput } from "./commands/DeleteVehicleCommand";
import {
  DisassociateVehicleFleetCommandInput,
  DisassociateVehicleFleetCommandOutput,
} from "./commands/DisassociateVehicleFleetCommand";
import { GetCampaignCommandInput, GetCampaignCommandOutput } from "./commands/GetCampaignCommand";
import { GetDecoderManifestCommandInput, GetDecoderManifestCommandOutput } from "./commands/GetDecoderManifestCommand";
import { GetFleetCommandInput, GetFleetCommandOutput } from "./commands/GetFleetCommand";
import { GetLoggingOptionsCommandInput, GetLoggingOptionsCommandOutput } from "./commands/GetLoggingOptionsCommand";
import { GetModelManifestCommandInput, GetModelManifestCommandOutput } from "./commands/GetModelManifestCommand";
import {
  GetRegisterAccountStatusCommandInput,
  GetRegisterAccountStatusCommandOutput,
} from "./commands/GetRegisterAccountStatusCommand";
import { GetSignalCatalogCommandInput, GetSignalCatalogCommandOutput } from "./commands/GetSignalCatalogCommand";
import { GetVehicleCommandInput, GetVehicleCommandOutput } from "./commands/GetVehicleCommand";
import { GetVehicleStatusCommandInput, GetVehicleStatusCommandOutput } from "./commands/GetVehicleStatusCommand";
import {
  ImportDecoderManifestCommandInput,
  ImportDecoderManifestCommandOutput,
} from "./commands/ImportDecoderManifestCommand";
import {
  ImportSignalCatalogCommandInput,
  ImportSignalCatalogCommandOutput,
} from "./commands/ImportSignalCatalogCommand";
import { ListCampaignsCommandInput, ListCampaignsCommandOutput } from "./commands/ListCampaignsCommand";
import {
  ListDecoderManifestNetworkInterfacesCommandInput,
  ListDecoderManifestNetworkInterfacesCommandOutput,
} from "./commands/ListDecoderManifestNetworkInterfacesCommand";
import {
  ListDecoderManifestsCommandInput,
  ListDecoderManifestsCommandOutput,
} from "./commands/ListDecoderManifestsCommand";
import {
  ListDecoderManifestSignalsCommandInput,
  ListDecoderManifestSignalsCommandOutput,
} from "./commands/ListDecoderManifestSignalsCommand";
import { ListFleetsCommandInput, ListFleetsCommandOutput } from "./commands/ListFleetsCommand";
import {
  ListFleetsForVehicleCommandInput,
  ListFleetsForVehicleCommandOutput,
} from "./commands/ListFleetsForVehicleCommand";
import {
  ListModelManifestNodesCommandInput,
  ListModelManifestNodesCommandOutput,
} from "./commands/ListModelManifestNodesCommand";
import { ListModelManifestsCommandInput, ListModelManifestsCommandOutput } from "./commands/ListModelManifestsCommand";
import {
  ListSignalCatalogNodesCommandInput,
  ListSignalCatalogNodesCommandOutput,
} from "./commands/ListSignalCatalogNodesCommand";
import { ListSignalCatalogsCommandInput, ListSignalCatalogsCommandOutput } from "./commands/ListSignalCatalogsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListVehiclesCommandInput, ListVehiclesCommandOutput } from "./commands/ListVehiclesCommand";
import {
  ListVehiclesInFleetCommandInput,
  ListVehiclesInFleetCommandOutput,
} from "./commands/ListVehiclesInFleetCommand";
import { PutLoggingOptionsCommandInput, PutLoggingOptionsCommandOutput } from "./commands/PutLoggingOptionsCommand";
import { RegisterAccountCommandInput, RegisterAccountCommandOutput } from "./commands/RegisterAccountCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateCampaignCommandInput, UpdateCampaignCommandOutput } from "./commands/UpdateCampaignCommand";
import {
  UpdateDecoderManifestCommandInput,
  UpdateDecoderManifestCommandOutput,
} from "./commands/UpdateDecoderManifestCommand";
import { UpdateFleetCommandInput, UpdateFleetCommandOutput } from "./commands/UpdateFleetCommand";
import {
  UpdateModelManifestCommandInput,
  UpdateModelManifestCommandOutput,
} from "./commands/UpdateModelManifestCommand";
import {
  UpdateSignalCatalogCommandInput,
  UpdateSignalCatalogCommandOutput,
} from "./commands/UpdateSignalCatalogCommand";
import { UpdateVehicleCommandInput, UpdateVehicleCommandOutput } from "./commands/UpdateVehicleCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateVehicleFleetCommandInput
  | BatchCreateVehicleCommandInput
  | BatchUpdateVehicleCommandInput
  | CreateCampaignCommandInput
  | CreateDecoderManifestCommandInput
  | CreateFleetCommandInput
  | CreateModelManifestCommandInput
  | CreateSignalCatalogCommandInput
  | CreateVehicleCommandInput
  | DeleteCampaignCommandInput
  | DeleteDecoderManifestCommandInput
  | DeleteFleetCommandInput
  | DeleteModelManifestCommandInput
  | DeleteSignalCatalogCommandInput
  | DeleteVehicleCommandInput
  | DisassociateVehicleFleetCommandInput
  | GetCampaignCommandInput
  | GetDecoderManifestCommandInput
  | GetFleetCommandInput
  | GetLoggingOptionsCommandInput
  | GetModelManifestCommandInput
  | GetRegisterAccountStatusCommandInput
  | GetSignalCatalogCommandInput
  | GetVehicleCommandInput
  | GetVehicleStatusCommandInput
  | ImportDecoderManifestCommandInput
  | ImportSignalCatalogCommandInput
  | ListCampaignsCommandInput
  | ListDecoderManifestNetworkInterfacesCommandInput
  | ListDecoderManifestSignalsCommandInput
  | ListDecoderManifestsCommandInput
  | ListFleetsCommandInput
  | ListFleetsForVehicleCommandInput
  | ListModelManifestNodesCommandInput
  | ListModelManifestsCommandInput
  | ListSignalCatalogNodesCommandInput
  | ListSignalCatalogsCommandInput
  | ListTagsForResourceCommandInput
  | ListVehiclesCommandInput
  | ListVehiclesInFleetCommandInput
  | PutLoggingOptionsCommandInput
  | RegisterAccountCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateCampaignCommandInput
  | UpdateDecoderManifestCommandInput
  | UpdateFleetCommandInput
  | UpdateModelManifestCommandInput
  | UpdateSignalCatalogCommandInput
  | UpdateVehicleCommandInput;

export type ServiceOutputTypes =
  | AssociateVehicleFleetCommandOutput
  | BatchCreateVehicleCommandOutput
  | BatchUpdateVehicleCommandOutput
  | CreateCampaignCommandOutput
  | CreateDecoderManifestCommandOutput
  | CreateFleetCommandOutput
  | CreateModelManifestCommandOutput
  | CreateSignalCatalogCommandOutput
  | CreateVehicleCommandOutput
  | DeleteCampaignCommandOutput
  | DeleteDecoderManifestCommandOutput
  | DeleteFleetCommandOutput
  | DeleteModelManifestCommandOutput
  | DeleteSignalCatalogCommandOutput
  | DeleteVehicleCommandOutput
  | DisassociateVehicleFleetCommandOutput
  | GetCampaignCommandOutput
  | GetDecoderManifestCommandOutput
  | GetFleetCommandOutput
  | GetLoggingOptionsCommandOutput
  | GetModelManifestCommandOutput
  | GetRegisterAccountStatusCommandOutput
  | GetSignalCatalogCommandOutput
  | GetVehicleCommandOutput
  | GetVehicleStatusCommandOutput
  | ImportDecoderManifestCommandOutput
  | ImportSignalCatalogCommandOutput
  | ListCampaignsCommandOutput
  | ListDecoderManifestNetworkInterfacesCommandOutput
  | ListDecoderManifestSignalsCommandOutput
  | ListDecoderManifestsCommandOutput
  | ListFleetsCommandOutput
  | ListFleetsForVehicleCommandOutput
  | ListModelManifestNodesCommandOutput
  | ListModelManifestsCommandOutput
  | ListSignalCatalogNodesCommandOutput
  | ListSignalCatalogsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListVehiclesCommandOutput
  | ListVehiclesInFleetCommandOutput
  | PutLoggingOptionsCommandOutput
  | RegisterAccountCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateCampaignCommandOutput
  | UpdateDecoderManifestCommandOutput
  | UpdateFleetCommandOutput
  | UpdateModelManifestCommandOutput
  | UpdateSignalCatalogCommandOutput
  | UpdateVehicleCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
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
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

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
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type IoTFleetWiseClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of IoTFleetWiseClient class constructor that set the region, credentials and other options.
 */
export interface IoTFleetWiseClientConfig extends IoTFleetWiseClientConfigType {}

type IoTFleetWiseClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of IoTFleetWiseClient class. This is resolved and normalized from the {@link IoTFleetWiseClientConfig | constructor configuration interface}.
 */
export interface IoTFleetWiseClientResolvedConfig extends IoTFleetWiseClientResolvedConfigType {}

/**
 * <p>Amazon Web Services IoT FleetWise is a fully managed service that you can use to collect, model, and transfer
 *             vehicle data to the Amazon Web Services cloud at scale. With Amazon Web Services IoT FleetWise, you can standardize all of
 *             your vehicle data models, independent of the in-vehicle communication architecture, and
 *             define data collection rules to transfer only high-value data to the cloud.
 *             </p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/">What is Amazon Web Services IoT FleetWise?</a> in the
 *                 <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 */
export class IoTFleetWiseClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IoTFleetWiseClientResolvedConfig
> {
  /**
   * The resolved configuration of IoTFleetWiseClient class. This is resolved and normalized from the {@link IoTFleetWiseClientConfig | constructor configuration interface}.
   */
  readonly config: IoTFleetWiseClientResolvedConfig;

  constructor(configuration: IoTFleetWiseClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
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
