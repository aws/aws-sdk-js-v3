// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { DescribeDefaultAuthorizerRequest, DescribeDefaultAuthorizerResponse } from "../models/models_1";
import { DescribeDefaultAuthorizer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDefaultAuthorizerCommand}.
 */
export interface DescribeDefaultAuthorizerCommandInput extends DescribeDefaultAuthorizerRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDefaultAuthorizerCommand}.
 */
export interface DescribeDefaultAuthorizerCommandOutput extends DescribeDefaultAuthorizerResponse, __MetadataBearer {}

/**
 * <p>Describes the default authorizer.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDefaultAuthorizer</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeDefaultAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeDefaultAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = {};
 * const command = new DescribeDefaultAuthorizerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDefaultAuthorizerResponse
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
 * @param DescribeDefaultAuthorizerCommandInput - {@link DescribeDefaultAuthorizerCommandInput}
 * @returns {@link DescribeDefaultAuthorizerCommandOutput}
 * @see {@link DescribeDefaultAuthorizerCommandInput} for command's `input` shape.
 * @see {@link DescribeDefaultAuthorizerCommandOutput} for command's `response` shape.
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
export class DescribeDefaultAuthorizerCommand extends $Command
  .classBuilder<
    DescribeDefaultAuthorizerCommandInput,
    DescribeDefaultAuthorizerCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DescribeDefaultAuthorizer", {})
  .n("IoTClient", "DescribeDefaultAuthorizerCommand")
  .sc(DescribeDefaultAuthorizer$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeDefaultAuthorizerResponse;
    };
    sdk: {
      input: DescribeDefaultAuthorizerCommandInput;
      output: DescribeDefaultAuthorizerCommandOutput;
    };
  };
}
