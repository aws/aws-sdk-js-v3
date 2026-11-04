// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEnrollmentConfigurationRequest, GetEnrollmentConfigurationResponse } from "../models/models_0";
import { GetEnrollmentConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the current enrollment configuration for Compute Optimizer Automation.
 *
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
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You are not authorized to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error occurred while processing the request.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameter values are not valid.
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
export class GetEnrollmentConfigurationCommand extends command<GetEnrollmentConfigurationCommandInput, GetEnrollmentConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetEnrollmentConfiguration",
  GetEnrollmentConfiguration$
) {
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
