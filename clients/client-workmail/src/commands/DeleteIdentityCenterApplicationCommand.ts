// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIdentityCenterApplicationRequest, DeleteIdentityCenterApplicationResponse } from "../models/models_0";
import {
  de_DeleteIdentityCenterApplicationCommand,
  se_DeleteIdentityCenterApplicationCommand,
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
 * The input for {@link DeleteIdentityCenterApplicationCommand}.
 */
export interface DeleteIdentityCenterApplicationCommandInput extends DeleteIdentityCenterApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIdentityCenterApplicationCommand}.
 */
export interface DeleteIdentityCenterApplicationCommandOutput
  extends DeleteIdentityCenterApplicationResponse,
    __MetadataBearer {}

/**
 * <p>
 *          Deletes the IAM Identity Center application from WorkMail. This action does not affect the authentication settings for any WorkMail organizations.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteIdentityCenterApplicationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteIdentityCenterApplicationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WorkMailClient(config);
 * const input = { // DeleteIdentityCenterApplicationRequest
 *   ApplicationArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteIdentityCenterApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIdentityCenterApplicationCommandInput - {@link DeleteIdentityCenterApplicationCommandInput}
 * @returns {@link DeleteIdentityCenterApplicationCommandOutput}
 * @see {@link DeleteIdentityCenterApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteIdentityCenterApplicationCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 * @public
 */
export class DeleteIdentityCenterApplicationCommand extends $Command
  .classBuilder<
    DeleteIdentityCenterApplicationCommandInput,
    DeleteIdentityCenterApplicationCommandOutput,
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
  .s("WorkMailService", "DeleteIdentityCenterApplication", {})
  .n("WorkMailClient", "DeleteIdentityCenterApplicationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteIdentityCenterApplicationCommand)
  .de(de_DeleteIdentityCenterApplicationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIdentityCenterApplicationRequest;
      output: {};
    };
    sdk: {
      input: DeleteIdentityCenterApplicationCommandInput;
      output: DeleteIdentityCenterApplicationCommandOutput;
    };
  };
}
