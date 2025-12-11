// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPromptsRequest, ListPromptsResponse } from "../models/models_2";
import { ListPrompts } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPromptsCommand}.
 */
export interface ListPromptsCommandInput extends ListPromptsRequest {}
/**
 * @public
 *
 * The output of {@link ListPromptsCommand}.
 */
export interface ListPromptsCommandOutput extends ListPromptsResponse, __MetadataBearer {}

/**
 * <p>Provides information about the prompts for the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListPromptsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListPromptsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListPromptsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPromptsCommand(input);
 * const response = await client.send(command);
 * // { // ListPromptsResponse
 * //   PromptSummaryList: [ // PromptSummaryList
 * //     { // PromptSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPromptsCommandInput - {@link ListPromptsCommandInput}
 * @returns {@link ListPromptsCommandOutput}
 * @see {@link ListPromptsCommandInput} for command's `input` shape.
 * @see {@link ListPromptsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ListPromptsCommand extends $Command
  .classBuilder<
    ListPromptsCommandInput,
    ListPromptsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListPrompts", {})
  .n("ConnectClient", "ListPromptsCommand")
  .sc(ListPrompts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPromptsRequest;
      output: ListPromptsResponse;
    };
    sdk: {
      input: ListPromptsCommandInput;
      output: ListPromptsCommandOutput;
    };
  };
}
