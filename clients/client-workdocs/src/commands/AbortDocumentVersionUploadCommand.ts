// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  AbortDocumentVersionUploadRequest,
  AbortDocumentVersionUploadRequestFilterSensitiveLog,
} from "../models/models_0";
import { de_AbortDocumentVersionUploadCommand, se_AbortDocumentVersionUploadCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AbortDocumentVersionUploadCommand}.
 */
export interface AbortDocumentVersionUploadCommandInput extends AbortDocumentVersionUploadRequest {}
/**
 * @public
 *
 * The output of {@link AbortDocumentVersionUploadCommand}.
 */
export interface AbortDocumentVersionUploadCommandOutput extends __MetadataBearer {}

/**
 * <p>Aborts the upload of the specified document version that was previously initiated
 *             by <a>InitiateDocumentVersionUpload</a>. The client should make this call
 *             only when it no longer intends to upload the document version, or fails to do
 *             so.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, AbortDocumentVersionUploadCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, AbortDocumentVersionUploadCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // AbortDocumentVersionUploadRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   DocumentId: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE", // required
 * };
 * const command = new AbortDocumentVersionUploadCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AbortDocumentVersionUploadCommandInput - {@link AbortDocumentVersionUploadCommandInput}
 * @returns {@link AbortDocumentVersionUploadCommandOutput}
 * @see {@link AbortDocumentVersionUploadCommandInput} for command's `input` shape.
 * @see {@link AbortDocumentVersionUploadCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The resource hierarchy is changing.</p>
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *  <p>The resource does not exist.</p>
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
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
export class AbortDocumentVersionUploadCommand extends $Command
  .classBuilder<
    AbortDocumentVersionUploadCommandInput,
    AbortDocumentVersionUploadCommandOutput,
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
  .s("AWSGorillaBoyService", "AbortDocumentVersionUpload", {})
  .n("WorkDocsClient", "AbortDocumentVersionUploadCommand")
  .f(AbortDocumentVersionUploadRequestFilterSensitiveLog, void 0)
  .ser(se_AbortDocumentVersionUploadCommand)
  .de(de_AbortDocumentVersionUploadCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AbortDocumentVersionUploadRequest;
      output: {};
    };
    sdk: {
      input: AbortDocumentVersionUploadCommandInput;
      output: AbortDocumentVersionUploadCommandOutput;
    };
  };
}
