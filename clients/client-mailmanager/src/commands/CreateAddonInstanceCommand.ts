// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import type { CreateAddonInstanceRequest, CreateAddonInstanceResponse } from "../models/models_0";
import { CreateAddonInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAddonInstanceCommand}.
 */
export interface CreateAddonInstanceCommandInput extends CreateAddonInstanceRequest {}
/**
 * @public
 *
 * The output of {@link CreateAddonInstanceCommand}.
 */
export interface CreateAddonInstanceCommandOutput extends CreateAddonInstanceResponse, __MetadataBearer {}

/**
 * <p>Creates an Add On instance for the subscription indicated in the request. The resulting Amazon Resource Name (ARN) can be used in a conditional statement for a rule set or traffic policy. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, CreateAddonInstanceCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, CreateAddonInstanceCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // CreateAddonInstanceRequest
 *   ClientToken: "STRING_VALUE",
 *   AddonSubscriptionId: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAddonInstanceCommand(input);
 * const response = await client.send(command);
 * // { // CreateAddonInstanceResponse
 * //   AddonInstanceId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAddonInstanceCommandInput - {@link CreateAddonInstanceCommandInput}
 * @returns {@link CreateAddonInstanceCommandOutput}
 * @see {@link CreateAddonInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateAddonInstanceCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when a requested resource is not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Occurs when an operation exceeds a predefined service quota or limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 *
 * @public
 */
export class CreateAddonInstanceCommand extends $Command
  .classBuilder<
    CreateAddonInstanceCommandInput,
    CreateAddonInstanceCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "CreateAddonInstance", {})
  .n("MailManagerClient", "CreateAddonInstanceCommand")
  .sc(CreateAddonInstance$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAddonInstanceRequest;
      output: CreateAddonInstanceResponse;
    };
    sdk: {
      input: CreateAddonInstanceCommandInput;
      output: CreateAddonInstanceCommandOutput;
    };
  };
}
