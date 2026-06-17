// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { DeleteAttachmentRequest, DeleteAttachmentResponse } from "../models/models_1";
import { DeleteAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAttachmentCommand}.
 */
export interface DeleteAttachmentCommandInput extends DeleteAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAttachmentCommand}.
 */
export interface DeleteAttachmentCommandOutput extends DeleteAttachmentResponse, __MetadataBearer {}

/**
 * <p>Deletes a form attachment from an asset in Glue Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteAttachmentCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteAttachmentCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteAttachmentRequest
 *   Identifier: "STRING_VALUE", // required
 *   AttachmentName: "STRING_VALUE", // required
 * };
 * const command = new DeleteAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAttachmentResponse
 * //   Identifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteAttachmentCommandInput - {@link DeleteAttachmentCommandInput}
 * @returns {@link DeleteAttachmentCommandOutput}
 * @see {@link DeleteAttachmentCommandInput} for command's `input` shape.
 * @see {@link DeleteAttachmentCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling threshhold was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DeleteAttachmentCommand extends $Command
  .classBuilder<
    DeleteAttachmentCommandInput,
    DeleteAttachmentCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeleteAttachment", {})
  .n("GlueClient", "DeleteAttachmentCommand")
  .sc(DeleteAttachment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAttachmentRequest;
      output: DeleteAttachmentResponse;
    };
    sdk: {
      input: DeleteAttachmentCommandInput;
      output: DeleteAttachmentCommandOutput;
    };
  };
}
