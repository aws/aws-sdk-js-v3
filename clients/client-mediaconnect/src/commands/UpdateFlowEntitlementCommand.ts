// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import type { UpdateFlowEntitlementRequest, UpdateFlowEntitlementResponse } from "../models/models_0";
import { UpdateFlowEntitlement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFlowEntitlementCommand}.
 */
export interface UpdateFlowEntitlementCommandInput extends UpdateFlowEntitlementRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFlowEntitlementCommand}.
 */
export interface UpdateFlowEntitlementCommandOutput extends UpdateFlowEntitlementResponse, __MetadataBearer {}

/**
 * <p> Updates an entitlement. You can change an entitlement's description, subscribers, and encryption. If you change the subscribers, the service will remove the outputs that are are used by the subscribers that are removed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateFlowEntitlementCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateFlowEntitlementCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // UpdateFlowEntitlementRequest
 *   Description: "STRING_VALUE",
 *   Encryption: { // UpdateEncryption
 *     Algorithm: "aes128" || "aes192" || "aes256",
 *     ConstantInitializationVector: "STRING_VALUE",
 *     DeviceId: "STRING_VALUE",
 *     KeyType: "speke" || "static-key" || "srt-password",
 *     Region: "STRING_VALUE",
 *     ResourceId: "STRING_VALUE",
 *     RoleArn: "STRING_VALUE",
 *     SecretArn: "STRING_VALUE",
 *     Url: "STRING_VALUE",
 *   },
 *   EntitlementArn: "STRING_VALUE", // required
 *   EntitlementStatus: "ENABLED" || "DISABLED",
 *   FlowArn: "STRING_VALUE", // required
 *   Subscribers: [ // __listOfString
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateFlowEntitlementCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFlowEntitlementResponse
 * //   Entitlement: { // Entitlement
 * //     DataTransferSubscriberFeePercent: Number("int"),
 * //     Description: "STRING_VALUE",
 * //     Encryption: { // Encryption
 * //       Algorithm: "aes128" || "aes192" || "aes256",
 * //       ConstantInitializationVector: "STRING_VALUE",
 * //       DeviceId: "STRING_VALUE",
 * //       KeyType: "speke" || "static-key" || "srt-password",
 * //       Region: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE", // required
 * //       SecretArn: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //     },
 * //     EntitlementArn: "STRING_VALUE", // required
 * //     EntitlementStatus: "ENABLED" || "DISABLED",
 * //     Name: "STRING_VALUE", // required
 * //     Subscribers: [ // __listOfString // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   FlowArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateFlowEntitlementCommandInput - {@link UpdateFlowEntitlementCommandInput}
 * @returns {@link UpdateFlowEntitlementCommandOutput}
 * @see {@link UpdateFlowEntitlementCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowEntitlementCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
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
export class UpdateFlowEntitlementCommand extends $Command
  .classBuilder<
    UpdateFlowEntitlementCommandInput,
    UpdateFlowEntitlementCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "UpdateFlowEntitlement", {})
  .n("MediaConnectClient", "UpdateFlowEntitlementCommand")
  .sc(UpdateFlowEntitlement$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFlowEntitlementRequest;
      output: UpdateFlowEntitlementResponse;
    };
    sdk: {
      input: UpdateFlowEntitlementCommandInput;
      output: UpdateFlowEntitlementCommandOutput;
    };
  };
}
