// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListGuardrailsRequest,
  ListGuardrailsResponse,
  ListGuardrailsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListGuardrailsCommand, se_ListGuardrailsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGuardrailsCommand}.
 */
export interface ListGuardrailsCommandInput extends ListGuardrailsRequest {}
/**
 * @public
 *
 * The output of {@link ListGuardrailsCommand}.
 */
export interface ListGuardrailsCommandOutput extends ListGuardrailsResponse, __MetadataBearer {}

/**
 * <p>Lists details about all the guardrails in an account. To list the <code>DRAFT</code> version of all your guardrails, don't specify the <code>guardrailIdentifier</code> field. To list all versions of a guardrail, specify the ARN of the guardrail in the <code>guardrailIdentifier</code> field.</p>
 *          <p>You can set the maximum number of results to return in a response in the <code>maxResults</code> field. If there are more results than the number you set, the response returns a <code>nextToken</code> that you can send in another <code>ListGuardrails</code> request to see the next batch of results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListGuardrailsCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListGuardrailsCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BedrockClient(config);
 * const input = { // ListGuardrailsRequest
 *   guardrailIdentifier: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListGuardrailsCommand(input);
 * const response = await client.send(command);
 * // { // ListGuardrailsResponse
 * //   guardrails: [ // GuardrailSummaries // required
 * //     { // GuardrailSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       status: "CREATING" || "UPDATING" || "VERSIONING" || "READY" || "FAILED" || "DELETING", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       version: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGuardrailsCommandInput - {@link ListGuardrailsCommandInput}
 * @returns {@link ListGuardrailsCommandOutput}
 * @see {@link ListGuardrailsCommandInput} for command's `input` shape.
 * @see {@link ListGuardrailsCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
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
export class ListGuardrailsCommand extends $Command
  .classBuilder<
    ListGuardrailsCommandInput,
    ListGuardrailsCommandOutput,
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
  .s("AmazonBedrockControlPlaneService", "ListGuardrails", {})
  .n("BedrockClient", "ListGuardrailsCommand")
  .f(void 0, ListGuardrailsResponseFilterSensitiveLog)
  .ser(se_ListGuardrailsCommand)
  .de(de_ListGuardrailsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGuardrailsRequest;
      output: ListGuardrailsResponse;
    };
    sdk: {
      input: ListGuardrailsCommandInput;
      output: ListGuardrailsCommandOutput;
    };
  };
}
