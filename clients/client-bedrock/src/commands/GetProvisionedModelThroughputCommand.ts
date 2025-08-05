// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetProvisionedModelThroughputRequest, GetProvisionedModelThroughputResponse } from "../models/models_1";
import {
  de_GetProvisionedModelThroughputCommand,
  se_GetProvisionedModelThroughputCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProvisionedModelThroughputCommand}.
 */
export interface GetProvisionedModelThroughputCommandInput extends GetProvisionedModelThroughputRequest {}
/**
 * @public
 *
 * The output of {@link GetProvisionedModelThroughputCommand}.
 */
export interface GetProvisionedModelThroughputCommandOutput
  extends GetProvisionedModelThroughputResponse,
    __MetadataBearer {}

/**
 * <p>Returns details for a Provisioned Throughput. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html">Provisioned Throughput</a> in the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Amazon Bedrock User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetProvisionedModelThroughputCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetProvisionedModelThroughputCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // GetProvisionedModelThroughputRequest
 *   provisionedModelId: "STRING_VALUE", // required
 * };
 * const command = new GetProvisionedModelThroughputCommand(input);
 * const response = await client.send(command);
 * // { // GetProvisionedModelThroughputResponse
 * //   modelUnits: Number("int"), // required
 * //   desiredModelUnits: Number("int"), // required
 * //   provisionedModelName: "STRING_VALUE", // required
 * //   provisionedModelArn: "STRING_VALUE", // required
 * //   modelArn: "STRING_VALUE", // required
 * //   desiredModelArn: "STRING_VALUE", // required
 * //   foundationModelArn: "STRING_VALUE", // required
 * //   status: "Creating" || "InService" || "Updating" || "Failed", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   lastModifiedTime: new Date("TIMESTAMP"), // required
 * //   failureMessage: "STRING_VALUE",
 * //   commitmentDuration: "OneMonth" || "SixMonths",
 * //   commitmentExpirationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetProvisionedModelThroughputCommandInput - {@link GetProvisionedModelThroughputCommandInput}
 * @returns {@link GetProvisionedModelThroughputCommandOutput}
 * @see {@link GetProvisionedModelThroughputCommandInput} for command's `input` shape.
 * @see {@link GetProvisionedModelThroughputCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetProvisionedModelThroughputCommand extends $Command
  .classBuilder<
    GetProvisionedModelThroughputCommandInput,
    GetProvisionedModelThroughputCommandOutput,
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
  .s("AmazonBedrockControlPlaneService", "GetProvisionedModelThroughput", {})
  .n("BedrockClient", "GetProvisionedModelThroughputCommand")
  .f(void 0, void 0)
  .ser(se_GetProvisionedModelThroughputCommand)
  .de(de_GetProvisionedModelThroughputCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProvisionedModelThroughputRequest;
      output: GetProvisionedModelThroughputResponse;
    };
    sdk: {
      input: GetProvisionedModelThroughputCommandInput;
      output: GetProvisionedModelThroughputCommandOutput;
    };
  };
}
