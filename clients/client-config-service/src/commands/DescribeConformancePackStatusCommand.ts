// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeConformancePackStatusRequest, DescribeConformancePackStatusResponse } from "../models/models_0";
import {
  de_DescribeConformancePackStatusCommand,
  se_DescribeConformancePackStatusCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConformancePackStatusCommand}.
 */
export interface DescribeConformancePackStatusCommandInput extends DescribeConformancePackStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConformancePackStatusCommand}.
 */
export interface DescribeConformancePackStatusCommandOutput
  extends DescribeConformancePackStatusResponse,
    __MetadataBearer {}

/**
 * <p>Provides one or more conformance packs deployment status.</p>
 *          <note>
 *             <p>If there are no conformance packs then you will see an empty result.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConformancePackStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConformancePackStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeConformancePackStatusRequest
 *   ConformancePackNames: [ // ConformancePackNamesList
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeConformancePackStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConformancePackStatusResponse
 * //   ConformancePackStatusDetails: [ // ConformancePackStatusDetailsList
 * //     { // ConformancePackStatusDetail
 * //       ConformancePackName: "STRING_VALUE", // required
 * //       ConformancePackId: "STRING_VALUE", // required
 * //       ConformancePackArn: "STRING_VALUE", // required
 * //       ConformancePackState: "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED", // required
 * //       StackArn: "STRING_VALUE", // required
 * //       ConformancePackStatusReason: "STRING_VALUE",
 * //       LastUpdateRequestedTime: new Date("TIMESTAMP"), // required
 * //       LastUpdateCompletedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConformancePackStatusCommandInput - {@link DescribeConformancePackStatusCommandInput}
 * @returns {@link DescribeConformancePackStatusCommandOutput}
 * @see {@link DescribeConformancePackStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeConformancePackStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidLimitException} (client fault)
 *  <p>The specified limit is outside the allowable range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class DescribeConformancePackStatusCommand extends $Command
  .classBuilder<
    DescribeConformancePackStatusCommandInput,
    DescribeConformancePackStatusCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "DescribeConformancePackStatus", {})
  .n("ConfigServiceClient", "DescribeConformancePackStatusCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConformancePackStatusCommand)
  .de(de_DescribeConformancePackStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConformancePackStatusRequest;
      output: DescribeConformancePackStatusResponse;
    };
    sdk: {
      input: DescribeConformancePackStatusCommandInput;
      output: DescribeConformancePackStatusCommandOutput;
    };
  };
}
