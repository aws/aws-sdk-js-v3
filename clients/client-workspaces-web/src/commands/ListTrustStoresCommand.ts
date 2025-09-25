// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTrustStoresRequest, ListTrustStoresResponse } from "../models/models_0";
import { ListTrustStores } from "../schemas/schemas_6_ListTrustStores";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTrustStoresCommand}.
 */
export interface ListTrustStoresCommandInput extends ListTrustStoresRequest {}
/**
 * @public
 *
 * The output of {@link ListTrustStoresCommand}.
 */
export interface ListTrustStoresCommandOutput extends ListTrustStoresResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of trust stores.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListTrustStoresCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListTrustStoresCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // ListTrustStoresRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTrustStoresCommand(input);
 * const response = await client.send(command);
 * // { // ListTrustStoresResponse
 * //   trustStores: [ // TrustStoreSummaryList
 * //     { // TrustStoreSummary
 * //       trustStoreArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTrustStoresCommandInput - {@link ListTrustStoresCommandInput}
 * @returns {@link ListTrustStoresCommandOutput}
 * @see {@link ListTrustStoresCommandInput} for command's `input` shape.
 * @see {@link ListTrustStoresCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 * @throws {@link WorkSpacesWebServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesWeb service.</p>
 *
 *
 * @public
 */
export class ListTrustStoresCommand extends $Command
  .classBuilder<
    ListTrustStoresCommandInput,
    ListTrustStoresCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "ListTrustStores", {})
  .n("WorkSpacesWebClient", "ListTrustStoresCommand")
  .sc(ListTrustStores)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrustStoresRequest;
      output: ListTrustStoresResponse;
    };
    sdk: {
      input: ListTrustStoresCommandInput;
      output: ListTrustStoresCommandOutput;
    };
  };
}
