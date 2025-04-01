// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { GrantFlowEntitlementsRequest, GrantFlowEntitlementsResponse } from "../models/models_0";
import { de_GrantFlowEntitlementsCommand, se_GrantFlowEntitlementsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Grants entitlements to an existing flow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, GrantFlowEntitlementsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, GrantFlowEntitlementsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
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
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message.
 * </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You do not have sufficient access to perform this action.
 * </p>
 *
 * @throws {@link GrantFlowEntitlements420Exception} (client fault)
 *  <p>Exception raised by Elemental MediaConnect when granting the entitlement. See the error message for the operation for more information on the cause of this exception.
 * </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.
 * </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.
 * </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable or busy.
 * </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling.
 * </p>
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 *
 * @public
 */
export class GrantFlowEntitlementsCommand extends $Command
  .classBuilder<
    GrantFlowEntitlementsCommandInput,
    GrantFlowEntitlementsCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaConnect", "GrantFlowEntitlements", {})
  .n("MediaConnectClient", "GrantFlowEntitlementsCommand")
  .f(void 0, void 0)
  .ser(se_GrantFlowEntitlementsCommand)
  .de(de_GrantFlowEntitlementsCommand)
  .build() {
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
