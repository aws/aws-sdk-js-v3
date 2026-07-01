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
 * <p>Deletes the specified ad configuration.</p>
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
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
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
