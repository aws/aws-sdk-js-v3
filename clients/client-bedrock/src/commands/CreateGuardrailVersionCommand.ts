// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateGuardrailVersionRequest,
  CreateGuardrailVersionRequestFilterSensitiveLog,
  CreateGuardrailVersionResponse,
} from "../models/models_0";
import { de_CreateGuardrailVersionCommand, se_CreateGuardrailVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGuardrailVersionCommand}.
 */
export interface CreateGuardrailVersionCommandInput extends CreateGuardrailVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateGuardrailVersionCommand}.
 */
export interface CreateGuardrailVersionCommandOutput extends CreateGuardrailVersionResponse, __MetadataBearer {}

/**
 * <p>Creates a version of the guardrail. Use this API to create a snapshot of the
 *       guardrail when you are satisfied with a configuration, or to compare the configuration with another version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, CreateGuardrailVersionCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, CreateGuardrailVersionCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // CreateGuardrailVersionRequest
 *   guardrailIdentifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new CreateGuardrailVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateGuardrailVersionResponse
 * //   guardrailId: "STRING_VALUE", // required
 * //   version: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateGuardrailVersionCommandInput - {@link CreateGuardrailVersionCommandInput}
 * @returns {@link CreateGuardrailVersionCommandOutput}
 * @see {@link CreateGuardrailVersionCommandInput} for command's `input` shape.
 * @see {@link CreateGuardrailVersionCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Error occurred because of a conflict while performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
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
export class CreateGuardrailVersionCommand extends $Command
  .classBuilder<
    CreateGuardrailVersionCommandInput,
    CreateGuardrailVersionCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "CreateGuardrailVersion", {})
  .n("BedrockClient", "CreateGuardrailVersionCommand")
  .f(CreateGuardrailVersionRequestFilterSensitiveLog, void 0)
  .ser(se_CreateGuardrailVersionCommand)
  .de(de_CreateGuardrailVersionCommand)
  .build() {}
