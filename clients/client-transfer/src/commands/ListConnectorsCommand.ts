// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListConnectorsRequest, ListConnectorsResponse } from "../models/models_0";
import { ListConnectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListConnectorsCommand}.
 */
export interface ListConnectorsCommandInput extends ListConnectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListConnectorsCommand}.
 */
export interface ListConnectorsCommandOutput extends ListConnectorsResponse, __MetadataBearer {}

/**
 * <p>Lists the connectors for the specified Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListConnectorsCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListConnectorsCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // ListConnectorsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListConnectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListConnectorsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Connectors: [ // ListedConnectors // required
 * //     { // ListedConnector
 * //       Arn: "STRING_VALUE",
 * //       ConnectorId: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListConnectorsCommandInput - {@link ListConnectorsCommandInput}
 * @returns {@link ListConnectorsCommandOutput}
 * @see {@link ListConnectorsCommandInput} for command's `input` shape.
 * @see {@link ListConnectorsCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> parameter that was passed is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 *
 * @public
 */
export class ListConnectorsCommand extends command<ListConnectorsCommandInput, ListConnectorsCommandOutput>(
  _ep0,
  _mw0,
  "ListConnectors",
  ListConnectors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConnectorsRequest;
      output: ListConnectorsResponse;
    };
    sdk: {
      input: ListConnectorsCommandInput;
      output: ListConnectorsCommandOutput;
    };
  };
}
