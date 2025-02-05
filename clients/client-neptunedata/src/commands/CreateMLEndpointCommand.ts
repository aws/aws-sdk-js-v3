// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateMLEndpointInput, CreateMLEndpointOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { de_CreateMLEndpointCommand, se_CreateMLEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMLEndpointCommand}.
 */
export interface CreateMLEndpointCommandInput extends CreateMLEndpointInput {}
/**
 * @public
 *
 * The output of {@link CreateMLEndpointCommand}.
 */
export interface CreateMLEndpointCommandOutput extends CreateMLEndpointOutput, __MetadataBearer {}

/**
 * <p>Creates a new Neptune ML inference endpoint that lets you query
 *       one specific model that the model-training process constructed. See
 *       <a href="https://docs.aws.amazon.com/neptune/latest/userguide/machine-learning-api-endpoints.html">Managing
 *       inference endpoints using the endpoints command</a>.</p>
 *          <p>When invoking this operation in a Neptune cluster that has IAM
 *       authentication enabled, the IAM user or role making the request must
 *       have a policy attached that allows the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#createmlendpoint">neptune-db:CreateMLEndpoint</a>
 *       IAM action in that cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, CreateMLEndpointCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, CreateMLEndpointCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new NeptunedataClient(config);
 * const input = { // CreateMLEndpointInput
 *   id: "STRING_VALUE",
 *   mlModelTrainingJobId: "STRING_VALUE",
 *   mlModelTransformJobId: "STRING_VALUE",
 *   update: true || false,
 *   neptuneIamRoleArn: "STRING_VALUE",
 *   modelName: "STRING_VALUE",
 *   instanceType: "STRING_VALUE",
 *   instanceCount: Number("int"),
 *   volumeEncryptionKMSKey: "STRING_VALUE",
 * };
 * const command = new CreateMLEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateMLEndpointOutput
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   creationTimeInMillis: Number("long"),
 * // };
 *
 * ```
 *
 * @param CreateMLEndpointCommandInput - {@link CreateMLEndpointCommandInput}
 * @returns {@link CreateMLEndpointCommandOutput}
 * @see {@link CreateMLEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateMLEndpointCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Raised when a request is submitted that cannot be processed.</p>
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *  <p>Raised when a request timed out in the client.</p>
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>Raised when a value in a request field did not satisfy required constraints.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Raised when an argument in a request is not supported.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Raised when an argument in a request has an invalid value.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Raised when a parameter value is not valid.</p>
 *
 * @throws {@link MissingParameterException} (client fault)
 *  <p>Raised when a required parameter is missing.</p>
 *
 * @throws {@link MLResourceNotFoundException} (client fault)
 *  <p>Raised when a specified machine-learning resource could not be found.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Raised when the number of requests being processed exceeds the limit.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>Raised when a request attempts to initiate an operation that is not supported.</p>
 *
 * @throws {@link NeptunedataServiceException}
 * <p>Base exception class for all service exceptions from Neptunedata service.</p>
 *
 * @public
 */
export class CreateMLEndpointCommand extends $Command
  .classBuilder<
    CreateMLEndpointCommandInput,
    CreateMLEndpointCommandOutput,
    NeptunedataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptunedataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonNeptuneDataplane", "CreateMLEndpoint", {})
  .n("NeptunedataClient", "CreateMLEndpointCommand")
  .f(void 0, void 0)
  .ser(se_CreateMLEndpointCommand)
  .de(de_CreateMLEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMLEndpointInput;
      output: CreateMLEndpointOutput;
    };
    sdk: {
      input: CreateMLEndpointCommandInput;
      output: CreateMLEndpointCommandOutput;
    };
  };
}
