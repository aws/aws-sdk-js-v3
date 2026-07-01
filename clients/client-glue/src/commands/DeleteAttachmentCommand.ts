// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAttachmentRequest, DeleteAttachmentResponse } from "../models/models_1";
import { DeleteAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 *   AssetIdentifier: "STRING_VALUE", // required
 *   IterableFormName: "STRING_VALUE",
 *   ItemIdentifier: "STRING_VALUE",
 *   AttachmentName: "STRING_VALUE", // required
 * };
 * const command = new DeleteAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAttachmentResponse
 * //   AssetIdentifier: "STRING_VALUE",
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
export class DeleteAttachmentCommand extends command<DeleteAttachmentCommandInput, DeleteAttachmentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAttachment",
  DeleteAttachment$
) {
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
