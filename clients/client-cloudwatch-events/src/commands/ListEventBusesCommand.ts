// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEventBusesRequest, ListEventBusesResponse } from "../models/models_0";
import { de_ListEventBusesCommand, se_ListEventBusesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventBusesCommand}.
 */
export interface ListEventBusesCommandInput extends ListEventBusesRequest {}
/**
 * @public
 *
 * The output of {@link ListEventBusesCommand}.
 */
export interface ListEventBusesCommandOutput extends ListEventBusesResponse, __MetadataBearer {}

/**
 * <p>Lists all the event buses in your account, including the default event bus, custom event
 *       buses, and partner event buses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ListEventBusesCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ListEventBusesCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudWatchEventsClient(config);
 * const input = { // ListEventBusesRequest
 *   NamePrefix: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListEventBusesCommand(input);
 * const response = await client.send(command);
 * // { // ListEventBusesResponse
 * //   EventBuses: [ // EventBusList
 * //     { // EventBus
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Policy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventBusesCommandInput - {@link ListEventBusesCommandInput}
 * @returns {@link ListEventBusesCommandOutput}
 * @see {@link ListEventBusesCommandInput} for command's `input` shape.
 * @see {@link ListEventBusesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 * @public
 */
export class ListEventBusesCommand extends $Command
  .classBuilder<
    ListEventBusesCommandInput,
    ListEventBusesCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "ListEventBuses", {})
  .n("CloudWatchEventsClient", "ListEventBusesCommand")
  .f(void 0, void 0)
  .ser(se_ListEventBusesCommand)
  .de(de_ListEventBusesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventBusesRequest;
      output: ListEventBusesResponse;
    };
    sdk: {
      input: ListEventBusesCommandInput;
      output: ListEventBusesCommandOutput;
    };
  };
}
