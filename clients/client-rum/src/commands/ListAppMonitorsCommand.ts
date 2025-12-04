// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAppMonitorsRequest, ListAppMonitorsResponse } from "../models/models_0";
import type { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";
import { ListAppMonitors } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAppMonitorsCommand}.
 */
export interface ListAppMonitorsCommandInput extends ListAppMonitorsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppMonitorsCommand}.
 */
export interface ListAppMonitorsCommandOutput extends ListAppMonitorsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the Amazon CloudWatch RUM app monitors in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, ListAppMonitorsCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, ListAppMonitorsCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * // import type { RUMClientConfig } from "@aws-sdk/client-rum";
 * const config = {}; // type is RUMClientConfig
 * const client = new RUMClient(config);
 * const input = { // ListAppMonitorsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAppMonitorsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppMonitorsResponse
 * //   NextToken: "STRING_VALUE",
 * //   AppMonitorSummaries: [ // AppMonitorSummaryList
 * //     { // AppMonitorSummary
 * //       Name: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Created: "STRING_VALUE",
 * //       LastModified: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //       Platform: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAppMonitorsCommandInput - {@link ListAppMonitorsCommandInput}
 * @returns {@link ListAppMonitorsCommandOutput}
 * @see {@link ListAppMonitorsCommandInput} for command's `input` shape.
 * @see {@link ListAppMonitorsCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exception.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the arguments for the request is not valid.</p>
 *
 * @throws {@link RUMServiceException}
 * <p>Base exception class for all service exceptions from RUM service.</p>
 *
 *
 * @public
 */
export class ListAppMonitorsCommand extends $Command
  .classBuilder<
    ListAppMonitorsCommandInput,
    ListAppMonitorsCommandOutput,
    RUMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RUMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RUM", "ListAppMonitors", {})
  .n("RUMClient", "ListAppMonitorsCommand")
  .sc(ListAppMonitors)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAppMonitorsRequest;
      output: ListAppMonitorsResponse;
    };
    sdk: {
      input: ListAppMonitorsCommandInput;
      output: ListAppMonitorsCommandOutput;
    };
  };
}
