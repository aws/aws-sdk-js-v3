// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { GetStreamKeyRequest, GetStreamKeyResponse, GetStreamKeyResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetStreamKeyCommand, se_GetStreamKeyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStreamKeyCommand}.
 */
export interface GetStreamKeyCommandInput extends GetStreamKeyRequest {}
/**
 * @public
 *
 * The output of {@link GetStreamKeyCommand}.
 */
export interface GetStreamKeyCommandOutput extends GetStreamKeyResponse, __MetadataBearer {}

/**
 * <p>Gets stream-key information for a specified ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, GetStreamKeyCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, GetStreamKeyCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IvsClient(config);
 * const input = { // GetStreamKeyRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetStreamKeyCommand(input);
 * const response = await client.send(command);
 * // { // GetStreamKeyResponse
 * //   streamKey: { // StreamKey
 * //     arn: "STRING_VALUE",
 * //     value: "STRING_VALUE",
 * //     channelArn: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStreamKeyCommandInput - {@link GetStreamKeyCommandInput}
 * @returns {@link GetStreamKeyCommandOutput}
 * @see {@link GetStreamKeyCommandInput} for command's `input` shape.
 * @see {@link GetStreamKeyCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
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
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 * @public
 */
export class GetStreamKeyCommand extends $Command
  .classBuilder<
    GetStreamKeyCommandInput,
    GetStreamKeyCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoService", "GetStreamKey", {})
  .n("IvsClient", "GetStreamKeyCommand")
  .f(void 0, GetStreamKeyResponseFilterSensitiveLog)
  .ser(se_GetStreamKeyCommand)
  .de(de_GetStreamKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStreamKeyRequest;
      output: GetStreamKeyResponse;
    };
    sdk: {
      input: GetStreamKeyCommandInput;
      output: GetStreamKeyCommandOutput;
    };
  };
}
