// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetPolicyVersionRequest, GetPolicyVersionResponse } from "../models/models_1";
import { de_GetPolicyVersionCommand, se_GetPolicyVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPolicyVersionCommand}.
 */
export interface GetPolicyVersionCommandInput extends GetPolicyVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetPolicyVersionCommand}.
 */
export interface GetPolicyVersionCommandOutput extends GetPolicyVersionResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specified policy version.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPolicyVersion</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetPolicyVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetPolicyVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // GetPolicyVersionRequest
 *   policyName: "STRING_VALUE", // required
 *   policyVersionId: "STRING_VALUE", // required
 * };
 * const command = new GetPolicyVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetPolicyVersionResponse
 * //   policyArn: "STRING_VALUE",
 * //   policyName: "STRING_VALUE",
 * //   policyDocument: "STRING_VALUE",
 * //   policyVersionId: "STRING_VALUE",
 * //   isDefaultVersion: true || false,
 * //   creationDate: new Date("TIMESTAMP"),
 * //   lastModifiedDate: new Date("TIMESTAMP"),
 * //   generationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPolicyVersionCommandInput - {@link GetPolicyVersionCommandInput}
 * @returns {@link GetPolicyVersionCommandOutput}
 * @see {@link GetPolicyVersionCommandInput} for command's `input` shape.
 * @see {@link GetPolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class GetPolicyVersionCommand extends $Command
  .classBuilder<
    GetPolicyVersionCommandInput,
    GetPolicyVersionCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "GetPolicyVersion", {})
  .n("IoTClient", "GetPolicyVersionCommand")
  .f(void 0, void 0)
  .ser(se_GetPolicyVersionCommand)
  .de(de_GetPolicyVersionCommand)
  .build() {}
