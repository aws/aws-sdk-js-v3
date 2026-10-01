// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWebFunctionRevisionRequest } from "../models/models_0";
import { DeleteWebFunctionRevision$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWebFunctionRevisionCommand}.
 */
export interface DeleteWebFunctionRevisionCommandInput extends DeleteWebFunctionRevisionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWebFunctionRevisionCommand}.
 */
export interface DeleteWebFunctionRevisionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a web function revision. You cannot delete a revision that is currently serving traffic on an endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaWebClient, DeleteWebFunctionRevisionCommand } from "@aws-sdk/client-lambda-web"; // ES Modules import
 * // const { LambdaWebClient, DeleteWebFunctionRevisionCommand } = require("@aws-sdk/client-lambda-web"); // CommonJS import
 * // import type { LambdaWebClientConfig } from "@aws-sdk/client-lambda-web";
 * const config = {}; // type is LambdaWebClientConfig
 * const client = new LambdaWebClient(config);
 * const input = { // DeleteWebFunctionRevisionRequest
 *   functionName: "STRING_VALUE", // required
 *   revisionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteWebFunctionRevisionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWebFunctionRevisionCommandInput - {@link DeleteWebFunctionRevisionCommandInput}
 * @returns {@link DeleteWebFunctionRevisionCommandOutput}
 * @see {@link DeleteWebFunctionRevisionCommandInput} for command's `input` shape.
 * @see {@link DeleteWebFunctionRevisionCommandOutput} for command's `response` shape.
 * @see {@link LambdaWebClientResolvedConfig | config} for LambdaWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. Resolve the conflict and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify the resource identifier and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Reduce the frequency of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. Check the request parameters and try again.</p>
 *
 * @throws {@link LambdaWebServiceException}
 * <p>Base exception class for all service exceptions from LambdaWeb service.</p>
 *
 *
 * @public
 */
export class DeleteWebFunctionRevisionCommand extends command<DeleteWebFunctionRevisionCommandInput, DeleteWebFunctionRevisionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWebFunctionRevision",
  DeleteWebFunctionRevision$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWebFunctionRevisionRequest;
      output: {};
    };
    sdk: {
      input: DeleteWebFunctionRevisionCommandInput;
      output: DeleteWebFunctionRevisionCommandOutput;
    };
  };
}
