// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDocumentVersionRequest, DeleteDocumentVersionRequestFilterSensitiveLog } from "../models/models_0";
import { de_DeleteDocumentVersionCommand, se_DeleteDocumentVersionCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDocumentVersionCommand}.
 */
export interface DeleteDocumentVersionCommandInput extends DeleteDocumentVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDocumentVersionCommand}.
 */
export interface DeleteDocumentVersionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a specific version of a document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DeleteDocumentVersionCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DeleteDocumentVersionCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const input = { // DeleteDocumentVersionRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   DocumentId: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE", // required
 *   DeletePriorVersions: true || false, // required
 * };
 * const command = new DeleteDocumentVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDocumentVersionCommandInput - {@link DeleteDocumentVersionCommandInput}
 * @returns {@link DeleteDocumentVersionCommandOutput}
 * @see {@link DeleteDocumentVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteDocumentVersionCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The resource hierarchy is changing.</p>
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *  <p>Another operation is in progress on the resource that conflicts with the current operation.</p>
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *  <p>The resource does not exist.</p>
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation is invalid.</p>
 *
 * @throws {@link ProhibitedStateException} (client fault)
 *  <p>The specified document version is not in the INITIALIZED state.</p>
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
 * @public
 */
export class DeleteDocumentVersionCommand extends $Command
  .classBuilder<
    DeleteDocumentVersionCommandInput,
    DeleteDocumentVersionCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGorillaBoyService", "DeleteDocumentVersion", {})
  .n("WorkDocsClient", "DeleteDocumentVersionCommand")
  .f(DeleteDocumentVersionRequestFilterSensitiveLog, void 0)
  .ser(se_DeleteDocumentVersionCommand)
  .de(de_DeleteDocumentVersionCommand)
  .build() {}
