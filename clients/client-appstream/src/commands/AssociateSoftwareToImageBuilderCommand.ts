// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateSoftwareToImageBuilderRequest, AssociateSoftwareToImageBuilderResult } from "../models/models_0";
import { AssociateSoftwareToImageBuilder$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateSoftwareToImageBuilderCommand}.
 */
export interface AssociateSoftwareToImageBuilderCommandInput extends AssociateSoftwareToImageBuilderRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSoftwareToImageBuilderCommand}.
 */
export interface AssociateSoftwareToImageBuilderCommandOutput extends AssociateSoftwareToImageBuilderResult, __MetadataBearer {}

/**
 * Associates license included application(s) with an existing image builder instance.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, AssociateSoftwareToImageBuilderCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, AssociateSoftwareToImageBuilderCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // AssociateSoftwareToImageBuilderRequest
 *   ImageBuilderName: "STRING_VALUE", // required
 *   SoftwareNames: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AssociateSoftwareToImageBuilderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateSoftwareToImageBuilderCommandInput - {@link AssociateSoftwareToImageBuilderCommandInput}
 * @returns {@link AssociateSoftwareToImageBuilderCommandOutput}
 * @see {@link AssociateSoftwareToImageBuilderCommandInput} for command's `input` shape.
 * @see {@link AssociateSoftwareToImageBuilderCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * An API error occurred. Wait a few minutes and try again.
 *
 * @throws {@link IncompatibleImageException} (client fault)
 *
 * The image can't be updated because it's not compatible for updates.
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
export class AssociateSoftwareToImageBuilderCommand extends command<AssociateSoftwareToImageBuilderCommandInput, AssociateSoftwareToImageBuilderCommandOutput>(
  _ep0,
  _mw0,
  "AssociateSoftwareToImageBuilder",
  AssociateSoftwareToImageBuilder$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateSoftwareToImageBuilderRequest;
      output: {};
    };
    sdk: {
      input: AssociateSoftwareToImageBuilderCommandInput;
      output: AssociateSoftwareToImageBuilderCommandOutput;
    };
  };
}
