// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { CreateExclusionsPreviewRequest, CreateExclusionsPreviewResponse } from "../models/models_0";
import { de_CreateExclusionsPreviewCommand, se_CreateExclusionsPreviewCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateExclusionsPreviewCommand}.
 */
export interface CreateExclusionsPreviewCommandInput extends CreateExclusionsPreviewRequest {}
/**
 * @public
 *
 * The output of {@link CreateExclusionsPreviewCommand}.
 */
export interface CreateExclusionsPreviewCommandOutput extends CreateExclusionsPreviewResponse, __MetadataBearer {}

/**
 * <p>Starts the generation of an exclusions preview for the specified assessment template.
 *          The exclusions preview lists the potential exclusions (ExclusionPreview) that Inspector can
 *          detect before it runs the assessment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, CreateExclusionsPreviewCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, CreateExclusionsPreviewCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // CreateExclusionsPreviewRequest
 *   assessmentTemplateArn: "STRING_VALUE", // required
 * };
 * const command = new CreateExclusionsPreviewCommand(input);
 * const response = await client.send(command);
 * // { // CreateExclusionsPreviewResponse
 * //   previewToken: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateExclusionsPreviewCommandInput - {@link CreateExclusionsPreviewCommandInput}
 * @returns {@link CreateExclusionsPreviewCommandOutput}
 * @see {@link CreateExclusionsPreviewCommandInput} for command's `input` shape.
 * @see {@link CreateExclusionsPreviewCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 *
 * @throws {@link PreviewGenerationInProgressException} (client fault)
 *  <p>The request is rejected. The specified assessment template is currently generating an
 *          exclusions preview.</p>
 *
 * @throws {@link ServiceTemporarilyUnavailableException} (server fault)
 *  <p>The serice is temporary unavailable.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 *
 * @public
 */
export class CreateExclusionsPreviewCommand extends $Command
  .classBuilder<
    CreateExclusionsPreviewCommandInput,
    CreateExclusionsPreviewCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InspectorService", "CreateExclusionsPreview", {})
  .n("InspectorClient", "CreateExclusionsPreviewCommand")
  .f(void 0, void 0)
  .ser(se_CreateExclusionsPreviewCommand)
  .de(de_CreateExclusionsPreviewCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateExclusionsPreviewRequest;
      output: CreateExclusionsPreviewResponse;
    };
    sdk: {
      input: CreateExclusionsPreviewCommandInput;
      output: CreateExclusionsPreviewCommandOutput;
    };
  };
}
