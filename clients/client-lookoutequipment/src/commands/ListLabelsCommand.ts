// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { ListLabelsRequest, ListLabelsResponse } from "../models/models_0";
import { ListLabels } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLabelsCommand}.
 */
export interface ListLabelsCommandInput extends ListLabelsRequest {}
/**
 * @public
 *
 * The output of {@link ListLabelsCommand}.
 */
export interface ListLabelsCommandOutput extends ListLabelsResponse, __MetadataBearer {}

/**
 * <p> Provides a list of labels. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListLabelsCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListLabelsCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // ListLabelsRequest
 *   LabelGroupName: "STRING_VALUE", // required
 *   IntervalStartTime: new Date("TIMESTAMP"),
 *   IntervalEndTime: new Date("TIMESTAMP"),
 *   FaultCode: "STRING_VALUE",
 *   Equipment: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListLabelsCommand(input);
 * const response = await client.send(command);
 * // { // ListLabelsResponse
 * //   NextToken: "STRING_VALUE",
 * //   LabelSummaries: [ // LabelSummaries
 * //     { // LabelSummary
 * //       LabelGroupName: "STRING_VALUE",
 * //       LabelId: "STRING_VALUE",
 * //       LabelGroupArn: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       Rating: "ANOMALY" || "NO_ANOMALY" || "NEUTRAL",
 * //       FaultCode: "STRING_VALUE",
 * //       Equipment: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListLabelsCommandInput - {@link ListLabelsCommandInput}
 * @returns {@link ListLabelsCommandOutput}
 * @see {@link ListLabelsCommandInput} for command's `input` shape.
 * @see {@link ListLabelsCommandOutput} for command's `response` shape.
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
export class ListLabelsCommand extends $Command
  .classBuilder<
    ListLabelsCommandInput,
    ListLabelsCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLookoutEquipmentFrontendService", "ListLabels", {})
  .n("LookoutEquipmentClient", "ListLabelsCommand")
  .sc(ListLabels)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLabelsRequest;
      output: ListLabelsResponse;
    };
    sdk: {
      input: ListLabelsCommandInput;
      output: ListLabelsCommandOutput;
    };
  };
}
