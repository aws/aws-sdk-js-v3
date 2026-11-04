// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteIngestConfigurationRequest, DeleteIngestConfigurationResponse } from "../models/models_0";
import { DeleteIngestConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteIngestConfigurationCommand}.
 */
export interface DeleteIngestConfigurationCommandInput extends DeleteIngestConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIngestConfigurationCommand}.
 */
export interface DeleteIngestConfigurationCommandOutput extends DeleteIngestConfigurationResponse, __MetadataBearer {}

/**
 * Deletes a specified IngestConfiguration, so it can no longer be used to broadcast. An IngestConfiguration cannot be deleted if the publisher is actively streaming to a stage, unless `force` is set to `true`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, DeleteIngestConfigurationCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, DeleteIngestConfigurationCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // DeleteIngestConfigurationRequest
 *   arn: "STRING_VALUE", // required
 *   force: true || false,
 * };
 * const command = new DeleteIngestConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIngestConfigurationCommandInput - {@link DeleteIngestConfigurationCommandInput}
 * @returns {@link DeleteIngestConfigurationCommandOutput}
 * @see {@link DeleteIngestConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteIngestConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link PendingVerification} (client fault)
 *
 * Your account is pending verification.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IVSRealTimeServiceException}
 *
 * Base exception class for all service exceptions from IVSRealTime service.
 *
 * @public
 */
export class DeleteIngestConfigurationCommand extends command<DeleteIngestConfigurationCommandInput, DeleteIngestConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIngestConfiguration",
  DeleteIngestConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIngestConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteIngestConfigurationCommandInput;
      output: DeleteIngestConfigurationCommandOutput;
    };
  };
}
