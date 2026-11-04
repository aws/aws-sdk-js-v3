// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRoleAliasRequest, DeleteRoleAliasResponse } from "../models/models_0";
import { DeleteRoleAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRoleAliasCommand}.
 */
export interface DeleteRoleAliasCommandInput extends DeleteRoleAliasRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRoleAliasCommand}.
 */
export interface DeleteRoleAliasCommandOutput extends DeleteRoleAliasResponse, __MetadataBearer {}

/**
 * Deletes a role alias
 *
 * Requires permission to access the [DeleteRoleAlias](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteRoleAliasCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteRoleAliasCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeleteRoleAliasRequest
 *   roleAlias: "STRING_VALUE", // required
 * };
 * const command = new DeleteRoleAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRoleAliasCommandInput - {@link DeleteRoleAliasCommandInput}
 * @returns {@link DeleteRoleAliasCommandOutput}
 * @see {@link DeleteRoleAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteRoleAliasCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link DeleteConflictException} (client fault)
 *
 * You can't delete the resource because it is attached to one or more resources.
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
export class DeleteRoleAliasCommand extends command<DeleteRoleAliasCommandInput, DeleteRoleAliasCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRoleAlias",
  DeleteRoleAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRoleAliasRequest;
      output: {};
    };
    sdk: {
      input: DeleteRoleAliasCommandInput;
      output: DeleteRoleAliasCommandOutput;
    };
  };
}
