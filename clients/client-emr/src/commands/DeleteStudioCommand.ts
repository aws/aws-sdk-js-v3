// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteStudioInput } from "../models/models_0";
import { DeleteStudio$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteStudioCommand}.
 */
export interface DeleteStudioCommandInput extends DeleteStudioInput {}
/**
 * @public
 *
 * The output of {@link DeleteStudioCommand}.
 */
export interface DeleteStudioCommandOutput extends __MetadataBearer {}

/**
 * Removes an Amazon EMR Studio from the Studio metadata store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DeleteStudioCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DeleteStudioCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // DeleteStudioInput
 *   StudioId: "STRING_VALUE", // required
 * };
 * const command = new DeleteStudioCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStudioCommandInput - {@link DeleteStudioCommandInput}
 * @returns {@link DeleteStudioCommandOutput}
 * @see {@link DeleteStudioCommandInput} for command's `input` shape.
 * @see {@link DeleteStudioCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Amazon EMR service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception occurs when there is something wrong with user input.
 *
 * @throws {@link EMRServiceException}
 *
 * Base exception class for all service exceptions from EMR service.
 *
 * @public
 */
export class DeleteStudioCommand extends command<DeleteStudioCommandInput, DeleteStudioCommandOutput>(
  _ep0,
  _mw0,
  "DeleteStudio",
  DeleteStudio$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStudioInput;
      output: {};
    };
    sdk: {
      input: DeleteStudioCommandInput;
      output: DeleteStudioCommandOutput;
    };
  };
}
