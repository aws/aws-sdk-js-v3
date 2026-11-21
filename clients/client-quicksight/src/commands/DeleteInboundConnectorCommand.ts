// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteInboundConnectorRequest, DeleteInboundConnectorResponse } from "../models/models_4";
import { DeleteInboundConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteInboundConnectorCommand}.
 */
export interface DeleteInboundConnectorCommandInput extends DeleteInboundConnectorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInboundConnectorCommand}.
 */
export interface DeleteInboundConnectorCommandOutput extends DeleteInboundConnectorResponse, __MetadataBearer {}

/**
 * <p>Deletes an inbound connector. You must disable the connector before you can delete it. When you delete a connector, Quick Sight doesn't delete the access control applications that are associated with it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteInboundConnectorCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteInboundConnectorCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteInboundConnectorRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   InboundConnectorId: "STRING_VALUE", // required
 * };
 * const command = new DeleteInboundConnectorCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInboundConnectorResponse
 * //   Status: Number("int"), // required
 * //   RequestId: "STRING_VALUE", // required
 * //   InboundConnectorId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteInboundConnectorCommandInput - {@link DeleteInboundConnectorCommandInput}
 * @returns {@link DeleteInboundConnectorCommandOutput}
 * @see {@link DeleteInboundConnectorCommandInput} for command's `input` shape.
 * @see {@link DeleteInboundConnectorCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DeleteInboundConnectorCommand extends command<DeleteInboundConnectorCommandInput, DeleteInboundConnectorCommandOutput>(
  _ep0,
  _mw0,
  "DeleteInboundConnector",
  DeleteInboundConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInboundConnectorRequest;
      output: DeleteInboundConnectorResponse;
    };
    sdk: {
      input: DeleteInboundConnectorCommandInput;
      output: DeleteInboundConnectorCommandOutput;
    };
  };
}
