// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { UpdateSystemTemplateRequest, UpdateSystemTemplateResponse } from "../models/models_0";
import { UpdateSystemTemplate } from "../schemas/schemas_3_Template";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSystemTemplateCommand}.
 */
export interface UpdateSystemTemplateCommandInput extends UpdateSystemTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSystemTemplateCommand}.
 */
export interface UpdateSystemTemplateCommandOutput extends UpdateSystemTemplateResponse, __MetadataBearer {}

/**
 * <p>Updates the specified system. You don't need to run this action after updating a workflow. Any deployment that uses the system will see the changes in the system when it is redeployed.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, UpdateSystemTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, UpdateSystemTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * // import type { IoTThingsGraphClientConfig } from "@aws-sdk/client-iotthingsgraph";
 * const config = {}; // type is IoTThingsGraphClientConfig
 * const client = new IoTThingsGraphClient(config);
 * const input = { // UpdateSystemTemplateRequest
 *   id: "STRING_VALUE", // required
 *   definition: { // DefinitionDocument
 *     language: "GRAPHQL", // required
 *     text: "STRING_VALUE", // required
 *   },
 *   compatibleNamespaceVersion: Number("long"),
 * };
 * const command = new UpdateSystemTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSystemTemplateResponse
 * //   summary: { // SystemTemplateSummary
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     revisionNumber: Number("long"),
 * //     createdAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSystemTemplateCommandInput - {@link UpdateSystemTemplateCommandInput}
 * @returns {@link UpdateSystemTemplateCommandOutput}
 * @see {@link UpdateSystemTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateSystemTemplateCommandOutput} for command's `response` shape.
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
export class UpdateSystemTemplateCommand extends $Command
  .classBuilder<
    UpdateSystemTemplateCommandInput,
    UpdateSystemTemplateCommandOutput,
    IoTThingsGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTThingsGraphClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotThingsGraphFrontEndService", "UpdateSystemTemplate", {})
  .n("IoTThingsGraphClient", "UpdateSystemTemplateCommand")
  .sc(UpdateSystemTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSystemTemplateRequest;
      output: UpdateSystemTemplateResponse;
    };
    sdk: {
      input: UpdateSystemTemplateCommandInput;
      output: UpdateSystemTemplateCommandOutput;
    };
  };
}
