// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { DeleteEncoderConfigurationRequest, DeleteEncoderConfigurationResponse } from "../models/models_0";
import { de_DeleteEncoderConfigurationCommand, se_DeleteEncoderConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes an EncoderConfiguration resource. Ensures that no Compositions are using this
 *          template; otherwise, returns an error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, DeleteEncoderConfigurationCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, DeleteEncoderConfigurationCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 * @public
 */
export class DeleteEncoderConfigurationCommand extends $Command
  .classBuilder<
    DeleteEncoderConfigurationCommandInput,
    DeleteEncoderConfigurationCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "DeleteEncoderConfiguration", {})
  .n("IVSRealTimeClient", "DeleteEncoderConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteEncoderConfigurationCommand)
  .de(de_DeleteEncoderConfigurationCommand)
  .build() {}
