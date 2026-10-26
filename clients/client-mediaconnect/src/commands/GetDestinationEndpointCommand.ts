// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDestinationEndpointRequest, GetDestinationEndpointResponse } from "../models/models_1";
import { GetDestinationEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDestinationEndpointCommand}.
 */
export interface GetDestinationEndpointCommandInput extends GetDestinationEndpointRequest {}
/**
 * @public
 *
 * The output of {@link GetDestinationEndpointCommand}.
 */
export interface GetDestinationEndpointCommandOutput extends GetDestinationEndpointResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a destination endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, GetDestinationEndpointCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, GetDestinationEndpointCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // GetDestinationEndpointRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new GetDestinationEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetDestinationEndpointResponse
 * //   DestinationEndpoint: { // DestinationEndpoint
 * //     Name: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     Id: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE", // required
 * //     RegionName: "STRING_VALUE", // required
 * //     AvailabilityZone: "STRING_VALUE",
 * //     AvailabilityZoneId: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"), // required
 * //     UpdatedAt: new Date("TIMESTAMP"), // required
 * //     LifecycleManagement: "MANAGED" || "UNMANAGED", // required
 * //     Messages: [ // DestinationEndpointMessageList // required
 * //       { // DestinationEndpointMessage
 * //         Code: "STRING_VALUE", // required
 * //         Message: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     DestinationType: "STANDARD" || "ROUTER_INPUT", // required
 * //     Configuration: { // DestinationEndpointConfiguration Union: only one key present
 * //       Standard: { // StandardDestinationEndpointConfiguration
 * //         Name: "STRING_VALUE", // required
 * //         DestinationNetworkingConfiguration: { // StandardDestinationEndpointNetworkingConfiguration Union: only one key present
 * //           Public: { // PublicDestinationEndpointNetworkingConfiguration
 * //             DestinationAllowRules: [ // PublicDestinationEndpointNetworkingConfigurationAllowRuleList // required
 * //               { // PublicDestinationEndpointNetworkingConfigurationAllowRule
 * //                 Cidr: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //           Vpc: { // VpcDestinationEndpointNetworkingConfiguration
 * //             SecurityGroupIds: [ // SecurityGroupIdList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             SubnetId: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         ProtocolConfiguration: { // StandardDestinationEndpointProtocolConfiguration Union: only one key present
 * //           Rist: { // RistStandardDestinationEndpointConfiguration
 * //             DestinationAddress: "STRING_VALUE", // required
 * //             DestinationIngestPort: Number("int"), // required
 * //           },
 * //           SrtListener: { // SrtListenerStandardDestinationEndpointConfiguration
 * //             DestinationAddress: "STRING_VALUE", // required
 * //             DestinationIngestPort: Number("int"), // required
 * //             MinimumLatencyMilliseconds: Number("long"), // required
 * //             StreamId: "STRING_VALUE",
 * //             EncryptionPassphrase: { // EndpointEncryptionSecretConfiguration
 * //               SecretArn: "STRING_VALUE", // required
 * //             },
 * //           },
 * //           SrtCaller: { // SrtCallerStandardDestinationEndpointConfiguration
 * //             SourceListenerPort: Number("int"), // required
 * //             MinimumLatencyMilliseconds: Number("long"), // required
 * //             EncryptionPassphrase: {
 * //               SecretArn: "STRING_VALUE", // required
 * //             },
 * //           },
 * //           Rtp: { // RtpStandardDestinationEndpointConfiguration
 * //             DestinationAddress: "STRING_VALUE", // required
 * //             DestinationIngestPort: Number("int"), // required
 * //             ForwardErrorCorrectionState: "ENABLED" || "DISABLED", // required
 * //           },
 * //         },
 * //         DestinationNetworkingType: "PUBLIC" || "VPC",
 * //         Protocol: "RTP" || "RIST" || "SRT_CALLER" || "SRT_LISTENER",
 * //       },
 * //       RouterInput: { // RouterInputDestinationEndpointConfiguration
 * //         RouterInputArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     ResourceShareOwnership: "OWNED" || "CONSUMED", // required
 * //     ResourceShareDetails: { // ResourceShareDetails Union: only one key present
 * //       Owned: { // OwnedResourceShareDetails
 * //         ShareState: "SHARED" || "UNSHARED", // required
 * //       },
 * //       Consumed: { // ConsumedResourceShareDetails
 * //         OwnerAccountId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     RegistrationState: "REGISTERED" || "REGISTERING" || "DEREGISTERING" || "REGISTRATION_FAILED", // required
 * //     ConnectionDetails: { // DestinationEndpointConnectionDetails Union: only one key present
 * //       Standard: { // StandardDestinationEndpointConnectionDetails
 * //         SourceIpAddress: "STRING_VALUE",
 * //         SourceListenerPort: Number("int"),
 * //         SourceEncryptionType: "SECRETS_MANAGER" || "AUTOMATIC",
 * //         SourceEncryptionConfiguration: { // EndpointEncryptionConfiguration Union: only one key present
 * //           SecretsManager: { // SecretsManagerEndpointEncryptionConfiguration
 * //             EncryptionSecretType: "AES_128_KEY" || "AES_192_KEY" || "AES_256_KEY" || "SRT_PASSPHRASE",
 * //             EncryptionSecret: {
 * //               SecretArn: "STRING_VALUE", // required
 * //             },
 * //           },
 * //           Automatic: {},
 * //         },
 * //         SourceEndpointType: "STANDARD" || "ROUTER_OUTPUT",
 * //       },
 * //       RouterInput: { // RouterInputDestinationEndpointConnectionDetails
 * //         SourceEncryptionType: "SECRETS_MANAGER" || "AUTOMATIC",
 * //         SourceEncryptionConfiguration: {//  Union: only one key present
 * //           SecretsManager: {
 * //             EncryptionSecretType: "AES_128_KEY" || "AES_192_KEY" || "AES_256_KEY" || "SRT_PASSPHRASE",
 * //             EncryptionSecret: {
 * //               SecretArn: "STRING_VALUE", // required
 * //             },
 * //           },
 * //           Automatic: {},
 * //         },
 * //         SourceEndpointType: "STANDARD" || "ROUTER_OUTPUT",
 * //       },
 * //     },
 * //     ConnectionState: "CONNECTED" || "DISCONNECTED" || "CONNECTING" || "DISCONNECTING", // required
 * //     ConnectedSource: "STRING_VALUE",
 * //     DecryptionType: "SECRETS_MANAGER" || "AUTOMATIC",
 * //     DecryptionConfiguration: {//  Union: only one key present
 * //       SecretsManager: {
 * //         EncryptionSecretType: "AES_128_KEY" || "AES_192_KEY" || "AES_256_KEY" || "SRT_PASSPHRASE",
 * //         EncryptionSecret: {
 * //           SecretArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       Automatic: {},
 * //     },
 * //     AssociatedResourceDetails: { // DestinationEndpointAssociatedResourceDetails Union: only one key present
 * //       Standard: {},
 * //       RouterInput: { // RouterInputDestinationEndpointAssociatedResourceDetails
 * //         Name: "STRING_VALUE", // required
 * //         MaximumBitrate: Number("long"), // required
 * //         State: "CREATING" || "STANDBY" || "STARTING" || "ACTIVE" || "STOPPING" || "DELETING" || "UPDATING" || "ERROR" || "RECOVERING" || "MIGRATING", // required
 * //         Messages: [ // RouterInputMessages // required
 * //           { // RouterInputMessage
 * //             Code: "STRING_VALUE", // required
 * //             Message: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     Tags: { // __mapOfString // required
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDestinationEndpointCommandInput - {@link GetDestinationEndpointCommandInput}
 * @returns {@link GetDestinationEndpointCommandOutput}
 * @see {@link GetDestinationEndpointCommandInput} for command's `input` shape.
 * @see {@link GetDestinationEndpointCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system. </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable or busy. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 *
 * @public
 */
export class GetDestinationEndpointCommand extends command<GetDestinationEndpointCommandInput, GetDestinationEndpointCommandOutput>(
  _ep0,
  _mw0,
  "GetDestinationEndpoint",
  GetDestinationEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDestinationEndpointRequest;
      output: GetDestinationEndpointResponse;
    };
    sdk: {
      input: GetDestinationEndpointCommandInput;
      output: GetDestinationEndpointCommandOutput;
    };
  };
}
