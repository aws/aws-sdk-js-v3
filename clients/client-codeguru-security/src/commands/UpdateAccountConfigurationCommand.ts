// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAccountConfigurationRequest, UpdateAccountConfigurationResponse } from "../models/models_0";
import { UpdateAccountConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAccountConfigurationCommand}.
 */
export interface UpdateAccountConfigurationCommandInput extends UpdateAccountConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccountConfigurationCommand}.
 */
export interface UpdateAccountConfigurationCommandOutput extends UpdateAccountConfigurationResponse, __MetadataBearer {}

/**
 * Use to update the encryption configuration for an account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruSecurityClient, UpdateAccountConfigurationCommand } from "@aws-sdk/client-codeguru-security"; // ES Modules import
 * // const { CodeGuruSecurityClient, UpdateAccountConfigurationCommand } = require("@aws-sdk/client-codeguru-security"); // CommonJS import
 * // import type { CodeGuruSecurityClientConfig } from "@aws-sdk/client-codeguru-security";
 * const config = {}; // type is CodeGuruSecurityClientConfig
 * const client = new CodeGuruSecurityClient(config);
 * const input = { // UpdateAccountConfigurationRequest
 *   encryptionConfig: { // EncryptionConfig
 *     kmsKeyArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateAccountConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccountConfigurationResponse
 * //   encryptionConfig: { // EncryptionConfig
 * //     kmsKeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAccountConfigurationCommandInput - {@link UpdateAccountConfigurationCommandInput}
 * @returns {@link UpdateAccountConfigurationCommandOutput}
 * @see {@link UpdateAccountConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruSecurityClientResolvedConfig | config} for CodeGuruSecurityClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link CodeGuruSecurityServiceException}
 *
 * Base exception class for all service exceptions from CodeGuruSecurity service.
 *
 * @public
 */
export class UpdateAccountConfigurationCommand extends command<UpdateAccountConfigurationCommandInput, UpdateAccountConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAccountConfiguration",
  UpdateAccountConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccountConfigurationRequest;
      output: UpdateAccountConfigurationResponse;
    };
    sdk: {
      input: UpdateAccountConfigurationCommandInput;
      output: UpdateAccountConfigurationCommandOutput;
    };
  };
}
