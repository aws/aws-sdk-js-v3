// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { TagResourceRequest } from "../models/models_0";
import { TagResource } from "../schemas/schemas_3_CreateDb";
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
 * The input for {@link TagResourceCommand}.
 */
export interface TagResourceCommandInput extends TagResourceRequest {}
/**
 * @public
 *
 * The output of {@link TagResourceCommand}.
 */
export interface TagResourceCommandOutput extends __MetadataBearer {}

/**
 * <p>Tags are composed of a Key/Value pairs. You can use tags to categorize and track your Timestream for InfluxDB resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamInfluxDBClient, TagResourceCommand } from "@aws-sdk/client-timestream-influxdb"; // ES Modules import
 * // const { TimestreamInfluxDBClient, TagResourceCommand } = require("@aws-sdk/client-timestream-influxdb"); // CommonJS import
 * // import type { TimestreamInfluxDBClientConfig } from "@aws-sdk/client-timestream-influxdb";
 * const config = {}; // type is TimestreamInfluxDBClientConfig
 * const client = new TimestreamInfluxDBClient(config);
 * const input = { // TagResourceRequest
 *   resourceArn: "STRING_VALUE", // required
 *   tags: { // RequestTagMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagResourceCommandInput - {@link TagResourceCommandInput}
 * @returns {@link TagResourceCommandOutput}
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link TimestreamInfluxDBClientResolvedConfig | config} for TimestreamInfluxDBClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found or does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds the service quota.</p>
 *
 * @throws {@link TimestreamInfluxDBServiceException}
 * <p>Base exception class for all service exceptions from TimestreamInfluxDB service.</p>
 *
 *
 * @public
 */
export class TagResourceCommand extends $Command
  .classBuilder<
    TagResourceCommandInput,
    TagResourceCommandOutput,
    TimestreamInfluxDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TimestreamInfluxDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonTimestreamInfluxDB", "TagResource", {})
  .n("TimestreamInfluxDBClient", "TagResourceCommand")
  .sc(TagResource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TagResourceRequest;
      output: {};
    };
    sdk: {
      input: TagResourceCommandInput;
      output: TagResourceCommandOutput;
    };
  };
}
