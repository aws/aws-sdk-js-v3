// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ComputeOptimizerAutomationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComputeOptimizerAutomationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetEnrollmentConfigurationRequest, GetEnrollmentConfigurationResponse } from "../models/models_0";
import { GetEnrollmentConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEnrollmentConfigurationCommand}.
 */
export interface GetEnrollmentConfigurationCommandInput extends GetEnrollmentConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetEnrollmentConfigurationCommand}.
 */
export interface GetEnrollmentConfigurationCommandOutput extends GetEnrollmentConfigurationResponse, __MetadataBearer {}

/**
 * <p> Retrieves the current enrollment configuration for Compute Optimizer Automation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, GetEnrollmentConfigurationCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, GetEnrollmentConfigurationCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = {};
 * const command = new GetEnrollmentConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetEnrollmentConfigurationResponse
 * //   status: "Active" || "Inactive" || "Pending" || "Failed", // required
 * //   statusReason: "STRING_VALUE",
 * //   organizationRuleMode: "AnyAllowed" || "NoneAllowed",
 * //   lastUpdatedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetEnrollmentConfigurationCommandInput - {@link GetEnrollmentConfigurationCommandInput}
 * @returns {@link GetEnrollmentConfigurationCommandOutput}
 * @see {@link GetEnrollmentConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetEnrollmentConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerAutomationClientResolvedConfig | config} for ComputeOptimizerAutomationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p> You are not authorized to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal error occurred while processing the request. </p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p> One or more parameter values are not valid. </p>
 *
 * @throws {@link OptInRequiredException} (client fault)
 *  <p> The account must be opted in to Compute Optimizer Automation before performing this action. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified resource was not found. </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p> The service is temporarily unavailable. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link ComputeOptimizerAutomationServiceException}
 * <p>Base exception class for all service exceptions from ComputeOptimizerAutomation service.</p>
 *
 *
 * @public
 */
export class GetEnrollmentConfigurationCommand extends $Command
  .classBuilder<
    GetEnrollmentConfigurationCommandInput,
    GetEnrollmentConfigurationCommandOutput,
    ComputeOptimizerAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerAutomationService", "GetEnrollmentConfiguration", {})
  .n("ComputeOptimizerAutomationClient", "GetEnrollmentConfigurationCommand")
  .sc(GetEnrollmentConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetEnrollmentConfigurationResponse;
    };
    sdk: {
      input: GetEnrollmentConfigurationCommandInput;
      output: GetEnrollmentConfigurationCommandOutput;
    };
  };
}
