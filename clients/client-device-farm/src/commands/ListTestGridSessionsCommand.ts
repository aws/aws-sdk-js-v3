// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTestGridSessionsRequest, ListTestGridSessionsResult } from "../models/models_0";
import { de_ListTestGridSessionsCommand, se_ListTestGridSessionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTestGridSessionsCommand}.
 */
export interface ListTestGridSessionsCommandInput extends ListTestGridSessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestGridSessionsCommand}.
 */
export interface ListTestGridSessionsCommandOutput extends ListTestGridSessionsResult, __MetadataBearer {}

/**
 * <p>Retrieves a list of sessions for a <a>TestGridProject</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListTestGridSessionsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListTestGridSessionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // ListTestGridSessionsRequest
 *   projectArn: "STRING_VALUE", // required
 *   status: "ACTIVE" || "CLOSED" || "ERRORED",
 *   creationTimeAfter: new Date("TIMESTAMP"),
 *   creationTimeBefore: new Date("TIMESTAMP"),
 *   endTimeAfter: new Date("TIMESTAMP"),
 *   endTimeBefore: new Date("TIMESTAMP"),
 *   maxResult: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestGridSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestGridSessionsResult
 * //   testGridSessions: [ // TestGridSessions
 * //     { // TestGridSession
 * //       arn: "STRING_VALUE",
 * //       status: "ACTIVE" || "CLOSED" || "ERRORED",
 * //       created: new Date("TIMESTAMP"),
 * //       ended: new Date("TIMESTAMP"),
 * //       billingMinutes: Number("double"),
 * //       seleniumProperties: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestGridSessionsCommandInput - {@link ListTestGridSessionsCommandInput}
 * @returns {@link ListTestGridSessionsCommandOutput}
 * @see {@link ListTestGridSessionsCommandInput} for command's `input` shape.
 * @see {@link ListTestGridSessionsCommandOutput} for command's `response` shape.
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
export class ListTestGridSessionsCommand extends $Command
  .classBuilder<
    ListTestGridSessionsCommandInput,
    ListTestGridSessionsCommandOutput,
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
  .s("DeviceFarm_20150623", "ListTestGridSessions", {})
  .n("DeviceFarmClient", "ListTestGridSessionsCommand")
  .f(void 0, void 0)
  .ser(se_ListTestGridSessionsCommand)
  .de(de_ListTestGridSessionsCommand)
  .build() {}
