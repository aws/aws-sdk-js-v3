// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetFlowTemplateRequest, GetFlowTemplateResponse } from "../models/models_0";
import { de_GetFlowTemplateCommand, se_GetFlowTemplateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFlowTemplateCommand}.
 */
export interface GetFlowTemplateCommandInput extends GetFlowTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetFlowTemplateCommand}.
 */
export interface GetFlowTemplateCommandOutput extends GetFlowTemplateResponse, __MetadataBearer {}

/**
 * <p>Gets the latest version of the <code>DefinitionDocument</code> and <code>FlowTemplateSummary</code> for the specified workflow.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetFlowTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetFlowTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const input = { // GetFlowTemplateRequest
 *   id: "STRING_VALUE", // required
 *   revisionNumber: Number("long"),
 * };
 * const command = new GetFlowTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetFlowTemplateResponse
 * //   description: { // FlowTemplateDescription
 * //     summary: { // FlowTemplateSummary
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       revisionNumber: Number("long"),
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //     definition: { // DefinitionDocument
 * //       language: "GRAPHQL", // required
 * //       text: "STRING_VALUE", // required
 * //     },
 * //     validatedNamespaceVersion: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFlowTemplateCommandInput - {@link GetFlowTemplateCommandInput}
 * @returns {@link GetFlowTemplateCommandOutput}
 * @see {@link GetFlowTemplateCommandInput} for command's `input` shape.
 * @see {@link GetFlowTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 *
 * @public
 */
export class GetFlowTemplateCommand extends $Command
  .classBuilder<
    GetFlowTemplateCommandInput,
    GetFlowTemplateCommandOutput,
    IoTThingsGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTThingsGraphClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotThingsGraphFrontEndService", "GetFlowTemplate", {})
  .n("IoTThingsGraphClient", "GetFlowTemplateCommand")
  .f(void 0, void 0)
  .ser(se_GetFlowTemplateCommand)
  .de(de_GetFlowTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFlowTemplateRequest;
      output: GetFlowTemplateResponse;
    };
    sdk: {
      input: GetFlowTemplateCommandInput;
      output: GetFlowTemplateCommandOutput;
    };
  };
}
