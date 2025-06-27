// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetFoundationModelAvailabilityRequest, GetFoundationModelAvailabilityResponse } from "../models/models_0";
import {
  de_GetFoundationModelAvailabilityCommand,
  se_GetFoundationModelAvailabilityCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFoundationModelAvailabilityCommand}.
 */
export interface GetFoundationModelAvailabilityCommandInput extends GetFoundationModelAvailabilityRequest {}
/**
 * @public
 *
 * The output of {@link GetFoundationModelAvailabilityCommand}.
 */
export interface GetFoundationModelAvailabilityCommandOutput
  extends GetFoundationModelAvailabilityResponse,
    __MetadataBearer {}

/**
 * <p>Get information about the Foundation model availability.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetFoundationModelAvailabilityCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetFoundationModelAvailabilityCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // GetFoundationModelAvailabilityRequest
 *   modelId: "STRING_VALUE", // required
 * };
 * const command = new GetFoundationModelAvailabilityCommand(input);
 * const response = await client.send(command);
 * // { // GetFoundationModelAvailabilityResponse
 * //   modelId: "STRING_VALUE", // required
 * //   agreementAvailability: { // AgreementAvailability
 * //     status: "AVAILABLE" || "PENDING" || "NOT_AVAILABLE" || "ERROR", // required
 * //     errorMessage: "STRING_VALUE",
 * //   },
 * //   authorizationStatus: "AUTHORIZED" || "NOT_AUTHORIZED", // required
 * //   entitlementAvailability: "AVAILABLE" || "NOT_AVAILABLE", // required
 * //   regionAvailability: "AVAILABLE" || "NOT_AVAILABLE", // required
 * // };
 *
 * ```
 *
 * @param GetFoundationModelAvailabilityCommandInput - {@link GetFoundationModelAvailabilityCommandInput}
 * @returns {@link GetFoundationModelAvailabilityCommandOutput}
 * @see {@link GetFoundationModelAvailabilityCommandInput} for command's `input` shape.
 * @see {@link GetFoundationModelAvailabilityCommandOutput} for command's `response` shape.
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
export class GetFoundationModelAvailabilityCommand extends $Command
  .classBuilder<
    GetFoundationModelAvailabilityCommandInput,
    GetFoundationModelAvailabilityCommandOutput,
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
  .s("AmazonBedrockControlPlaneService", "GetFoundationModelAvailability", {})
  .n("BedrockClient", "GetFoundationModelAvailabilityCommand")
  .f(void 0, void 0)
  .ser(se_GetFoundationModelAvailabilityCommand)
  .de(de_GetFoundationModelAvailabilityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFoundationModelAvailabilityRequest;
      output: GetFoundationModelAvailabilityResponse;
    };
    sdk: {
      input: GetFoundationModelAvailabilityCommandInput;
      output: GetFoundationModelAvailabilityCommandOutput;
    };
  };
}
