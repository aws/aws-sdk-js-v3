// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AIOpsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AIOpsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetInvestigationGroupPolicyRequest, GetInvestigationGroupPolicyResponse } from "../models/models_0";
import {
  de_GetInvestigationGroupPolicyCommand,
  se_GetInvestigationGroupPolicyCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInvestigationGroupPolicyCommand}.
 */
export interface GetInvestigationGroupPolicyCommandInput extends GetInvestigationGroupPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetInvestigationGroupPolicyCommand}.
 */
export interface GetInvestigationGroupPolicyCommandOutput
  extends GetInvestigationGroupPolicyResponse,
    __MetadataBearer {}

/**
 * <p>Returns the IAM resource policy that is associated with the specified investigation group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AIOpsClient, GetInvestigationGroupPolicyCommand } from "@aws-sdk/client-aiops"; // ES Modules import
 * // const { AIOpsClient, GetInvestigationGroupPolicyCommand } = require("@aws-sdk/client-aiops"); // CommonJS import
 * const client = new AIOpsClient(config);
 * const input = { // GetInvestigationGroupPolicyRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetInvestigationGroupPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetInvestigationGroupPolicyResponse
 * //   investigationGroupArn: "STRING_VALUE",
 * //   policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInvestigationGroupPolicyCommandInput - {@link GetInvestigationGroupPolicyCommandInput}
 * @returns {@link GetInvestigationGroupPolicyCommandOutput}
 * @see {@link GetInvestigationGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link GetInvestigationGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link AIOpsClientResolvedConfig | config} for AIOpsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. You can try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits. You can try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This operation or its parameters aren't formatted correctly.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation couldn't be completed because of a conflict in resource states.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Access id denied for this operation, or this operation is not valid for the specified resource.</p>
 *
 * @throws {@link AIOpsServiceException}
 * <p>Base exception class for all service exceptions from AIOps service.</p>
 *
 *
 * @public
 */
export class GetInvestigationGroupPolicyCommand extends $Command
  .classBuilder<
    GetInvestigationGroupPolicyCommandInput,
    GetInvestigationGroupPolicyCommandOutput,
    AIOpsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AIOpsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AIOps", "GetInvestigationGroupPolicy", {})
  .n("AIOpsClient", "GetInvestigationGroupPolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetInvestigationGroupPolicyCommand)
  .de(de_GetInvestigationGroupPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInvestigationGroupPolicyRequest;
      output: GetInvestigationGroupPolicyResponse;
    };
    sdk: {
      input: GetInvestigationGroupPolicyCommandInput;
      output: GetInvestigationGroupPolicyCommandOutput;
    };
  };
}
