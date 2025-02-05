// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { RevokeFlowEntitlementRequest, RevokeFlowEntitlementResponse } from "../models/models_0";
import { de_RevokeFlowEntitlementCommand, se_RevokeFlowEntitlementCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RevokeFlowEntitlementCommand}.
 */
export interface RevokeFlowEntitlementCommandInput extends RevokeFlowEntitlementRequest {}
/**
 * @public
 *
 * The output of {@link RevokeFlowEntitlementCommand}.
 */
export interface RevokeFlowEntitlementCommandOutput extends RevokeFlowEntitlementResponse, __MetadataBearer {}

/**
 * Revokes an entitlement from a flow. Once an entitlement is revoked, the content becomes unavailable to the subscriber and the associated output is removed.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RevokeFlowEntitlementCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RevokeFlowEntitlementCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MediaConnectClient(config);
 * const input = { // RevokeFlowEntitlementRequest
 *   EntitlementArn: "STRING_VALUE", // required
 *   FlowArn: "STRING_VALUE", // required
 * };
 * const command = new RevokeFlowEntitlementCommand(input);
 * const response = await client.send(command);
 * // { // RevokeFlowEntitlementResponse
 * //   EntitlementArn: "STRING_VALUE",
 * //   FlowArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RevokeFlowEntitlementCommandInput - {@link RevokeFlowEntitlementCommandInput}
 * @returns {@link RevokeFlowEntitlementCommandOutput}
 * @see {@link RevokeFlowEntitlementCommandInput} for command's `input` shape.
 * @see {@link RevokeFlowEntitlementCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link NotFoundException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 * @public
 */
export class RevokeFlowEntitlementCommand extends $Command
  .classBuilder<
    RevokeFlowEntitlementCommandInput,
    RevokeFlowEntitlementCommandOutput,
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
  .s("MediaConnect", "RevokeFlowEntitlement", {})
  .n("MediaConnectClient", "RevokeFlowEntitlementCommand")
  .f(void 0, void 0)
  .ser(se_RevokeFlowEntitlementCommand)
  .de(de_RevokeFlowEntitlementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeFlowEntitlementRequest;
      output: RevokeFlowEntitlementResponse;
    };
    sdk: {
      input: RevokeFlowEntitlementCommandInput;
      output: RevokeFlowEntitlementCommandOutput;
    };
  };
}
