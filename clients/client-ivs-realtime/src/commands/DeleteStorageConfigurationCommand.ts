// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteStorageConfigurationRequest, DeleteStorageConfigurationResponse } from "../models/models_0";
import { DeleteStorageConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteStorageConfigurationCommand}.
 */
export interface DeleteStorageConfigurationCommandInput extends DeleteStorageConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteStorageConfigurationCommand}.
 */
export interface DeleteStorageConfigurationCommandOutput extends DeleteStorageConfigurationResponse, __MetadataBearer {}

/**
 * <p>Deletes the storage configuration for the specified ARN.</p> <p>If you try to delete a storage configuration that is used by a Composition, you will get an error (409 ConflictException). To avoid this, for all Compositions that reference the storage configuration, first use <a>StopComposition</a> and wait for it to complete, then use DeleteStorageConfiguration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, DeleteStorageConfigurationCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, DeleteStorageConfigurationCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // DeleteStorageConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteStorageConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStorageConfigurationCommandInput - {@link DeleteStorageConfigurationCommandInput}
 * @returns {@link DeleteStorageConfigurationCommandOutput}
 * @see {@link DeleteStorageConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteStorageConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 *
 * @public
 */
export class DeleteStorageConfigurationCommand extends command<DeleteStorageConfigurationCommandInput, DeleteStorageConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteStorageConfiguration",
  DeleteStorageConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStorageConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteStorageConfigurationCommandInput;
      output: DeleteStorageConfigurationCommandOutput;
    };
  };
}
