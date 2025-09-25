// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { GetAddonSubscriptionRequest, GetAddonSubscriptionResponse } from "../models/models_0";
import { GetAddonSubscription } from "../schemas/schemas_3_Addon";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAddonSubscriptionCommand}.
 */
export interface GetAddonSubscriptionCommandInput extends GetAddonSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link GetAddonSubscriptionCommand}.
 */
export interface GetAddonSubscriptionCommandOutput extends GetAddonSubscriptionResponse, __MetadataBearer {}

/**
 * <p>Gets detailed information about an Add On subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, GetAddonSubscriptionCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, GetAddonSubscriptionCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // GetAddonSubscriptionRequest
 *   AddonSubscriptionId: "STRING_VALUE", // required
 * };
 * const command = new GetAddonSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // GetAddonSubscriptionResponse
 * //   AddonName: "STRING_VALUE",
 * //   AddonSubscriptionArn: "STRING_VALUE",
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetAddonSubscriptionCommandInput - {@link GetAddonSubscriptionCommandInput}
 * @returns {@link GetAddonSubscriptionCommandOutput}
 * @see {@link GetAddonSubscriptionCommandInput} for command's `input` shape.
 * @see {@link GetAddonSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when a requested resource is not found.</p>
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
export class GetAddonSubscriptionCommand extends $Command
  .classBuilder<
    GetAddonSubscriptionCommandInput,
    GetAddonSubscriptionCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "GetAddonSubscription", {})
  .n("MailManagerClient", "GetAddonSubscriptionCommand")
  .sc(GetAddonSubscription)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAddonSubscriptionRequest;
      output: GetAddonSubscriptionResponse;
    };
    sdk: {
      input: GetAddonSubscriptionCommandInput;
      output: GetAddonSubscriptionCommandOutput;
    };
  };
}
