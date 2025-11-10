// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { UpdateIngestConfigurationRequest, UpdateIngestConfigurationResponse } from "../models/models_0";
import { UpdateIngestConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIngestConfigurationCommand}.
 */
export interface UpdateIngestConfigurationCommandInput extends UpdateIngestConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIngestConfigurationCommand}.
 */
export interface UpdateIngestConfigurationCommandOutput extends UpdateIngestConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates a specified IngestConfiguration. Only the stage ARN attached to the IngestConfiguration can be updated. An IngestConfiguration that is active cannot be updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, UpdateIngestConfigurationCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, UpdateIngestConfigurationCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // UpdateIngestConfigurationRequest
 *   arn: "STRING_VALUE", // required
 *   stageArn: "STRING_VALUE",
 * };
 * const command = new UpdateIngestConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIngestConfigurationResponse
 * //   ingestConfiguration: { // IngestConfiguration
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE", // required
 * //     ingestProtocol: "RTMP" || "RTMPS", // required
 * //     streamKey: "STRING_VALUE", // required
 * //     stageArn: "STRING_VALUE", // required
 * //     participantId: "STRING_VALUE", // required
 * //     state: "STRING_VALUE", // required
 * //     userId: "STRING_VALUE",
 * //     attributes: { // ParticipantAttributes
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateIngestConfigurationCommandInput - {@link UpdateIngestConfigurationCommandInput}
 * @returns {@link UpdateIngestConfigurationCommandOutput}
 * @see {@link UpdateIngestConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateIngestConfigurationCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class UpdateIngestConfigurationCommand extends $Command
  .classBuilder<
    UpdateIngestConfigurationCommandInput,
    UpdateIngestConfigurationCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "UpdateIngestConfiguration", {})
  .n("IVSRealTimeClient", "UpdateIngestConfigurationCommand")
  .sc(UpdateIngestConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIngestConfigurationRequest;
      output: UpdateIngestConfigurationResponse;
    };
    sdk: {
      input: UpdateIngestConfigurationCommandInput;
      output: UpdateIngestConfigurationCommandOutput;
    };
  };
}
