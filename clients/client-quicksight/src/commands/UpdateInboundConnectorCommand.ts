// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateInboundConnectorRequest, UpdateInboundConnectorResponse } from "../models/models_5";
import { UpdateInboundConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateInboundConnectorCommand}.
 */
export interface UpdateInboundConnectorCommandInput extends UpdateInboundConnectorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInboundConnectorCommand}.
 */
export interface UpdateInboundConnectorCommandOutput extends UpdateInboundConnectorResponse, __MetadataBearer {}

/**
 * <p>Updates an inbound connector. You can change its name, description, status, and configuration. You can't change the connector type after the connector is created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateInboundConnectorCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateInboundConnectorCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateInboundConnectorRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   InboundConnectorId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   InboundConnectorConfiguration: { // InboundConnectorConfig
 *     InboundConnectorType: "QUICK_DESKTOP", // required
 *   },
 *   InboundConnectorStatus: "ENABLED" || "DISABLED",
 * };
 * const command = new UpdateInboundConnectorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateInboundConnectorResponse
 * //   Status: Number("int"), // required
 * //   RequestId: "STRING_VALUE", // required
 * //   InboundConnectorId: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   InboundConnectorStatus: "ENABLED" || "DISABLED", // required
 * //   LastUpdatedTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateInboundConnectorCommandInput - {@link UpdateInboundConnectorCommandInput}
 * @returns {@link UpdateInboundConnectorCommandOutput}
 * @see {@link UpdateInboundConnectorCommandInput} for command's `input` shape.
 * @see {@link UpdateInboundConnectorCommandOutput} for command's `response` shape.
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
export class UpdateInboundConnectorCommand extends command<UpdateInboundConnectorCommandInput, UpdateInboundConnectorCommandOutput>(
  _ep0,
  _mw0,
  "UpdateInboundConnector",
  UpdateInboundConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInboundConnectorRequest;
      output: UpdateInboundConnectorResponse;
    };
    sdk: {
      input: UpdateInboundConnectorCommandInput;
      output: UpdateInboundConnectorCommandOutput;
    };
  };
}
