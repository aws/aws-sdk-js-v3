// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDbParameterGroupsInput, ListDbParameterGroupsOutput } from "../models/models_0";
import { ListDbParameterGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of Timestream for InfluxDB DB parameter groups.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found or does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by Timestream for InfluxDB.
 *
 * @throws {@link TimestreamInfluxDBServiceException}
 *
 * Base exception class for all service exceptions from TimestreamInfluxDB service.
 *
 * @public
 */
export class ListDbParameterGroupsCommand extends command<ListDbParameterGroupsCommandInput, ListDbParameterGroupsCommandOutput>(
  _ep0,
  _mw0,
  "ListDbParameterGroups",
  ListDbParameterGroups$
) {
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
