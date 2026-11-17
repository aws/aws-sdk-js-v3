// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateFunctionRequest, UpdateFunctionResponse } from "../models/models_0";
import { UpdateFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFunctionCommand}.
 */
export interface UpdateFunctionCommandInput extends UpdateFunctionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFunctionCommand}.
 */
export interface UpdateFunctionCommandOutput extends UpdateFunctionResponse, __MetadataBearer {}

/**
 * <p>Updates a function. Include only the parameters that you want to change; parameters that you don't include aren't affected. Elemental Inference validates the updated expressions in the same way as CreateFunction. </p> <p>While a feed references the function, you can change only its expressions and its description, and you can set eventBridgeDelivery to DISABLED but not to ENABLED. The request expression must keep referencing the same media context, as reported in contextTypes. Changing an expression changes the behavior of every feed that references the function. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, UpdateFunctionCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, UpdateFunctionCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // UpdateFunctionRequest
 *   id: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   target: { // FunctionTarget Union: only one key present
 *     bedrock: { // BedrockFunctionTarget
 *       api: "INVOKE_MODEL", // required
 *       model: "STRING_VALUE", // required
 *     },
 *     passthrough: {},
 *   },
 *   requestExpression: "STRING_VALUE",
 *   responseExpression: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   eventBridgeDelivery: "ENABLED" || "DISABLED",
 * };
 * const command = new UpdateFunctionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFunctionResponse
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
 * @param UpdateFunctionCommandInput - {@link UpdateFunctionCommandInput}
 * @returns {@link UpdateFunctionCommandOutput}
 * @see {@link UpdateFunctionCommandInput} for command's `input` shape.
 * @see {@link UpdateFunctionCommandOutput} for command's `response` shape.
 * @see {@link ElementalInferenceClientResolvedConfig | config} for ElementalInferenceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict.</p>
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
export class UpdateFunctionCommand extends command<UpdateFunctionCommandInput, UpdateFunctionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFunction",
  UpdateFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFunctionRequest;
      output: UpdateFunctionResponse;
    };
    sdk: {
      input: UpdateFunctionCommandInput;
      output: UpdateFunctionCommandOutput;
    };
  };
}
