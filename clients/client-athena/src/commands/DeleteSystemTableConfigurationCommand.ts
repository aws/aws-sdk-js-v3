// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSystemTableConfigurationInput, DeleteSystemTableConfigurationOutput } from "../models/models_0";
import { DeleteSystemTableConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSystemTableConfigurationCommand}.
 */
export interface DeleteSystemTableConfigurationCommandInput extends DeleteSystemTableConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DeleteSystemTableConfigurationCommand}.
 */
export interface DeleteSystemTableConfigurationCommandOutput extends DeleteSystemTableConfigurationOutput, __MetadataBearer {}

/**
 * <p>Disables system tables for the current account by deleting the account-level
 *             configuration. If the configuration doesn't exist, the operation succeeds without making
 *             any changes. The system table and previously published data are left intact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, DeleteSystemTableConfigurationCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, DeleteSystemTableConfigurationCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // DeleteSystemTableConfigurationInput
 *   TableName: "ALL", // required
 * };
 * const command = new DeleteSystemTableConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSystemTableConfigurationCommandInput - {@link DeleteSystemTableConfigurationCommandInput}
 * @returns {@link DeleteSystemTableConfigurationCommandOutput}
 * @see {@link DeleteSystemTableConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteSystemTableConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request was throttled.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class DeleteSystemTableConfigurationCommand extends command<DeleteSystemTableConfigurationCommandInput, DeleteSystemTableConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSystemTableConfiguration",
  DeleteSystemTableConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSystemTableConfigurationInput;
      output: {};
    };
    sdk: {
      input: DeleteSystemTableConfigurationCommandInput;
      output: DeleteSystemTableConfigurationCommandOutput;
    };
  };
}
