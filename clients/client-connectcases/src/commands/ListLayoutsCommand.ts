// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListLayoutsRequest, ListLayoutsResponse } from "../models/models_0";
import { ListLayouts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLayoutsCommand}.
 */
export interface ListLayoutsCommandInput extends ListLayoutsRequest {}
/**
 * @public
 *
 * The output of {@link ListLayoutsCommand}.
 */
export interface ListLayoutsCommandOutput extends ListLayoutsResponse, __MetadataBearer {}

/**
 * <p>Lists all layouts in the given cases domain. Each list item is a condensed summary object of the layout.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, ListLayoutsCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, ListLayoutsCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // ListLayoutsRequest
 *   domainId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListLayoutsCommand(input);
 * const response = await client.send(command);
 * // { // ListLayoutsResponse
 * //   layouts: [ // LayoutSummaryList // required
 * //     { // LayoutSummary
 * //       layoutId: "STRING_VALUE", // required
 * //       layoutArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLayoutsCommandInput - {@link ListLayoutsCommandInput}
 * @returns {@link ListLayoutsCommandOutput}
 * @see {@link ListLayoutsCommandInput} for command's `input` shape.
 * @see {@link ListLayoutsCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 *
 * @public
 */
export class ListLayoutsCommand extends $Command
  .classBuilder<
    ListLayoutsCommandInput,
    ListLayoutsCommandOutput,
    ConnectCasesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCasesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCases", "ListLayouts", {})
  .n("ConnectCasesClient", "ListLayoutsCommand")
  .sc(ListLayouts$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLayoutsRequest;
      output: ListLayoutsResponse;
    };
    sdk: {
      input: ListLayoutsCommandInput;
      output: ListLayoutsCommandOutput;
    };
  };
}
