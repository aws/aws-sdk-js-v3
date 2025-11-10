// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { CreateParticipantTokenRequest, CreateParticipantTokenResponse } from "../models/models_0";
import { CreateParticipantToken } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateParticipantTokenCommand}.
 */
export interface CreateParticipantTokenCommandInput extends CreateParticipantTokenRequest {}
/**
 * @public
 *
 * The output of {@link CreateParticipantTokenCommand}.
 */
export interface CreateParticipantTokenCommandOutput extends CreateParticipantTokenResponse, __MetadataBearer {}

/**
 * <p>Creates an additional token for a specified stage. This can be done after stage creation
 *          or when tokens expire. Tokens always are scoped to the stage for which they are
 *          created.</p>
 *          <p>Encryption keys are owned by Amazon IVS and never used directly by your
 *          application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, CreateParticipantTokenCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, CreateParticipantTokenCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // CreateParticipantTokenRequest
 *   stageArn: "STRING_VALUE", // required
 *   duration: Number("int"),
 *   userId: "STRING_VALUE",
 *   attributes: { // ParticipantTokenAttributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   capabilities: [ // ParticipantTokenCapabilities
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateParticipantTokenCommand(input);
 * const response = await client.send(command);
 * // { // CreateParticipantTokenResponse
 * //   participantToken: { // ParticipantToken
 * //     participantId: "STRING_VALUE",
 * //     token: "STRING_VALUE",
 * //     userId: "STRING_VALUE",
 * //     attributes: { // ParticipantTokenAttributes
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     duration: Number("int"),
 * //     capabilities: [ // ParticipantTokenCapabilities
 * //       "STRING_VALUE",
 * //     ],
 * //     expirationTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateParticipantTokenCommandInput - {@link CreateParticipantTokenCommandInput}
 * @returns {@link CreateParticipantTokenCommandOutput}
 * @see {@link CreateParticipantTokenCommandInput} for command's `input` shape.
 * @see {@link CreateParticipantTokenCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
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
 *
 * @public
 */
export class CreateParticipantTokenCommand extends $Command
  .classBuilder<
    CreateParticipantTokenCommandInput,
    CreateParticipantTokenCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "CreateParticipantToken", {})
  .n("IVSRealTimeClient", "CreateParticipantTokenCommand")
  .sc(CreateParticipantToken)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateParticipantTokenRequest;
      output: CreateParticipantTokenResponse;
    };
    sdk: {
      input: CreateParticipantTokenCommandInput;
      output: CreateParticipantTokenCommandOutput;
    };
  };
}
