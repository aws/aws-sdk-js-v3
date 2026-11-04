// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateQuickConnectNameRequest } from "../models/models_4";
import { UpdateQuickConnectName$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateQuickConnectNameCommand}.
 */
export interface UpdateQuickConnectNameCommandInput extends UpdateQuickConnectNameRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQuickConnectNameCommand}.
 */
export interface UpdateQuickConnectNameCommandOutput extends __MetadataBearer {}

/**
 * Updates the name and description of a quick connect. The request accepts the following data in JSON format. At least `Name` or `Description` must be provided.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQuickConnectNameCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQuickConnectNameCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateQuickConnectNameRequest
 *   InstanceId: "STRING_VALUE", // required
 *   QuickConnectId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateQuickConnectNameCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateQuickConnectNameCommandInput - {@link UpdateQuickConnectNameCommandInput}
 * @returns {@link UpdateQuickConnectNameCommandOutput}
 * @see {@link UpdateQuickConnectNameCommandInput} for command's `input` shape.
 * @see {@link UpdateQuickConnectNameCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class UpdateQuickConnectNameCommand extends command<UpdateQuickConnectNameCommandInput, UpdateQuickConnectNameCommandOutput>(
  _ep0,
  _mw0,
  "UpdateQuickConnectName",
  UpdateQuickConnectName$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQuickConnectNameRequest;
      output: {};
    };
    sdk: {
      input: UpdateQuickConnectNameCommandInput;
      output: UpdateQuickConnectNameCommandOutput;
    };
  };
}
