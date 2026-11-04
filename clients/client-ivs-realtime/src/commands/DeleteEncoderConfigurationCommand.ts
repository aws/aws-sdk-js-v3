// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEncoderConfigurationRequest, DeleteEncoderConfigurationResponse } from "../models/models_0";
import { DeleteEncoderConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEncoderConfigurationCommand}.
 */
export interface DeleteEncoderConfigurationCommandInput extends DeleteEncoderConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEncoderConfigurationCommand}.
 */
export interface DeleteEncoderConfigurationCommandOutput extends DeleteEncoderConfigurationResponse, __MetadataBearer {}

/**
 * Deletes an EncoderConfiguration resource. Ensures that no Compositions are using this template; otherwise, returns an error.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, DeleteEncoderConfigurationCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, DeleteEncoderConfigurationCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // DeleteEncoderConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteEncoderConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEncoderConfigurationCommandInput - {@link DeleteEncoderConfigurationCommandInput}
 * @returns {@link DeleteEncoderConfigurationCommandOutput}
 * @see {@link DeleteEncoderConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteEncoderConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request would cause a service quota to be exceeded.
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
export class DeleteEncoderConfigurationCommand extends command<DeleteEncoderConfigurationCommandInput, DeleteEncoderConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEncoderConfiguration",
  DeleteEncoderConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEncoderConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteEncoderConfigurationCommandInput;
      output: DeleteEncoderConfigurationCommandOutput;
    };
  };
}
