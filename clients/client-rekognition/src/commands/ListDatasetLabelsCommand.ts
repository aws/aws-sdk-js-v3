// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDatasetLabelsRequest, ListDatasetLabelsResponse } from "../models/models_0";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { ListDatasetLabels } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDatasetLabelsCommand}.
 */
export interface ListDatasetLabelsCommandInput extends ListDatasetLabelsRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasetLabelsCommand}.
 */
export interface ListDatasetLabelsCommandOutput extends ListDatasetLabelsResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation applies only to Amazon Rekognition Custom Labels.</p>
 *          </note>
 *          <p>Lists the labels in a dataset. Amazon Rekognition Custom Labels uses labels to describe images. For more information, see
 *    <a href="https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/md-labeling-images.html">Labeling images</a>.
 * </p>
 *          <p>
 *       Lists the labels in a dataset. Amazon Rekognition Custom Labels uses labels to describe images. For more information, see Labeling images
 *       in the <i>Amazon Rekognition Custom Labels Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, ListDatasetLabelsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, ListDatasetLabelsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // ListDatasetLabelsRequest
 *   DatasetArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDatasetLabelsCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetLabelsResponse
 * //   DatasetLabelDescriptions: [ // DatasetLabelDescriptions
 * //     { // DatasetLabelDescription
 * //       LabelName: "STRING_VALUE",
 * //       LabelStats: { // DatasetLabelStats
 * //         EntryCount: Number("int"),
 * //         BoundingBoxCount: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetLabelsCommandInput - {@link ListDatasetLabelsCommandInput}
 * @returns {@link ListDatasetLabelsCommandOutput}
 * @see {@link ListDatasetLabelsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetLabelsCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Pagination token in the request is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is already being used.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ResourceNotReadyException} (client fault)
 *  <p>The requested resource isn't ready. For example,
 *          this exception occurs when you call <code>DetectCustomLabels</code> with a
 *          model version that isn't deployed. </p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 *
 * @example To list the entries in an Amazon Rekognition Custom Labels dataset
 * ```javascript
 * // Lists the JSON line entries in an Amazon Rekognition Custom Labels dataset.
 * const input = {
 *   DatasetArn: "arn:aws:rekognition:us-east-1:111122223333:project/my-proj-2/dataset/train/1690564858106",
 *   MaxResults: 100,
 *   NextToken: ""
 * };
 * const command = new ListDatasetLabelsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DatasetLabelDescriptions: [
 *     {
 *       LabelName: "camellia",
 *       LabelStats: {
 *         EntryCount: 1
 *       }
 *     },
 *     {
 *       LabelName: "with_leaves",
 *       LabelStats: {
 *         EntryCount: 2
 *       }
 *     },
 *     {
 *       LabelName: "mediterranean_spurge",
 *       LabelStats: {
 *         EntryCount: 1
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListDatasetLabelsCommand extends $Command
  .classBuilder<
    ListDatasetLabelsCommandInput,
    ListDatasetLabelsCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RekognitionService", "ListDatasetLabels", {})
  .n("RekognitionClient", "ListDatasetLabelsCommand")
  .sc(ListDatasetLabels)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatasetLabelsRequest;
      output: ListDatasetLabelsResponse;
    };
    sdk: {
      input: ListDatasetLabelsCommandInput;
      output: ListDatasetLabelsCommandOutput;
    };
  };
}
