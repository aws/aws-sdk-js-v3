// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RestoreDocumentVersionsRequest, RestoreDocumentVersionsRequestFilterSensitiveLog } from "../models/models_0";
import { de_RestoreDocumentVersionsCommand, se_RestoreDocumentVersionsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Recovers a deleted version of an Amazon WorkDocs document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, RestoreDocumentVersionsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, RestoreDocumentVersionsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
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
export class RestoreDocumentVersionsCommand extends $Command
  .classBuilder<
    RestoreDocumentVersionsCommandInput,
    RestoreDocumentVersionsCommandOutput,
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
  .s("AWSGorillaBoyService", "RestoreDocumentVersions", {})
  .n("WorkDocsClient", "RestoreDocumentVersionsCommand")
  .f(RestoreDocumentVersionsRequestFilterSensitiveLog, void 0)
  .ser(se_RestoreDocumentVersionsCommand)
  .de(de_RestoreDocumentVersionsCommand)
  .build() {}
