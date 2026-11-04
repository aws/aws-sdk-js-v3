// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMicrovmImageVersionInput, DeleteMicrovmImageVersionOutput } from "../models/models_0";
import { DeleteMicrovmImageVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMicrovmImageVersionCommand}.
 */
export interface DeleteMicrovmImageVersionCommandInput extends DeleteMicrovmImageVersionInput {}
/**
 * @public
 *
 * The output of {@link DeleteMicrovmImageVersionCommand}.
 */
export interface DeleteMicrovmImageVersionCommandOutput extends DeleteMicrovmImageVersionOutput, __MetadataBearer {}

/**
 * Deletes a specific version of a MicroVM image. This operation is idempotent; deleting a version that has already been deleted succeeds without error.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaMicrovmsClient, DeleteMicrovmImageVersionCommand } from "@aws-sdk/client-lambda-microvms"; // ES Modules import
 * // const { LambdaMicrovmsClient, DeleteMicrovmImageVersionCommand } = require("@aws-sdk/client-lambda-microvms"); // CommonJS import
 * // import type { LambdaMicrovmsClientConfig } from "@aws-sdk/client-lambda-microvms";
 * const config = {}; // type is LambdaMicrovmsClientConfig
 * const client = new LambdaMicrovmsClient(config);
 * const input = { // DeleteMicrovmImageVersionInput
 *   imageIdentifier: "STRING_VALUE", // required
 *   imageVersion: "STRING_VALUE", // required
 * };
 * const command = new DeleteMicrovmImageVersionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMicrovmImageVersionOutput
 * //   imageIdentifier: "STRING_VALUE", // required
 * //   imageVersion: "STRING_VALUE", // required
 * //   state: "PENDING" || "IN_PROGRESS" || "SUCCESSFUL" || "FAILED" || "DELETING" || "DELETED" || "DELETE_FAILED", // required
 * // };
 *
 * ```
 *
 * @param DeleteMicrovmImageVersionCommandInput - {@link DeleteMicrovmImageVersionCommandInput}
 * @returns {@link DeleteMicrovmImageVersionCommandOutput}
 * @see {@link DeleteMicrovmImageVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteMicrovmImageVersionCommandOutput} for command's `response` shape.
 * @see {@link LambdaMicrovmsClientResolvedConfig | config} for LambdaMicrovmsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry the request later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. Retry the request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by the service.
 *
 * @throws {@link LambdaMicrovmsServiceException}
 *
 * Base exception class for all service exceptions from LambdaMicrovms service.
 *
 * @public
 */
export class DeleteMicrovmImageVersionCommand extends command<DeleteMicrovmImageVersionCommandInput, DeleteMicrovmImageVersionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMicrovmImageVersion",
  DeleteMicrovmImageVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMicrovmImageVersionInput;
      output: DeleteMicrovmImageVersionOutput;
    };
    sdk: {
      input: DeleteMicrovmImageVersionCommandInput;
      output: DeleteMicrovmImageVersionCommandOutput;
    };
  };
}
