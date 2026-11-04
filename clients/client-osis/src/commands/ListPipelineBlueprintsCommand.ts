// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPipelineBlueprintsRequest, ListPipelineBlueprintsResponse } from "../models/models_0";
import { ListPipelineBlueprints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPipelineBlueprintsCommand}.
 */
export interface ListPipelineBlueprintsCommandInput extends ListPipelineBlueprintsRequest {}
/**
 * @public
 *
 * The output of {@link ListPipelineBlueprintsCommand}.
 */
export interface ListPipelineBlueprintsCommandOutput extends ListPipelineBlueprintsResponse, __MetadataBearer {}

/**
 * Retrieves a list of all available blueprints for Data Prepper. For more information, see [Using blueprints to create a pipeline](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/creating-pipeline.html#pipeline-blueprint).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OSISClient, ListPipelineBlueprintsCommand } from "@aws-sdk/client-osis"; // ES Modules import
 * // const { OSISClient, ListPipelineBlueprintsCommand } = require("@aws-sdk/client-osis"); // CommonJS import
 * // import type { OSISClientConfig } from "@aws-sdk/client-osis";
 * const config = {}; // type is OSISClientConfig
 * const client = new OSISClient(config);
 * const input = {};
 * const command = new ListPipelineBlueprintsCommand(input);
 * const response = await client.send(command);
 * // { // ListPipelineBlueprintsResponse
 * //   Blueprints: [ // PipelineBlueprintsSummaryList
 * //     { // PipelineBlueprintSummary
 * //       BlueprintName: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       DisplayDescription: "STRING_VALUE",
 * //       Service: "STRING_VALUE",
 * //       UseCase: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPipelineBlueprintsCommandInput - {@link ListPipelineBlueprintsCommandInput}
 * @returns {@link ListPipelineBlueprintsCommandOutput}
 * @see {@link ListPipelineBlueprintsCommandInput} for command's `input` shape.
 * @see {@link ListPipelineBlueprintsCommandOutput} for command's `response` shape.
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
export class ListPipelineBlueprintsCommand extends command<ListPipelineBlueprintsCommandInput, ListPipelineBlueprintsCommandOutput>(
  _ep0,
  _mw0,
  "ListPipelineBlueprints",
  ListPipelineBlueprints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: ListPipelineBlueprintsResponse;
    };
    sdk: {
      input: ListPipelineBlueprintsCommandInput;
      output: ListPipelineBlueprintsCommandOutput;
    };
  };
}
