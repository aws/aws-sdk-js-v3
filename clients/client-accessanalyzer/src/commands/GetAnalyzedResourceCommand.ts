// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAnalyzedResourceRequest, GetAnalyzedResourceResponse } from "../models/models_0";
import { de_GetAnalyzedResourceCommand, se_GetAnalyzedResourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAnalyzedResourceCommand}.
 */
export interface GetAnalyzedResourceCommandInput extends GetAnalyzedResourceRequest {}
/**
 * @public
 *
 * The output of {@link GetAnalyzedResourceCommand}.
 */
export interface GetAnalyzedResourceCommandOutput extends GetAnalyzedResourceResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a resource that was analyzed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetAnalyzedResourceCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetAnalyzedResourceCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // GetAnalyzedResourceRequest
 *   analyzerArn: "STRING_VALUE", // required
 *   resourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetAnalyzedResourceCommand(input);
 * const response = await client.send(command);
 * // { // GetAnalyzedResourceResponse
 * //   resource: { // AnalyzedResource
 * //     resourceArn: "STRING_VALUE", // required
 * //     resourceType: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     analyzedAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     isPublic: true || false, // required
 * //     actions: [ // ActionList
 * //       "STRING_VALUE",
 * //     ],
 * //     sharedVia: [ // SharedViaList
 * //       "STRING_VALUE",
 * //     ],
 * //     status: "STRING_VALUE",
 * //     resourceOwnerAccount: "STRING_VALUE", // required
 * //     error: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAnalyzedResourceCommandInput - {@link GetAnalyzedResourceCommandInput}
 * @returns {@link GetAnalyzedResourceCommandOutput}
 * @see {@link GetAnalyzedResourceCommandInput} for command's `input` shape.
 * @see {@link GetAnalyzedResourceCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetAnalyzedResourceCommand extends $Command
  .classBuilder<
    GetAnalyzedResourceCommandInput,
    GetAnalyzedResourceCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AccessAnalyzer", "GetAnalyzedResource", {})
  .n("AccessAnalyzerClient", "GetAnalyzedResourceCommand")
  .f(void 0, void 0)
  .ser(se_GetAnalyzedResourceCommand)
  .de(de_GetAnalyzedResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAnalyzedResourceRequest;
      output: GetAnalyzedResourceResponse;
    };
    sdk: {
      input: GetAnalyzedResourceCommandInput;
      output: GetAnalyzedResourceCommandOutput;
    };
  };
}
