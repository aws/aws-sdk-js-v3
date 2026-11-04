// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePipeRequest, DeletePipeResponse } from "../models/models_0";
import { DeletePipe$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePipeCommand}.
 */
export interface DeletePipeCommandInput extends DeletePipeRequest {}
/**
 * @public
 *
 * The output of {@link DeletePipeCommand}.
 */
export interface DeletePipeCommandOutput extends DeletePipeResponse, __MetadataBearer {}

/**
 * Delete an existing pipe. For more information about pipes, see [Amazon EventBridge Pipes](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html) in the Amazon EventBridge User Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PipesClient, DeletePipeCommand } from "@aws-sdk/client-pipes"; // ES Modules import
 * // const { PipesClient, DeletePipeCommand } = require("@aws-sdk/client-pipes"); // CommonJS import
 * // import type { PipesClientConfig } from "@aws-sdk/client-pipes";
 * const config = {}; // type is PipesClientConfig
 * const client = new PipesClient(config);
 * const input = { // DeletePipeRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeletePipeCommand(input);
 * const response = await client.send(command);
 * // { // DeletePipeResponse
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   DesiredState: "STRING_VALUE",
 * //   CurrentState: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DeletePipeCommandInput - {@link DeletePipeCommandInput}
 * @returns {@link DeletePipeCommandOutput}
 * @see {@link DeletePipeCommandInput} for command's `input` shape.
 * @see {@link DeletePipeCommandOutput} for command's `response` shape.
 * @see {@link PipesClientResolvedConfig | config} for PipesClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * An action you attempted resulted in an exception.
 *
 * @throws {@link InternalException} (server fault)
 *
 * This exception occurs due to unexpected causes.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * An entity that you specified does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * An action was throttled.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Indicates that an error has occurred while performing a validate operation.
 *
 * @throws {@link PipesServiceException}
 *
 * Base exception class for all service exceptions from Pipes service.
 *
 * @public
 */
export class DeletePipeCommand extends command<DeletePipeCommandInput, DeletePipeCommandOutput>(
  _ep0,
  _mw0,
  "DeletePipe",
  DeletePipe$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePipeRequest;
      output: DeletePipeResponse;
    };
    sdk: {
      input: DeletePipeCommandInput;
      output: DeletePipeCommandOutput;
    };
  };
}
