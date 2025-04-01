// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { CreateSystemTemplateRequest, CreateSystemTemplateResponse } from "../models/models_0";
import { de_CreateSystemTemplateCommand, se_CreateSystemTemplateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSystemTemplateCommand}.
 */
export interface CreateSystemTemplateCommandInput extends CreateSystemTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateSystemTemplateCommand}.
 */
export interface CreateSystemTemplateCommandOutput extends CreateSystemTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates a system. The system is validated against the entities in the
 *          latest version of the user's namespace unless another namespace version is specified in the request.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, CreateSystemTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, CreateSystemTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const input = { // CreateSystemTemplateRequest
 *   definition: { // DefinitionDocument
 *     language: "GRAPHQL", // required
 *     text: "STRING_VALUE", // required
 *   },
 *   compatibleNamespaceVersion: Number("long"),
 * };
 * const command = new CreateSystemTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateSystemTemplateResponse
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
 * @param CreateSystemTemplateCommandInput - {@link CreateSystemTemplateCommandInput}
 * @returns {@link CreateSystemTemplateCommandOutput}
 * @see {@link CreateSystemTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateSystemTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
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
export class CreateSystemTemplateCommand extends $Command
  .classBuilder<
    CreateSystemTemplateCommandInput,
    CreateSystemTemplateCommandOutput,
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
  .s("IotThingsGraphFrontEndService", "CreateSystemTemplate", {})
  .n("IoTThingsGraphClient", "CreateSystemTemplateCommand")
  .f(void 0, void 0)
  .ser(se_CreateSystemTemplateCommand)
  .de(de_CreateSystemTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSystemTemplateRequest;
      output: CreateSystemTemplateResponse;
    };
    sdk: {
      input: CreateSystemTemplateCommandInput;
      output: CreateSystemTemplateCommandOutput;
    };
  };
}
