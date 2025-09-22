// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAnalysisTemplatesInput, ListAnalysisTemplatesOutput } from "../models/models_0";
import { ListAnalysisTemplates } from "../schemas/schemas_11_Analysis";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAnalysisTemplatesCommand}.
 */
export interface ListAnalysisTemplatesCommandInput extends ListAnalysisTemplatesInput {}
/**
 * @public
 *
 * The output of {@link ListAnalysisTemplatesCommand}.
 */
export interface ListAnalysisTemplatesCommandOutput extends ListAnalysisTemplatesOutput, __MetadataBearer {}

/**
 * <p>Lists analysis templates that the caller owns.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListAnalysisTemplatesCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListAnalysisTemplatesCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // ListAnalysisTemplatesInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAnalysisTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListAnalysisTemplatesOutput
 * //   nextToken: "STRING_VALUE",
 * //   analysisTemplateSummaries: [ // AnalysisTemplateSummaryList // required
 * //     { // AnalysisTemplateSummary
 * //       arn: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       membershipArn: "STRING_VALUE", // required
 * //       membershipId: "STRING_VALUE", // required
 * //       collaborationArn: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAnalysisTemplatesCommandInput - {@link ListAnalysisTemplatesCommandInput}
 * @returns {@link ListAnalysisTemplatesCommandOutput}
 * @see {@link ListAnalysisTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListAnalysisTemplatesCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 *
 * @public
 */
export class ListAnalysisTemplatesCommand extends $Command
  .classBuilder<
    ListAnalysisTemplatesCommandInput,
    ListAnalysisTemplatesCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "ListAnalysisTemplates", {})
  .n("CleanRoomsClient", "ListAnalysisTemplatesCommand")
  .sc(ListAnalysisTemplates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAnalysisTemplatesInput;
      output: ListAnalysisTemplatesOutput;
    };
    sdk: {
      input: ListAnalysisTemplatesCommandInput;
      output: ListAnalysisTemplatesCommandOutput;
    };
  };
}
