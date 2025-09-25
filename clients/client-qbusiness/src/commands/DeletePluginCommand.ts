// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePluginRequest, DeletePluginResponse } from "../models/models_0";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { DeletePlugin } from "../schemas/schemas_16_Plugin";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePluginCommand}.
 */
export interface DeletePluginCommandInput extends DeletePluginRequest {}
/**
 * @public
 *
 * The output of {@link DeletePluginCommand}.
 */
export interface DeletePluginCommandOutput extends DeletePluginResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon Q Business plugin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, DeletePluginCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, DeletePluginCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // DeletePluginRequest
 *   applicationId: "STRING_VALUE", // required
 *   pluginId: "STRING_VALUE", // required
 * };
 * const command = new DeletePluginCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePluginCommandInput - {@link DeletePluginCommandInput}
 * @returns {@link DeletePluginCommandOutput}
 * @see {@link DeletePluginCommandInput} for command's `input` shape.
 * @see {@link DeletePluginCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class DeletePluginCommand extends $Command
  .classBuilder<
    DeletePluginCommandInput,
    DeletePluginCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "DeletePlugin", {})
  .n("QBusinessClient", "DeletePluginCommand")
  .sc(DeletePlugin)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePluginRequest;
      output: {};
    };
    sdk: {
      input: DeletePluginCommandInput;
      output: DeletePluginCommandOutput;
    };
  };
}
