// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFoundationModelAgreementRequest, DeleteFoundationModelAgreementResponse } from "../models/models_0";
import {
  de_DeleteFoundationModelAgreementCommand,
  se_DeleteFoundationModelAgreementCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFoundationModelAgreementCommand}.
 */
export interface DeleteFoundationModelAgreementCommandInput extends DeleteFoundationModelAgreementRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFoundationModelAgreementCommand}.
 */
export interface DeleteFoundationModelAgreementCommandOutput
  extends DeleteFoundationModelAgreementResponse,
    __MetadataBearer {}

/**
 * <p>Delete the model access agreement for the specified model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, DeleteFoundationModelAgreementCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, DeleteFoundationModelAgreementCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // DeleteFoundationModelAgreementRequest
 *   modelId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFoundationModelAgreementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFoundationModelAgreementCommandInput - {@link DeleteFoundationModelAgreementCommandInput}
 * @returns {@link DeleteFoundationModelAgreementCommandOutput}
 * @see {@link DeleteFoundationModelAgreementCommandInput} for command's `input` shape.
 * @see {@link DeleteFoundationModelAgreementCommandOutput} for command's `response` shape.
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
export class DeleteFoundationModelAgreementCommand extends $Command
  .classBuilder<
    DeleteFoundationModelAgreementCommandInput,
    DeleteFoundationModelAgreementCommandOutput,
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
  .s("AmazonBedrockControlPlaneService", "DeleteFoundationModelAgreement", {})
  .n("BedrockClient", "DeleteFoundationModelAgreementCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFoundationModelAgreementCommand)
  .de(de_DeleteFoundationModelAgreementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFoundationModelAgreementRequest;
      output: {};
    };
    sdk: {
      input: DeleteFoundationModelAgreementCommandInput;
      output: DeleteFoundationModelAgreementCommandOutput;
    };
  };
}
