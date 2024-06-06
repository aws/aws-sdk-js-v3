// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetConfiguredAudienceModelPolicyRequest, GetConfiguredAudienceModelPolicyResponse } from "../models/models_0";
import {
  de_GetConfiguredAudienceModelPolicyCommand,
  se_GetConfiguredAudienceModelPolicyCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConfiguredAudienceModelPolicyCommand}.
 */
export interface GetConfiguredAudienceModelPolicyCommandInput extends GetConfiguredAudienceModelPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetConfiguredAudienceModelPolicyCommand}.
 */
export interface GetConfiguredAudienceModelPolicyCommandOutput
  extends GetConfiguredAudienceModelPolicyResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about a configured audience model policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, GetConfiguredAudienceModelPolicyCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, GetConfiguredAudienceModelPolicyCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // GetConfiguredAudienceModelPolicyRequest
 *   configuredAudienceModelArn: "STRING_VALUE", // required
 * };
 * const command = new GetConfiguredAudienceModelPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetConfiguredAudienceModelPolicyResponse
 * //   configuredAudienceModelArn: "STRING_VALUE", // required
 * //   configuredAudienceModelPolicy: "STRING_VALUE", // required
 * //   policyHash: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetConfiguredAudienceModelPolicyCommandInput - {@link GetConfiguredAudienceModelPolicyCommandInput}
 * @returns {@link GetConfiguredAudienceModelPolicyCommandOutput}
 * @see {@link GetConfiguredAudienceModelPolicyCommandInput} for command's `input` shape.
 * @see {@link GetConfiguredAudienceModelPolicyCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 * @public
 */
export class GetConfiguredAudienceModelPolicyCommand extends $Command
  .classBuilder<
    GetConfiguredAudienceModelPolicyCommandInput,
    GetConfiguredAudienceModelPolicyCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStarkControlService", "GetConfiguredAudienceModelPolicy", {})
  .n("CleanRoomsMLClient", "GetConfiguredAudienceModelPolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetConfiguredAudienceModelPolicyCommand)
  .de(de_GetConfiguredAudienceModelPolicyCommand)
  .build() {}
