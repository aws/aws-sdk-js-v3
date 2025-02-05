// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListPromptRoutersRequest,
  ListPromptRoutersResponse,
  ListPromptRoutersResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListPromptRoutersCommand, se_ListPromptRoutersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPromptRoutersCommand}.
 */
export interface ListPromptRoutersCommandInput extends ListPromptRoutersRequest {}
/**
 * @public
 *
 * The output of {@link ListPromptRoutersCommand}.
 */
export interface ListPromptRoutersCommandOutput extends ListPromptRoutersResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of prompt routers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListPromptRoutersCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListPromptRoutersCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BedrockClient(config);
 * const input = { // ListPromptRoutersRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPromptRoutersCommand(input);
 * const response = await client.send(command);
 * // { // ListPromptRoutersResponse
 * //   promptRouterSummaries: [ // PromptRouterSummaries
 * //     { // PromptRouterSummary
 * //       promptRouterName: "STRING_VALUE", // required
 * //       routingCriteria: { // RoutingCriteria
 * //         responseQualityDifference: Number("double"), // required
 * //       },
 * //       description: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       promptRouterArn: "STRING_VALUE", // required
 * //       models: [ // PromptRouterTargetModels // required
 * //         { // PromptRouterTargetModel
 * //           modelArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       fallbackModel: {
 * //         modelArn: "STRING_VALUE",
 * //       },
 * //       status: "AVAILABLE", // required
 * //       type: "custom" || "default", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPromptRoutersCommandInput - {@link ListPromptRoutersCommandInput}
 * @returns {@link ListPromptRoutersCommandOutput}
 * @see {@link ListPromptRoutersCommandInput} for command's `input` shape.
 * @see {@link ListPromptRoutersCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 * @public
 */
export class ListPromptRoutersCommand extends $Command
  .classBuilder<
    ListPromptRoutersCommandInput,
    ListPromptRoutersCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "ListPromptRouters", {})
  .n("BedrockClient", "ListPromptRoutersCommand")
  .f(void 0, ListPromptRoutersResponseFilterSensitiveLog)
  .ser(se_ListPromptRoutersCommand)
  .de(de_ListPromptRoutersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPromptRoutersRequest;
      output: ListPromptRoutersResponse;
    };
    sdk: {
      input: ListPromptRoutersCommandInput;
      output: ListPromptRoutersCommandOutput;
    };
  };
}
