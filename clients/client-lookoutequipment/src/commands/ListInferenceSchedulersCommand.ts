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
import type { ListInferenceSchedulersRequest, ListInferenceSchedulersResponse } from "../models/models_0";
import { ListInferenceSchedulers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInferenceSchedulersCommand}.
 */
export interface ListInferenceSchedulersCommandInput extends ListInferenceSchedulersRequest {}
/**
 * @public
 *
 * The output of {@link ListInferenceSchedulersCommand}.
 */
export interface ListInferenceSchedulersCommandOutput extends ListInferenceSchedulersResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of all inference schedulers currently available for your account.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListInferenceSchedulersCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListInferenceSchedulersCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // ListInferenceSchedulersRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   InferenceSchedulerNameBeginsWith: "STRING_VALUE",
 *   ModelName: "STRING_VALUE",
 *   Status: "PENDING" || "RUNNING" || "STOPPING" || "STOPPED",
 * };
 * const command = new ListInferenceSchedulersCommand(input);
 * const response = await client.send(command);
 * // { // ListInferenceSchedulersResponse
 * //   NextToken: "STRING_VALUE",
 * //   InferenceSchedulerSummaries: [ // InferenceSchedulerSummaries
 * //     { // InferenceSchedulerSummary
 * //       ModelName: "STRING_VALUE",
 * //       ModelArn: "STRING_VALUE",
 * //       InferenceSchedulerName: "STRING_VALUE",
 * //       InferenceSchedulerArn: "STRING_VALUE",
 * //       Status: "PENDING" || "RUNNING" || "STOPPING" || "STOPPED",
 * //       DataDelayOffsetInMinutes: Number("long"),
 * //       DataUploadFrequency: "PT5M" || "PT10M" || "PT15M" || "PT30M" || "PT1H",
 * //       LatestInferenceResult: "ANOMALOUS" || "NORMAL",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListInferenceSchedulersCommandInput - {@link ListInferenceSchedulersCommandInput}
 * @returns {@link ListInferenceSchedulersCommandOutput}
 * @see {@link ListInferenceSchedulersCommandInput} for command's `input` shape.
 * @see {@link ListInferenceSchedulersCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListInferenceSchedulersCommand extends $Command
  .classBuilder<
    ListInferenceSchedulersCommandInput,
    ListInferenceSchedulersCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLookoutEquipmentFrontendService", "ListInferenceSchedulers", {})
  .n("LookoutEquipmentClient", "ListInferenceSchedulersCommand")
  .sc(ListInferenceSchedulers$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInferenceSchedulersRequest;
      output: ListInferenceSchedulersResponse;
    };
    sdk: {
      input: ListInferenceSchedulersCommandInput;
      output: ListInferenceSchedulersCommandOutput;
    };
  };
}
