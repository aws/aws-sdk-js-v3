// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AIOpsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AIOpsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetInvestigationGroupPolicyRequest, GetInvestigationGroupPolicyResponse } from "../models/models_0";
import { GetInvestigationGroupPolicy } from "../schemas/schemas_0";

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
 * <p>Returns the JSON of the IAM resource policy associated with the specified investigation group in a string. For example, <code>\{\"Version\":\"2012-10-17\",\"Statement\":[\{\"Effect\":\"Allow\",\"Principal\":\{\"Service\":\"aiops.alarms.cloudwatch.amazonaws.com\"\},\"Action\":[\"aiops:CreateInvestigation\",\"aiops:CreateInvestigationEvent\"],\"Resource\":\"*\",\"Condition\":\{\"StringEquals\":\{\"aws:SourceAccount\":\"111122223333\"\},\"ArnLike\":\{\"aws:SourceArn\":\"arn:aws:cloudwatch:us-east-1:111122223333:alarm:*\"\}\}\}]\}</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AIOpsClient, GetInvestigationGroupPolicyCommand } from "@aws-sdk/client-aiops"; // ES Modules import
 * // const { AIOpsClient, GetInvestigationGroupPolicyCommand } = require("@aws-sdk/client-aiops"); // CommonJS import
 * // import type { AIOpsClientConfig } from "@aws-sdk/client-aiops";
 * const config = {}; // type is AIOpsClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AIOps", "GetInvestigationGroupPolicy", {})
  .n("AIOpsClient", "GetInvestigationGroupPolicyCommand")
  .sc(GetInvestigationGroupPolicy)
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
