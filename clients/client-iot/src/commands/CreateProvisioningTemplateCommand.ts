// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateProvisioningTemplateRequest, CreateProvisioningTemplateResponse } from "../models/models_0";
import { de_CreateProvisioningTemplateCommand, se_CreateProvisioningTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProvisioningTemplateCommand}.
 */
export interface CreateProvisioningTemplateCommandInput extends CreateProvisioningTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateProvisioningTemplateCommand}.
 */
export interface CreateProvisioningTemplateCommandOutput extends CreateProvisioningTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates a provisioning template.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningTemplate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateProvisioningTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateProvisioningTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreateProvisioningTemplateRequest
 *   templateName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   templateBody: "STRING_VALUE", // required
 *   enabled: true || false,
 *   provisioningRoleArn: "STRING_VALUE", // required
 *   preProvisioningHook: { // ProvisioningHook
 *     payloadVersion: "STRING_VALUE",
 *     targetArn: "STRING_VALUE", // required
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   type: "FLEET_PROVISIONING" || "JITP",
 * };
 * const command = new CreateProvisioningTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateProvisioningTemplateResponse
 * //   templateArn: "STRING_VALUE",
 * //   templateName: "STRING_VALUE",
 * //   defaultVersionId: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateProvisioningTemplateCommandInput - {@link CreateProvisioningTemplateCommandInput}
 * @returns {@link CreateProvisioningTemplateCommandOutput}
 * @see {@link CreateProvisioningTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateProvisioningTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
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
export class CreateProvisioningTemplateCommand extends $Command
  .classBuilder<
    CreateProvisioningTemplateCommandInput,
    CreateProvisioningTemplateCommandOutput,
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
  .s("AWSIotService", "CreateProvisioningTemplate", {})
  .n("IoTClient", "CreateProvisioningTemplateCommand")
  .f(void 0, void 0)
  .ser(se_CreateProvisioningTemplateCommand)
  .de(de_CreateProvisioningTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProvisioningTemplateRequest;
      output: CreateProvisioningTemplateResponse;
    };
    sdk: {
      input: CreateProvisioningTemplateCommandInput;
      output: CreateProvisioningTemplateCommandOutput;
    };
  };
}
