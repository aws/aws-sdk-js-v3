// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWebFunctionRequest } from "../models/models_0";
import { DeleteWebFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWebFunctionCommand}.
 */
export interface DeleteWebFunctionCommandInput extends DeleteWebFunctionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWebFunctionCommand}.
 */
export interface DeleteWebFunctionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a web function and all of its associated revisions and endpoints.</p> <p>To use this operation, you must have the <code>DeleteWebFunction</code> permission on the web function. You don't need the <code>DeleteWebFunctionRevision</code> or <code>DeleteWebFunctionEndpoint</code> permission.</p> <note> <p>This API is experimental and for internal AWS use only. It is not yet available to external customers.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaWebClient, DeleteWebFunctionCommand } from "@aws-sdk/client-lambda-web"; // ES Modules import
 * // const { LambdaWebClient, DeleteWebFunctionCommand } = require("@aws-sdk/client-lambda-web"); // CommonJS import
 * // import type { LambdaWebClientConfig } from "@aws-sdk/client-lambda-web";
 * const config = {}; // type is LambdaWebClientConfig
 * const client = new LambdaWebClient(config);
 * const input = { // DeleteWebFunctionRequest
 *   functionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteWebFunctionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWebFunctionCommandInput - {@link DeleteWebFunctionCommandInput}
 * @returns {@link DeleteWebFunctionCommandOutput}
 * @see {@link DeleteWebFunctionCommandInput} for command's `input` shape.
 * @see {@link DeleteWebFunctionCommandOutput} for command's `response` shape.
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
export class DeleteWebFunctionCommand extends command<DeleteWebFunctionCommandInput, DeleteWebFunctionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWebFunction",
  DeleteWebFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWebFunctionRequest;
      output: {};
    };
    sdk: {
      input: DeleteWebFunctionCommandInput;
      output: DeleteWebFunctionCommandOutput;
    };
  };
}
