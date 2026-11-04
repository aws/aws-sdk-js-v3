// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEncoderConfigurationRequest, CreateEncoderConfigurationResponse } from "../models/models_0";
import { CreateEncoderConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateEncoderConfigurationCommand}.
 */
export interface CreateEncoderConfigurationCommandInput extends CreateEncoderConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateEncoderConfigurationCommand}.
 */
export interface CreateEncoderConfigurationCommandOutput extends CreateEncoderConfigurationResponse, __MetadataBearer {}

/**
 * Creates an EncoderConfiguration object.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, CreateEncoderConfigurationCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, CreateEncoderConfigurationCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // CreateEncoderConfigurationRequest
 *   name: "STRING_VALUE",
 *   video: { // Video
 *     width: Number("int"),
 *     height: Number("int"),
 *     framerate: Number("float"),
 *     bitrate: Number("int"),
 *   },
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateEncoderConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateEncoderConfigurationResponse
 * //   encoderConfiguration: { // EncoderConfiguration
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE",
 * //     video: { // Video
 * //       width: Number("int"),
 * //       height: Number("int"),
 * //       framerate: Number("float"),
 * //       bitrate: Number("int"),
 * //     },
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateEncoderConfigurationCommandInput - {@link CreateEncoderConfigurationCommandInput}
 * @returns {@link CreateEncoderConfigurationCommandOutput}
 * @see {@link CreateEncoderConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateEncoderConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link PendingVerification} (client fault)
 *
 * Your account is pending verification.
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
export class CreateEncoderConfigurationCommand extends command<CreateEncoderConfigurationCommandInput, CreateEncoderConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateEncoderConfiguration",
  CreateEncoderConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEncoderConfigurationRequest;
      output: CreateEncoderConfigurationResponse;
    };
    sdk: {
      input: CreateEncoderConfigurationCommandInput;
      output: CreateEncoderConfigurationCommandOutput;
    };
  };
}
