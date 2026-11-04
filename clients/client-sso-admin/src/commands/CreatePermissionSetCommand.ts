// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePermissionSetRequest, CreatePermissionSetResponse } from "../models/models_0";
import { CreatePermissionSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePermissionSetCommand}.
 */
export interface CreatePermissionSetCommandInput extends CreatePermissionSetRequest {}
/**
 * @public
 *
 * The output of {@link CreatePermissionSetCommand}.
 */
export interface CreatePermissionSetCommandOutput extends CreatePermissionSetResponse, __MetadataBearer {}

/**
 * Creates a permission set within a specified IAM Identity Center instance.
 *
 * > **Note:** To grant users and groups access to Amazon Web Services account resources, use `CreateAccountAssignment`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, CreatePermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, CreatePermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // CreatePermissionSetRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   InstanceArn: "STRING_VALUE", // required
 *   SessionDuration: "STRING_VALUE",
 *   RelayState: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreatePermissionSetCommand(input);
 * const response = await client.send(command);
 * // { // CreatePermissionSetResponse
 * //   PermissionSet: { // PermissionSet
 * //     Name: "STRING_VALUE",
 * //     PermissionSetArn: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //     SessionDuration: "STRING_VALUE",
 * //     RelayState: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreatePermissionSetCommandInput - {@link CreatePermissionSetCommandInput}
 * @returns {@link CreatePermissionSetCommandOutput}
 * @see {@link CreatePermissionSetCommandInput} for command's `input` shape.
 * @see {@link CreatePermissionSetCommandOutput} for command's `response` shape.
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
export class CreatePermissionSetCommand extends command<CreatePermissionSetCommandInput, CreatePermissionSetCommandOutput>(
  _ep0,
  _mw0,
  "CreatePermissionSet",
  CreatePermissionSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePermissionSetRequest;
      output: CreatePermissionSetResponse;
    };
    sdk: {
      input: CreatePermissionSetCommandInput;
      output: CreatePermissionSetCommandOutput;
    };
  };
}
