// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetWebFunctionRequest, GetWebFunctionResponse } from "../models/models_0";
import { GetWebFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetWebFunctionCommand}.
 */
export interface GetWebFunctionCommandInput extends GetWebFunctionRequest {}
/**
 * @public
 *
 * The output of {@link GetWebFunctionCommand}.
 */
export interface GetWebFunctionCommandOutput extends GetWebFunctionResponse, __MetadataBearer {}

/**
 * <p>Retrieves details about a web function, including its current state and configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaWebClient, GetWebFunctionCommand } from "@aws-sdk/client-lambda-web"; // ES Modules import
 * // const { LambdaWebClient, GetWebFunctionCommand } = require("@aws-sdk/client-lambda-web"); // CommonJS import
 * // import type { LambdaWebClientConfig } from "@aws-sdk/client-lambda-web";
 * const config = {}; // type is LambdaWebClientConfig
 * const client = new LambdaWebClient(config);
 * const input = { // GetWebFunctionRequest
 *   functionName: "STRING_VALUE", // required
 * };
 * const command = new GetWebFunctionCommand(input);
 * const response = await client.send(command);
 * // { // GetWebFunctionResponse
 * //   functionName: "STRING_VALUE", // required
 * //   functionArn: "STRING_VALUE", // required
 * //   state: "Pending" || "Active" || "Failed" || "Deleting", // required
 * //   stateReason: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetWebFunctionCommandInput - {@link GetWebFunctionCommandInput}
 * @returns {@link GetWebFunctionCommandOutput}
 * @see {@link GetWebFunctionCommandInput} for command's `input` shape.
 * @see {@link GetWebFunctionCommandOutput} for command's `response` shape.
 * @see {@link LambdaWebClientResolvedConfig | config} for LambdaWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this operation.</p>
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
export class GetWebFunctionCommand extends command<GetWebFunctionCommandInput, GetWebFunctionCommandOutput>(
  _ep0,
  _mw0,
  "GetWebFunction",
  GetWebFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWebFunctionRequest;
      output: GetWebFunctionResponse;
    };
    sdk: {
      input: GetWebFunctionCommandInput;
      output: GetWebFunctionCommandOutput;
    };
  };
}
