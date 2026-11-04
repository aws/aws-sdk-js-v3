// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RestoreDocumentVersionsRequest } from "../models/models_0";
import { RestoreDocumentVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RestoreDocumentVersionsCommand}.
 */
export interface RestoreDocumentVersionsCommandInput extends RestoreDocumentVersionsRequest {}
/**
 * @public
 *
 * The output of {@link RestoreDocumentVersionsCommand}.
 */
export interface RestoreDocumentVersionsCommandOutput extends __MetadataBearer {}

/**
 * Recovers a deleted version of an Amazon WorkDocs document.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, RestoreDocumentVersionsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, RestoreDocumentVersionsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // RestoreDocumentVersionsRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   DocumentId: "STRING_VALUE", // required
 * };
 * const command = new RestoreDocumentVersionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RestoreDocumentVersionsCommandInput - {@link RestoreDocumentVersionsCommandInput}
 * @returns {@link RestoreDocumentVersionsCommandOutput}
 * @see {@link RestoreDocumentVersionsCommandInput} for command's `input` shape.
 * @see {@link RestoreDocumentVersionsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * The resource hierarchy is changing.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *
 * Another operation is in progress on the resource that conflicts with the current operation.
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
export class RestoreDocumentVersionsCommand extends command<RestoreDocumentVersionsCommandInput, RestoreDocumentVersionsCommandOutput>(
  _ep0,
  _mw0,
  "RestoreDocumentVersions",
  RestoreDocumentVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreDocumentVersionsRequest;
      output: {};
    };
    sdk: {
      input: RestoreDocumentVersionsCommandInput;
      output: RestoreDocumentVersionsCommandOutput;
    };
  };
}
