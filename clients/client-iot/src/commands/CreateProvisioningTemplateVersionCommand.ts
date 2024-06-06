// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  CreateProvisioningTemplateVersionRequest,
  CreateProvisioningTemplateVersionResponse,
} from "../models/models_0";
import {
  de_CreateProvisioningTemplateVersionCommand,
  se_CreateProvisioningTemplateVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProvisioningTemplateVersionCommand}.
 */
export interface CreateProvisioningTemplateVersionCommandInput extends CreateProvisioningTemplateVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateProvisioningTemplateVersionCommand}.
 */
export interface CreateProvisioningTemplateVersionCommandOutput
  extends CreateProvisioningTemplateVersionResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new version of a provisioning template.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningTemplateVersion</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateProvisioningTemplateVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateProvisioningTemplateVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // CreateProvisioningTemplateVersionRequest
 *   templateName: "STRING_VALUE", // required
 *   templateBody: "STRING_VALUE", // required
 *   setAsDefault: true || false,
 * };
 * const command = new CreateProvisioningTemplateVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateProvisioningTemplateVersionResponse
 * //   templateArn: "STRING_VALUE",
 * //   templateName: "STRING_VALUE",
 * //   versionId: Number("int"),
 * //   isDefaultVersion: true || false,
 * // };
 *
 * ```
 *
 * @param CreateProvisioningTemplateVersionCommandInput - {@link CreateProvisioningTemplateVersionCommandInput}
 * @returns {@link CreateProvisioningTemplateVersionCommandOutput}
 * @see {@link CreateProvisioningTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link CreateProvisioningTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictingResourceUpdateException} (client fault)
 *  <p>A conflicting resource update exception. This exception is thrown when two pending
 *          updates cause a conflict.</p>
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
 * @throws {@link VersionsLimitExceededException} (client fault)
 *  <p>The number of policy versions exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class CreateProvisioningTemplateVersionCommand extends $Command
  .classBuilder<
    CreateProvisioningTemplateVersionCommandInput,
    CreateProvisioningTemplateVersionCommandOutput,
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
  .s("AWSIotService", "CreateProvisioningTemplateVersion", {})
  .n("IoTClient", "CreateProvisioningTemplateVersionCommand")
  .f(void 0, void 0)
  .ser(se_CreateProvisioningTemplateVersionCommand)
  .de(de_CreateProvisioningTemplateVersionCommand)
  .build() {}
