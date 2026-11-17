// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetFunctionRequest, GetFunctionResponse } from "../models/models_0";
import { GetFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetFunctionCommand}.
 */
export interface GetFunctionCommandInput extends GetFunctionRequest {}
/**
 * @public
 *
 * The output of {@link GetFunctionCommand}.
 */
export interface GetFunctionCommandOutput extends GetFunctionResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of a function, including its expressions, the media context that Elemental Inference derived from the request expression, and the feeds that currently reference it. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, GetFunctionCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, GetFunctionCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // GetFunctionRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetFunctionCommand(input);
 * const response = await client.send(command);
 * // { // GetFunctionResponse
 * //   name: "STRING_VALUE", // required
 * //   target: { // FunctionTarget Union: only one key present
 * //     bedrock: { // BedrockFunctionTarget
 * //       api: "INVOKE_MODEL", // required
 * //       model: "STRING_VALUE", // required
 * //     },
 * //     passthrough: {},
 * //   },
 * //   requestExpression: "STRING_VALUE", // required
 * //   responseExpression: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   eventBridgeDelivery: "ENABLED" || "DISABLED",
 * //   arn: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   status: "CREATING" || "AVAILABLE" || "REFERENCED" || "DELETING" || "DELETED", // required
 * //   references: [ // FeedReferences
 * //     "STRING_VALUE",
 * //   ],
 * //   contextTypes: [ // ContextTypeList
 * //     "FRAMES" || "SUBTITLES" || "CONTEXTUAL_METADATA" || "CLIP_METADATA",
 * //   ],
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFunctionCommandInput - {@link GetFunctionCommandInput}
 * @returns {@link GetFunctionCommandOutput}
 * @see {@link GetFunctionCommandInput} for command's `input` shape.
 * @see {@link GetFunctionCommandOutput} for command's `response` shape.
 * @see {@link ElementalInferenceClientResolvedConfig | config} for ElementalInferenceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error occurred. This is a temporary condition and the request can be retried. If the problem persists, contact AWS Support. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the action doesn't exist.</p>
 *
 * @throws {@link TooManyRequestException} (client fault)
 *  <p>The request was denied due to request throttling. Too many requests have been made within a given time period. Reduce the frequency of requests and use exponential backoff when retrying. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service. Check the error message for details about which parameter or field is invalid and correct the request before retrying. </p>
 *
 * @throws {@link ElementalInferenceServiceException}
 * <p>Base exception class for all service exceptions from ElementalInference service.</p>
 *
 *
 * @public
 */
export class GetFunctionCommand extends command<GetFunctionCommandInput, GetFunctionCommandOutput>(
  _ep0,
  _mw0,
  "GetFunction",
  GetFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFunctionRequest;
      output: GetFunctionResponse;
    };
    sdk: {
      input: GetFunctionCommandInput;
      output: GetFunctionCommandOutput;
    };
  };
}
