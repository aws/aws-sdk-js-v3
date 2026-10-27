// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetSourceEndpointRequest, BatchGetSourceEndpointResponse } from "../models/models_0";
import { BatchGetSourceEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetSourceEndpointCommand}.
 */
export interface BatchGetSourceEndpointCommandInput extends BatchGetSourceEndpointRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetSourceEndpointCommand}.
 */
export interface BatchGetSourceEndpointCommandOutput extends BatchGetSourceEndpointResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about multiple source endpoints in a single request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, BatchGetSourceEndpointCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, BatchGetSourceEndpointCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // BatchGetSourceEndpointRequest
 *   Arns: [ // SourceEndpointArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetSourceEndpointCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetSourceEndpointResponse
 * //   SourceEndpoints: [ // SourceEndpointList // required
 * //     { // SourceEndpoint
 * //       Name: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       RegionName: "STRING_VALUE", // required
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       UpdatedAt: new Date("TIMESTAMP"), // required
 * //       LifecycleManagement: "MANAGED" || "UNMANAGED", // required
 * //       Messages: [ // SourceEndpointMessageList // required
 * //         { // SourceEndpointMessage
 * //           Code: "STRING_VALUE", // required
 * //           Message: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       SourceType: "STANDARD" || "ROUTER_OUTPUT", // required
 * //       Configuration: { // SourceEndpointConfiguration Union: only one key present
 * //         Standard: { // StandardSourceEndpointConfiguration
 * //           Name: "STRING_VALUE", // required
 * //           SourceNetworkingConfiguration: { // StandardSourceEndpointNetworkingConfiguration Union: only one key present
 * //             Public: { // PublicSourceEndpointNetworkingConfiguration
 * //               SourceAllowRules: [ // PublicSourceEndpointNetworkingConfigurationAllowRuleList // required
 * //                 { // PublicSourceEndpointNetworkingConfigurationAllowRule
 * //                   Cidr: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //             Vpc: { // VpcSourceEndpointNetworkingConfiguration
 * //               SecurityGroupIds: [ // SecurityGroupIdList // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               SubnetId: "STRING_VALUE", // required
 * //             },
 * //           },
 * //           ProtocolConfiguration: { // StandardSourceEndpointProtocolConfiguration Union: only one key present
 * //             Rist: { // RistStandardSourceEndpointConfiguration
 * //               DestinationIngestPort: Number("int"), // required
 * //               RecoveryLatencyMilliseconds: Number("long"), // required
 * //             },
 * //             SrtListener: { // SrtListenerStandardSourceEndpointConfiguration
 * //               SourceListenerPort: Number("int"), // required
 * //               SourceAddress: "STRING_VALUE", // required
 * //               MinimumLatencyMilliseconds: Number("long"), // required
 * //               StreamId: "STRING_VALUE",
 * //               EncryptionPassphrase: { // EndpointEncryptionSecretConfiguration
 * //                 SecretArn: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             SrtCaller: { // SrtCallerStandardSourceEndpointConfiguration
 * //               DestinationIngestPort: Number("int"), // required
 * //               MinimumLatencyMilliseconds: Number("long"), // required
 * //               EncryptionPassphrase: {
 * //                 SecretArn: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             Rtp: { // RtpStandardSourceEndpointConfiguration
 * //               DestinationIngestPort: Number("int"), // required
 * //               ForwardErrorCorrectionState: "ENABLED" || "DISABLED", // required
 * //             },
 * //           },
 * //           SourceNetworkingType: "PUBLIC" || "VPC",
 * //           Protocol: "RTP" || "RIST" || "SRT_CALLER" || "SRT_LISTENER",
 * //         },
 * //         RouterOutput: { // RouterOutputSourceEndpointConfiguration
 * //           RouterOutputArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       ResourceShareOwnership: "OWNED" || "CONSUMED", // required
 * //       ResourceShareDetails: { // ResourceShareDetails Union: only one key present
 * //         Owned: { // OwnedResourceShareDetails
 * //           ShareState: "SHARED" || "UNSHARED", // required
 * //         },
 * //         Consumed: { // ConsumedResourceShareDetails
 * //           OwnerAccountId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       RegistrationState: "REGISTERED" || "REGISTERING" || "DEREGISTERING" || "REGISTRATION_FAILED", // required
 * //       ConnectionState: "CONNECTED" || "DISCONNECTED" || "CONNECTING" || "DISCONNECTING", // required
 * //       ConnectionDetails: { // SourceEndpointConnectionDetails Union: only one key present
 * //         Standard: { // StandardSourceEndpointConnectionDetails
 * //           DestinationIpAddress: "STRING_VALUE",
 * //           DestinationIngestPort: Number("int"),
 * //           DestinationDecryptionType: "SECRETS_MANAGER" || "AUTOMATIC",
 * //           DestinationDecryptionConfiguration: { // EndpointEncryptionConfiguration Union: only one key present
 * //             SecretsManager: { // SecretsManagerEndpointEncryptionConfiguration
 * //               EncryptionSecretType: "AES_128_KEY" || "AES_192_KEY" || "AES_256_KEY" || "SRT_PASSPHRASE",
 * //               EncryptionSecret: {
 * //                 SecretArn: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             Automatic: {},
 * //           },
 * //           DestinationEndpointType: "STANDARD" || "ROUTER_INPUT",
 * //         },
 * //         RouterOutput: { // RouterOutputSourceEndpointConnectionDetails
 * //           DestinationDecryptionType: "SECRETS_MANAGER" || "AUTOMATIC",
 * //           DestinationDecryptionConfiguration: {//  Union: only one key present
 * //             SecretsManager: {
 * //               EncryptionSecretType: "AES_128_KEY" || "AES_192_KEY" || "AES_256_KEY" || "SRT_PASSPHRASE",
 * //               EncryptionSecret: {
 * //                 SecretArn: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             Automatic: {},
 * //           },
 * //           DestinationEndpointType: "STANDARD" || "ROUTER_INPUT",
 * //         },
 * //       },
 * //       ConnectedDestinations: [ // DestinationEndpointArnList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       EncryptionType: "SECRETS_MANAGER" || "AUTOMATIC",
 * //       EncryptionConfiguration: {//  Union: only one key present
 * //         SecretsManager: {
 * //           EncryptionSecretType: "AES_128_KEY" || "AES_192_KEY" || "AES_256_KEY" || "SRT_PASSPHRASE",
 * //           EncryptionSecret: {
 * //             SecretArn: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         Automatic: {},
 * //       },
 * //       AssociatedResourceDetails: { // SourceEndpointAssociatedResourceDetails Union: only one key present
 * //         Standard: {},
 * //         RouterOutput: { // RouterOutputSourceEndpointAssociatedResourceDetails
 * //           Name: "STRING_VALUE", // required
 * //           MaximumBitrate: Number("long"), // required
 * //           State: "CREATING" || "STANDBY" || "STARTING" || "ACTIVE" || "STOPPING" || "DELETING" || "UPDATING" || "ERROR" || "RECOVERING" || "MIGRATING", // required
 * //           Messages: [ // RouterOutputMessages // required
 * //             { // RouterOutputMessage
 * //               Code: "STRING_VALUE", // required
 * //               Message: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       Tags: { // __mapOfString // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Errors: [ // BatchGetSourceEndpointErrorList // required
 * //     { // BatchGetSourceEndpointError
 * //       Arn: "STRING_VALUE", // required
 * //       Code: "STRING_VALUE", // required
 * //       Message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetSourceEndpointCommandInput - {@link BatchGetSourceEndpointCommandInput}
 * @returns {@link BatchGetSourceEndpointCommandOutput}
 * @see {@link BatchGetSourceEndpointCommandInput} for command's `input` shape.
 * @see {@link BatchGetSourceEndpointCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request. </p>
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
export class BatchGetSourceEndpointCommand extends command<BatchGetSourceEndpointCommandInput, BatchGetSourceEndpointCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetSourceEndpoint",
  BatchGetSourceEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetSourceEndpointRequest;
      output: BatchGetSourceEndpointResponse;
    };
    sdk: {
      input: BatchGetSourceEndpointCommandInput;
      output: BatchGetSourceEndpointCommandOutput;
    };
  };
}
