// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutApplicationAssignmentConfigurationRequest,
  PutApplicationAssignmentConfigurationResponse,
} from "../models/models_0";
import { PutApplicationAssignmentConfiguration } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutApplicationAssignmentConfigurationCommand}.
 */
export interface PutApplicationAssignmentConfigurationCommandInput
  extends PutApplicationAssignmentConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutApplicationAssignmentConfigurationCommand}.
 */
export interface PutApplicationAssignmentConfigurationCommandOutput
  extends PutApplicationAssignmentConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Configure how users gain access to an application. If <code>AssignmentsRequired</code> is <code>true</code> (default value), users don’t have access to the application unless an assignment is created using the <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateApplicationAssignment.html">CreateApplicationAssignment API</a>. If <code>false</code>, all users have access to the application. If an assignment is created using <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateApplicationAssignment.html">CreateApplicationAssignment</a>., the user retains access if <code>AssignmentsRequired</code> is set to <code>true</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, PutApplicationAssignmentConfigurationCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, PutApplicationAssignmentConfigurationCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // PutApplicationAssignmentConfigurationRequest
 *   ApplicationArn: "STRING_VALUE", // required
 *   AssignmentRequired: true || false, // required
 * };
 * const command = new PutApplicationAssignmentConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutApplicationAssignmentConfigurationCommandInput - {@link PutApplicationAssignmentConfigurationCommandInput}
 * @returns {@link PutApplicationAssignmentConfigurationCommandOutput}
 * @see {@link PutApplicationAssignmentConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutApplicationAssignmentConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 *
 * @public
 */
export class PutApplicationAssignmentConfigurationCommand extends $Command
  .classBuilder<
    PutApplicationAssignmentConfigurationCommandInput,
    PutApplicationAssignmentConfigurationCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "PutApplicationAssignmentConfiguration", {})
  .n("SSOAdminClient", "PutApplicationAssignmentConfigurationCommand")
  .sc(PutApplicationAssignmentConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutApplicationAssignmentConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutApplicationAssignmentConfigurationCommandInput;
      output: PutApplicationAssignmentConfigurationCommandOutput;
    };
  };
}
