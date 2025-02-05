// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { DeleteIngestConfigurationRequest, DeleteIngestConfigurationResponse } from "../models/models_0";
import { de_DeleteIngestConfigurationCommand, se_DeleteIngestConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a specified IngestConfiguration, so it can no longer be used to broadcast. An IngestConfiguration cannot be deleted if the publisher is actively streaming to a stage, unless <code>force</code> is set to <code>true</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, DeleteIngestConfigurationCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, DeleteIngestConfigurationCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
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
export class DeleteIngestConfigurationCommand extends $Command
  .classBuilder<
    DeleteIngestConfigurationCommandInput,
    DeleteIngestConfigurationCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "DeleteIngestConfiguration", {})
  .n("IVSRealTimeClient", "DeleteIngestConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteIngestConfigurationCommand)
  .de(de_DeleteIngestConfigurationCommand)
  .build() {
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
