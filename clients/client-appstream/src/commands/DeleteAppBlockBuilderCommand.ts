// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAppBlockBuilderRequest, DeleteAppBlockBuilderResult } from "../models/models_0";
import { DeleteAppBlockBuilder$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAppBlockBuilderCommand}.
 */
export interface DeleteAppBlockBuilderCommandInput extends DeleteAppBlockBuilderRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppBlockBuilderCommand}.
 */
export interface DeleteAppBlockBuilderCommandOutput extends DeleteAppBlockBuilderResult, __MetadataBearer {}

/**
 * Deletes an app block builder.
 *
 * An app block builder can only be deleted when it has no association with an app block.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DeleteAppBlockBuilderCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DeleteAppBlockBuilderCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DeleteAppBlockBuilderRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteAppBlockBuilderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAppBlockBuilderCommandInput - {@link DeleteAppBlockBuilderCommandInput}
 * @returns {@link DeleteAppBlockBuilderCommandOutput}
 * @see {@link DeleteAppBlockBuilderCommandInput} for command's `input` shape.
 * @see {@link DeleteAppBlockBuilderCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * An API error occurred. Wait a few minutes and try again.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The attempted operation is not permitted.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
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
export class DeleteAppBlockBuilderCommand extends command<DeleteAppBlockBuilderCommandInput, DeleteAppBlockBuilderCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAppBlockBuilder",
  DeleteAppBlockBuilder$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAppBlockBuilderRequest;
      output: {};
    };
    sdk: {
      input: DeleteAppBlockBuilderCommandInput;
      output: DeleteAppBlockBuilderCommandOutput;
    };
  };
}
