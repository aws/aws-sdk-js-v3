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
 * <p>Deletes a web function and all of its associated revisions and endpoints.</p> <p>To use this operation, you must have the <code>DeleteWebFunction</code> permission on the web function. You don't need the <code>DeleteWebFunctionRevision</code> or <code>DeleteWebFunctionEndpoint</code> permission.</p>
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
 *  <p>You don't have permission to perform this operation. Check the IAM policies for your identity and any resource-based policy on the web function.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. For example, the resource is being modified by another request, you tried to delete a revision that is serving traffic on an endpoint, or the policy revision ID that you specified doesn't match the current policy. Resolve the conflict and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of an internal error in the service. Retry the request. If the error persists, open a support case.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified web function, revision, endpoint, or resource-based policy doesn't exist. Verify the resource identifier and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the request rate that Lambda allows for your account. Reduce the frequency of requests and retry with exponential backoff.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation because a parameter was missing, malformed, or outside the allowed range. Check the request parameters and try again.</p>
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
