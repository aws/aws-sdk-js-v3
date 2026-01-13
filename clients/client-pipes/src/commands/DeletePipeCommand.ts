// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeletePipeRequest, DeletePipeResponse } from "../models/models_0";
import type { PipesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PipesClient";
import { DeletePipe$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Delete an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.</p>
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
 *  <p>An action you attempted resulted in an exception.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An action was throttled.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that an error has occurred while performing a validate operation.</p>
 *
 * @throws {@link PipesServiceException}
 * <p>Base exception class for all service exceptions from Pipes service.</p>
 *
 *
 * @public
 */
export class DeletePipeCommand extends $Command
  .classBuilder<
    DeletePipeCommandInput,
    DeletePipeCommandOutput,
    PipesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PipesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pipes", "DeletePipe", {})
  .n("PipesClient", "DeletePipeCommand")
  .sc(DeletePipe$)
  .build() {
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
