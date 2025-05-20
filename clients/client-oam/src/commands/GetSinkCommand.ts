// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSinkInput, GetSinkOutput } from "../models/models_0";
import { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import { de_GetSinkCommand, se_GetSinkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSinkCommand}.
 */
export interface GetSinkCommandInput extends GetSinkInput {}
/**
 * @public
 *
 * The output of {@link GetSinkCommand}.
 */
export interface GetSinkCommandOutput extends GetSinkOutput, __MetadataBearer {}

/**
 * <p>Returns complete information about one monitoring account sink.</p> <p>To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, GetSinkCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, GetSinkCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * const client = new OAMClient(config);
 * const input = { // GetSinkInput
 *   Identifier: "STRING_VALUE", // required
 *   IncludeTags: true || false,
 * };
 * const command = new GetSinkCommand(input);
 * const response = await client.send(command);
 * // { // GetSinkOutput
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Tags: { // TagMapOutput
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSinkCommandInput - {@link GetSinkCommandInput}
 * @returns {@link GetSinkCommandOutput}
 * @see {@link GetSinkCommandInput} for command's `input` shape.
 * @see {@link GetSinkCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing from the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link OAMServiceException}
 * <p>Base exception class for all service exceptions from OAM service.</p>
 *
 *
 * @public
 */
export class GetSinkCommand extends $Command
  .classBuilder<
    GetSinkCommandInput,
    GetSinkCommandOutput,
    OAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("oamservice", "GetSink", {})
  .n("OAMClient", "GetSinkCommand")
  .f(void 0, void 0)
  .ser(se_GetSinkCommand)
  .de(de_GetSinkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSinkInput;
      output: GetSinkOutput;
    };
    sdk: {
      input: GetSinkCommandInput;
      output: GetSinkCommandOutput;
    };
  };
}
