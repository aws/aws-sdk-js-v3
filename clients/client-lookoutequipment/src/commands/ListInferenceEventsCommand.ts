// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LookoutEquipmentClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LookoutEquipmentClient";
import type { ListInferenceEventsRequest, ListInferenceEventsResponse } from "../models/models_0";
import { ListInferenceEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInferenceEventsCommand}.
 */
export interface ListInferenceEventsCommandInput extends ListInferenceEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListInferenceEventsCommand}.
 */
export interface ListInferenceEventsCommandOutput extends ListInferenceEventsResponse, __MetadataBearer {}

/**
 * <p> Lists all inference events that have been found for the specified inference scheduler.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListInferenceEventsCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListInferenceEventsCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // ListInferenceEventsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   InferenceSchedulerName: "STRING_VALUE", // required
 *   IntervalStartTime: new Date("TIMESTAMP"), // required
 *   IntervalEndTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new ListInferenceEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListInferenceEventsResponse
 * //   NextToken: "STRING_VALUE",
 * //   InferenceEventSummaries: [ // InferenceEventSummaries
 * //     { // InferenceEventSummary
 * //       InferenceSchedulerArn: "STRING_VALUE",
 * //       InferenceSchedulerName: "STRING_VALUE",
 * //       EventStartTime: new Date("TIMESTAMP"),
 * //       EventEndTime: new Date("TIMESTAMP"),
 * //       Diagnostics: "STRING_VALUE",
 * //       EventDurationInSeconds: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListInferenceEventsCommandInput - {@link ListInferenceEventsCommandInput}
 * @returns {@link ListInferenceEventsCommandOutput}
 * @see {@link ListInferenceEventsCommandInput} for command's `input` shape.
 * @see {@link ListInferenceEventsCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have access to the resource.
 *       </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Processing of the request has failed because of an unknown error, exception or failure.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource requested could not be found. Verify the resource ID and retry your
 *          request. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services
 *          service that's being utilized. </p>
 *
 * @throws {@link LookoutEquipmentServiceException}
 * <p>Base exception class for all service exceptions from LookoutEquipment service.</p>
 *
 *
 * @public
 */
export class ListInferenceEventsCommand extends $Command
  .classBuilder<
    ListInferenceEventsCommandInput,
    ListInferenceEventsCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLookoutEquipmentFrontendService", "ListInferenceEvents", {})
  .n("LookoutEquipmentClient", "ListInferenceEventsCommand")
  .sc(ListInferenceEvents$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInferenceEventsRequest;
      output: ListInferenceEventsResponse;
    };
    sdk: {
      input: ListInferenceEventsCommandInput;
      output: ListInferenceEventsCommandOutput;
    };
  };
}
