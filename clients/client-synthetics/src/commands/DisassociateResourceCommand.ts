// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateResourceRequest, DisassociateResourceResponse } from "../models/models_0";
import { DisassociateResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateResourceCommand}.
 */
export interface DisassociateResourceCommandInput extends DisassociateResourceRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateResourceCommand}.
 */
export interface DisassociateResourceCommandOutput extends DisassociateResourceResponse, __MetadataBearer {}

/**
 * <p>Removes a canary from a group. You must run this operation in the Region where the canary exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, DisassociateResourceCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, DisassociateResourceCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * // import type { SyntheticsClientConfig } from "@aws-sdk/client-synthetics";
 * const config = {}; // type is SyntheticsClientConfig
 * const client = new SyntheticsClient(config);
 * const input = { // DisassociateResourceRequest
 *   GroupIdentifier: "STRING_VALUE", // required
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateResourceCommandInput - {@link DisassociateResourceCommandInput}
 * @returns {@link DisassociateResourceCommandOutput}
 * @see {@link DisassociateResourceCommandInput} for command's `input` shape.
 * @see {@link DisassociateResourceCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflicting operation is already in progress.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One of the specified resources was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 *
 * @public
 */
export class DisassociateResourceCommand extends command<DisassociateResourceCommandInput, DisassociateResourceCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateResource",
  DisassociateResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateResourceRequest;
      output: {};
    };
    sdk: {
      input: DisassociateResourceCommandInput;
      output: DisassociateResourceCommandOutput;
    };
  };
}
