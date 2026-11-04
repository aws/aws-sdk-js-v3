// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetProvisionedModelThroughputRequest, GetProvisionedModelThroughputResponse } from "../models/models_1";
import { GetProvisionedModelThroughput$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetProvisionedModelThroughputCommandOutput extends GetProvisionedModelThroughputResponse, __MetadataBearer {}

/**
 * Returns details for a Provisioned Throughput. For more information, see [Provisioned Throughput](https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html) in the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetProvisionedModelThroughputCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetProvisionedModelThroughputCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
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
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockServiceException}
 *
 * Base exception class for all service exceptions from Bedrock service.
 *
 * @public
 */
export class GetProvisionedModelThroughputCommand extends command<GetProvisionedModelThroughputCommandInput, GetProvisionedModelThroughputCommandOutput>(
  _ep0,
  _mw0,
  "GetProvisionedModelThroughput",
  GetProvisionedModelThroughput$
) {
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
