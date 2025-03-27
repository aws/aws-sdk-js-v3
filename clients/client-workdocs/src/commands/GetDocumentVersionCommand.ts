// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetDocumentVersionRequest,
  GetDocumentVersionRequestFilterSensitiveLog,
  GetDocumentVersionResponse,
  GetDocumentVersionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetDocumentVersionCommand, se_GetDocumentVersionCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDocumentVersionCommand}.
 */
export interface GetDocumentVersionCommandInput extends GetDocumentVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetDocumentVersionCommand}.
 */
export interface GetDocumentVersionCommandOutput extends GetDocumentVersionResponse, __MetadataBearer {}

/**
 * <p>Retrieves version metadata for the specified document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetDocumentVersionCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, GetDocumentVersionCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const input = { // GetDocumentVersionRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   DocumentId: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE", // required
 *   Fields: "STRING_VALUE",
 *   IncludeCustomMetadata: true || false,
 * };
 * const command = new GetDocumentVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetDocumentVersionResponse
 * //   Metadata: { // DocumentVersionMetadata
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     ContentType: "STRING_VALUE",
 * //     Size: Number("long"),
 * //     Signature: "STRING_VALUE",
 * //     Status: "INITIALIZED" || "ACTIVE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     ModifiedTimestamp: new Date("TIMESTAMP"),
 * //     ContentCreatedTimestamp: new Date("TIMESTAMP"),
 * //     ContentModifiedTimestamp: new Date("TIMESTAMP"),
 * //     CreatorId: "STRING_VALUE",
 * //     Thumbnail: { // DocumentThumbnailUrlMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Source: { // DocumentSourceUrlMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   CustomMetadata: { // CustomMetadataMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDocumentVersionCommandInput - {@link GetDocumentVersionCommandInput}
 * @returns {@link GetDocumentVersionCommandOutput}
 * @see {@link GetDocumentVersionCommandInput} for command's `input` shape.
 * @see {@link GetDocumentVersionCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *  <p>The resource does not exist.</p>
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 *
 * @throws {@link InvalidPasswordException} (client fault)
 *  <p>The password is invalid.</p>
 *
 * @throws {@link ProhibitedStateException} (client fault)
 *  <p>The specified document version is not in the INITIALIZED state.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>One or more of the dependencies is unavailable.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>The operation is not permitted.</p>
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *  <p>The caller does not have access to perform the action on the resource.</p>
 *
 * @throws {@link WorkDocsServiceException}
 * <p>Base exception class for all service exceptions from WorkDocs service.</p>
 *
 *
 * @public
 */
export class GetDocumentVersionCommand extends $Command
  .classBuilder<
    GetDocumentVersionCommandInput,
    GetDocumentVersionCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGorillaBoyService", "GetDocumentVersion", {})
  .n("WorkDocsClient", "GetDocumentVersionCommand")
  .f(GetDocumentVersionRequestFilterSensitiveLog, GetDocumentVersionResponseFilterSensitiveLog)
  .ser(se_GetDocumentVersionCommand)
  .de(de_GetDocumentVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDocumentVersionRequest;
      output: GetDocumentVersionResponse;
    };
    sdk: {
      input: GetDocumentVersionCommandInput;
      output: GetDocumentVersionCommandOutput;
    };
  };
}
