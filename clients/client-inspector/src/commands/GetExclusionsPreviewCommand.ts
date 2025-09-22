// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { GetExclusionsPreviewRequest, GetExclusionsPreviewResponse } from "../models/models_0";
import { GetExclusionsPreview } from "../schemas/schemas_1_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExclusionsPreviewCommand}.
 */
export interface GetExclusionsPreviewCommandInput extends GetExclusionsPreviewRequest {}
/**
 * @public
 *
 * The output of {@link GetExclusionsPreviewCommand}.
 */
export interface GetExclusionsPreviewCommandOutput extends GetExclusionsPreviewResponse, __MetadataBearer {}

/**
 * <p>Retrieves the exclusions preview (a list of ExclusionPreview objects) specified by
 *          the preview token. You can obtain the preview token by running the CreateExclusionsPreview
 *          API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, GetExclusionsPreviewCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, GetExclusionsPreviewCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
 * const client = new InspectorClient(config);
 * const input = { // GetExclusionsPreviewRequest
 *   assessmentTemplateArn: "STRING_VALUE", // required
 *   previewToken: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   locale: "EN_US",
 * };
 * const command = new GetExclusionsPreviewCommand(input);
 * const response = await client.send(command);
 * // { // GetExclusionsPreviewResponse
 * //   previewStatus: "WORK_IN_PROGRESS" || "COMPLETED", // required
 * //   exclusionPreviews: [ // ExclusionPreviewList
 * //     { // ExclusionPreview
 * //       title: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       recommendation: "STRING_VALUE", // required
 * //       scopes: [ // ScopeList // required
 * //         { // Scope
 * //           key: "INSTANCE_ID" || "RULES_PACKAGE_ARN",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       attributes: [ // AttributeList
 * //         { // Attribute
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetExclusionsPreviewCommandInput - {@link GetExclusionsPreviewCommandInput}
 * @returns {@link GetExclusionsPreviewCommandOutput}
 * @see {@link GetExclusionsPreviewCommandInput} for command's `input` shape.
 * @see {@link GetExclusionsPreviewCommandOutput} for command's `response` shape.
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
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 *
 * @public
 */
export class GetExclusionsPreviewCommand extends $Command
  .classBuilder<
    GetExclusionsPreviewCommandInput,
    GetExclusionsPreviewCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("InspectorService", "GetExclusionsPreview", {})
  .n("InspectorClient", "GetExclusionsPreviewCommand")
  .sc(GetExclusionsPreview)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExclusionsPreviewRequest;
      output: GetExclusionsPreviewResponse;
    };
    sdk: {
      input: GetExclusionsPreviewCommandInput;
      output: GetExclusionsPreviewCommandOutput;
    };
  };
}
