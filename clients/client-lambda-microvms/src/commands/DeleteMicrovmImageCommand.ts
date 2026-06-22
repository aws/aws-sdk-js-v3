// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LambdaMicrovmsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaMicrovmsClient";
import type { DeleteMicrovmImageInput, DeleteMicrovmImageOutput } from "../models/models_0";
import { DeleteMicrovmImage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMicrovmImageCommand}.
 */
export interface DeleteMicrovmImageCommandInput extends DeleteMicrovmImageInput {}
/**
 * @public
 *
 * The output of {@link DeleteMicrovmImageCommand}.
 */
export interface DeleteMicrovmImageCommandOutput extends DeleteMicrovmImageOutput, __MetadataBearer {}

/**
 * <p>Deletes a MicroVM image. This operation is idempotent; deleting an image that has already been deleted succeeds without error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaMicrovmsClient, DeleteMicrovmImageCommand } from "@aws-sdk/client-lambda-microvms"; // ES Modules import
 * // const { LambdaMicrovmsClient, DeleteMicrovmImageCommand } = require("@aws-sdk/client-lambda-microvms"); // CommonJS import
 * // import type { LambdaMicrovmsClientConfig } from "@aws-sdk/client-lambda-microvms";
 * const config = {}; // type is LambdaMicrovmsClientConfig
 * const client = new LambdaMicrovmsClient(config);
 * const input = { // DeleteMicrovmImageInput
 *   imageIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteMicrovmImageCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMicrovmImageOutput
 * //   imageIdentifier: "STRING_VALUE", // required
 * //   state: "CREATING" || "CREATED" || "CREATE_FAILED" || "UPDATING" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED" || "DELETED", // required
 * // };
 *
 * ```
 *
 * @param DeleteMicrovmImageCommandInput - {@link DeleteMicrovmImageCommandInput}
 * @returns {@link DeleteMicrovmImageCommandOutput}
 * @see {@link DeleteMicrovmImageCommandInput} for command's `input` shape.
 * @see {@link DeleteMicrovmImageCommandOutput} for command's `response` shape.
 * @see {@link LambdaMicrovmsClientResolvedConfig | config} for LambdaMicrovmsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry the request later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Retry the request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by the service.</p>
 *
 * @throws {@link LambdaMicrovmsServiceException}
 * <p>Base exception class for all service exceptions from LambdaMicrovms service.</p>
 *
 *
 * @public
 */
export class DeleteMicrovmImageCommand extends $Command
  .classBuilder<
    DeleteMicrovmImageCommandInput,
    DeleteMicrovmImageCommandOutput,
    LambdaMicrovmsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaMicrovmsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LambdaMicrovms", "DeleteMicrovmImage", {})
  .n("LambdaMicrovmsClient", "DeleteMicrovmImageCommand")
  .sc(DeleteMicrovmImage$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMicrovmImageInput;
      output: DeleteMicrovmImageOutput;
    };
    sdk: {
      input: DeleteMicrovmImageCommandInput;
      output: DeleteMicrovmImageCommandOutput;
    };
  };
}
