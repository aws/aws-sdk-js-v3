// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { DeleteRoleAliasRequest, DeleteRoleAliasResponse } from "../models/models_0";
import { DeleteRoleAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a role alias</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteRoleAlias</a> action.</p>
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
 *  <p>You can't delete the resource because it is attached to one or more
 *          resources.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class DeleteRoleAliasCommand extends $Command
  .classBuilder<
    DeleteRoleAliasCommandInput,
    DeleteRoleAliasCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DeleteRoleAlias", {})
  .n("IoTClient", "DeleteRoleAliasCommand")
  .sc(DeleteRoleAlias$)
  .build() {
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
