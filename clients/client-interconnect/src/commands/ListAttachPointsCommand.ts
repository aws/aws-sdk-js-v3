// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAttachPointsRequest, ListAttachPointsResponse } from "../models/models_0";
import { ListAttachPoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists all Attach Points the caller has access to that are valid for the specified Environment.
 *
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
 *
 * The calling principal is not allowed to access the specified resource, or the resource does not exist.
 *
 * @throws {@link InterconnectClientException} (client fault)
 *
 * The request was denied due to incorrect client supplied parameters.
 *
 * @throws {@link InterconnectServerException} (server fault)
 *
 * The request resulted in an exception internal to the service.
 *
 * @throws {@link InterconnectValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request specifies a resource that does not exist on the server.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The requested operation would result in the calling principal exceeding their allotted quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link InterconnectServiceException}
 *
 * Base exception class for all service exceptions from Interconnect service.
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
export class ListAttachPointsCommand extends command<ListAttachPointsCommandInput, ListAttachPointsCommandOutput>(
  _ep0,
  _mw0,
  "ListAttachPoints",
  ListAttachPoints$
) {
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
