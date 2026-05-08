// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetAccountUsageInput, GetAccountUsageOutput } from "../models/models_0";
import { GetAccountUsage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountUsageCommand}.
 */
export interface GetAccountUsageCommandInput extends GetAccountUsageInput {}
/**
 * @public
 *
 * The output of {@link GetAccountUsageCommand}.
 */
export interface GetAccountUsageCommandOutput extends GetAccountUsageOutput, __MetadataBearer {}

/**
 * Retrieves monthly account usage metrics and limits for the AWS account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, GetAccountUsageCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, GetAccountUsageCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = {};
 * const command = new GetAccountUsageCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountUsageOutput
 * //   monthlyAccountInvestigationHours: { // UsageMetric
 * //     limit: Number("int"), // required
 * //     usage: Number("double"), // required
 * //   },
 * //   monthlyAccountEvaluationHours: {
 * //     limit: Number("int"), // required
 * //     usage: Number("double"), // required
 * //   },
 * //   monthlyAccountSystemLearningHours: {
 * //     limit: Number("int"), // required
 * //     usage: Number("double"), // required
 * //   },
 * //   monthlyAccountOnDemandHours: {
 * //     limit: Number("int"), // required
 * //     usage: Number("double"), // required
 * //   },
 * //   usagePeriodStartTime: new Date("TIMESTAMP"), // required
 * //   usagePeriodEndTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetAccountUsageCommandInput - {@link GetAccountUsageCommandInput}
 * @returns {@link GetAccountUsageCommandOutput}
 * @see {@link GetAccountUsageCommandInput} for command's `input` shape.
 * @see {@link GetAccountUsageCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  This exception is thrown when the content size exceeds the allowed limit.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  One or more parameters provided in the request are invalid.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would exceed the service quota limit.
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class GetAccountUsageCommand extends $Command
  .classBuilder<
    GetAccountUsageCommandInput,
    GetAccountUsageCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "GetAccountUsage", {})
  .n("DevOpsAgentClient", "GetAccountUsageCommand")
  .sc(GetAccountUsage$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAccountUsageOutput;
    };
    sdk: {
      input: GetAccountUsageCommandInput;
      output: GetAccountUsageCommandOutput;
    };
  };
}
