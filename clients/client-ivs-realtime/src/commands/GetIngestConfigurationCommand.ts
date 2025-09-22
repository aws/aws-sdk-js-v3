// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { GetIngestConfigurationRequest, GetIngestConfigurationResponse } from "../models/models_0";
import { GetIngestConfiguration } from "../schemas/schemas_2_Ingest";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIngestConfigurationCommand}.
 */
export interface GetIngestConfigurationCommandInput extends GetIngestConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetIngestConfigurationCommand}.
 */
export interface GetIngestConfigurationCommandOutput extends GetIngestConfigurationResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specified IngestConfiguration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, GetIngestConfigurationCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, GetIngestConfigurationCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // GetIngestConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetIngestConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetIngestConfigurationResponse
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
 * @param GetIngestConfigurationCommandInput - {@link GetIngestConfigurationCommandInput}
 * @returns {@link GetIngestConfigurationCommandOutput}
 * @see {@link GetIngestConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetIngestConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
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
export class GetIngestConfigurationCommand extends $Command
  .classBuilder<
    GetIngestConfigurationCommandInput,
    GetIngestConfigurationCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "GetIngestConfiguration", {})
  .n("IVSRealTimeClient", "GetIngestConfigurationCommand")
  .sc(GetIngestConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIngestConfigurationRequest;
      output: GetIngestConfigurationResponse;
    };
    sdk: {
      input: GetIngestConfigurationCommandInput;
      output: GetIngestConfigurationCommandOutput;
    };
  };
}
