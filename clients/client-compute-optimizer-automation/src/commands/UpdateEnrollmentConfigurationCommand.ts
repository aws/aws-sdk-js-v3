// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateEnrollmentConfigurationRequest, UpdateEnrollmentConfigurationResponse } from "../models/models_0";
import { UpdateEnrollmentConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateEnrollmentConfigurationCommandOutput extends UpdateEnrollmentConfigurationResponse, __MetadataBearer {}

/**
 * Updates your account’s Compute Optimizer Automation enrollment configuration.
 *
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
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You are not authorized to perform this action.
 *
 * @throws {@link IdempotencyTokenInUseException} (client fault)
 *
 * The specified client token is already in use.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *
 * Exception thrown when the same client token is used with different parameters, indicating a mismatch in idempotent request parameters.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error occurred while processing the request.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link NotManagementAccountException} (client fault)
 *
 * The operation can only be performed by a management account.
 *
 * @throws {@link OptInRequiredException} (client fault)
 *
 * The account must be opted in to Compute Optimizer Automation before performing this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ComputeOptimizerAutomationServiceException}
 *
 * Base exception class for all service exceptions from ComputeOptimizerAutomation service.
 *
 * @public
 */
export class UpdateEnrollmentConfigurationCommand extends command<UpdateEnrollmentConfigurationCommandInput, UpdateEnrollmentConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEnrollmentConfiguration",
  UpdateEnrollmentConfiguration$
) {
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
