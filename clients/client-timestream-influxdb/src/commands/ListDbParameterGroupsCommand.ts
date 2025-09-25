// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDbParameterGroupsInput, ListDbParameterGroupsOutput } from "../models/models_0";
import { ListDbParameterGroups } from "../schemas/schemas_4_ListDb";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  TimestreamInfluxDBClientResolvedConfig,
} from "../TimestreamInfluxDBClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDbParameterGroupsCommand}.
 */
export interface ListDbParameterGroupsCommandInput extends ListDbParameterGroupsInput {}
/**
 * @public
 *
 * The output of {@link ListDbParameterGroupsCommand}.
 */
export interface ListDbParameterGroupsCommandOutput extends ListDbParameterGroupsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of Timestream for InfluxDB DB parameter groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamInfluxDBClient, ListDbParameterGroupsCommand } from "@aws-sdk/client-timestream-influxdb"; // ES Modules import
 * // const { TimestreamInfluxDBClient, ListDbParameterGroupsCommand } = require("@aws-sdk/client-timestream-influxdb"); // CommonJS import
 * // import type { TimestreamInfluxDBClientConfig } from "@aws-sdk/client-timestream-influxdb";
 * const config = {}; // type is TimestreamInfluxDBClientConfig
 * const client = new TimestreamInfluxDBClient(config);
 * const input = { // ListDbParameterGroupsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDbParameterGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListDbParameterGroupsOutput
 * //   items: [ // DbParameterGroupSummaryList // required
 * //     { // DbParameterGroupSummary
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDbParameterGroupsCommandInput - {@link ListDbParameterGroupsCommandInput}
 * @returns {@link ListDbParameterGroupsCommandOutput}
 * @see {@link ListDbParameterGroupsCommandInput} for command's `input` shape.
 * @see {@link ListDbParameterGroupsCommandOutput} for command's `response` shape.
 * @see {@link TimestreamInfluxDBClientResolvedConfig | config} for TimestreamInfluxDBClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found or does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Timestream for InfluxDB.</p>
 *
 * @throws {@link TimestreamInfluxDBServiceException}
 * <p>Base exception class for all service exceptions from TimestreamInfluxDB service.</p>
 *
 *
 * @public
 */
export class ListDbParameterGroupsCommand extends $Command
  .classBuilder<
    ListDbParameterGroupsCommandInput,
    ListDbParameterGroupsCommandOutput,
    TimestreamInfluxDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TimestreamInfluxDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonTimestreamInfluxDB", "ListDbParameterGroups", {})
  .n("TimestreamInfluxDBClient", "ListDbParameterGroupsCommand")
  .sc(ListDbParameterGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDbParameterGroupsInput;
      output: ListDbParameterGroupsOutput;
    };
    sdk: {
      input: ListDbParameterGroupsCommandInput;
      output: ListDbParameterGroupsCommandOutput;
    };
  };
}
