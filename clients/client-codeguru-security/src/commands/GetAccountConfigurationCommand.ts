// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccountConfigurationRequest, GetAccountConfigurationResponse } from "../models/models_0";
import { GetAccountConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccountConfigurationCommand}.
 */
export interface GetAccountConfigurationCommandInput extends GetAccountConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountConfigurationCommand}.
 */
export interface GetAccountConfigurationCommandOutput extends GetAccountConfigurationResponse, __MetadataBearer {}

/**
 * Use to get the encryption configuration for an account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruSecurityClient, GetAccountConfigurationCommand } from "@aws-sdk/client-codeguru-security"; // ES Modules import
 * // const { CodeGuruSecurityClient, GetAccountConfigurationCommand } = require("@aws-sdk/client-codeguru-security"); // CommonJS import
 * // import type { CodeGuruSecurityClientConfig } from "@aws-sdk/client-codeguru-security";
 * const config = {}; // type is CodeGuruSecurityClientConfig
 * const client = new CodeGuruSecurityClient(config);
 * const input = {};
 * const command = new GetAccountConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountConfigurationResponse
 * //   encryptionConfig: { // EncryptionConfig
 * //     kmsKeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountConfigurationCommandInput - {@link GetAccountConfigurationCommandInput}
 * @returns {@link GetAccountConfigurationCommandOutput}
 * @see {@link GetAccountConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAccountConfigurationCommandOutput} for command's `response` shape.
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
export class GetAccountConfigurationCommand extends command<GetAccountConfigurationCommandInput, GetAccountConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetAccountConfiguration",
  GetAccountConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAccountConfigurationResponse;
    };
    sdk: {
      input: GetAccountConfigurationCommandInput;
      output: GetAccountConfigurationCommandOutput;
    };
  };
}
