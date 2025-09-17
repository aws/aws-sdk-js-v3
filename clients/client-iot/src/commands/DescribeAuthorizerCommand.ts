// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeAuthorizerRequest, DescribeAuthorizerResponse } from "../models/models_1";
import { de_DescribeAuthorizerCommand, se_DescribeAuthorizerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAuthorizerCommand}.
 */
export interface DescribeAuthorizerCommandInput extends DescribeAuthorizerRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAuthorizerCommand}.
 */
export interface DescribeAuthorizerCommandOutput extends DescribeAuthorizerResponse, __MetadataBearer {}

/**
 * <p>Describes an authorizer.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuthorizer</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeAuthorizerRequest
 *   authorizerName: "STRING_VALUE", // required
 * };
 * const command = new DescribeAuthorizerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAuthorizerResponse
 * //   authorizerDescription: { // AuthorizerDescription
 * //     authorizerName: "STRING_VALUE",
 * //     authorizerArn: "STRING_VALUE",
 * //     authorizerFunctionArn: "STRING_VALUE",
 * //     tokenKeyName: "STRING_VALUE",
 * //     tokenSigningPublicKeys: { // PublicKeyMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     status: "ACTIVE" || "INACTIVE",
 * //     creationDate: new Date("TIMESTAMP"),
 * //     lastModifiedDate: new Date("TIMESTAMP"),
 * //     signingDisabled: true || false,
 * //     enableCachingForHttp: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAuthorizerCommandInput - {@link DescribeAuthorizerCommandInput}
 * @returns {@link DescribeAuthorizerCommandOutput}
 * @see {@link DescribeAuthorizerCommandInput} for command's `input` shape.
 * @see {@link DescribeAuthorizerCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeAuthorizerCommand extends $Command
  .classBuilder<
    DescribeAuthorizerCommandInput,
    DescribeAuthorizerCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "DescribeAuthorizer", {})
  .n("IoTClient", "DescribeAuthorizerCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAuthorizerCommand)
  .de(de_DescribeAuthorizerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAuthorizerRequest;
      output: DescribeAuthorizerResponse;
    };
    sdk: {
      input: DescribeAuthorizerCommandInput;
      output: DescribeAuthorizerCommandOutput;
    };
  };
}
