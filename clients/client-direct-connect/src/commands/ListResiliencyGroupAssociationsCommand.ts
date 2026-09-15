// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListResiliencyGroupAssociationsRequest, ListResiliencyGroupAssociationsResult } from "../models/models_0";
import { ListResiliencyGroupAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResiliencyGroupAssociationsCommand}.
 */
export interface ListResiliencyGroupAssociationsCommandInput extends ListResiliencyGroupAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListResiliencyGroupAssociationsCommand}.
 */
export interface ListResiliencyGroupAssociationsCommandOutput extends ListResiliencyGroupAssociationsResult, __MetadataBearer {}

/**
 * <p>Lists the connection associations for the specified resiliency group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ListResiliencyGroupAssociationsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ListResiliencyGroupAssociationsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // ListResiliencyGroupAssociationsRequest
 *   resiliencyGroupId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListResiliencyGroupAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListResiliencyGroupAssociationsResult
 * //   items: [ // ResiliencyGroupAssociationList
 * //     { // ResiliencyGroupAssociation
 * //       resiliencyGroupId: "STRING_VALUE",
 * //       connectionArn: "STRING_VALUE",
 * //       state: "associating" || "associated" || "disassociating" || "disassociated",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResiliencyGroupAssociationsCommandInput - {@link ListResiliencyGroupAssociationsCommandInput}
 * @returns {@link ListResiliencyGroupAssociationsCommandOutput}
 * @see {@link ListResiliencyGroupAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListResiliencyGroupAssociationsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 *
 * @public
 */
export class ListResiliencyGroupAssociationsCommand extends command<ListResiliencyGroupAssociationsCommandInput, ListResiliencyGroupAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListResiliencyGroupAssociations",
  ListResiliencyGroupAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResiliencyGroupAssociationsRequest;
      output: ListResiliencyGroupAssociationsResult;
    };
    sdk: {
      input: ListResiliencyGroupAssociationsCommandInput;
      output: ListResiliencyGroupAssociationsCommandOutput;
    };
  };
}
