// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateDocumentRequest } from "../models/models_0";
import { UpdateDocument } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDocumentCommand}.
 */
export interface UpdateDocumentCommandInput extends UpdateDocumentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDocumentCommand}.
 */
export interface UpdateDocumentCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the specified attributes of a document. The user must have access to both
 *             the document and its parent folder, if applicable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, UpdateDocumentCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, UpdateDocumentCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // UpdateDocumentRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   DocumentId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   ParentFolderId: "STRING_VALUE",
 *   ResourceState: "ACTIVE" || "RESTORING" || "RECYCLING" || "RECYCLED",
 * };
 * const command = new UpdateDocumentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDocumentCommandInput - {@link UpdateDocumentCommandInput}
 * @returns {@link UpdateDocumentCommandOutput}
 * @see {@link UpdateDocumentCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The resource hierarchy is changing.</p>
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *  <p>Another operation is in progress on the resource that conflicts with the current operation.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *  <p>The resource does not exist.</p>
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The maximum of 100,000 files and folders under the parent folder has been exceeded.</p>
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
export class UpdateDocumentCommand extends $Command
  .classBuilder<
    UpdateDocumentCommandInput,
    UpdateDocumentCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGorillaBoyService", "UpdateDocument", {})
  .n("WorkDocsClient", "UpdateDocumentCommand")
  .sc(UpdateDocument)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDocumentRequest;
      output: {};
    };
    sdk: {
      input: UpdateDocumentCommandInput;
      output: UpdateDocumentCommandOutput;
    };
  };
}
