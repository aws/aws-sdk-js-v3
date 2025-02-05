// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeProvisioningTemplateRequest, DescribeProvisioningTemplateResponse } from "../models/models_1";
import {
  de_DescribeProvisioningTemplateCommand,
  se_DescribeProvisioningTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeProvisioningTemplateCommand}.
 */
export interface DescribeProvisioningTemplateCommandInput extends DescribeProvisioningTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProvisioningTemplateCommand}.
 */
export interface DescribeProvisioningTemplateCommandOutput
  extends DescribeProvisioningTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about a provisioning template.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeProvisioningTemplate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeProvisioningTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeProvisioningTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // DescribeProvisioningTemplateRequest
 *   templateName: "STRING_VALUE", // required
 * };
 * const command = new DescribeProvisioningTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProvisioningTemplateResponse
 * //   templateArn: "STRING_VALUE",
 * //   templateName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   creationDate: new Date("TIMESTAMP"),
 * //   lastModifiedDate: new Date("TIMESTAMP"),
 * //   defaultVersionId: Number("int"),
 * //   templateBody: "STRING_VALUE",
 * //   enabled: true || false,
 * //   provisioningRoleArn: "STRING_VALUE",
 * //   preProvisioningHook: { // ProvisioningHook
 * //     payloadVersion: "STRING_VALUE",
 * //     targetArn: "STRING_VALUE", // required
 * //   },
 * //   type: "FLEET_PROVISIONING" || "JITP",
 * // };
 *
 * ```
 *
 * @param DescribeProvisioningTemplateCommandInput - {@link DescribeProvisioningTemplateCommandInput}
 * @returns {@link DescribeProvisioningTemplateCommandOutput}
 * @see {@link DescribeProvisioningTemplateCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisioningTemplateCommandOutput} for command's `response` shape.
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
export class DescribeProvisioningTemplateCommand extends $Command
  .classBuilder<
    DescribeProvisioningTemplateCommandInput,
    DescribeProvisioningTemplateCommandOutput,
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
  .s("AWSIotService", "DescribeProvisioningTemplate", {})
  .n("IoTClient", "DescribeProvisioningTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DescribeProvisioningTemplateCommand)
  .de(de_DescribeProvisioningTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProvisioningTemplateRequest;
      output: DescribeProvisioningTemplateResponse;
    };
    sdk: {
      input: DescribeProvisioningTemplateCommandInput;
      output: DescribeProvisioningTemplateCommandOutput;
    };
  };
}
