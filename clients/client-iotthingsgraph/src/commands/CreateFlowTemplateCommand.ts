// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  IoTThingsGraphClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTThingsGraphClient";
import type { CreateFlowTemplateRequest, CreateFlowTemplateResponse } from "../models/models_0";
import { CreateFlowTemplate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFlowTemplateCommand}.
 */
export interface CreateFlowTemplateCommandInput extends CreateFlowTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateFlowTemplateCommand}.
 */
export interface CreateFlowTemplateCommandOutput extends CreateFlowTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only
 *          entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the
 *       latest version of the user's namespace unless another namespace version is specified in the request.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, CreateFlowTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, CreateFlowTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * // import type { IoTThingsGraphClientConfig } from "@aws-sdk/client-iotthingsgraph";
 * const config = {}; // type is IoTThingsGraphClientConfig
 * const client = new IoTThingsGraphClient(config);
 * const input = { // CreateFlowTemplateRequest
 *   definition: { // DefinitionDocument
 *     language: "GRAPHQL", // required
 *     text: "STRING_VALUE", // required
 *   },
 *   compatibleNamespaceVersion: Number("long"),
 * };
 * const command = new CreateFlowTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateFlowTemplateResponse
 * //   summary: { // FlowTemplateSummary
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     revisionNumber: Number("long"),
 * //     createdAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateFlowTemplateCommandInput - {@link CreateFlowTemplateCommandInput}
 * @returns {@link CreateFlowTemplateCommandOutput}
 * @see {@link CreateFlowTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateFlowTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link LimitExceededException} (client fault)
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
export class CreateFlowTemplateCommand extends $Command
  .classBuilder<
    CreateFlowTemplateCommandInput,
    CreateFlowTemplateCommandOutput,
    IoTThingsGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTThingsGraphClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotThingsGraphFrontEndService", "CreateFlowTemplate", {})
  .n("IoTThingsGraphClient", "CreateFlowTemplateCommand")
  .sc(CreateFlowTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFlowTemplateRequest;
      output: CreateFlowTemplateResponse;
    };
    sdk: {
      input: CreateFlowTemplateCommandInput;
      output: CreateFlowTemplateCommandOutput;
    };
  };
}
