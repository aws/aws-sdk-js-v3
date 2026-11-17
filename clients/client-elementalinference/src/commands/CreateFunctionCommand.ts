// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateFunctionRequest, CreateFunctionResponse } from "../models/models_0";
import { CreateFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateFunctionCommand}.
 */
export interface CreateFunctionCommandInput extends CreateFunctionRequest {}
/**
 * @public
 *
 * The output of {@link CreateFunctionCommand}.
 */
export interface CreateFunctionCommandOutput extends CreateFunctionResponse, __MetadataBearer {}

/**
 * <p>Creates a function. A function analyzes a feed by building a request from the feed's media and metadata, optionally sending that request to an Amazon Bedrock model in your account, and publishing the result to the feed's metadata timeline. </p> <p>A function runs only after you attach it to a feed as a function output. For more information, see <a href="https://docs.aws.amazon.com/elemental-inference/latest/userguide/functions.html">Using functions</a> in the <i>AWS Elemental Inference User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, CreateFunctionCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, CreateFunctionCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // CreateFunctionRequest
 *   name: "STRING_VALUE", // required
 *   target: { // FunctionTarget Union: only one key present
 *     bedrock: { // BedrockFunctionTarget
 *       api: "INVOKE_MODEL", // required
 *       model: "STRING_VALUE", // required
 *     },
 *     passthrough: {},
 *   },
 *   requestExpression: "STRING_VALUE", // required
 *   responseExpression: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   eventBridgeDelivery: "ENABLED" || "DISABLED",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateFunctionCommand(input);
 * const response = await client.send(command);
 * // { // CreateFunctionResponse
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
 * @param CreateFunctionCommandInput - {@link CreateFunctionCommandInput}
 * @returns {@link CreateFunctionCommandOutput}
 * @see {@link CreateFunctionCommandInput} for command's `input` shape.
 * @see {@link CreateFunctionCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was rejected because it would exceed one or more service quotas for your account. Review your service quotas and either delete unused resources or request a quota increase. </p>
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
export class CreateFunctionCommand extends command<CreateFunctionCommandInput, CreateFunctionCommandOutput>(
  _ep0,
  _mw0,
  "CreateFunction",
  CreateFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFunctionRequest;
      output: CreateFunctionResponse;
    };
    sdk: {
      input: CreateFunctionCommandInput;
      output: CreateFunctionCommandOutput;
    };
  };
}
