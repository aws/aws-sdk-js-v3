import {
  AssociateResolverEndpointIpAddressCommandInput,
  AssociateResolverEndpointIpAddressCommandOutput
} from "./commands/AssociateResolverEndpointIpAddressCommand";
import {
  AssociateResolverRuleCommandInput,
  AssociateResolverRuleCommandOutput
} from "./commands/AssociateResolverRuleCommand";
import {
  CreateResolverEndpointCommandInput,
  CreateResolverEndpointCommandOutput
} from "./commands/CreateResolverEndpointCommand";
import {
  CreateResolverRuleCommandInput,
  CreateResolverRuleCommandOutput
} from "./commands/CreateResolverRuleCommand";
import {
  DeleteResolverEndpointCommandInput,
  DeleteResolverEndpointCommandOutput
} from "./commands/DeleteResolverEndpointCommand";
import {
  DeleteResolverRuleCommandInput,
  DeleteResolverRuleCommandOutput
} from "./commands/DeleteResolverRuleCommand";
import {
  DisassociateResolverEndpointIpAddressCommandInput,
  DisassociateResolverEndpointIpAddressCommandOutput
} from "./commands/DisassociateResolverEndpointIpAddressCommand";
import {
  DisassociateResolverRuleCommandInput,
  DisassociateResolverRuleCommandOutput
} from "./commands/DisassociateResolverRuleCommand";
import {
  GetResolverEndpointCommandInput,
  GetResolverEndpointCommandOutput
} from "./commands/GetResolverEndpointCommand";
import {
  GetResolverRuleAssociationCommandInput,
  GetResolverRuleAssociationCommandOutput
} from "./commands/GetResolverRuleAssociationCommand";
import {
  GetResolverRuleCommandInput,
  GetResolverRuleCommandOutput
} from "./commands/GetResolverRuleCommand";
import {
  GetResolverRulePolicyCommandInput,
  GetResolverRulePolicyCommandOutput
} from "./commands/GetResolverRulePolicyCommand";
import {
  ListResolverEndpointIpAddressesCommandInput,
  ListResolverEndpointIpAddressesCommandOutput
} from "./commands/ListResolverEndpointIpAddressesCommand";
import {
  ListResolverEndpointsCommandInput,
  ListResolverEndpointsCommandOutput
} from "./commands/ListResolverEndpointsCommand";
import {
  ListResolverRuleAssociationsCommandInput,
  ListResolverRuleAssociationsCommandOutput
} from "./commands/ListResolverRuleAssociationsCommand";
import {
  ListResolverRulesCommandInput,
  ListResolverRulesCommandOutput
} from "./commands/ListResolverRulesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  PutResolverRulePolicyCommandInput,
  PutResolverRulePolicyCommandOutput
} from "./commands/PutResolverRulePolicyCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateResolverEndpointCommandInput,
  UpdateResolverEndpointCommandOutput
} from "./commands/UpdateResolverEndpointCommand";
import {
  UpdateResolverRuleCommandInput,
  UpdateResolverRuleCommandOutput
} from "./commands/UpdateResolverRuleCommand";
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
  | AssociateResolverEndpointIpAddressCommandInput
  | AssociateResolverRuleCommandInput
  | CreateResolverEndpointCommandInput
  | CreateResolverRuleCommandInput
  | DeleteResolverEndpointCommandInput
  | DeleteResolverRuleCommandInput
  | DisassociateResolverEndpointIpAddressCommandInput
  | DisassociateResolverRuleCommandInput
  | GetResolverEndpointCommandInput
  | GetResolverRuleAssociationCommandInput
  | GetResolverRuleCommandInput
  | GetResolverRulePolicyCommandInput
  | ListResolverEndpointIpAddressesCommandInput
  | ListResolverEndpointsCommandInput
  | ListResolverRuleAssociationsCommandInput
  | ListResolverRulesCommandInput
  | ListTagsForResourceCommandInput
  | PutResolverRulePolicyCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateResolverEndpointCommandInput
  | UpdateResolverRuleCommandInput;

export type ServiceOutputTypes =
  | AssociateResolverEndpointIpAddressCommandOutput
  | AssociateResolverRuleCommandOutput
  | CreateResolverEndpointCommandOutput
  | CreateResolverRuleCommandOutput
  | DeleteResolverEndpointCommandOutput
  | DeleteResolverRuleCommandOutput
  | DisassociateResolverEndpointIpAddressCommandOutput
  | DisassociateResolverRuleCommandOutput
  | GetResolverEndpointCommandOutput
  | GetResolverRuleAssociationCommandOutput
  | GetResolverRuleCommandOutput
  | GetResolverRulePolicyCommandOutput
  | ListResolverEndpointIpAddressesCommandOutput
  | ListResolverEndpointsCommandOutput
  | ListResolverRuleAssociationsCommandOutput
  | ListResolverRulesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutResolverRulePolicyCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateResolverEndpointCommandOutput
  | UpdateResolverRuleCommandOutput;

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

export type Route53ResolverClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type Route53ResolverClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <p>Here's how you set up to query an Amazon Route 53 private hosted zone from your network:</p>
 *
 * 		       <ol>
 *             <li>
 *                <p>Connect your network to a VPC using AWS Direct Connect or a VPN.</p>
 *             </li>
 *             <li>
 *                <p>Run the following AWS CLI command to create a Resolver endpoint:</p>
 * 				           <p>
 *                   <code>create-resolver-endpoint --name [endpoint_name] --direction INBOUND
 * 					--creator-request-id [unique_string] --security-group-ids [security_group_with_inbound_rules]
 * 					--ip-addresses SubnetId=[subnet_id] SubnetId=[subnet_id_in_different_AZ]</code>
 *                </p>
 * 				           <p>Note the resolver endpoint ID that appears in the response. You'll use it in step 3.</p>
 * 			         </li>
 *             <li>
 *                <p>Get the IP addresses for the Resolver endpoints:</p>
 * 				           <p>
 *                   <code>get-resolver-endpoint --resolver-endpoint-id [resolver_endpoint_id]</code>
 *                </p>
 * 			         </li>
 *             <li>
 *                <p>In your network configuration, define the IP addresses that you got in step 3 as DNS servers.</p>
 * 				           <p>You can now query instance names in your VPCs and the names of records in your private hosted zone.</p>
 * 			         </li>
 *          </ol>
 *
 * 		       <p>You can also perform the following operations using the AWS CLI:</p>
 * 		       <ul>
 *             <li>
 *                <p>
 *                   <code>list-resolver-endpoints</code>: List all endpoints. The syntax includes options for pagination and filtering.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>update-resolver-endpoints</code>: Add IP addresses to an endpoint or remove IP addresses from an endpoint. </p>
 *             </li>
 *          </ul>
 *
 * 		       <p>To delete an endpoint, use the following AWS CLI command:</p>
 * 		       <p>
 *             <code>delete-resolver-endpoint --resolver-endpoint-id [resolver_endpoint_id]</code>
 *          </p>
 */
export class Route53ResolverClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  Route53ResolverClientResolvedConfig
> {
  readonly config: Route53ResolverClientResolvedConfig;

  constructor(configuration: Route53ResolverClientConfig) {
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
