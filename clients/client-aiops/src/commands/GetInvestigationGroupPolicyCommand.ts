// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetInvestigationGroupPolicyRequest, GetInvestigationGroupPolicyResponse } from "../models/models_0";
import { GetInvestigationGroupPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetInvestigationGroupPolicyCommandOutput extends GetInvestigationGroupPolicyResponse, __MetadataBearer {}

/**
 * Returns the JSON of the IAM resource policy associated with the specified investigation group in a string. For example, `\{\"Version\":\"2012-10-17\",\"Statement\":[\{\"Effect\":\"Allow\",\"Principal\":\{\"Service\":\"aiops.alarms.cloudwatch.amazonaws.com\"\},\"Action\":[\"aiops:CreateInvestigation\",\"aiops:CreateInvestigationEvent\"],\"Resource\":\"*\",\"Condition\":\{\"StringEquals\":\{\"aws:SourceAccount\":\"111122223333\"\},\"ArnLike\":\{\"aws:SourceArn\":\"arn:aws:cloudwatch:us-east-1:111122223333:alarm:*\"\}\}\}]\}`.
 *
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
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. You can try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits. You can try again later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * This operation or its parameters aren't formatted correctly.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This operation couldn't be completed because of a conflict in resource states.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * Access id denied for this operation, or this operation is not valid for the specified resource.
 *
 * @throws {@link AIOpsServiceException}
 *
 * Base exception class for all service exceptions from AIOps service.
 *
 * @public
 */
export class GetInvestigationGroupPolicyCommand extends command<GetInvestigationGroupPolicyCommandInput, GetInvestigationGroupPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetInvestigationGroupPolicy",
  GetInvestigationGroupPolicy$
) {
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
