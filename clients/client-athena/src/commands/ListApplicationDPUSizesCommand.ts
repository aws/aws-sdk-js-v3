// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListApplicationDPUSizesInput, ListApplicationDPUSizesOutput } from "../models/models_0";
import { de_ListApplicationDPUSizesCommand, se_ListApplicationDPUSizesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationDPUSizesCommand}.
 */
export interface ListApplicationDPUSizesCommandInput extends ListApplicationDPUSizesInput {}
/**
 * @public
 *
 * The output of {@link ListApplicationDPUSizesCommand}.
 */
export interface ListApplicationDPUSizesCommandOutput extends ListApplicationDPUSizesOutput, __MetadataBearer {}

/**
 * <p>Returns the supported DPU sizes for the supported application runtimes (for example,
 *                 <code>Athena notebook version 1</code>). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListApplicationDPUSizesCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListApplicationDPUSizesCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // ListApplicationDPUSizesInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationDPUSizesCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationDPUSizesOutput
 * //   ApplicationDPUSizes: [ // ApplicationDPUSizesList
 * //     { // ApplicationDPUSizes
 * //       ApplicationRuntimeId: "STRING_VALUE",
 * //       SupportedDPUSizes: [ // SupportedDPUSizeList
 * //         Number("int"),
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationDPUSizesCommandInput - {@link ListApplicationDPUSizesCommandInput}
 * @returns {@link ListApplicationDPUSizesCommandOutput}
 * @see {@link ListApplicationDPUSizesCommandInput} for command's `input` shape.
 * @see {@link ListApplicationDPUSizesCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request was throttled.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class ListApplicationDPUSizesCommand extends $Command
  .classBuilder<
    ListApplicationDPUSizesCommandInput,
    ListApplicationDPUSizesCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "ListApplicationDPUSizes", {})
  .n("AthenaClient", "ListApplicationDPUSizesCommand")
  .f(void 0, void 0)
  .ser(se_ListApplicationDPUSizesCommand)
  .de(de_ListApplicationDPUSizesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationDPUSizesInput;
      output: ListApplicationDPUSizesOutput;
    };
    sdk: {
      input: ListApplicationDPUSizesCommandInput;
      output: ListApplicationDPUSizesCommandOutput;
    };
  };
}
