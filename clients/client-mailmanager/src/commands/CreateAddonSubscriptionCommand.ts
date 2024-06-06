// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import {
  CreateAddonSubscriptionRequest,
  CreateAddonSubscriptionRequestFilterSensitiveLog,
  CreateAddonSubscriptionResponse,
} from "../models/models_0";
import { de_CreateAddonSubscriptionCommand, se_CreateAddonSubscriptionCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAddonSubscriptionCommand}.
 */
export interface CreateAddonSubscriptionCommandInput extends CreateAddonSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link CreateAddonSubscriptionCommand}.
 */
export interface CreateAddonSubscriptionCommandOutput extends CreateAddonSubscriptionResponse, __MetadataBearer {}

/**
 * <p>Creates a subscription for an Add On representing the acceptance of its terms of use
 *             and additional pricing. The subscription can then be used to create an instance for use
 *             in rule sets or traffic policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, CreateAddonSubscriptionCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, CreateAddonSubscriptionCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * const client = new MailManagerClient(config);
 * const input = { // CreateAddonSubscriptionRequest
 *   ClientToken: "STRING_VALUE",
 *   AddonName: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAddonSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // CreateAddonSubscriptionResponse
 * //   AddonSubscriptionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAddonSubscriptionCommandInput - {@link CreateAddonSubscriptionCommandInput}
 * @returns {@link CreateAddonSubscriptionCommandOutput}
 * @see {@link CreateAddonSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateAddonSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
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
 * @public
 */
export class CreateAddonSubscriptionCommand extends $Command
  .classBuilder<
    CreateAddonSubscriptionCommandInput,
    CreateAddonSubscriptionCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "CreateAddonSubscription", {})
  .n("MailManagerClient", "CreateAddonSubscriptionCommand")
  .f(CreateAddonSubscriptionRequestFilterSensitiveLog, void 0)
  .ser(se_CreateAddonSubscriptionCommand)
  .de(de_CreateAddonSubscriptionCommand)
  .build() {}
