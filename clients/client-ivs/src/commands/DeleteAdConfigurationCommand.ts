// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAdConfigurationRequest } from "../models/models_0";
import { DeleteAdConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAdConfigurationCommand}.
 */
export interface DeleteAdConfigurationCommandInput extends DeleteAdConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAdConfigurationCommand}.
 */
export interface DeleteAdConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified ad configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, DeleteAdConfigurationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, DeleteAdConfigurationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // DeleteAdConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAdConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAdConfigurationCommandInput - {@link DeleteAdConfigurationCommandInput}
 * @returns {@link DeleteAdConfigurationCommandOutput}
 * @see {@link DeleteAdConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteAdConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IvsServiceException}
 *
 * Base exception class for all service exceptions from Ivs service.
 *
 * @public
 */
export class DeleteAdConfigurationCommand extends command<DeleteAdConfigurationCommandInput, DeleteAdConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAdConfiguration",
  DeleteAdConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAdConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteAdConfigurationCommandInput;
      output: DeleteAdConfigurationCommandOutput;
    };
  };
}
