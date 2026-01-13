// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import type { GetSignedBluinsightsUrlResponse } from "../models/models_0";
import { GetSignedBluinsightsUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSignedBluinsightsUrlCommand}.
 */
export interface GetSignedBluinsightsUrlCommandInput {}
/**
 * @public
 *
 * The output of {@link GetSignedBluinsightsUrlCommand}.
 */
export interface GetSignedBluinsightsUrlCommandOutput extends GetSignedBluinsightsUrlResponse, __MetadataBearer {}

/**
 * <p>Gets a single sign-on URL that can be used to connect to AWS Blu Insights.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, GetSignedBluinsightsUrlCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, GetSignedBluinsightsUrlCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = {};
 * const command = new GetSignedBluinsightsUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetSignedBluinsightsUrlResponse
 * //   signedBiUrl: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetSignedBluinsightsUrlCommandInput - {@link GetSignedBluinsightsUrlCommandInput}
 * @returns {@link GetSignedBluinsightsUrlCommandOutput}
 * @see {@link GetSignedBluinsightsUrlCommandInput} for command's `input` shape.
 * @see {@link GetSignedBluinsightsUrlCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 *
 * @public
 */
export class GetSignedBluinsightsUrlCommand extends $Command
  .classBuilder<
    GetSignedBluinsightsUrlCommandInput,
    GetSignedBluinsightsUrlCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsSupernovaControlPlaneService", "GetSignedBluinsightsUrl", {})
  .n("M2Client", "GetSignedBluinsightsUrlCommand")
  .sc(GetSignedBluinsightsUrl$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetSignedBluinsightsUrlResponse;
    };
    sdk: {
      input: GetSignedBluinsightsUrlCommandInput;
      output: GetSignedBluinsightsUrlCommandOutput;
    };
  };
}
