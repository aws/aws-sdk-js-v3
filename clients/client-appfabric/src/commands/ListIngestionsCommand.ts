// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListIngestionsRequest, ListIngestionsResponse } from "../models/models_0";
import { ListIngestions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIngestionsCommand}.
 */
export interface ListIngestionsCommandInput extends ListIngestionsRequest {}
/**
 * @public
 *
 * The output of {@link ListIngestionsCommand}.
 */
export interface ListIngestionsCommandOutput extends ListIngestionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all ingestions configured for an app bundle.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, ListIngestionsCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, ListIngestionsCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // import type { AppFabricClientConfig } from "@aws-sdk/client-appfabric";
 * const config = {}; // type is AppFabricClientConfig
 * const client = new AppFabricClient(config);
 * const input = { // ListIngestionsRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListIngestionsCommand(input);
 * const response = await client.send(command);
 * // { // ListIngestionsResponse
 * //   ingestions: [ // IngestionList // required
 * //     { // IngestionSummary
 * //       arn: "STRING_VALUE", // required
 * //       app: "STRING_VALUE", // required
 * //       tenantId: "STRING_VALUE", // required
 * //       state: "enabled" || "disabled", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIngestionsCommandInput - {@link ListIngestionsCommandInput}
 * @returns {@link ListIngestionsCommandOutput}
 * @see {@link ListIngestionsCommandInput} for command's `input` shape.
 * @see {@link ListIngestionsCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *          with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link AppFabricServiceException}
 * <p>Base exception class for all service exceptions from AppFabric service.</p>
 *
 *
 * @public
 */
export class ListIngestionsCommand extends $Command
  .classBuilder<
    ListIngestionsCommandInput,
    ListIngestionsCommandOutput,
    AppFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppFabricClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FabricFrontEndService", "ListIngestions", {})
  .n("AppFabricClient", "ListIngestionsCommand")
  .sc(ListIngestions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIngestionsRequest;
      output: ListIngestionsResponse;
    };
    sdk: {
      input: ListIngestionsCommandInput;
      output: ListIngestionsCommandOutput;
    };
  };
}
