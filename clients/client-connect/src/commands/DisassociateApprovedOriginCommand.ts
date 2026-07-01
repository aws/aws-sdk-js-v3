// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateApprovedOriginRequest } from "../models/models_1";
import { DisassociateApprovedOrigin$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateApprovedOriginCommand}.
 */
export interface DisassociateApprovedOriginCommandInput extends DisassociateApprovedOriginRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateApprovedOriginCommand}.
 */
export interface DisassociateApprovedOriginCommandOutput extends __MetadataBearer {}

/**
 * <p>This API is in preview release for Connect Customer and is subject to change.</p>
 *          <p>Revokes access to integrated applications from Connect Customer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateApprovedOriginCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateApprovedOriginCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DisassociateApprovedOriginRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Origin: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DisassociateApprovedOriginCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateApprovedOriginCommandInput - {@link DisassociateApprovedOriginCommandInput}
 * @returns {@link DisassociateApprovedOriginCommandOutput}
 * @see {@link DisassociateApprovedOriginCommandInput} for command's `input` shape.
 * @see {@link DisassociateApprovedOriginCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
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
export class DisassociateApprovedOriginCommand extends command<DisassociateApprovedOriginCommandInput, DisassociateApprovedOriginCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateApprovedOrigin",
  DisassociateApprovedOrigin$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateApprovedOriginRequest;
      output: {};
    };
    sdk: {
      input: DisassociateApprovedOriginCommandInput;
      output: DisassociateApprovedOriginCommandOutput;
    };
  };
}
