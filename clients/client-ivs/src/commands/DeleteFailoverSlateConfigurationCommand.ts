// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFailoverSlateConfigurationRequest } from "../models/models_0";
import { DeleteFailoverSlateConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFailoverSlateConfigurationCommand}.
 */
export interface DeleteFailoverSlateConfigurationCommandInput extends DeleteFailoverSlateConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFailoverSlateConfigurationCommand}.
 */
export interface DeleteFailoverSlateConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified failover slate configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, DeleteFailoverSlateConfigurationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, DeleteFailoverSlateConfigurationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // DeleteFailoverSlateConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteFailoverSlateConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFailoverSlateConfigurationCommandInput - {@link DeleteFailoverSlateConfigurationCommandInput}
 * @returns {@link DeleteFailoverSlateConfigurationCommandOutput}
 * @see {@link DeleteFailoverSlateConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteFailoverSlateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class DeleteFailoverSlateConfigurationCommand extends command<DeleteFailoverSlateConfigurationCommandInput, DeleteFailoverSlateConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFailoverSlateConfiguration",
  DeleteFailoverSlateConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFailoverSlateConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteFailoverSlateConfigurationCommandInput;
      output: DeleteFailoverSlateConfigurationCommandOutput;
    };
  };
}
