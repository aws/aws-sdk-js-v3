// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GenerateRecommendationsRequest, GenerateRecommendationsResponse } from "../models/models_0";
import { de_GenerateRecommendationsCommand, se_GenerateRecommendationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GenerateRecommendationsCommand}.
 */
export interface GenerateRecommendationsCommandInput extends GenerateRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GenerateRecommendationsCommand}.
 */
export interface GenerateRecommendationsCommandOutput extends GenerateRecommendationsResponse, __MetadataBearer {}

/**
 * <p>Creates recommendations about where to migrate your data to in Amazon Web Services.
 *       Recommendations are generated based on information that DataSync Discovery collects about your
 *       on-premises storage system's resources. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-understand-recommendations.html">Recommendations
 *         provided by DataSync Discovery</a>.</p>
 *          <p>Once generated, you can view your recommendations by using the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeStorageSystemResources.html">DescribeStorageSystemResources</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, GenerateRecommendationsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, GenerateRecommendationsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // GenerateRecommendationsRequest
 *   DiscoveryJobArn: "STRING_VALUE", // required
 *   ResourceIds: [ // ResourceIds // required
 *     "STRING_VALUE",
 *   ],
 *   ResourceType: "SVM" || "VOLUME" || "CLUSTER", // required
 * };
 * const command = new GenerateRecommendationsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param GenerateRecommendationsCommandInput - {@link GenerateRecommendationsCommandInput}
 * @returns {@link GenerateRecommendationsCommandOutput}
 * @see {@link GenerateRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GenerateRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 * @public
 */
export class GenerateRecommendationsCommand extends $Command
  .classBuilder<
    GenerateRecommendationsCommandInput,
    GenerateRecommendationsCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FmrsService", "GenerateRecommendations", {})
  .n("DataSyncClient", "GenerateRecommendationsCommand")
  .f(void 0, void 0)
  .ser(se_GenerateRecommendationsCommand)
  .de(de_GenerateRecommendationsCommand)
  .build() {}
