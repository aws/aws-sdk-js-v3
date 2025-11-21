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
import { UpdateEnrollmentConfigurationRequest, UpdateEnrollmentConfigurationResponse } from "../models/models_0";
import { UpdateEnrollmentConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEnrollmentConfigurationCommand}.
 */
export interface UpdateEnrollmentConfigurationCommandInput extends UpdateEnrollmentConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEnrollmentConfigurationCommand}.
 */
export interface UpdateEnrollmentConfigurationCommandOutput
  extends UpdateEnrollmentConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates your account’s Compute Optimizer Automation enrollment configuration. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, UpdateEnrollmentConfigurationCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, UpdateEnrollmentConfigurationCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = { // UpdateEnrollmentConfigurationRequest
 *   status: "Active" || "Inactive" || "Pending" || "Failed", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateEnrollmentConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnrollmentConfigurationResponse
 * //   status: "Active" || "Inactive" || "Pending" || "Failed", // required
 * //   statusReason: "STRING_VALUE",
 * //   lastUpdatedTimestamp: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateEnrollmentConfigurationCommandInput - {@link UpdateEnrollmentConfigurationCommandInput}
 * @returns {@link UpdateEnrollmentConfigurationCommandOutput}
 * @see {@link UpdateEnrollmentConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateEnrollmentConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerAutomationClientResolvedConfig | config} for ComputeOptimizerAutomationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p> You are not authorized to perform this action. </p>
 *
 * @throws {@link IdempotencyTokenInUseException} (client fault)
 *  <p> The specified client token is already in use. </p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>Exception thrown when the same client token is used with different parameters, indicating a mismatch in idempotent request parameters.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal error occurred while processing the request. </p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p> One or more parameter values are not valid. </p>
 *
 * @throws {@link NotManagementAccountException} (client fault)
 *  <p> The operation can only be performed by a management account. </p>
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
export class UpdateEnrollmentConfigurationCommand extends $Command
  .classBuilder<
    UpdateEnrollmentConfigurationCommandInput,
    UpdateEnrollmentConfigurationCommandOutput,
    ComputeOptimizerAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerAutomationService", "UpdateEnrollmentConfiguration", {})
  .n("ComputeOptimizerAutomationClient", "UpdateEnrollmentConfigurationCommand")
  .sc(UpdateEnrollmentConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEnrollmentConfigurationRequest;
      output: UpdateEnrollmentConfigurationResponse;
    };
    sdk: {
      input: UpdateEnrollmentConfigurationCommandInput;
      output: UpdateEnrollmentConfigurationCommandOutput;
    };
  };
}
