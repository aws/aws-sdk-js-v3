// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListMetricStreamsInput, ListMetricStreamsOutput } from "../models/models_0";
import { de_ListMetricStreamsCommand, se_ListMetricStreamsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMetricStreamsCommand}.
 */
export interface ListMetricStreamsCommandInput extends ListMetricStreamsInput {}
/**
 * @public
 *
 * The output of {@link ListMetricStreamsCommand}.
 */
export interface ListMetricStreamsCommandOutput extends ListMetricStreamsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of metric streams in this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, ListMetricStreamsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, ListMetricStreamsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // ListMetricStreamsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMetricStreamsCommand(input);
 * const response = await client.send(command);
 * // { // ListMetricStreamsOutput
 * //   NextToken: "STRING_VALUE",
 * //   Entries: [ // MetricStreamEntries
 * //     { // MetricStreamEntry
 * //       Arn: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       LastUpdateDate: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE",
 * //       FirehoseArn: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //       OutputFormat: "json" || "opentelemetry0.7" || "opentelemetry1.0",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMetricStreamsCommandInput - {@link ListMetricStreamsCommandInput}
 * @returns {@link ListMetricStreamsCommandOutput}
 * @see {@link ListMetricStreamsCommandInput} for command's `input` shape.
 * @see {@link ListMetricStreamsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Request processing has failed due to some unknown error, exception, or
 *             failure.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The next token specified is invalid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of an input parameter is bad or out-of-range.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>An input parameter that is required is missing.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class ListMetricStreamsCommand extends $Command
  .classBuilder<
    ListMetricStreamsCommandInput,
    ListMetricStreamsCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GraniteServiceVersion20100801", "ListMetricStreams", {})
  .n("CloudWatchClient", "ListMetricStreamsCommand")
  .f(void 0, void 0)
  .ser(se_ListMetricStreamsCommand)
  .de(de_ListMetricStreamsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMetricStreamsInput;
      output: ListMetricStreamsOutput;
    };
    sdk: {
      input: ListMetricStreamsCommandInput;
      output: ListMetricStreamsCommandOutput;
    };
  };
}
