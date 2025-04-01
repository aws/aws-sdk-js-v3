// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeManagedJobTemplateRequest, DescribeManagedJobTemplateResponse } from "../models/models_1";
import { de_DescribeManagedJobTemplateCommand, se_DescribeManagedJobTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeManagedJobTemplateCommand}.
 */
export interface DescribeManagedJobTemplateCommandInput extends DescribeManagedJobTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DescribeManagedJobTemplateCommand}.
 */
export interface DescribeManagedJobTemplateCommandOutput extends DescribeManagedJobTemplateResponse, __MetadataBearer {}

/**
 * <p>View details of a managed job template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeManagedJobTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeManagedJobTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DescribeManagedJobTemplateRequest
 *   templateName: "STRING_VALUE", // required
 *   templateVersion: "STRING_VALUE",
 * };
 * const command = new DescribeManagedJobTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DescribeManagedJobTemplateResponse
 * //   templateName: "STRING_VALUE",
 * //   templateArn: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   templateVersion: "STRING_VALUE",
 * //   environments: [ // Environments
 * //     "STRING_VALUE",
 * //   ],
 * //   documentParameters: [ // DocumentParameters
 * //     { // DocumentParameter
 * //       key: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       regex: "STRING_VALUE",
 * //       example: "STRING_VALUE",
 * //       optional: true || false,
 * //     },
 * //   ],
 * //   document: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeManagedJobTemplateCommandInput - {@link DescribeManagedJobTemplateCommandInput}
 * @returns {@link DescribeManagedJobTemplateCommandOutput}
 * @see {@link DescribeManagedJobTemplateCommandInput} for command's `input` shape.
 * @see {@link DescribeManagedJobTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *             is unavailable.</p>
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
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class DescribeManagedJobTemplateCommand extends $Command
  .classBuilder<
    DescribeManagedJobTemplateCommandInput,
    DescribeManagedJobTemplateCommandOutput,
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
  .s("AWSIotService", "DescribeManagedJobTemplate", {})
  .n("IoTClient", "DescribeManagedJobTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DescribeManagedJobTemplateCommand)
  .de(de_DescribeManagedJobTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeManagedJobTemplateRequest;
      output: DescribeManagedJobTemplateResponse;
    };
    sdk: {
      input: DescribeManagedJobTemplateCommandInput;
      output: DescribeManagedJobTemplateCommandOutput;
    };
  };
}
