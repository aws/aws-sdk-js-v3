// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateIdentityCenterApplicationRequest, CreateIdentityCenterApplicationResponse } from "../models/models_0";
import {
  de_CreateIdentityCenterApplicationCommand,
  se_CreateIdentityCenterApplicationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIdentityCenterApplicationCommand}.
 */
export interface CreateIdentityCenterApplicationCommandInput extends CreateIdentityCenterApplicationRequest {}
/**
 * @public
 *
 * The output of {@link CreateIdentityCenterApplicationCommand}.
 */
export interface CreateIdentityCenterApplicationCommandOutput
  extends CreateIdentityCenterApplicationResponse,
    __MetadataBearer {}

/**
 * <p>
 *          Creates the WorkMail application in IAM Identity Center that can be used later in the WorkMail - IdC integration. For more information, see PutIdentityProviderConfiguration. This action does not affect the authentication settings for any WorkMail organizations.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CreateIdentityCenterApplicationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CreateIdentityCenterApplicationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // CreateIdentityCenterApplicationRequest
 *   Name: "STRING_VALUE", // required
 *   InstanceArn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateIdentityCenterApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateIdentityCenterApplicationResponse
 * //   ApplicationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateIdentityCenterApplicationCommandInput - {@link CreateIdentityCenterApplicationCommandInput}
 * @returns {@link CreateIdentityCenterApplicationCommandOutput}
 * @see {@link CreateIdentityCenterApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateIdentityCenterApplicationCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class CreateIdentityCenterApplicationCommand extends $Command
  .classBuilder<
    CreateIdentityCenterApplicationCommandInput,
    CreateIdentityCenterApplicationCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkMailService", "CreateIdentityCenterApplication", {})
  .n("WorkMailClient", "CreateIdentityCenterApplicationCommand")
  .f(void 0, void 0)
  .ser(se_CreateIdentityCenterApplicationCommand)
  .de(de_CreateIdentityCenterApplicationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIdentityCenterApplicationRequest;
      output: CreateIdentityCenterApplicationResponse;
    };
    sdk: {
      input: CreateIdentityCenterApplicationCommandInput;
      output: CreateIdentityCenterApplicationCommandOutput;
    };
  };
}
