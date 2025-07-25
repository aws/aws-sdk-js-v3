// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateFoundationModelAgreementRequest, CreateFoundationModelAgreementResponse } from "../models/models_1";
import {
  de_CreateFoundationModelAgreementCommand,
  se_CreateFoundationModelAgreementCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFoundationModelAgreementCommand}.
 */
export interface CreateFoundationModelAgreementCommandInput extends CreateFoundationModelAgreementRequest {}
/**
 * @public
 *
 * The output of {@link CreateFoundationModelAgreementCommand}.
 */
export interface CreateFoundationModelAgreementCommandOutput
  extends CreateFoundationModelAgreementResponse,
    __MetadataBearer {}

/**
 * <p>Request a model access agreement for the specified model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, CreateFoundationModelAgreementCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, CreateFoundationModelAgreementCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // CreateFoundationModelAgreementRequest
 *   offerToken: "STRING_VALUE", // required
 *   modelId: "STRING_VALUE", // required
 * };
 * const command = new CreateFoundationModelAgreementCommand(input);
 * const response = await client.send(command);
 * // { // CreateFoundationModelAgreementResponse
 * //   modelId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateFoundationModelAgreementCommandInput - {@link CreateFoundationModelAgreementCommandInput}
 * @returns {@link CreateFoundationModelAgreementCommandOutput}
 * @see {@link CreateFoundationModelAgreementCommandInput} for command's `input` shape.
 * @see {@link CreateFoundationModelAgreementCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class CreateFoundationModelAgreementCommand extends $Command
  .classBuilder<
    CreateFoundationModelAgreementCommandInput,
    CreateFoundationModelAgreementCommandOutput,
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
  .s("AmazonBedrockControlPlaneService", "CreateFoundationModelAgreement", {})
  .n("BedrockClient", "CreateFoundationModelAgreementCommand")
  .f(void 0, void 0)
  .ser(se_CreateFoundationModelAgreementCommand)
  .de(de_CreateFoundationModelAgreementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFoundationModelAgreementRequest;
      output: CreateFoundationModelAgreementResponse;
    };
    sdk: {
      input: CreateFoundationModelAgreementCommandInput;
      output: CreateFoundationModelAgreementCommandOutput;
    };
  };
}
