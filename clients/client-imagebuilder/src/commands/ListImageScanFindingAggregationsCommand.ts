// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListImageScanFindingAggregationsRequest, ListImageScanFindingAggregationsResponse } from "../models/models_0";
import {
  de_ListImageScanFindingAggregationsCommand,
  se_ListImageScanFindingAggregationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListImageScanFindingAggregationsCommand}.
 */
export interface ListImageScanFindingAggregationsCommandInput extends ListImageScanFindingAggregationsRequest {}
/**
 * @public
 *
 * The output of {@link ListImageScanFindingAggregationsCommand}.
 */
export interface ListImageScanFindingAggregationsCommandOutput
  extends ListImageScanFindingAggregationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of image scan aggregations for your account. You can filter by the type
 * 			of key that Image Builder uses to group results. For example, if you want to get a list of
 * 			findings by severity level for one of your pipelines, you might specify your pipeline
 * 			with the <code>imagePipelineArn</code> filter. If you don't specify a filter, Image Builder
 * 			returns an aggregation for your account.</p>
 *          <p>To streamline results, you can use the following filters in your request:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>accountId</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>imageBuildVersionArn</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>imagePipelineArn</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>vulnerabilityId</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImageScanFindingAggregationsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImageScanFindingAggregationsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // ListImageScanFindingAggregationsRequest
 *   filter: { // Filter
 *     name: "STRING_VALUE",
 *     values: [ // FilterValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListImageScanFindingAggregationsCommand(input);
 * const response = await client.send(command);
 * // { // ListImageScanFindingAggregationsResponse
 * //   requestId: "STRING_VALUE",
 * //   aggregationType: "STRING_VALUE",
 * //   responses: [ // ImageScanFindingAggregationsList
 * //     { // ImageScanFindingAggregation
 * //       accountAggregation: { // AccountAggregation
 * //         accountId: "STRING_VALUE",
 * //         severityCounts: { // SeverityCounts
 * //           all: Number("long"),
 * //           critical: Number("long"),
 * //           high: Number("long"),
 * //           medium: Number("long"),
 * //         },
 * //       },
 * //       imageAggregation: { // ImageAggregation
 * //         imageBuildVersionArn: "STRING_VALUE",
 * //         severityCounts: {
 * //           all: Number("long"),
 * //           critical: Number("long"),
 * //           high: Number("long"),
 * //           medium: Number("long"),
 * //         },
 * //       },
 * //       imagePipelineAggregation: { // ImagePipelineAggregation
 * //         imagePipelineArn: "STRING_VALUE",
 * //         severityCounts: {
 * //           all: Number("long"),
 * //           critical: Number("long"),
 * //           high: Number("long"),
 * //           medium: Number("long"),
 * //         },
 * //       },
 * //       vulnerabilityIdAggregation: { // VulnerabilityIdAggregation
 * //         vulnerabilityId: "STRING_VALUE",
 * //         severityCounts: {
 * //           all: Number("long"),
 * //           critical: Number("long"),
 * //           high: Number("long"),
 * //           medium: Number("long"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImageScanFindingAggregationsCommandInput - {@link ListImageScanFindingAggregationsCommandInput}
 * @returns {@link ListImageScanFindingAggregationsCommandOutput}
 * @see {@link ListImageScanFindingAggregationsCommandInput} for command's `input` shape.
 * @see {@link ListImageScanFindingAggregationsCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>You have provided an invalid pagination token in your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 * @public
 */
export class ListImageScanFindingAggregationsCommand extends $Command
  .classBuilder<
    ListImageScanFindingAggregationsCommandInput,
    ListImageScanFindingAggregationsCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("imagebuilder", "ListImageScanFindingAggregations", {})
  .n("ImagebuilderClient", "ListImageScanFindingAggregationsCommand")
  .f(void 0, void 0)
  .ser(se_ListImageScanFindingAggregationsCommand)
  .de(de_ListImageScanFindingAggregationsCommand)
  .build() {}
