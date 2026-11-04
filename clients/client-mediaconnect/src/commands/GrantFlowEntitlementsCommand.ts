// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GrantFlowEntitlementsRequest, GrantFlowEntitlementsResponse } from "../models/models_1";
import { GrantFlowEntitlements$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GrantFlowEntitlementsCommand}.
 */
export interface GrantFlowEntitlementsCommandInput extends GrantFlowEntitlementsRequest {}
/**
 * @public
 *
 * The output of {@link GrantFlowEntitlementsCommand}.
 */
export interface GrantFlowEntitlementsCommandOutput extends GrantFlowEntitlementsResponse, __MetadataBearer {}

/**
 * Grants entitlements to an existing flow.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, GrantFlowEntitlementsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, GrantFlowEntitlementsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // GrantFlowEntitlementsRequest
 *   Entitlements: [ // __listOfGrantEntitlementRequest // required
 *     { // GrantEntitlementRequest
 *       DataTransferSubscriberFeePercent: Number("int"),
 *       Description: "STRING_VALUE",
 *       Encryption: { // Encryption
 *         Algorithm: "aes128" || "aes192" || "aes256",
 *         ConstantInitializationVector: "STRING_VALUE",
 *         DeviceId: "STRING_VALUE",
 *         KeyType: "speke" || "static-key" || "srt-password",
 *         Region: "STRING_VALUE",
 *         ResourceId: "STRING_VALUE",
 *         RoleArn: "STRING_VALUE", // required
 *         SecretArn: "STRING_VALUE",
 *         Url: "STRING_VALUE",
 *       },
 *       EntitlementStatus: "ENABLED" || "DISABLED",
 *       Name: "STRING_VALUE",
 *       Subscribers: [ // __listOfString // required
 *         "STRING_VALUE",
 *       ],
 *       EntitlementTags: { // __mapOfString
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   FlowArn: "STRING_VALUE", // required
 * };
 * const command = new GrantFlowEntitlementsCommand(input);
 * const response = await client.send(command);
 * // { // GrantFlowEntitlementsResponse
 * //   Entitlements: [ // __listOfEntitlement
 * //     { // Entitlement
 * //       DataTransferSubscriberFeePercent: Number("int"),
 * //       Description: "STRING_VALUE",
 * //       Encryption: { // Encryption
 * //         Algorithm: "aes128" || "aes192" || "aes256",
 * //         ConstantInitializationVector: "STRING_VALUE",
 * //         DeviceId: "STRING_VALUE",
 * //         KeyType: "speke" || "static-key" || "srt-password",
 * //         Region: "STRING_VALUE",
 * //         ResourceId: "STRING_VALUE",
 * //         RoleArn: "STRING_VALUE", // required
 * //         SecretArn: "STRING_VALUE",
 * //         Url: "STRING_VALUE",
 * //       },
 * //       EntitlementArn: "STRING_VALUE", // required
 * //       EntitlementStatus: "ENABLED" || "DISABLED",
 * //       Name: "STRING_VALUE", // required
 * //       Subscribers: [ // __listOfString // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   FlowArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GrantFlowEntitlementsCommandInput - {@link GrantFlowEntitlementsCommandInput}
 * @returns {@link GrantFlowEntitlementsCommandOutput}
 * @see {@link GrantFlowEntitlementsCommandInput} for command's `input` shape.
 * @see {@link GrantFlowEntitlementsCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link GrantFlowEntitlements420Exception} (client fault)
 *
 * Exception raised by Elemental MediaConnect when granting the entitlement. See the error message for the operation for more information on the cause of this exception.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable or busy.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link MediaConnectServiceException}
 *
 * Base exception class for all service exceptions from MediaConnect service.
 *
 * @public
 */
export class GrantFlowEntitlementsCommand extends command<GrantFlowEntitlementsCommandInput, GrantFlowEntitlementsCommandOutput>(
  _ep0,
  _mw0,
  "GrantFlowEntitlements",
  GrantFlowEntitlements$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GrantFlowEntitlementsRequest;
      output: GrantFlowEntitlementsResponse;
    };
    sdk: {
      input: GrantFlowEntitlementsCommandInput;
      output: GrantFlowEntitlementsCommandOutput;
    };
  };
}
