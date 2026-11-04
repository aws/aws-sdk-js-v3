// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateAppBlockBuilderAppBlockRequest,
  DisassociateAppBlockBuilderAppBlockResult,
} from "../models/models_0";
import { DisassociateAppBlockBuilderAppBlock$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateAppBlockBuilderAppBlockCommand}.
 */
export interface DisassociateAppBlockBuilderAppBlockCommandInput extends DisassociateAppBlockBuilderAppBlockRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateAppBlockBuilderAppBlockCommand}.
 */
export interface DisassociateAppBlockBuilderAppBlockCommandOutput extends DisassociateAppBlockBuilderAppBlockResult, __MetadataBearer {}

/**
 * Disassociates a specified app block builder from a specified app block.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DisassociateAppBlockBuilderAppBlockCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DisassociateAppBlockBuilderAppBlockCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DisassociateAppBlockBuilderAppBlockRequest
 *   AppBlockArn: "STRING_VALUE", // required
 *   AppBlockBuilderName: "STRING_VALUE", // required
 * };
 * const command = new DisassociateAppBlockBuilderAppBlockCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateAppBlockBuilderAppBlockCommandInput - {@link DisassociateAppBlockBuilderAppBlockCommandInput}
 * @returns {@link DisassociateAppBlockBuilderAppBlockCommandOutput}
 * @see {@link DisassociateAppBlockBuilderAppBlockCommandInput} for command's `input` shape.
 * @see {@link DisassociateAppBlockBuilderAppBlockCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * An API error occurred. Wait a few minutes and try again.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * Indicates an incorrect combination of parameters, or a missing parameter.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The attempted operation is not permitted.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link AppStreamServiceException}
 *
 * Base exception class for all service exceptions from AppStream service.
 *
 * @public
 */
export class DisassociateAppBlockBuilderAppBlockCommand extends command<DisassociateAppBlockBuilderAppBlockCommandInput, DisassociateAppBlockBuilderAppBlockCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateAppBlockBuilderAppBlock",
  DisassociateAppBlockBuilderAppBlock$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateAppBlockBuilderAppBlockRequest;
      output: {};
    };
    sdk: {
      input: DisassociateAppBlockBuilderAppBlockCommandInput;
      output: DisassociateAppBlockBuilderAppBlockCommandOutput;
    };
  };
}
