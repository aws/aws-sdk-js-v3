// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteContactEvaluationRequest } from "../models/models_1";
import { DeleteContactEvaluation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteContactEvaluationCommand}.
 */
export interface DeleteContactEvaluationCommandInput extends DeleteContactEvaluationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContactEvaluationCommand}.
 */
export interface DeleteContactEvaluationCommandOutput extends __MetadataBearer {}

/**
 * Deletes a contact evaluation in the specified Connect Customer instance.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteContactEvaluationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteContactEvaluationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteContactEvaluationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   EvaluationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteContactEvaluationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContactEvaluationCommandInput - {@link DeleteContactEvaluationCommandInput}
 * @returns {@link DeleteContactEvaluationCommandOutput}
 * @see {@link DeleteContactEvaluationCommandInput} for command's `input` shape.
 * @see {@link DeleteContactEvaluationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * A resource already has that name.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class DeleteContactEvaluationCommand extends command<DeleteContactEvaluationCommandInput, DeleteContactEvaluationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteContactEvaluation",
  DeleteContactEvaluation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContactEvaluationRequest;
      output: {};
    };
    sdk: {
      input: DeleteContactEvaluationCommandInput;
      output: DeleteContactEvaluationCommandOutput;
    };
  };
}
