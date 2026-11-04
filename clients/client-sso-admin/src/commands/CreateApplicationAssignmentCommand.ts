// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateApplicationAssignmentRequest, CreateApplicationAssignmentResponse } from "../models/models_0";
import { CreateApplicationAssignment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateApplicationAssignmentCommand}.
 */
export interface CreateApplicationAssignmentCommandInput extends CreateApplicationAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateApplicationAssignmentCommand}.
 */
export interface CreateApplicationAssignmentCommandOutput extends CreateApplicationAssignmentResponse, __MetadataBearer {}

/**
 * Grant application access to a user or group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, CreateApplicationAssignmentCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, CreateApplicationAssignmentCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // CreateApplicationAssignmentRequest
 *   ApplicationArn: "STRING_VALUE", // required
 *   PrincipalId: "STRING_VALUE", // required
 *   PrincipalType: "USER" || "GROUP", // required
 * };
 * const command = new CreateApplicationAssignmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateApplicationAssignmentCommandInput - {@link CreateApplicationAssignmentCommandInput}
 * @returns {@link CreateApplicationAssignmentCommandOutput}
 * @see {@link CreateApplicationAssignmentCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationAssignmentCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Indicates that the principal has crossed the permitted number of resources that can be created.
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
export class CreateApplicationAssignmentCommand extends command<CreateApplicationAssignmentCommandInput, CreateApplicationAssignmentCommandOutput>(
  _ep0,
  _mw0,
  "CreateApplicationAssignment",
  CreateApplicationAssignment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApplicationAssignmentRequest;
      output: {};
    };
    sdk: {
      input: CreateApplicationAssignmentCommandInput;
      output: CreateApplicationAssignmentCommandOutput;
    };
  };
}
