// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDocumentRequest, DeleteDocumentResult } from "../models/models_0";
import { DeleteDocument } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDocumentCommand}.
 */
export interface DeleteDocumentCommandInput extends DeleteDocumentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDocumentCommand}.
 */
export interface DeleteDocumentCommandOutput extends DeleteDocumentResult, __MetadataBearer {}

/**
 * <p>Deletes the Amazon Web Services Systems Manager document (SSM document) and all managed node associations to the
 *    document.</p>
 *          <p>Before you delete the document, we recommend that you use <a>DeleteAssociation</a> to disassociate all managed nodes that are associated with the document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteDocumentCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteDocumentCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DeleteDocumentRequest
 *   Name: "STRING_VALUE", // required
 *   DocumentVersion: "STRING_VALUE",
 *   VersionName: "STRING_VALUE",
 *   Force: true || false,
 * };
 * const command = new DeleteDocumentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDocumentCommandInput - {@link DeleteDocumentCommandInput}
 * @returns {@link DeleteDocumentCommandOutput}
 * @see {@link DeleteDocumentCommandInput} for command's `input` shape.
 * @see {@link DeleteDocumentCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AssociatedInstances} (client fault)
 *  <p>You must disassociate a document from all managed nodes before you can delete it.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDocument} (client fault)
 *  <p>The specified SSM document doesn't exist.</p>
 *
 * @throws {@link InvalidDocumentOperation} (client fault)
 *  <p>You attempted to delete a document while it is still shared. You must stop sharing the
 *    document before you can delete it.</p>
 *
 * @throws {@link TooManyUpdates} (client fault)
 *  <p>There are concurrent updates for a resource that supports one update at a time.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DeleteDocumentCommand extends $Command
  .classBuilder<
    DeleteDocumentCommandInput,
    DeleteDocumentCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "DeleteDocument", {})
  .n("SSMClient", "DeleteDocumentCommand")
  .sc(DeleteDocument)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDocumentRequest;
      output: {};
    };
    sdk: {
      input: DeleteDocumentCommandInput;
      output: DeleteDocumentCommandOutput;
    };
  };
}
