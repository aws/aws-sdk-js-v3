// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateExclusionsPreviewRequest, CreateExclusionsPreviewResponse } from "../models/models_0";
import { CreateExclusionsPreview$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Starts the generation of an exclusions preview for the specified assessment template. The exclusions preview lists the potential exclusions (ExclusionPreview) that Inspector can detect before it runs the assessment.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, CreateExclusionsPreviewCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, CreateExclusionsPreviewCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
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
 *
 * You do not have required permissions to access the requested resource.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Internal server error.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced an entity that does not exist. The error code describes the entity.
 *
 * @throws {@link PreviewGenerationInProgressException} (client fault)
 *
 * The request is rejected. The specified assessment template is currently generating an exclusions preview.
 *
 * @throws {@link ServiceTemporarilyUnavailableException} (server fault)
 *
 * The serice is temporary unavailable.
 *
 * @throws {@link InspectorServiceException}
 *
 * Base exception class for all service exceptions from Inspector service.
 *
 * @public
 */
export class CreateExclusionsPreviewCommand extends command<CreateExclusionsPreviewCommandInput, CreateExclusionsPreviewCommandOutput>(
  _ep0,
  _mw0,
  "CreateExclusionsPreview",
  CreateExclusionsPreview$
) {
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
