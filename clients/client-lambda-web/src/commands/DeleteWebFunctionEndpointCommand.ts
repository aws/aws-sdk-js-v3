// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWebFunctionEndpointRequest } from "../models/models_0";
import { DeleteWebFunctionEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWebFunctionEndpointCommand}.
 */
export interface DeleteWebFunctionEndpointCommandInput extends DeleteWebFunctionEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWebFunctionEndpointCommand}.
 */
export interface DeleteWebFunctionEndpointCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a web function endpoint.</p> <note> <p>This API is experimental and for internal AWS use only. It is not yet available to external customers.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaWebClient, DeleteWebFunctionEndpointCommand } from "@aws-sdk/client-lambda-web"; // ES Modules import
 * // const { LambdaWebClient, DeleteWebFunctionEndpointCommand } = require("@aws-sdk/client-lambda-web"); // CommonJS import
 * // import type { LambdaWebClientConfig } from "@aws-sdk/client-lambda-web";
 * const config = {}; // type is LambdaWebClientConfig
 * const client = new LambdaWebClient(config);
 * const input = { // DeleteWebFunctionEndpointRequest
 *   functionName: "STRING_VALUE", // required
 *   endpointName: "STRING_VALUE", // required
 * };
 * const command = new DeleteWebFunctionEndpointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWebFunctionEndpointCommandInput - {@link DeleteWebFunctionEndpointCommandInput}
 * @returns {@link DeleteWebFunctionEndpointCommandOutput}
 * @see {@link DeleteWebFunctionEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteWebFunctionEndpointCommandOutput} for command's `response` shape.
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
export class DeleteWebFunctionEndpointCommand extends command<DeleteWebFunctionEndpointCommandInput, DeleteWebFunctionEndpointCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWebFunctionEndpoint",
  DeleteWebFunctionEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWebFunctionEndpointRequest;
      output: {};
    };
    sdk: {
      input: DeleteWebFunctionEndpointCommandInput;
      output: DeleteWebFunctionEndpointCommandOutput;
    };
  };
}
