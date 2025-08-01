// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AIOpsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AIOpsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutInvestigationGroupPolicyRequest, PutInvestigationGroupPolicyResponse } from "../models/models_0";
import {
  de_PutInvestigationGroupPolicyCommand,
  se_PutInvestigationGroupPolicyCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutInvestigationGroupPolicyCommand}.
 */
export interface PutInvestigationGroupPolicyCommandInput extends PutInvestigationGroupPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutInvestigationGroupPolicyCommand}.
 */
export interface PutInvestigationGroupPolicyCommandOutput
  extends PutInvestigationGroupPolicyResponse,
    __MetadataBearer {}

/**
 * <p>Creates an IAM resource policy and assigns it to the specified investigation group.</p> <p>If you create your investigation group with <code>CreateInvestigationGroup</code> and you want to enable CloudWatch alarms to create investigations and add events to investigations, you must use this operation to create a policy similar to this example.</p> <p> <code> \{ "Version": "2008-10-17", "Statement": [ \{ "Effect": "Allow", "Principal": \{ "Service": "aiops.alarms.cloudwatch.amazonaws.com" \}, "Action": [ "aiops:CreateInvestigation", "aiops:CreateInvestigationEvent" ], "Resource": "*", "Condition": \{ "StringEquals": \{ "aws:SourceAccount": "account-id" \}, "ArnLike": \{ "aws:SourceArn": "arn:aws:cloudwatch:region:account-id:alarm:*" \} \} \} ] \} </code> </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AIOpsClient, PutInvestigationGroupPolicyCommand } from "@aws-sdk/client-aiops"; // ES Modules import
 * // const { AIOpsClient, PutInvestigationGroupPolicyCommand } = require("@aws-sdk/client-aiops"); // CommonJS import
 * const client = new AIOpsClient(config);
 * const input = { // PutInvestigationGroupPolicyRequest
 *   identifier: "STRING_VALUE", // required
 *   policy: "STRING_VALUE", // required
 * };
 * const command = new PutInvestigationGroupPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutInvestigationGroupPolicyResponse
 * //   investigationGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutInvestigationGroupPolicyCommandInput - {@link PutInvestigationGroupPolicyCommandInput}
 * @returns {@link PutInvestigationGroupPolicyCommandOutput}
 * @see {@link PutInvestigationGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link PutInvestigationGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link AIOpsClientResolvedConfig | config} for AIOpsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation couldn't be completed because of a conflict in resource states.</p>
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
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Access id denied for this operation, or this operation is not valid for the specified resource.</p>
 *
 * @throws {@link AIOpsServiceException}
 * <p>Base exception class for all service exceptions from AIOps service.</p>
 *
 *
 * @public
 */
export class PutInvestigationGroupPolicyCommand extends $Command
  .classBuilder<
    PutInvestigationGroupPolicyCommandInput,
    PutInvestigationGroupPolicyCommandOutput,
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
  .s("AIOps", "PutInvestigationGroupPolicy", {})
  .n("AIOpsClient", "PutInvestigationGroupPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutInvestigationGroupPolicyCommand)
  .de(de_PutInvestigationGroupPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutInvestigationGroupPolicyRequest;
      output: PutInvestigationGroupPolicyResponse;
    };
    sdk: {
      input: PutInvestigationGroupPolicyCommandInput;
      output: PutInvestigationGroupPolicyCommandOutput;
    };
  };
}
