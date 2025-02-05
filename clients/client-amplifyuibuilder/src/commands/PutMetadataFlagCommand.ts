// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutMetadataFlagRequest } from "../models/models_0";
import { de_PutMetadataFlagCommand, se_PutMetadataFlagCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutMetadataFlagCommand}.
 */
export interface PutMetadataFlagCommandInput extends PutMetadataFlagRequest {}
/**
 * @public
 *
 * The output of {@link PutMetadataFlagCommand}.
 */
export interface PutMetadataFlagCommandOutput extends __MetadataBearer {}

/**
 * <p>Stores the metadata information about a feature on a form.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, PutMetadataFlagCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, PutMetadataFlagCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // PutMetadataFlagRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 *   featureName: "STRING_VALUE", // required
 *   body: { // PutMetadataFlagBody
 *     newValue: "STRING_VALUE", // required
 *   },
 * };
 * const command = new PutMetadataFlagCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutMetadataFlagCommandInput - {@link PutMetadataFlagCommandInput}
 * @returns {@link PutMetadataFlagCommandOutput}
 * @see {@link PutMetadataFlagCommandInput} for command's `input` shape.
 * @see {@link PutMetadataFlagCommandOutput} for command's `response` shape.
 * @see {@link AmplifyUIBuilderClientResolvedConfig | config} for AmplifyUIBuilderClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An invalid or out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You don't have permission to perform this operation.</p>
 *
 * @throws {@link AmplifyUIBuilderServiceException}
 * <p>Base exception class for all service exceptions from AmplifyUIBuilder service.</p>
 *
 * @public
 */
export class PutMetadataFlagCommand extends $Command
  .classBuilder<
    PutMetadataFlagCommandInput,
    PutMetadataFlagCommandOutput,
    AmplifyUIBuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyUIBuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmplifyUIBuilder", "PutMetadataFlag", {})
  .n("AmplifyUIBuilderClient", "PutMetadataFlagCommand")
  .f(void 0, void 0)
  .ser(se_PutMetadataFlagCommand)
  .de(de_PutMetadataFlagCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutMetadataFlagRequest;
      output: {};
    };
    sdk: {
      input: PutMetadataFlagCommandInput;
      output: PutMetadataFlagCommandOutput;
    };
  };
}
