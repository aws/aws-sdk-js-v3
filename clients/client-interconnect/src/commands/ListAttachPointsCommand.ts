// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InterconnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InterconnectClient";
import type { ListAttachPointsRequest, ListAttachPointsResponse } from "../models/models_0";
import { ListAttachPoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAttachPointsCommand}.
 */
export interface ListAttachPointsCommandInput extends ListAttachPointsRequest {}
/**
 * @public
 *
 * The output of {@link ListAttachPointsCommand}.
 */
export interface ListAttachPointsCommandOutput extends ListAttachPointsResponse, __MetadataBearer {}

/**
 * <p>Lists all Attach Points the caller has access to that are valid for the specified <a>Environment</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InterconnectClient, ListAttachPointsCommand } from "@aws-sdk/client-interconnect"; // ES Modules import
 * // const { InterconnectClient, ListAttachPointsCommand } = require("@aws-sdk/client-interconnect"); // CommonJS import
 * // import type { InterconnectClientConfig } from "@aws-sdk/client-interconnect";
 * const config = {}; // type is InterconnectClientConfig
 * const client = new InterconnectClient(config);
 * const input = { // ListAttachPointsRequest
 *   environmentId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAttachPointsCommand(input);
 * const response = await client.send(command);
 * // { // ListAttachPointsResponse
 * //   attachPoints: [ // AttachPointDescriptorList // required
 * //     { // AttachPointDescriptor
 * //       type: "DirectConnectGateway", // required
 * //       identifier: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAttachPointsCommandInput - {@link ListAttachPointsCommandInput}
 * @returns {@link ListAttachPointsCommandOutput}
 * @see {@link ListAttachPointsCommandInput} for command's `input` shape.
 * @see {@link ListAttachPointsCommandOutput} for command's `response` shape.
 * @see {@link InterconnectClientResolvedConfig | config} for InterconnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The calling principal is not allowed to access the specified resource, or the resource does not exist.</p>
 *
 * @throws {@link InterconnectClientException} (client fault)
 *  <p>The request was denied due to incorrect client supplied parameters.</p>
 *
 * @throws {@link InterconnectServerException} (server fault)
 *  <p>The request resulted in an exception internal to the service.</p>
 *
 * @throws {@link InterconnectValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request specifies a resource that does not exist on the server.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The requested operation would result in the calling principal exceeding their allotted quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link InterconnectServiceException}
 * <p>Base exception class for all service exceptions from Interconnect service.</p>
 *
 *
 * @example List Attach Points
 * ```javascript
 * //
 * const input = {
 *   environmentId: "mce-aws-acme-1"
 * };
 * const command = new ListAttachPointsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   attachPoints: [
 *     {
 *       identifier: "90392BE3-219C-47FD-BBA5-03DF76D2542A",
 *       name: "My DirectConnectGateway",
 *       type: "DirectConnectGateway"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAttachPointsCommand extends $Command
  .classBuilder<
    ListAttachPointsCommandInput,
    ListAttachPointsCommandOutput,
    InterconnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InterconnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Interconnect", "ListAttachPoints", {})
  .n("InterconnectClient", "ListAttachPointsCommand")
  .sc(ListAttachPoints$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAttachPointsRequest;
      output: ListAttachPointsResponse;
    };
    sdk: {
      input: ListAttachPointsCommandInput;
      output: ListAttachPointsCommandOutput;
    };
  };
}
