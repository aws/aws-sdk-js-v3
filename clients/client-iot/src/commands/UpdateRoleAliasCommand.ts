// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRoleAliasRequest, UpdateRoleAliasResponse } from "../models/models_2";
import { UpdateRoleAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRoleAliasCommand}.
 */
export interface UpdateRoleAliasCommandInput extends UpdateRoleAliasRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRoleAliasCommand}.
 */
export interface UpdateRoleAliasCommandOutput extends UpdateRoleAliasResponse, __MetadataBearer {}

/**
 * Updates a role alias.
 *
 * Requires permission to access the [UpdateRoleAlias](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * > **Important:** The value of [`credentialDurationSeconds`](https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateRoleAlias.html#iot-UpdateRoleAlias-request-credentialDurationSeconds) must be less than or equal to the maximum session duration of the IAM role that the role alias references. For more information, see [Modifying a role maximum session duration (Amazon Web Services API)](https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-managingrole-editing-api.html#roles-modify_max-session-duration-api) from the Amazon Web Services Identity and Access Management User Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateRoleAliasCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateRoleAliasCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateRoleAliasRequest
 *   roleAlias: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE",
 *   credentialDurationSeconds: Number("int"),
 * };
 * const command = new UpdateRoleAliasCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRoleAliasResponse
 * //   roleAlias: "STRING_VALUE",
 * //   roleAliasArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateRoleAliasCommandInput - {@link UpdateRoleAliasCommandInput}
 * @returns {@link UpdateRoleAliasCommandOutput}
 * @see {@link UpdateRoleAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateRoleAliasCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class UpdateRoleAliasCommand extends command<UpdateRoleAliasCommandInput, UpdateRoleAliasCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRoleAlias",
  UpdateRoleAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRoleAliasRequest;
      output: UpdateRoleAliasResponse;
    };
    sdk: {
      input: UpdateRoleAliasCommandInput;
      output: UpdateRoleAliasCommandOutput;
    };
  };
}
