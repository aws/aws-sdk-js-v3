// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateSoftwareFromImageBuilderRequest,
  DisassociateSoftwareFromImageBuilderResult,
} from "../models/models_0";
import { DisassociateSoftwareFromImageBuilder$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateSoftwareFromImageBuilderCommand}.
 */
export interface DisassociateSoftwareFromImageBuilderCommandInput extends DisassociateSoftwareFromImageBuilderRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateSoftwareFromImageBuilderCommand}.
 */
export interface DisassociateSoftwareFromImageBuilderCommandOutput extends DisassociateSoftwareFromImageBuilderResult, __MetadataBearer {}

/**
 * Removes license included application(s) association(s) from an image builder instance.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DisassociateSoftwareFromImageBuilderCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DisassociateSoftwareFromImageBuilderCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DisassociateSoftwareFromImageBuilderRequest
 *   ImageBuilderName: "STRING_VALUE", // required
 *   SoftwareNames: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateSoftwareFromImageBuilderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateSoftwareFromImageBuilderCommandInput - {@link DisassociateSoftwareFromImageBuilderCommandInput}
 * @returns {@link DisassociateSoftwareFromImageBuilderCommandOutput}
 * @see {@link DisassociateSoftwareFromImageBuilderCommandInput} for command's `input` shape.
 * @see {@link DisassociateSoftwareFromImageBuilderCommandOutput} for command's `response` shape.
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
export class DisassociateSoftwareFromImageBuilderCommand extends command<DisassociateSoftwareFromImageBuilderCommandInput, DisassociateSoftwareFromImageBuilderCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateSoftwareFromImageBuilder",
  DisassociateSoftwareFromImageBuilder$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateSoftwareFromImageBuilderRequest;
      output: {};
    };
    sdk: {
      input: DisassociateSoftwareFromImageBuilderCommandInput;
      output: DisassociateSoftwareFromImageBuilderCommandOutput;
    };
  };
}
