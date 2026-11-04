// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetApplicationSessionConfigurationRequest,
  GetApplicationSessionConfigurationResponse,
} from "../models/models_0";
import { GetApplicationSessionConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetApplicationSessionConfigurationCommandOutput extends GetApplicationSessionConfigurationResponse, __MetadataBearer {}

/**
 * Retrieves the session configuration for an application in IAM Identity Center.
 *
 * The session configuration determines how users can access an application. This includes whether user background sessions are enabled. User background sessions allow users to start a job on a supported Amazon Web Services managed application without having to remain signed in to an active session while the job runs.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Indicates that a requested resource is not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Indicates that the principal has crossed the throttling limits of the API operations.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed because it contains a syntax error.
 *
 * @throws {@link SSOAdminServiceException}
 *
 * Base exception class for all service exceptions from SSOAdmin service.
 *
 * @public
 */
export class GetApplicationSessionConfigurationCommand extends command<GetApplicationSessionConfigurationCommandInput, GetApplicationSessionConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetApplicationSessionConfiguration",
  GetApplicationSessionConfiguration$
) {
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
