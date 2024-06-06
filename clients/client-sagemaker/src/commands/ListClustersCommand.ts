// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListClustersRequest, ListClustersResponse } from "../models/models_3";
import { de_ListClustersCommand, se_ListClustersCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListClustersCommand}.
 */
export interface ListClustersCommandInput extends ListClustersRequest {}
/**
 * @public
 *
 * The output of {@link ListClustersCommand}.
 */
export interface ListClustersCommandOutput extends ListClustersResponse, __MetadataBearer {}

/**
 * <p>Retrieves the list of SageMaker HyperPod clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListClustersCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListClustersCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListClustersRequest
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NameContains: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   SortBy: "CREATION_TIME" || "NAME",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListClustersCommand(input);
 * const response = await client.send(command);
 * // { // ListClustersResponse
 * //   NextToken: "STRING_VALUE", // required
 * //   ClusterSummaries: [ // ClusterSummaries // required
 * //     { // ClusterSummary
 * //       ClusterArn: "STRING_VALUE", // required
 * //       ClusterName: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       ClusterStatus: "Creating" || "Deleting" || "Failed" || "InService" || "RollingBack" || "SystemUpdating" || "Updating", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListClustersCommandInput - {@link ListClustersCommandInput}
 * @returns {@link ListClustersCommandOutput}
 * @see {@link ListClustersCommandInput} for command's `input` shape.
 * @see {@link ListClustersCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListClustersCommand extends $Command
  .classBuilder<
    ListClustersCommandInput,
    ListClustersCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "ListClusters", {})
  .n("SageMakerClient", "ListClustersCommand")
  .f(void 0, void 0)
  .ser(se_ListClustersCommand)
  .de(de_ListClustersCommand)
  .build() {}
