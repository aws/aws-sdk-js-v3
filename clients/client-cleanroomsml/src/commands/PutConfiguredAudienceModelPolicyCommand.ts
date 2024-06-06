// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutConfiguredAudienceModelPolicyRequest, PutConfiguredAudienceModelPolicyResponse } from "../models/models_0";
import {
  de_PutConfiguredAudienceModelPolicyCommand,
  se_PutConfiguredAudienceModelPolicyCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutConfiguredAudienceModelPolicyCommand}.
 */
export interface PutConfiguredAudienceModelPolicyCommandInput extends PutConfiguredAudienceModelPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutConfiguredAudienceModelPolicyCommand}.
 */
export interface PutConfiguredAudienceModelPolicyCommandOutput
  extends PutConfiguredAudienceModelPolicyResponse,
    __MetadataBearer {}

/**
 * <p>Create or update the resource policy for a configured audience model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, PutConfiguredAudienceModelPolicyCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, PutConfiguredAudienceModelPolicyCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // PutConfiguredAudienceModelPolicyRequest
 *   configuredAudienceModelArn: "STRING_VALUE", // required
 *   configuredAudienceModelPolicy: "STRING_VALUE", // required
 *   previousPolicyHash: "STRING_VALUE",
 *   policyExistenceCondition: "POLICY_MUST_EXIST" || "POLICY_MUST_NOT_EXIST",
 * };
 * const command = new PutConfiguredAudienceModelPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutConfiguredAudienceModelPolicyResponse
 * //   configuredAudienceModelPolicy: "STRING_VALUE", // required
 * //   policyHash: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PutConfiguredAudienceModelPolicyCommandInput - {@link PutConfiguredAudienceModelPolicyCommandInput}
 * @returns {@link PutConfiguredAudienceModelPolicyCommandOutput}
 * @see {@link PutConfiguredAudienceModelPolicyCommandInput} for command's `input` shape.
 * @see {@link PutConfiguredAudienceModelPolicyCommandOutput} for command's `response` shape.
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
export class PutConfiguredAudienceModelPolicyCommand extends $Command
  .classBuilder<
    PutConfiguredAudienceModelPolicyCommandInput,
    PutConfiguredAudienceModelPolicyCommandOutput,
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
  .s("AWSStarkControlService", "PutConfiguredAudienceModelPolicy", {})
  .n("CleanRoomsMLClient", "PutConfiguredAudienceModelPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutConfiguredAudienceModelPolicyCommand)
  .de(de_PutConfiguredAudienceModelPolicyCommand)
  .build() {}
