// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateRoleAliasRequest, CreateRoleAliasResponse } from "../models/models_0";
import { de_CreateRoleAliasCommand, se_CreateRoleAliasCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRoleAliasCommand}.
 */
export interface CreateRoleAliasCommandInput extends CreateRoleAliasRequest {}
/**
 * @public
 *
 * The output of {@link CreateRoleAliasCommand}.
 */
export interface CreateRoleAliasCommandOutput extends CreateRoleAliasResponse, __MetadataBearer {}

/**
 * <p>Creates a role alias.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateRoleAlias</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateRoleAliasCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateRoleAliasCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // CreateRoleAliasRequest
 *   roleAlias: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   credentialDurationSeconds: Number("int"),
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateRoleAliasCommand(input);
 * const response = await client.send(command);
 * // { // CreateRoleAliasResponse
 * //   roleAlias: "STRING_VALUE",
 * //   roleAliasArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateRoleAliasCommandInput - {@link CreateRoleAliasCommandInput}
 * @returns {@link CreateRoleAliasCommandOutput}
 * @see {@link CreateRoleAliasCommandInput} for command's `input` shape.
 * @see {@link CreateRoleAliasCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
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
 * @public
 */
export class CreateRoleAliasCommand extends $Command
  .classBuilder<
    CreateRoleAliasCommandInput,
    CreateRoleAliasCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "CreateRoleAlias", {})
  .n("IoTClient", "CreateRoleAliasCommand")
  .f(void 0, void 0)
  .ser(se_CreateRoleAliasCommand)
  .de(de_CreateRoleAliasCommand)
  .build() {}
