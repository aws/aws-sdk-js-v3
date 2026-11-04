// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteReplicationConfigurationTemplateRequest,
  DeleteReplicationConfigurationTemplateResponse,
} from "../models/models_0";
import { DeleteReplicationConfigurationTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteReplicationConfigurationTemplateCommand}.
 */
export interface DeleteReplicationConfigurationTemplateCommandInput extends DeleteReplicationConfigurationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteReplicationConfigurationTemplateCommand}.
 */
export interface DeleteReplicationConfigurationTemplateCommandOutput extends DeleteReplicationConfigurationTemplateResponse, __MetadataBearer {}

/**
 * Deletes a single Replication Configuration Template by ID
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DeleteReplicationConfigurationTemplateCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DeleteReplicationConfigurationTemplateCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // DeleteReplicationConfigurationTemplateRequest
 *   replicationConfigurationTemplateID: "STRING_VALUE", // required
 * };
 * const command = new DeleteReplicationConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteReplicationConfigurationTemplateCommandInput - {@link DeleteReplicationConfigurationTemplateCommandInput}
 * @returns {@link DeleteReplicationConfigurationTemplateCommandOutput}
 * @see {@link DeleteReplicationConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the target resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource for this operation was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *
 * The account performing the request has not been initialized.
 *
 * @throws {@link DrsServiceException}
 *
 * Base exception class for all service exceptions from Drs service.
 *
 * @public
 */
export class DeleteReplicationConfigurationTemplateCommand extends command<DeleteReplicationConfigurationTemplateCommandInput, DeleteReplicationConfigurationTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteReplicationConfigurationTemplate",
  DeleteReplicationConfigurationTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReplicationConfigurationTemplateRequest;
      output: {};
    };
    sdk: {
      input: DeleteReplicationConfigurationTemplateCommandInput;
      output: DeleteReplicationConfigurationTemplateCommandOutput;
    };
  };
}
