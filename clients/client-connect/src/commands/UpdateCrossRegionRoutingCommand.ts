// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCrossRegionRoutingRequest, UpdateCrossRegionRoutingResponse } from "../models/models_3";
import { UpdateCrossRegionRouting$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCrossRegionRoutingCommand}.
 */
export interface UpdateCrossRegionRoutingCommandInput extends UpdateCrossRegionRoutingRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCrossRegionRoutingCommand}.
 */
export interface UpdateCrossRegionRoutingCommandOutput extends UpdateCrossRegionRoutingResponse, __MetadataBearer {}

/**
 * Updates the cross-region routing configuration for an Amazon Connect Global Resiliency instance enabled for global routing. When invoked with `IsolatedAll` set to `true`, this operation disables cross-region routing, meaning contacts originating in one Region will no longer be routed to agents in another Region.
 *
 * > **Note:** This operation is available only for Amazon Connect Global Resiliency instances enabled for global routing. Reporting and contact search continue to operate globally after you use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateCrossRegionRoutingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateCrossRegionRoutingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateCrossRegionRoutingRequest
 *   InstanceId: "STRING_VALUE", // required
 *   IsolatedAll: true || false, // required
 * };
 * const command = new UpdateCrossRegionRoutingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCrossRegionRoutingCommandInput - {@link UpdateCrossRegionRoutingCommandInput}
 * @returns {@link UpdateCrossRegionRoutingCommandOutput}
 * @see {@link UpdateCrossRegionRoutingCommandInput} for command's `input` shape.
 * @see {@link UpdateCrossRegionRoutingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * A resource already has that name.
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
export class UpdateCrossRegionRoutingCommand extends command<UpdateCrossRegionRoutingCommandInput, UpdateCrossRegionRoutingCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCrossRegionRouting",
  UpdateCrossRegionRouting$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCrossRegionRoutingRequest;
      output: {};
    };
    sdk: {
      input: UpdateCrossRegionRoutingCommandInput;
      output: UpdateCrossRegionRoutingCommandOutput;
    };
  };
}
