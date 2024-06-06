// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDataSourceRequest, DeleteDataSourceResponse } from "../models/models_0";
import { de_DeleteDataSourceCommand, se_DeleteDataSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataSourceCommand}.
 */
export interface DeleteDataSourceCommandInput extends DeleteDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataSourceCommand}.
 */
export interface DeleteDataSourceCommandOutput extends DeleteDataSourceResponse, __MetadataBearer {}

/**
 * <p>Deletes a data source from a knowledge base.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, DeleteDataSourceCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, DeleteDataSourceCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // DeleteDataSourceRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDataSourceResponse
 * //   knowledgeBaseId: "STRING_VALUE", // required
 * //   dataSourceId: "STRING_VALUE", // required
 * //   status: "AVAILABLE" || "DELETING" || "DELETE_UNSUCCESSFUL", // required
 * // };
 *
 * ```
 *
 * @param DeleteDataSourceCommandInput - {@link DeleteDataSourceCommandInput}
 * @returns {@link DeleteDataSourceCommandOutput}
 * @see {@link DeleteDataSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteDataSourceCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict performing an operation.</p>
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
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 * @public
 */
export class DeleteDataSourceCommand extends $Command
  .classBuilder<
    DeleteDataSourceCommandInput,
    DeleteDataSourceCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "DeleteDataSource", {})
  .n("BedrockAgentClient", "DeleteDataSourceCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDataSourceCommand)
  .de(de_DeleteDataSourceCommand)
  .build() {}
