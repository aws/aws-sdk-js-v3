// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutApplicationAssignmentConfigurationRequest,
  PutApplicationAssignmentConfigurationResponse,
} from "../models/models_0";
import { PutApplicationAssignmentConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutApplicationAssignmentConfigurationCommand}.
 */
export interface PutApplicationAssignmentConfigurationCommandInput extends PutApplicationAssignmentConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutApplicationAssignmentConfigurationCommand}.
 */
export interface PutApplicationAssignmentConfigurationCommandOutput extends PutApplicationAssignmentConfigurationResponse, __MetadataBearer {}

/**
 * Configure how users gain access to an application. If `AssignmentsRequired` is `true` (default value), users don’t have access to the application unless an assignment is created using the [CreateApplicationAssignment API](https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateApplicationAssignment.html). If `false`, all users have access to the application. If an assignment is created using [CreateApplicationAssignment](https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateApplicationAssignment.html)., the user retains access if `AssignmentsRequired` is set to `true`.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Occurs when a conflict with a previous successful write is detected. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.
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
export class PutApplicationAssignmentConfigurationCommand extends command<PutApplicationAssignmentConfigurationCommandInput, PutApplicationAssignmentConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutApplicationAssignmentConfiguration",
  PutApplicationAssignmentConfiguration$
) {
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
