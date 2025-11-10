// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetSystemTemplateRequest, GetSystemTemplateResponse } from "../models/models_0";
import { GetSystemTemplate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSystemTemplateCommand}.
 */
export interface GetSystemTemplateCommandInput extends GetSystemTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetSystemTemplateCommand}.
 */
export interface GetSystemTemplateCommandOutput extends GetSystemTemplateResponse, __MetadataBearer {}

/**
 * <p>Gets a system.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetSystemTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetSystemTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * // import type { IoTThingsGraphClientConfig } from "@aws-sdk/client-iotthingsgraph";
 * const config = {}; // type is IoTThingsGraphClientConfig
 * const client = new IoTThingsGraphClient(config);
 * const input = { // GetSystemTemplateRequest
 *   id: "STRING_VALUE", // required
 *   revisionNumber: Number("long"),
 * };
 * const command = new GetSystemTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetSystemTemplateResponse
 * //   description: { // SystemTemplateDescription
 * //     summary: { // SystemTemplateSummary
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
 * @param GetSystemTemplateCommandInput - {@link GetSystemTemplateCommandInput}
 * @returns {@link GetSystemTemplateCommandOutput}
 * @see {@link GetSystemTemplateCommandInput} for command's `input` shape.
 * @see {@link GetSystemTemplateCommandOutput} for command's `response` shape.
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
export class GetSystemTemplateCommand extends $Command
  .classBuilder<
    GetSystemTemplateCommandInput,
    GetSystemTemplateCommandOutput,
    IoTThingsGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTThingsGraphClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotThingsGraphFrontEndService", "GetSystemTemplate", {})
  .n("IoTThingsGraphClient", "GetSystemTemplateCommand")
  .sc(GetSystemTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSystemTemplateRequest;
      output: GetSystemTemplateResponse;
    };
    sdk: {
      input: GetSystemTemplateCommandInput;
      output: GetSystemTemplateCommandOutput;
    };
  };
}
