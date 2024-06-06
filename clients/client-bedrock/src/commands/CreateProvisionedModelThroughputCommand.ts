// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateProvisionedModelThroughputRequest, CreateProvisionedModelThroughputResponse } from "../models/models_0";
import {
  de_CreateProvisionedModelThroughputCommand,
  se_CreateProvisionedModelThroughputCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProvisionedModelThroughputCommand}.
 */
export interface CreateProvisionedModelThroughputCommandInput extends CreateProvisionedModelThroughputRequest {}
/**
 * @public
 *
 * The output of {@link CreateProvisionedModelThroughputCommand}.
 */
export interface CreateProvisionedModelThroughputCommandOutput
  extends CreateProvisionedModelThroughputResponse,
    __MetadataBearer {}

/**
 * <p>Creates dedicated throughput for a base or custom model with the model units and for the duration that you specify. For pricing details, see <a href="http://aws.amazon.com/bedrock/pricing/">Amazon Bedrock Pricing</a>. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html">Provisioned Throughput</a> in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, CreateProvisionedModelThroughputCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, CreateProvisionedModelThroughputCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // CreateProvisionedModelThroughputRequest
 *   clientRequestToken: "STRING_VALUE",
 *   modelUnits: Number("int"), // required
 *   provisionedModelName: "STRING_VALUE", // required
 *   modelId: "STRING_VALUE", // required
 *   commitmentDuration: "OneMonth" || "SixMonths",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateProvisionedModelThroughputCommand(input);
 * const response = await client.send(command);
 * // { // CreateProvisionedModelThroughputResponse
 * //   provisionedModelArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateProvisionedModelThroughputCommandInput - {@link CreateProvisionedModelThroughputCommandInput}
 * @returns {@link CreateProvisionedModelThroughputCommandOutput}
 * @see {@link CreateProvisionedModelThroughputCommandInput} for command's `input` shape.
 * @see {@link CreateProvisionedModelThroughputCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The request contains more tags than can be associated with a resource (50 tags per resource).
 *          The maximum number of tags includes both existing tags and those included in your current request. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 * @public
 */
export class CreateProvisionedModelThroughputCommand extends $Command
  .classBuilder<
    CreateProvisionedModelThroughputCommandInput,
    CreateProvisionedModelThroughputCommandOutput,
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
  .s("AmazonBedrockControlPlaneService", "CreateProvisionedModelThroughput", {})
  .n("BedrockClient", "CreateProvisionedModelThroughputCommand")
  .f(void 0, void 0)
  .ser(se_CreateProvisionedModelThroughputCommand)
  .de(de_CreateProvisionedModelThroughputCommand)
  .build() {}
