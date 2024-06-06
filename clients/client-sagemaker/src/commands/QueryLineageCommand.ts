// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { QueryLineageRequest, QueryLineageResponse } from "../models/models_4";
import { de_QueryLineageCommand, se_QueryLineageCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link QueryLineageCommand}.
 */
export interface QueryLineageCommandInput extends QueryLineageRequest {}
/**
 * @public
 *
 * The output of {@link QueryLineageCommand}.
 */
export interface QueryLineageCommandOutput extends QueryLineageResponse, __MetadataBearer {}

/**
 * <p>Use this action to inspect your lineage and discover relationships between entities.
 *          For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/querying-lineage-entities.html">
 *             Querying Lineage Entities</a> in the <i>Amazon SageMaker Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, QueryLineageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, QueryLineageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // QueryLineageRequest
 *   StartArns: [ // QueryLineageStartArns
 *     "STRING_VALUE",
 *   ],
 *   Direction: "Both" || "Ascendants" || "Descendants",
 *   IncludeEdges: true || false,
 *   Filters: { // QueryFilters
 *     Types: [ // QueryTypes
 *       "STRING_VALUE",
 *     ],
 *     LineageTypes: [ // QueryLineageTypes
 *       "TrialComponent" || "Artifact" || "Context" || "Action",
 *     ],
 *     CreatedBefore: new Date("TIMESTAMP"),
 *     CreatedAfter: new Date("TIMESTAMP"),
 *     ModifiedBefore: new Date("TIMESTAMP"),
 *     ModifiedAfter: new Date("TIMESTAMP"),
 *     Properties: { // QueryProperties
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   MaxDepth: Number("int"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new QueryLineageCommand(input);
 * const response = await client.send(command);
 * // { // QueryLineageResponse
 * //   Vertices: [ // Vertices
 * //     { // Vertex
 * //       Arn: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       LineageType: "TrialComponent" || "Artifact" || "Context" || "Action",
 * //     },
 * //   ],
 * //   Edges: [ // Edges
 * //     { // Edge
 * //       SourceArn: "STRING_VALUE",
 * //       DestinationArn: "STRING_VALUE",
 * //       AssociationType: "ContributedTo" || "AssociatedWith" || "DerivedFrom" || "Produced" || "SameAs",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param QueryLineageCommandInput - {@link QueryLineageCommandInput}
 * @returns {@link QueryLineageCommandOutput}
 * @see {@link QueryLineageCommandInput} for command's `input` shape.
 * @see {@link QueryLineageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class QueryLineageCommand extends $Command
  .classBuilder<
    QueryLineageCommandInput,
    QueryLineageCommandOutput,
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
  .s("SageMaker", "QueryLineage", {})
  .n("SageMakerClient", "QueryLineageCommand")
  .f(void 0, void 0)
  .ser(se_QueryLineageCommand)
  .de(de_QueryLineageCommand)
  .build() {}
