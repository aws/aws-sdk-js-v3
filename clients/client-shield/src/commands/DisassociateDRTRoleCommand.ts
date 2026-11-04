// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateDRTRoleRequest, DisassociateDRTRoleResponse } from "../models/models_0";
import { DisassociateDRTRole$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateDRTRoleCommand}.
 */
export interface DisassociateDRTRoleCommandInput extends DisassociateDRTRoleRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateDRTRoleCommand}.
 */
export interface DisassociateDRTRoleCommandOutput extends DisassociateDRTRoleResponse, __MetadataBearer {}

/**
 * Removes the Shield Response Team's (SRT) access to your Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DisassociateDRTRoleCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DisassociateDRTRoleCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // import type { ShieldClientConfig } from "@aws-sdk/client-shield";
 * const config = {}; // type is ShieldClientConfig
 * const client = new ShieldClient(config);
 * const input = {};
 * const command = new DisassociateDRTRoleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateDRTRoleCommandInput - {@link DisassociateDRTRoleCommandInput}
 * @returns {@link DisassociateDRTRoleCommandOutput}
 * @see {@link DisassociateDRTRoleCommandInput} for command's `input` shape.
 * @see {@link DisassociateDRTRoleCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * Exception that indicates that the operation would not cause any change to occur.
 *
 * @throws {@link OptimisticLockException} (client fault)
 *
 * Exception that indicates that the resource state has been modified by another client. Retrieve the resource and then retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties.
 *
 * @throws {@link ShieldServiceException}
 *
 * Base exception class for all service exceptions from Shield service.
 *
 * @public
 */
export class DisassociateDRTRoleCommand extends command<DisassociateDRTRoleCommandInput, DisassociateDRTRoleCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateDRTRole",
  DisassociateDRTRole$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DisassociateDRTRoleCommandInput;
      output: DisassociateDRTRoleCommandOutput;
    };
  };
}
