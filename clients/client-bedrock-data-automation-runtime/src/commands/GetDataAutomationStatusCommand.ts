// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockDataAutomationRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockDataAutomationRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDataAutomationStatusRequest, GetDataAutomationStatusResponse } from "../models/models_0";
import { GetDataAutomationStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataAutomationStatusCommand}.
 */
export interface GetDataAutomationStatusCommandInput extends GetDataAutomationStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetDataAutomationStatusCommand}.
 */
export interface GetDataAutomationStatusCommandOutput extends GetDataAutomationStatusResponse, __MetadataBearer {}

/**
 * API used to get data automation status.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationRuntimeClient, GetDataAutomationStatusCommand } from "@aws-sdk/client-bedrock-data-automation-runtime"; // ES Modules import
 * // const { BedrockDataAutomationRuntimeClient, GetDataAutomationStatusCommand } = require("@aws-sdk/client-bedrock-data-automation-runtime"); // CommonJS import
 * // import type { BedrockDataAutomationRuntimeClientConfig } from "@aws-sdk/client-bedrock-data-automation-runtime";
 * const config = {}; // type is BedrockDataAutomationRuntimeClientConfig
 * const client = new BedrockDataAutomationRuntimeClient(config);
 * const input = { // GetDataAutomationStatusRequest
 *   invocationArn: "STRING_VALUE", // required
 * };
 * const command = new GetDataAutomationStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetDataAutomationStatusResponse
 * //   status: "Created" || "InProgress" || "Success" || "ServiceError" || "ClientError",
 * //   errorType: "STRING_VALUE",
 * //   errorMessage: "STRING_VALUE",
 * //   outputConfiguration: { // OutputConfiguration
 * //     s3Uri: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataAutomationStatusCommandInput - {@link GetDataAutomationStatusCommandInput}
 * @returns {@link GetDataAutomationStatusCommandOutput}
 * @see {@link GetDataAutomationStatusCommandInput} for command's `input` shape.
 * @see {@link GetDataAutomationStatusCommandOutput} for command's `response` shape.
 * @see {@link BedrockDataAutomationRuntimeClientResolvedConfig | config} for BedrockDataAutomationRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception will be thrown when customer does not have access to API.
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is for any internal un-expected service errors.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception will be thrown when resource provided from customer not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception will be thrown when customer reached API TPS limit.
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception will be thrown when customer provided invalid parameters.
 *
 * @throws {@link BedrockDataAutomationRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockDataAutomationRuntime service.</p>
 *
 *
 * @public
 */
export class GetDataAutomationStatusCommand extends $Command
  .classBuilder<
    GetDataAutomationStatusCommandInput,
    GetDataAutomationStatusCommandOutput,
    BedrockDataAutomationRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockDataAutomationRuntimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockKeystoneRuntimeService", "GetDataAutomationStatus", {})
  .n("BedrockDataAutomationRuntimeClient", "GetDataAutomationStatusCommand")
  .sc(GetDataAutomationStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataAutomationStatusRequest;
      output: GetDataAutomationStatusResponse;
    };
    sdk: {
      input: GetDataAutomationStatusCommandInput;
      output: GetDataAutomationStatusCommandOutput;
    };
  };
}
