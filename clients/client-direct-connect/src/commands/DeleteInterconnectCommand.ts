// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteInterconnectRequest, DeleteInterconnectResponse } from "../models/models_0";
import { DeleteInterconnect$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteInterconnectCommand}.
 */
export interface DeleteInterconnectCommandInput extends DeleteInterconnectRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInterconnectCommand}.
 */
export interface DeleteInterconnectCommandOutput extends DeleteInterconnectResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified interconnect.</p>
 *          <note>
 *             <p>Intended for use
 *         by Direct Connect Partners only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteInterconnectCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteInterconnectCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // DeleteInterconnectRequest
 *   interconnectId: "STRING_VALUE", // required
 * };
 * const command = new DeleteInterconnectCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInterconnectResponse
 * //   interconnectState: "requested" || "pending" || "available" || "down" || "deleting" || "deleted" || "unknown",
 * // };
 *
 * ```
 *
 * @param DeleteInterconnectCommandInput - {@link DeleteInterconnectCommandInput}
 * @returns {@link DeleteInterconnectCommandOutput}
 * @see {@link DeleteInterconnectCommandInput} for command's `input` shape.
 * @see {@link DeleteInterconnectCommandOutput} for command's `response` shape.
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
export class DeleteInterconnectCommand extends $Command
  .classBuilder<
    DeleteInterconnectCommandInput,
    DeleteInterconnectCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "DeleteInterconnect", {})
  .n("DirectConnectClient", "DeleteInterconnectCommand")
  .sc(DeleteInterconnect$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInterconnectRequest;
      output: DeleteInterconnectResponse;
    };
    sdk: {
      input: DeleteInterconnectCommandInput;
      output: DeleteInterconnectCommandOutput;
    };
  };
}
