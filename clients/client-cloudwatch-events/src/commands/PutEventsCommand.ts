// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutEventsRequest, PutEventsResponse } from "../models/models_0";
import { de_PutEventsCommand, se_PutEventsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutEventsCommand}.
 */
export interface PutEventsCommandInput extends PutEventsRequest {}
/**
 * @public
 *
 * The output of {@link PutEventsCommand}.
 */
export interface PutEventsCommandOutput extends PutEventsResponse, __MetadataBearer {}

/**
 * <p>Sends custom events to Amazon EventBridge so that they can be matched to rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, PutEventsCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, PutEventsCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // PutEventsRequest
 *   Entries: [ // PutEventsRequestEntryList // required
 *     { // PutEventsRequestEntry
 *       Time: new Date("TIMESTAMP"),
 *       Source: "STRING_VALUE",
 *       Resources: [ // EventResourceList
 *         "STRING_VALUE",
 *       ],
 *       DetailType: "STRING_VALUE",
 *       Detail: "STRING_VALUE",
 *       EventBusName: "STRING_VALUE",
 *       TraceHeader: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutEventsCommand(input);
 * const response = await client.send(command);
 * // { // PutEventsResponse
 * //   FailedEntryCount: Number("int"),
 * //   Entries: [ // PutEventsResultEntryList
 * //     { // PutEventsResultEntry
 * //       EventId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutEventsCommandInput - {@link PutEventsCommandInput}
 * @returns {@link PutEventsCommandOutput}
 * @see {@link PutEventsCommandInput} for command's `input` shape.
 * @see {@link PutEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 *
 * @public
 */
export class PutEventsCommand extends $Command
  .classBuilder<
    PutEventsCommandInput,
    PutEventsCommandOutput,
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
  .s("AWSEvents", "PutEvents", {})
  .n("CloudWatchEventsClient", "PutEventsCommand")
  .f(void 0, void 0)
  .ser(se_PutEventsCommand)
  .de(de_PutEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEventsRequest;
      output: PutEventsResponse;
    };
    sdk: {
      input: PutEventsCommandInput;
      output: PutEventsCommandOutput;
    };
  };
}
