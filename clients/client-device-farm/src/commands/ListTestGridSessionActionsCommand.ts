// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTestGridSessionActionsRequest, ListTestGridSessionActionsResult } from "../models/models_0";
import { de_ListTestGridSessionActionsCommand, se_ListTestGridSessionActionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTestGridSessionActionsCommand}.
 */
export interface ListTestGridSessionActionsCommandInput extends ListTestGridSessionActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestGridSessionActionsCommand}.
 */
export interface ListTestGridSessionActionsCommandOutput extends ListTestGridSessionActionsResult, __MetadataBearer {}

/**
 * <p>Returns a list of the actions taken in a <a>TestGridSession</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListTestGridSessionActionsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListTestGridSessionActionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // ListTestGridSessionActionsRequest
 *   sessionArn: "STRING_VALUE", // required
 *   maxResult: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestGridSessionActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestGridSessionActionsResult
 * //   actions: [ // TestGridSessionActions
 * //     { // TestGridSessionAction
 * //       action: "STRING_VALUE",
 * //       started: new Date("TIMESTAMP"),
 * //       duration: Number("long"),
 * //       statusCode: "STRING_VALUE",
 * //       requestMethod: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestGridSessionActionsCommandInput - {@link ListTestGridSessionActionsCommandInput}
 * @returns {@link ListTestGridSessionActionsCommandOutput}
 * @see {@link ListTestGridSessionActionsCommandInput} for command's `input` shape.
 * @see {@link ListTestGridSessionActionsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal exception was raised in the service. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you see this
 *          error. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 * @public
 */
export class ListTestGridSessionActionsCommand extends $Command
  .classBuilder<
    ListTestGridSessionActionsCommandInput,
    ListTestGridSessionActionsCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DeviceFarm_20150623", "ListTestGridSessionActions", {})
  .n("DeviceFarmClient", "ListTestGridSessionActionsCommand")
  .f(void 0, void 0)
  .ser(se_ListTestGridSessionActionsCommand)
  .de(de_ListTestGridSessionActionsCommand)
  .build() {}
