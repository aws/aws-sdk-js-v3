// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetApplicationSessionConfigurationRequest,
  GetApplicationSessionConfigurationResponse,
} from "../models/models_0";
import { GetApplicationSessionConfiguration } from "../schemas/schemas_21_ApplicationSessionConfiguration";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApplicationSessionConfigurationCommand}.
 */
export interface GetApplicationSessionConfigurationCommandInput extends GetApplicationSessionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationSessionConfigurationCommand}.
 */
export interface GetApplicationSessionConfigurationCommandOutput
  extends GetApplicationSessionConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the session configuration for an application in IAM Identity Center.</p> <p>The session configuration determines how users can access an application. This includes whether user background sessions are enabled. User background sessions allow users to start a job on a supported Amazon Web Services managed application without having to remain signed in to an active session while the job runs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, GetApplicationSessionConfigurationCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, GetApplicationSessionConfigurationCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // GetApplicationSessionConfigurationRequest
 *   ApplicationArn: "STRING_VALUE", // required
 * };
 * const command = new GetApplicationSessionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationSessionConfigurationResponse
 * //   UserBackgroundSessionApplicationStatus: "ENABLED" || "DISABLED",
 * // };
 *
 * ```
 *
 * @param GetApplicationSessionConfigurationCommandInput - {@link GetApplicationSessionConfigurationCommandInput}
 * @returns {@link GetApplicationSessionConfigurationCommandOutput}
 * @see {@link GetApplicationSessionConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetApplicationSessionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class GetApplicationSessionConfigurationCommand extends $Command
  .classBuilder<
    GetApplicationSessionConfigurationCommandInput,
    GetApplicationSessionConfigurationCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "GetApplicationSessionConfiguration", {})
  .n("SSOAdminClient", "GetApplicationSessionConfigurationCommand")
  .sc(GetApplicationSessionConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApplicationSessionConfigurationRequest;
      output: GetApplicationSessionConfigurationResponse;
    };
    sdk: {
      input: GetApplicationSessionConfigurationCommandInput;
      output: GetApplicationSessionConfigurationCommandOutput;
    };
  };
}
