// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { ListModelVersionsRequest, ListModelVersionsResponse } from "../models/models_0";
import { de_ListModelVersionsCommand, se_ListModelVersionsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListModelVersionsCommand}.
 */
export interface ListModelVersionsCommandInput extends ListModelVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListModelVersionsCommand}.
 */
export interface ListModelVersionsCommandOutput extends ListModelVersionsResponse, __MetadataBearer {}

/**
 * <p>Generates a list of all model versions for a given model, including the model version,
 *          model version ARN, and status. To list a subset of versions, use the
 *             <code>MaxModelVersion</code> and <code>MinModelVersion</code> fields.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListModelVersionsCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListModelVersionsCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // ListModelVersionsRequest
 *   ModelName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Status: "IN_PROGRESS" || "SUCCESS" || "FAILED" || "IMPORT_IN_PROGRESS" || "CANCELED",
 *   SourceType: "TRAINING" || "RETRAINING" || "IMPORT",
 *   CreatedAtEndTime: new Date("TIMESTAMP"),
 *   CreatedAtStartTime: new Date("TIMESTAMP"),
 *   MaxModelVersion: Number("long"),
 *   MinModelVersion: Number("long"),
 * };
 * const command = new ListModelVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListModelVersionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   ModelVersionSummaries: [ // ModelVersionSummaries
 * //     { // ModelVersionSummary
 * //       ModelName: "STRING_VALUE",
 * //       ModelArn: "STRING_VALUE",
 * //       ModelVersion: Number("long"),
 * //       ModelVersionArn: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       Status: "IN_PROGRESS" || "SUCCESS" || "FAILED" || "IMPORT_IN_PROGRESS" || "CANCELED",
 * //       SourceType: "TRAINING" || "RETRAINING" || "IMPORT",
 * //       ModelQuality: "QUALITY_THRESHOLD_MET" || "CANNOT_DETERMINE_QUALITY" || "POOR_QUALITY_DETECTED",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListModelVersionsCommandInput - {@link ListModelVersionsCommandInput}
 * @returns {@link ListModelVersionsCommandOutput}
 * @see {@link ListModelVersionsCommandInput} for command's `input` shape.
 * @see {@link ListModelVersionsCommandOutput} for command's `response` shape.
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
export class ListModelVersionsCommand extends $Command
  .classBuilder<
    ListModelVersionsCommandInput,
    ListModelVersionsCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLookoutEquipmentFrontendService", "ListModelVersions", {})
  .n("LookoutEquipmentClient", "ListModelVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListModelVersionsCommand)
  .de(de_ListModelVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListModelVersionsRequest;
      output: ListModelVersionsResponse;
    };
    sdk: {
      input: ListModelVersionsCommandInput;
      output: ListModelVersionsCommandOutput;
    };
  };
}
