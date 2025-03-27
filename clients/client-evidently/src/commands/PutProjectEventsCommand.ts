// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { PutProjectEventsRequest, PutProjectEventsResponse } from "../models/models_0";
import { de_PutProjectEventsCommand, se_PutProjectEventsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutProjectEventsCommand}.
 */
export interface PutProjectEventsCommandInput extends PutProjectEventsRequest {}
/**
 * @public
 *
 * The output of {@link PutProjectEventsCommand}.
 */
export interface PutProjectEventsCommandOutput extends PutProjectEventsResponse, __MetadataBearer {}

/**
 * <p>Sends performance events to Evidently. These events can be used to evaluate a launch or
 *       an experiment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, PutProjectEventsCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, PutProjectEventsCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const input = { // PutProjectEventsRequest
 *   project: "STRING_VALUE", // required
 *   events: [ // EventList // required
 *     { // Event
 *       timestamp: new Date("TIMESTAMP"), // required
 *       type: "STRING_VALUE", // required
 *       data: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutProjectEventsCommand(input);
 * const response = await client.send(command);
 * // { // PutProjectEventsResponse
 * //   failedEventCount: Number("int"),
 * //   eventResults: [ // PutProjectEventsResultEntryList
 * //     { // PutProjectEventsResultEntry
 * //       eventId: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutProjectEventsCommandInput - {@link PutProjectEventsCommandInput}
 * @returns {@link PutProjectEventsCommandOutput}
 * @see {@link PutProjectEventsCommandInput} for command's `input` shape.
 * @see {@link PutProjectEventsCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 *
 * @example Post evaluation Event for Project
 * ```javascript
 * //
 * const input = {
 *   events: [
 *     {
 *       data: `{"feature":"ExampleFeature","entityId":"username@email.com","entityAttributes":{"browser":{"s":"Chrome"}},"variation":"variationA","type":"EXPERIMENT_RULE_MATCH","details":{"experiment":"Jan2020_landing_page_banner","treatment":"control","salt":"ADJNC1237ASDNU"}}`,
 *       timestamp: 1627580583,
 *       type: "aws.evidently.evaluation"
 *     }
 *   ],
 *   project: "ExampleProject"
 * };
 * const command = new PutProjectEventsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   eventResults: [
 *     {
 *       errorCode: "null",
 *       errorMessage: "null",
 *       eventId: "e55c1f5f-309b-440e-b0d8-64506987c20f"
 *     }
 *   ],
 *   failedEventCount: 0
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutProjectEventsCommand extends $Command
  .classBuilder<
    PutProjectEventsCommandInput,
    PutProjectEventsCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Evidently", "PutProjectEvents", {})
  .n("EvidentlyClient", "PutProjectEventsCommand")
  .f(void 0, void 0)
  .ser(se_PutProjectEventsCommand)
  .de(de_PutProjectEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutProjectEventsRequest;
      output: PutProjectEventsResponse;
    };
    sdk: {
      input: PutProjectEventsCommandInput;
      output: PutProjectEventsCommandOutput;
    };
  };
}
