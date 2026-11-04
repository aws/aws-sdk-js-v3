// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteActionConnectorRequest, DeleteActionConnectorResponse } from "../models/models_3";
import { DeleteActionConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteActionConnectorCommand}.
 */
export interface DeleteActionConnectorCommandInput extends DeleteActionConnectorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteActionConnectorCommand}.
 */
export interface DeleteActionConnectorCommandOutput extends DeleteActionConnectorResponse, __MetadataBearer {}

/**
 * Hard deletes an action connector, making it unrecoverable. This operation removes the connector and all its associated configurations. Any resources currently using this action connector will no longer be able to perform actions through it.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteActionConnectorCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteActionConnectorCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteActionConnectorRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ActionConnectorId: "STRING_VALUE", // required
 * };
 * const command = new DeleteActionConnectorCommand(input);
 * const response = await client.send(command);
 * // { // DeleteActionConnectorResponse
 * //   Arn: "STRING_VALUE",
 * //   ActionConnectorId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteActionConnectorCommandInput - {@link DeleteActionConnectorCommandInput}
 * @returns {@link DeleteActionConnectorCommandOutput}
 * @see {@link DeleteActionConnectorCommandInput} for command's `input` shape.
 * @see {@link DeleteActionConnectorCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class DeleteActionConnectorCommand extends command<DeleteActionConnectorCommandInput, DeleteActionConnectorCommandOutput>(
  _ep0,
  _mw0,
  "DeleteActionConnector",
  DeleteActionConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteActionConnectorRequest;
      output: DeleteActionConnectorResponse;
    };
    sdk: {
      input: DeleteActionConnectorCommandInput;
      output: DeleteActionConnectorCommandOutput;
    };
  };
}
