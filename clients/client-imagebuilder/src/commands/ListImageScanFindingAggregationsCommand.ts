// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListImageScanFindingAggregationsRequest,
  ListImageScanFindingAggregationsResponse,
} from "../models/models_0";
import { ListImageScanFindingAggregations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListImageScanFindingAggregationsCommandOutput extends ListImageScanFindingAggregationsResponse, __MetadataBearer {}

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
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
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
 *  <p>You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder
 * 			calls on your behalf. Retry with an increasing or variable delay between
 * 			requests.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A generic client error. This error usually indicates that the request
 * 			failed a validation check, such as when a downstream service rejects a
 * 			configured value.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>You have provided an invalid pagination token in your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example List image scan finding aggregations for an image pipeline
 * ```javascript
 * // The following example aggregates vulnerability findings for images that the specified pipeline created, with counts grouped by severity level.
 * const input = {
 *   filter: {
 *     name: "imagePipelineArn",
 *     values: [
 *       "arn:aws:imagebuilder:us-west-2:111122223333:image-pipeline/my-example-pipeline"
 *     ]
 *   }
 * };
 * const command = new ListImageScanFindingAggregationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   aggregationType: "imagePipelineArn",
 *   requestId: "b1c9dd23-7a9c-4a52-a1f7-3b8e9e17b2c4",
 *   responses: [
 *     {
 *       imagePipelineAggregation: {
 *         imagePipelineArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-pipeline/my-example-pipeline",
 *         severityCounts: {
 *           all: 25,
 *           critical: 1,
 *           high: 7,
 *           medium: 12
 *         }
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListImageScanFindingAggregationsCommand extends command<ListImageScanFindingAggregationsCommandInput, ListImageScanFindingAggregationsCommandOutput>(
  _ep0,
  _mw0,
  "ListImageScanFindingAggregations",
  ListImageScanFindingAggregations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImageScanFindingAggregationsRequest;
      output: ListImageScanFindingAggregationsResponse;
    };
    sdk: {
      input: ListImageScanFindingAggregationsCommandInput;
      output: ListImageScanFindingAggregationsCommandOutput;
    };
  };
}
