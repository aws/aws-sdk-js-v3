// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { GetStageSessionRequest, GetStageSessionResponse } from "../models/models_0";
import { de_GetStageSessionCommand, se_GetStageSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStageSessionCommand}.
 */
export interface GetStageSessionCommandInput extends GetStageSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetStageSessionCommand}.
 */
export interface GetStageSessionCommandOutput extends GetStageSessionResponse, __MetadataBearer {}

/**
 * <p>Gets information for the specified stage session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, GetStageSessionCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, GetStageSessionCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IVSRealTimeClient(config);
 * const input = { // GetStageSessionRequest
 *   stageArn: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 * };
 * const command = new GetStageSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetStageSessionResponse
 * //   stageSession: { // StageSession
 * //     sessionId: "STRING_VALUE",
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStageSessionCommandInput - {@link GetStageSessionCommandInput}
 * @returns {@link GetStageSessionCommandOutput}
 * @see {@link GetStageSessionCommandInput} for command's `input` shape.
 * @see {@link GetStageSessionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetStageSessionCommand extends $Command
  .classBuilder<
    GetStageSessionCommandInput,
    GetStageSessionCommandOutput,
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
  .s("AmazonInteractiveVideoServiceRealTime", "GetStageSession", {})
  .n("IVSRealTimeClient", "GetStageSessionCommand")
  .f(void 0, void 0)
  .ser(se_GetStageSessionCommand)
  .de(de_GetStageSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStageSessionRequest;
      output: GetStageSessionResponse;
    };
    sdk: {
      input: GetStageSessionCommandInput;
      output: GetStageSessionCommandOutput;
    };
  };
}
