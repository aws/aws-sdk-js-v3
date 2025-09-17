// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPipelineBlueprintsRequest, ListPipelineBlueprintsResponse } from "../models/models_0";
import { OSISClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OSISClient";
import { de_ListPipelineBlueprintsCommand, se_ListPipelineBlueprintsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves a list of all available blueprints for Data Prepper. For more information, see
 *     <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/creating-pipeline.html#pipeline-blueprint">Using
 *     blueprints to create a pipeline</a>.</p>
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
 *  <p>You don't have permissions to access the resource.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>Exception is thrown when an operation has been disabled.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request failed because of an unknown error, exception, or failure (the failure is
 *    internal to the service).</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>An invalid pagination token provided in the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing or invalid input fields.</p>
 *
 * @throws {@link OSISServiceException}
 * <p>Base exception class for all service exceptions from OSIS service.</p>
 *
 *
 * @public
 */
export class ListPipelineBlueprintsCommand extends $Command
  .classBuilder<
    ListPipelineBlueprintsCommandInput,
    ListPipelineBlueprintsCommandOutput,
    OSISClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OSISClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchIngestionService", "ListPipelineBlueprints", {})
  .n("OSISClient", "ListPipelineBlueprintsCommand")
  .f(void 0, void 0)
  .ser(se_ListPipelineBlueprintsCommand)
  .de(de_ListPipelineBlueprintsCommand)
  .build() {
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
