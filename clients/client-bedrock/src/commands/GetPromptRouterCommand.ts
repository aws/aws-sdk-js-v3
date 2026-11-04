// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPromptRouterRequest, GetPromptRouterResponse } from "../models/models_1";
import { GetPromptRouter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPromptRouterCommand}.
 */
export interface GetPromptRouterCommandInput extends GetPromptRouterRequest {}
/**
 * @public
 *
 * The output of {@link GetPromptRouterCommand}.
 */
export interface GetPromptRouterCommandOutput extends GetPromptRouterResponse, __MetadataBearer {}

/**
 * Retrieves details about a prompt router.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetPromptRouterCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetPromptRouterCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // GetPromptRouterRequest
 *   promptRouterArn: "STRING_VALUE", // required
 * };
 * const command = new GetPromptRouterCommand(input);
 * const response = await client.send(command);
 * // { // GetPromptRouterResponse
 * //   promptRouterName: "STRING_VALUE", // required
 * //   routingCriteria: { // RoutingCriteria
 * //     responseQualityDifference: Number("double"), // required
 * //   },
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   promptRouterArn: "STRING_VALUE", // required
 * //   models: [ // PromptRouterTargetModels // required
 * //     { // PromptRouterTargetModel
 * //       modelArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   fallbackModel: {
 * //     modelArn: "STRING_VALUE", // required
 * //   },
 * //   status: "AVAILABLE", // required
 * //   type: "custom" || "default", // required
 * // };
 *
 * ```
 *
 * @param GetPromptRouterCommandInput - {@link GetPromptRouterCommandInput}
 * @returns {@link GetPromptRouterCommandOutput}
 * @see {@link GetPromptRouterCommandInput} for command's `input` shape.
 * @see {@link GetPromptRouterCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockServiceException}
 *
 * Base exception class for all service exceptions from Bedrock service.
 *
 * @public
 */
export class GetPromptRouterCommand extends command<GetPromptRouterCommandInput, GetPromptRouterCommandOutput>(
  _ep0,
  _mw0,
  "GetPromptRouter",
  GetPromptRouter$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPromptRouterRequest;
      output: GetPromptRouterResponse;
    };
    sdk: {
      input: GetPromptRouterCommandInput;
      output: GetPromptRouterCommandOutput;
    };
  };
}
