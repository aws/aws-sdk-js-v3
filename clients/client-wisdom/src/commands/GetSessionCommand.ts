// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSessionRequest, GetSessionResponse } from "../models/models_0";
import { GetSession } from "../schemas/schemas_4_Knowledge";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSessionCommand}.
 */
export interface GetSessionCommandInput extends GetSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetSessionCommand}.
 */
export interface GetSessionCommandOutput extends GetSessionResponse, __MetadataBearer {}

/**
 * <p>Retrieves information for a specified session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, GetSessionCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, GetSessionCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
 * const input = { // GetSessionRequest
 *   assistantId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 * };
 * const command = new GetSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionResponse
 * //   session: { // SessionData
 * //     sessionArn: "STRING_VALUE", // required
 * //     sessionId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     integrationConfiguration: { // SessionIntegrationConfiguration
 * //       topicIntegrationArn: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSessionCommandInput - {@link GetSessionCommandInput}
 * @returns {@link GetSessionCommandOutput}
 * @see {@link GetSessionCommandInput} for command's `input` shape.
 * @see {@link GetSessionCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link WisdomServiceException}
 * <p>Base exception class for all service exceptions from Wisdom service.</p>
 *
 *
 * @public
 */
export class GetSessionCommand extends $Command
  .classBuilder<
    GetSessionCommandInput,
    GetSessionCommandOutput,
    WisdomClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WisdomClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "GetSession", {})
  .n("WisdomClient", "GetSessionCommand")
  .sc(GetSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSessionRequest;
      output: GetSessionResponse;
    };
    sdk: {
      input: GetSessionCommandInput;
      output: GetSessionCommandOutput;
    };
  };
}
