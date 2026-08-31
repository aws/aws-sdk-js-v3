// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCrossRegionRoutingRequest, GetCrossRegionRoutingResponse } from "../models/models_1";
import { GetCrossRegionRouting$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCrossRegionRoutingCommand}.
 */
export interface GetCrossRegionRoutingCommandInput extends GetCrossRegionRoutingRequest {}
/**
 * @public
 *
 * The output of {@link GetCrossRegionRoutingCommand}.
 */
export interface GetCrossRegionRoutingCommandOutput extends GetCrossRegionRoutingResponse, __MetadataBearer {}

/**
 * <p>Retrieves the current cross-region routing configuration for an Amazon Connect Global Resiliency instance
 *    enabled for global routing. This operation returns whether cross-region routing is currently enabled or disabled
 *    (isolated) for the instance.</p>
 *          <note>
 *             <p>This operation is available only for Amazon Connect Global Resiliency instances enabled for global routing.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetCrossRegionRoutingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetCrossRegionRoutingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // GetCrossRegionRoutingRequest
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new GetCrossRegionRoutingCommand(input);
 * const response = await client.send(command);
 * // { // GetCrossRegionRoutingResponse
 * //   IsolatedRegions: [ // IsolatedRegionsList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCrossRegionRoutingCommandInput - {@link GetCrossRegionRoutingCommandInput}
 * @returns {@link GetCrossRegionRoutingCommandOutput}
 * @see {@link GetCrossRegionRoutingCommandInput} for command's `input` shape.
 * @see {@link GetCrossRegionRoutingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class GetCrossRegionRoutingCommand extends command<GetCrossRegionRoutingCommandInput, GetCrossRegionRoutingCommandOutput>(
  _ep0,
  _mw0,
  "GetCrossRegionRouting",
  GetCrossRegionRouting$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCrossRegionRoutingRequest;
      output: GetCrossRegionRoutingResponse;
    };
    sdk: {
      input: GetCrossRegionRoutingCommandInput;
      output: GetCrossRegionRoutingCommandOutput;
    };
  };
}
