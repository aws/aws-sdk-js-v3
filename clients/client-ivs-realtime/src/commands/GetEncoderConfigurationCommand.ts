// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEncoderConfigurationRequest, GetEncoderConfigurationResponse } from "../models/models_0";
import { GetEncoderConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEncoderConfigurationCommand}.
 */
export interface GetEncoderConfigurationCommandInput extends GetEncoderConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetEncoderConfigurationCommand}.
 */
export interface GetEncoderConfigurationCommandOutput extends GetEncoderConfigurationResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specified EncoderConfiguration resource. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, GetEncoderConfigurationCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, GetEncoderConfigurationCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // GetEncoderConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetEncoderConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetEncoderConfigurationResponse
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
 * @param GetEncoderConfigurationCommandInput - {@link GetEncoderConfigurationCommandInput}
 * @returns {@link GetEncoderConfigurationCommandOutput}
 * @see {@link GetEncoderConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetEncoderConfigurationCommandOutput} for command's `response` shape.
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
export class GetEncoderConfigurationCommand extends command<GetEncoderConfigurationCommandInput, GetEncoderConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetEncoderConfiguration",
  GetEncoderConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEncoderConfigurationRequest;
      output: GetEncoderConfigurationResponse;
    };
    sdk: {
      input: GetEncoderConfigurationCommandInput;
      output: GetEncoderConfigurationCommandOutput;
    };
  };
}
