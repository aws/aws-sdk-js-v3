// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import {
  CreateIngestConfigurationRequest,
  CreateIngestConfigurationResponse,
  CreateIngestConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateIngestConfigurationCommand, se_CreateIngestConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIngestConfigurationCommand}.
 */
export interface CreateIngestConfigurationCommandInput extends CreateIngestConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateIngestConfigurationCommand}.
 */
export interface CreateIngestConfigurationCommandOutput extends CreateIngestConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates a new IngestConfiguration resource, used to specify the ingest protocol for a stage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, CreateIngestConfigurationCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, CreateIngestConfigurationCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * const client = new IVSRealTimeClient(config);
 * const input = { // CreateIngestConfigurationRequest
 *   name: "STRING_VALUE",
 *   stageArn: "STRING_VALUE",
 *   userId: "STRING_VALUE",
 *   attributes: { // ParticipantAttributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ingestProtocol: "RTMP" || "RTMPS", // required
 *   insecureIngest: true || false,
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateIngestConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateIngestConfigurationResponse
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
 * @param CreateIngestConfigurationCommandInput - {@link CreateIngestConfigurationCommandInput}
 * @returns {@link CreateIngestConfigurationCommandOutput}
 * @see {@link CreateIngestConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateIngestConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
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
 *
 * @public
 */
export class CreateIngestConfigurationCommand extends $Command
  .classBuilder<
    CreateIngestConfigurationCommandInput,
    CreateIngestConfigurationCommandOutput,
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
  .s("AmazonInteractiveVideoServiceRealTime", "CreateIngestConfiguration", {})
  .n("IVSRealTimeClient", "CreateIngestConfigurationCommand")
  .f(void 0, CreateIngestConfigurationResponseFilterSensitiveLog)
  .ser(se_CreateIngestConfigurationCommand)
  .de(de_CreateIngestConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIngestConfigurationRequest;
      output: CreateIngestConfigurationResponse;
    };
    sdk: {
      input: CreateIngestConfigurationCommandInput;
      output: CreateIngestConfigurationCommandOutput;
    };
  };
}
