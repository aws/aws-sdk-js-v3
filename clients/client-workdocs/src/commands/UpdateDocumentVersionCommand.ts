// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDocumentVersionRequest } from "../models/models_0";
import { UpdateDocumentVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDocumentVersionCommand}.
 */
export interface UpdateDocumentVersionCommandInput extends UpdateDocumentVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDocumentVersionCommand}.
 */
export interface UpdateDocumentVersionCommandOutput extends __MetadataBearer {}

/**
 * Changes the status of the document version to ACTIVE.
 *
 * Amazon WorkDocs also sets its document container to ACTIVE. This is the last step in a document upload, after the client uploads the document to an S3-presigned URL returned by InitiateDocumentVersionUpload.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, UpdateDocumentVersionCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, UpdateDocumentVersionCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // UpdateDocumentVersionRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   DocumentId: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE", // required
 *   VersionStatus: "ACTIVE",
 * };
 * const command = new UpdateDocumentVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDocumentVersionCommandInput - {@link UpdateDocumentVersionCommandInput}
 * @returns {@link UpdateDocumentVersionCommandOutput}
 * @see {@link UpdateDocumentVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentVersionCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * The resource hierarchy is changing.
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *
 * The resource does not exist.
 *
 * @throws {@link FailedDependencyException} (client fault)
 *
 * The Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * The operation is invalid.
 *
 * @throws {@link ProhibitedStateException} (client fault)
 *
 * The specified document version is not in the INITIALIZED state.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * One or more of the dependencies is unavailable.
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *
 * The operation is not permitted.
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *
 * The caller does not have access to perform the action on the resource.
 *
 * @throws {@link WorkDocsServiceException}
 *
 * Base exception class for all service exceptions from WorkDocs service.
 *
 * @public
 */
export class UpdateDocumentVersionCommand extends command<UpdateDocumentVersionCommandInput, UpdateDocumentVersionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDocumentVersion",
  UpdateDocumentVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDocumentVersionRequest;
      output: {};
    };
    sdk: {
      input: UpdateDocumentVersionCommandInput;
      output: UpdateDocumentVersionCommandOutput;
    };
  };
}
