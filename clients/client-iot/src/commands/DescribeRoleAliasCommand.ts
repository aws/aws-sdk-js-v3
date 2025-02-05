// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeRoleAliasRequest, DescribeRoleAliasResponse } from "../models/models_1";
import { de_DescribeRoleAliasCommand, se_DescribeRoleAliasCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRoleAliasCommand}.
 */
export interface DescribeRoleAliasCommandInput extends DescribeRoleAliasRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRoleAliasCommand}.
 */
export interface DescribeRoleAliasCommandOutput extends DescribeRoleAliasResponse, __MetadataBearer {}

/**
 * <p>Describes a role alias.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeRoleAlias</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeRoleAliasCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeRoleAliasCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // DescribeRoleAliasRequest
 *   roleAlias: "STRING_VALUE", // required
 * };
 * const command = new DescribeRoleAliasCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRoleAliasResponse
 * //   roleAliasDescription: { // RoleAliasDescription
 * //     roleAlias: "STRING_VALUE",
 * //     roleAliasArn: "STRING_VALUE",
 * //     roleArn: "STRING_VALUE",
 * //     owner: "STRING_VALUE",
 * //     credentialDurationSeconds: Number("int"),
 * //     creationDate: new Date("TIMESTAMP"),
 * //     lastModifiedDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRoleAliasCommandInput - {@link DescribeRoleAliasCommandInput}
 * @returns {@link DescribeRoleAliasCommandOutput}
 * @see {@link DescribeRoleAliasCommandInput} for command's `input` shape.
 * @see {@link DescribeRoleAliasCommandOutput} for command's `response` shape.
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
export class DescribeRoleAliasCommand extends $Command
  .classBuilder<
    DescribeRoleAliasCommandInput,
    DescribeRoleAliasCommandOutput,
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
  .s("AWSIotService", "DescribeRoleAlias", {})
  .n("IoTClient", "DescribeRoleAliasCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRoleAliasCommand)
  .de(de_DescribeRoleAliasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRoleAliasRequest;
      output: DescribeRoleAliasResponse;
    };
    sdk: {
      input: DescribeRoleAliasCommandInput;
      output: DescribeRoleAliasCommandOutput;
    };
  };
}
