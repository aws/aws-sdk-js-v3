// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  DescribeProvisioningTemplateVersionRequest,
  DescribeProvisioningTemplateVersionResponse,
} from "../models/models_1";
import {
  de_DescribeProvisioningTemplateVersionCommand,
  se_DescribeProvisioningTemplateVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeProvisioningTemplateVersionCommand}.
 */
export interface DescribeProvisioningTemplateVersionCommandInput extends DescribeProvisioningTemplateVersionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProvisioningTemplateVersionCommand}.
 */
export interface DescribeProvisioningTemplateVersionCommandOutput
  extends DescribeProvisioningTemplateVersionResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about a provisioning template version.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeProvisioningTemplateVersion</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeProvisioningTemplateVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeProvisioningTemplateVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DescribeProvisioningTemplateVersionRequest
 *   templateName: "STRING_VALUE", // required
 *   versionId: Number("int"), // required
 * };
 * const command = new DescribeProvisioningTemplateVersionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProvisioningTemplateVersionResponse
 * //   versionId: Number("int"),
 * //   creationDate: new Date("TIMESTAMP"),
 * //   templateBody: "STRING_VALUE",
 * //   isDefaultVersion: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeProvisioningTemplateVersionCommandInput - {@link DescribeProvisioningTemplateVersionCommandInput}
 * @returns {@link DescribeProvisioningTemplateVersionCommandOutput}
 * @see {@link DescribeProvisioningTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisioningTemplateVersionCommandOutput} for command's `response` shape.
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
export class DescribeProvisioningTemplateVersionCommand extends $Command
  .classBuilder<
    DescribeProvisioningTemplateVersionCommandInput,
    DescribeProvisioningTemplateVersionCommandOutput,
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
  .s("AWSIotService", "DescribeProvisioningTemplateVersion", {})
  .n("IoTClient", "DescribeProvisioningTemplateVersionCommand")
  .f(void 0, void 0)
  .ser(se_DescribeProvisioningTemplateVersionCommand)
  .de(de_DescribeProvisioningTemplateVersionCommand)
  .build() {}
