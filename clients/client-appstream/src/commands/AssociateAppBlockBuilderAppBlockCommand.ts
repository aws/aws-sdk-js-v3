// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AssociateAppBlockBuilderAppBlockRequest,
  AssociateAppBlockBuilderAppBlockResult,
} from "../models/models_0";
import { AssociateAppBlockBuilderAppBlock$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateAppBlockBuilderAppBlockCommand}.
 */
export interface AssociateAppBlockBuilderAppBlockCommandInput extends AssociateAppBlockBuilderAppBlockRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAppBlockBuilderAppBlockCommand}.
 */
export interface AssociateAppBlockBuilderAppBlockCommandOutput extends AssociateAppBlockBuilderAppBlockResult, __MetadataBearer {}

/**
 * Associates the specified app block builder with the specified app block.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, AssociateAppBlockBuilderAppBlockCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, AssociateAppBlockBuilderAppBlockCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // AssociateAppBlockBuilderAppBlockRequest
 *   AppBlockArn: "STRING_VALUE", // required
 *   AppBlockBuilderName: "STRING_VALUE", // required
 * };
 * const command = new AssociateAppBlockBuilderAppBlockCommand(input);
 * const response = await client.send(command);
 * // { // AssociateAppBlockBuilderAppBlockResult
 * //   AppBlockBuilderAppBlockAssociation: { // AppBlockBuilderAppBlockAssociation
 * //     AppBlockArn: "STRING_VALUE", // required
 * //     AppBlockBuilderName: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateAppBlockBuilderAppBlockCommandInput - {@link AssociateAppBlockBuilderAppBlockCommandInput}
 * @returns {@link AssociateAppBlockBuilderAppBlockCommandOutput}
 * @see {@link AssociateAppBlockBuilderAppBlockCommandInput} for command's `input` shape.
 * @see {@link AssociateAppBlockBuilderAppBlockCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested limit exceeds the permitted limit for an account.
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
export class AssociateAppBlockBuilderAppBlockCommand extends command<AssociateAppBlockBuilderAppBlockCommandInput, AssociateAppBlockBuilderAppBlockCommandOutput>(
  _ep0,
  _mw0,
  "AssociateAppBlockBuilderAppBlock",
  AssociateAppBlockBuilderAppBlock$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateAppBlockBuilderAppBlockRequest;
      output: AssociateAppBlockBuilderAppBlockResult;
    };
    sdk: {
      input: AssociateAppBlockBuilderAppBlockCommandInput;
      output: AssociateAppBlockBuilderAppBlockCommandOutput;
    };
  };
}
