// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  AccessAnalyzerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetAnalyzedResourceRequest, GetAnalyzedResourceResponse } from "../models/models_0";
import { GetAnalyzedResource } from "../schemas/schemas_0";

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
 * <p>Retrieves information about a resource that was analyzed.</p> <note> <p>This action is supported only for external access analyzers.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetAnalyzedResourceCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetAnalyzedResourceCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "GetAnalyzedResource", {})
  .n("AccessAnalyzerClient", "GetAnalyzedResourceCommand")
  .sc(GetAnalyzedResource)
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
