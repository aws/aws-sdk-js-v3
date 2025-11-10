// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListMonitorsRequest, ListMonitorsResponse } from "../models/models_1";
import { ListMonitors } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMonitorsCommand}.
 */
export interface ListMonitorsCommandInput extends ListMonitorsRequest {}
/**
 * @public
 *
 * The output of {@link ListMonitorsCommand}.
 */
export interface ListMonitorsCommandOutput extends ListMonitorsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of your monitors in Deadline Cloud.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListMonitorsCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListMonitorsCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // ListMonitorsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListMonitorsCommand(input);
 * const response = await client.send(command);
 * // { // ListMonitorsResponse
 * //   nextToken: "STRING_VALUE",
 * //   monitors: [ // MonitorSummaries // required
 * //     { // MonitorSummary
 * //       monitorId: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE", // required
 * //       subdomain: "STRING_VALUE", // required
 * //       url: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //       identityCenterInstanceArn: "STRING_VALUE", // required
 * //       identityCenterApplicationArn: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       createdBy: "STRING_VALUE", // required
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMonitorsCommandInput - {@link ListMonitorsCommandInput}
 * @returns {@link ListMonitorsCommandOutput}
 * @see {@link ListMonitorsCommandInput} for command's `input` shape.
 * @see {@link ListMonitorsCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class ListMonitorsCommand extends $Command
  .classBuilder<
    ListMonitorsCommandInput,
    ListMonitorsCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "ListMonitors", {})
  .n("DeadlineClient", "ListMonitorsCommand")
  .sc(ListMonitors)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMonitorsRequest;
      output: ListMonitorsResponse;
    };
    sdk: {
      input: ListMonitorsCommandInput;
      output: ListMonitorsCommandOutput;
    };
  };
}
