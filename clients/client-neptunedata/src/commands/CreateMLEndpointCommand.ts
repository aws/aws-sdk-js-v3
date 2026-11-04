// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMLEndpointInput, CreateMLEndpointOutput } from "../models/models_0";
import { CreateMLEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a new Neptune ML inference endpoint that lets you query one specific model that the model-training process constructed. See [Managing inference endpoints using the endpoints command](https://docs.aws.amazon.com/neptune/latest/userguide/machine-learning-api-endpoints.html).
 *
 * When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the [neptune-db:CreateMLEndpoint](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#createmlendpoint) IAM action in that cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, CreateMLEndpointCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, CreateMLEndpointCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
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
 *
 * Raised when a request is submitted that cannot be processed.
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *
 * Raised when a request timed out in the client.
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *
 * Raised when a value in a request field did not satisfy required constraints.
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *
 * Raised when an argument in a request is not supported.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * Raised when an argument in a request has an invalid value.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Raised when a parameter value is not valid.
 *
 * @throws {@link MissingParameterException} (client fault)
 *
 * Raised when a required parameter is missing.
 *
 * @throws {@link MLResourceNotFoundException} (client fault)
 *
 * Raised when a specified machine-learning resource could not be found.
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *
 * Raised when a precondition for processing a request is not satisfied.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Raised when the number of requests being processed exceeds the limit.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * Raised when a request attempts to initiate an operation that is not supported.
 *
 * @throws {@link NeptunedataServiceException}
 *
 * Base exception class for all service exceptions from Neptunedata service.
 *
 * @public
 */
export class CreateMLEndpointCommand extends command<CreateMLEndpointCommandInput, CreateMLEndpointCommandOutput>(
  _ep0,
  _mw0,
  "CreateMLEndpoint",
  CreateMLEndpoint$
) {
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
