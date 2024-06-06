// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAnalyzedResourcesRequest, ListAnalyzedResourcesResponse } from "../models/models_0";
import { de_ListAnalyzedResourcesCommand, se_ListAnalyzedResourcesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAnalyzedResourcesCommand}.
 */
export interface ListAnalyzedResourcesCommandInput extends ListAnalyzedResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListAnalyzedResourcesCommand}.
 */
export interface ListAnalyzedResourcesCommandOutput extends ListAnalyzedResourcesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of resources of the specified type that have been analyzed by the
 *          specified external access analyzer. This action is not supported for unused access
 *          analyzers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ListAnalyzedResourcesCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ListAnalyzedResourcesCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // ListAnalyzedResourcesRequest
 *   analyzerArn: "STRING_VALUE", // required
 *   resourceType: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAnalyzedResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListAnalyzedResourcesResponse
 * //   analyzedResources: [ // AnalyzedResourcesList // required
 * //     { // AnalyzedResourceSummary
 * //       resourceArn: "STRING_VALUE", // required
 * //       resourceOwnerAccount: "STRING_VALUE", // required
 * //       resourceType: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAnalyzedResourcesCommandInput - {@link ListAnalyzedResourcesCommandInput}
 * @returns {@link ListAnalyzedResourcesCommandOutput}
 * @see {@link ListAnalyzedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListAnalyzedResourcesCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 * @public
 */
export class ListAnalyzedResourcesCommand extends $Command
  .classBuilder<
    ListAnalyzedResourcesCommandInput,
    ListAnalyzedResourcesCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AccessAnalyzer", "ListAnalyzedResources", {})
  .n("AccessAnalyzerClient", "ListAnalyzedResourcesCommand")
  .f(void 0, void 0)
  .ser(se_ListAnalyzedResourcesCommand)
  .de(de_ListAnalyzedResourcesCommand)
  .build() {}
