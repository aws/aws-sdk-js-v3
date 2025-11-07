// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { ListRetrainingSchedulersRequest, ListRetrainingSchedulersResponse } from "../models/models_0";
import { ListRetrainingSchedulers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRetrainingSchedulersCommand}.
 */
export interface ListRetrainingSchedulersCommandInput extends ListRetrainingSchedulersRequest {}
/**
 * @public
 *
 * The output of {@link ListRetrainingSchedulersCommand}.
 */
export interface ListRetrainingSchedulersCommandOutput extends ListRetrainingSchedulersResponse, __MetadataBearer {}

/**
 * <p>Lists all retraining schedulers in your account, filtering by model name prefix and
 *          status. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListRetrainingSchedulersCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListRetrainingSchedulersCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // ListRetrainingSchedulersRequest
 *   ModelNameBeginsWith: "STRING_VALUE",
 *   Status: "PENDING" || "RUNNING" || "STOPPING" || "STOPPED",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRetrainingSchedulersCommand(input);
 * const response = await client.send(command);
 * // { // ListRetrainingSchedulersResponse
 * //   RetrainingSchedulerSummaries: [ // RetrainingSchedulerSummaries
 * //     { // RetrainingSchedulerSummary
 * //       ModelName: "STRING_VALUE",
 * //       ModelArn: "STRING_VALUE",
 * //       Status: "PENDING" || "RUNNING" || "STOPPING" || "STOPPED",
 * //       RetrainingStartDate: new Date("TIMESTAMP"),
 * //       RetrainingFrequency: "STRING_VALUE",
 * //       LookbackWindow: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRetrainingSchedulersCommandInput - {@link ListRetrainingSchedulersCommandInput}
 * @returns {@link ListRetrainingSchedulersCommandOutput}
 * @see {@link ListRetrainingSchedulersCommandInput} for command's `input` shape.
 * @see {@link ListRetrainingSchedulersCommandOutput} for command's `response` shape.
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
 * @example Listing retraining schedulers
 * ```javascript
 * //
 * const input = {
 *   MaxResults: 50
 * };
 * const command = new ListRetrainingSchedulersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   RetrainingSchedulerSummaries: [
 *     {
 *       LookbackWindow: "P180D",
 *       ModelArn: "arn:aws:lookoutequipment:us-east-1:123456789012:model/sample-model-1/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       ModelName: "sample-model-1",
 *       RetrainingFrequency: "P1M",
 *       RetrainingStartDate: "2023-06-01T00:00:00Z",
 *       Status: "RUNNING"
 *     },
 *     {
 *       LookbackWindow: "P180D",
 *       ModelArn: "arn:aws:lookoutequipment:us-east-1:123456789012:model/sample-model-2/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222",
 *       ModelName: "sample-model-2",
 *       RetrainingFrequency: "P30D",
 *       RetrainingStartDate: "2023-08-15T00:00:00Z",
 *       Status: "RUNNING"
 *     },
 *     {
 *       LookbackWindow: "P360D",
 *       ModelArn: "arn:aws:lookoutequipment:us-east-1:123456789012:model/sample-model-3/a1b2c3d4-5678-90ab-cdef-EXAMPLE33333",
 *       ModelName: "sample-model-3",
 *       RetrainingFrequency: "P1M",
 *       RetrainingStartDate: "2023-09-01T00:00:00Z",
 *       Status: "STOPPED"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListRetrainingSchedulersCommand extends $Command
  .classBuilder<
    ListRetrainingSchedulersCommandInput,
    ListRetrainingSchedulersCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLookoutEquipmentFrontendService", "ListRetrainingSchedulers", {})
  .n("LookoutEquipmentClient", "ListRetrainingSchedulersCommand")
  .sc(ListRetrainingSchedulers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRetrainingSchedulersRequest;
      output: ListRetrainingSchedulersResponse;
    };
    sdk: {
      input: ListRetrainingSchedulersCommandInput;
      output: ListRetrainingSchedulersCommandOutput;
    };
  };
}
