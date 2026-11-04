// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSinkInput, DeleteSinkOutput } from "../models/models_0";
import { DeleteSink$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSinkCommand}.
 */
export interface DeleteSinkCommandInput extends DeleteSinkInput {}
/**
 * @public
 *
 * The output of {@link DeleteSinkCommand}.
 */
export interface DeleteSinkCommandOutput extends DeleteSinkOutput, __MetadataBearer {}

/**
 * Deletes a sink. You must delete all links to a sink before you can delete that sink.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, DeleteSinkCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, DeleteSinkCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * // import type { OAMClientConfig } from "@aws-sdk/client-oam";
 * const config = {}; // type is OAMClientConfig
 * const client = new OAMClient(config);
 * const input = { // DeleteSinkInput
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteSinkCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSinkCommandInput - {@link DeleteSinkCommandInput}
 * @returns {@link DeleteSinkCommandOutput}
 * @see {@link DeleteSinkCommandInput} for command's `input` shape.
 * @see {@link DeleteSinkCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A resource was in an inconsistent state during an update or a deletion.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *
 * Unexpected error while processing the request. Retry the request.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *
 * A required parameter is missing from the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that does not exist.
 *
 * @throws {@link OAMServiceException}
 *
 * Base exception class for all service exceptions from OAM service.
 *
 * @public
 */
export class DeleteSinkCommand extends command<DeleteSinkCommandInput, DeleteSinkCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSink",
  DeleteSink$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSinkInput;
      output: {};
    };
    sdk: {
      input: DeleteSinkCommandInput;
      output: DeleteSinkCommandOutput;
    };
  };
}
