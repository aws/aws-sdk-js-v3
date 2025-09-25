// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAccessTokensRequest, ListAccessTokensResponse } from "../models/models_0";
import { ListAccessTokens } from "../schemas/schemas_2_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccessTokensCommand}.
 */
export interface ListAccessTokensCommandInput extends ListAccessTokensRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessTokensCommand}.
 */
export interface ListAccessTokensCommandOutput extends ListAccessTokensResponse, __MetadataBearer {}

/**
 * <p>Lists all personal access tokens (PATs) associated with the user who calls the API. You can only list PATs associated with your Amazon Web Services Builder ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, ListAccessTokensCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, ListAccessTokensCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * // import type { CodeCatalystClientConfig } from "@aws-sdk/client-codecatalyst";
 * const config = {}; // type is CodeCatalystClientConfig
 * const client = new CodeCatalystClient(config);
 * const input = { // ListAccessTokensRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAccessTokensCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessTokensResponse
 * //   items: [ // AccessTokenSummaries // required
 * //     { // AccessTokenSummary
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       expiresTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccessTokensCommandInput - {@link ListAccessTokensCommandInput}
 * @returns {@link ListAccessTokensCommandOutput}
 * @see {@link ListAccessTokensCommandInput} for command's `input` shape.
 * @see {@link ListAccessTokensCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient access to perform this action. Verify that you are a member of a role that allows this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request was denied because the requested operation would cause a conflict with the current state of a service resource associated with the request.
 *        Another user might have updated the resource. Reload, make sure you have the latest data, and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied because the specified resource was not found. Verify that the spelling is correct and that you have access to the resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was denied because one or more resources has reached its limits for the tier the space belongs to. Either reduce
 *       the number of resources, or change the tier if applicable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied because an input failed to satisfy the constraints specified by the service. Check the spelling and input requirements, and then try again.</p>
 *
 * @throws {@link CodeCatalystServiceException}
 * <p>Base exception class for all service exceptions from CodeCatalyst service.</p>
 *
 *
 * @public
 */
export class ListAccessTokensCommand extends $Command
  .classBuilder<
    ListAccessTokensCommandInput,
    ListAccessTokensCommandOutput,
    CodeCatalystClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCatalystClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCatalyst", "ListAccessTokens", {})
  .n("CodeCatalystClient", "ListAccessTokensCommand")
  .sc(ListAccessTokens)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccessTokensRequest;
      output: ListAccessTokensResponse;
    };
    sdk: {
      input: ListAccessTokensCommandInput;
      output: ListAccessTokensCommandOutput;
    };
  };
}
