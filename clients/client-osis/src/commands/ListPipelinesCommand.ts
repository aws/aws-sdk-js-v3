// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPipelinesRequest, ListPipelinesResponse } from "../models/models_0";
import { ListPipelines$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPipelinesCommand}.
 */
export interface ListPipelinesCommandInput extends ListPipelinesRequest {}
/**
 * @public
 *
 * The output of {@link ListPipelinesCommand}.
 */
export interface ListPipelinesCommandOutput extends ListPipelinesResponse, __MetadataBearer {}

/**
 * Lists all OpenSearch Ingestion pipelines in the current Amazon Web Services account and Region. For more information, see [Viewing Amazon OpenSearch Ingestion pipelines](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/list-pipeline.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OSISClient, ListPipelinesCommand } from "@aws-sdk/client-osis"; // ES Modules import
 * // const { OSISClient, ListPipelinesCommand } = require("@aws-sdk/client-osis"); // CommonJS import
 * // import type { OSISClientConfig } from "@aws-sdk/client-osis";
 * const config = {}; // type is OSISClientConfig
 * const client = new OSISClient(config);
 * const input = { // ListPipelinesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPipelinesCommand(input);
 * const response = await client.send(command);
 * // { // ListPipelinesResponse
 * //   NextToken: "STRING_VALUE",
 * //   Pipelines: [ // PipelineSummaryList
 * //     { // PipelineSummary
 * //       Status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "UPDATE_FAILED" || "STARTING" || "START_FAILED" || "STOPPING" || "STOPPED",
 * //       StatusReason: { // PipelineStatusReason
 * //         Description: "STRING_VALUE",
 * //       },
 * //       PipelineName: "STRING_VALUE",
 * //       PipelineArn: "STRING_VALUE",
 * //       MinUnits: Number("int"),
 * //       MaxUnits: Number("int"),
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       Destinations: [ // PipelineDestinationList
 * //         { // PipelineDestination
 * //           ServiceName: "STRING_VALUE",
 * //           Endpoint: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPipelinesCommandInput - {@link ListPipelinesCommandInput}
 * @returns {@link ListPipelinesCommandOutput}
 * @see {@link ListPipelinesCommandInput} for command's `input` shape.
 * @see {@link ListPipelinesCommandOutput} for command's `response` shape.
 * @see {@link OSISClientResolvedConfig | config} for OSISClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permissions to access the resource.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *
 * Exception is thrown when an operation has been disabled.
 *
 * @throws {@link InternalException} (server fault)
 *
 * The request failed because of an unknown error, exception, or failure (the failure is internal to the service).
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *
 * An invalid pagination token provided in the request.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception for missing or invalid input fields.
 *
 * @throws {@link OSISServiceException}
 *
 * Base exception class for all service exceptions from OSIS service.
 *
 * @public
 */
export class ListPipelinesCommand extends command<ListPipelinesCommandInput, ListPipelinesCommandOutput>(
  _ep0,
  _mw0,
  "ListPipelines",
  ListPipelines$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPipelinesRequest;
      output: ListPipelinesResponse;
    };
    sdk: {
      input: ListPipelinesCommandInput;
      output: ListPipelinesCommandOutput;
    };
  };
}
