// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { PutAttachmentRequest, PutAttachmentResponse } from "../models/models_2";
import { PutAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAttachmentCommand}.
 */
export interface PutAttachmentCommandInput extends PutAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link PutAttachmentCommand}.
 */
export interface PutAttachmentCommandOutput extends PutAttachmentResponse, __MetadataBearer {}

/**
 * <p>Attaches a form to an asset or an iterable form item in Glue Data Catalog. If an attachment with the same name already exists, it is overwritten.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PutAttachmentCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, PutAttachmentCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // PutAttachmentRequest
 *   AssetIdentifier: "STRING_VALUE", // required
 *   IterableFormName: "STRING_VALUE",
 *   ItemIdentifier: "STRING_VALUE",
 *   AttachmentName: "STRING_VALUE", // required
 *   Content: "STRING_VALUE", // required
 *   FormTypeId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new PutAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // PutAttachmentResponse
 * //   AssetId: "STRING_VALUE",
 * //   IterableFormName: "STRING_VALUE",
 * //   ItemIdentifier: "STRING_VALUE",
 * //   AttachmentName: "STRING_VALUE",
 * //   FormTypeId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutAttachmentCommandInput - {@link PutAttachmentCommandInput}
 * @returns {@link PutAttachmentCommandOutput}
 * @see {@link PutAttachmentCommandInput} for command's `input` shape.
 * @see {@link PutAttachmentCommandOutput} for command's `response` shape.
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
export class PutAttachmentCommand extends $Command
  .classBuilder<
    PutAttachmentCommandInput,
    PutAttachmentCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "PutAttachment", {})
  .n("GlueClient", "PutAttachmentCommand")
  .sc(PutAttachment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAttachmentRequest;
      output: PutAttachmentResponse;
    };
    sdk: {
      input: PutAttachmentCommandInput;
      output: PutAttachmentCommandOutput;
    };
  };
}
