// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRecordingConfigurationRequest } from "../models/models_0";
import { DeleteRecordingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRecordingConfigurationCommand}.
 */
export interface DeleteRecordingConfigurationCommandInput extends DeleteRecordingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRecordingConfigurationCommand}.
 */
export interface DeleteRecordingConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Deletes the recording configuration for the specified ARN.
 *
 * If you try to delete a recording configuration that is associated with a channel, you will get an error (409 ConflictException). To avoid this, for all channels that reference the recording configuration, first use UpdateChannel to set the `recordingConfigurationArn` field to an empty string, then use DeleteRecordingConfiguration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, DeleteRecordingConfigurationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, DeleteRecordingConfigurationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // DeleteRecordingConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteRecordingConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRecordingConfigurationCommandInput - {@link DeleteRecordingConfigurationCommandInput}
 * @returns {@link DeleteRecordingConfigurationCommandOutput}
 * @see {@link DeleteRecordingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteRecordingConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteRecordingConfigurationCommand extends command<DeleteRecordingConfigurationCommandInput, DeleteRecordingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRecordingConfiguration",
  DeleteRecordingConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRecordingConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteRecordingConfigurationCommandInput;
      output: DeleteRecordingConfigurationCommandOutput;
    };
  };
}
