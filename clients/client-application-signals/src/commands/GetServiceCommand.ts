// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationSignalsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationSignalsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetServiceInput, GetServiceOutput } from "../models/models_0";
import { de_GetServiceCommand, se_GetServiceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServiceCommand}.
 */
export interface GetServiceCommandInput extends GetServiceInput {}
/**
 * @public
 *
 * The output of {@link GetServiceCommand}.
 */
export interface GetServiceCommandOutput extends GetServiceOutput, __MetadataBearer {}

/**
 * <p>Returns information about a service discovered by Application Signals.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, GetServiceCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, GetServiceCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * const client = new ApplicationSignalsClient(config);
 * const input = { // GetServiceInput
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   KeyAttributes: { // Attributes // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new GetServiceCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceOutput
 * //   Service: { // Service
 * //     KeyAttributes: { // Attributes // required
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     AttributeMaps: [ // AttributeMaps
 * //       { // AttributeMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     ],
 * //     MetricReferences: [ // MetricReferences // required
 * //       { // MetricReference
 * //         Namespace: "STRING_VALUE", // required
 * //         MetricType: "STRING_VALUE", // required
 * //         Dimensions: [ // Dimensions
 * //           { // Dimension
 * //             Name: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         MetricName: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     LogGroupReferences: [ // LogGroupReferences
 * //       {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   StartTime: new Date("TIMESTAMP"), // required
 * //   EndTime: new Date("TIMESTAMP"), // required
 * //   LogGroupReferences: [
 * //     {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetServiceCommandInput - {@link GetServiceCommandInput}
 * @returns {@link GetServiceCommandOutput}
 * @see {@link GetServiceCommandInput} for command's `input` shape.
 * @see {@link GetServiceCommandOutput} for command's `response` shape.
 * @see {@link ApplicationSignalsClientResolvedConfig | config} for ApplicationSignalsClient's `config` shape.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The resource is not valid.</p>
 *
 * @throws {@link ApplicationSignalsServiceException}
 * <p>Base exception class for all service exceptions from ApplicationSignals service.</p>
 *
 * @public
 */
export class GetServiceCommand extends $Command
  .classBuilder<
    GetServiceCommandInput,
    GetServiceCommandOutput,
    ApplicationSignalsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationSignalsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationSignals", "GetService", {})
  .n("ApplicationSignalsClient", "GetServiceCommand")
  .f(void 0, void 0)
  .ser(se_GetServiceCommand)
  .de(de_GetServiceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServiceInput;
      output: GetServiceOutput;
    };
    sdk: {
      input: GetServiceCommandInput;
      output: GetServiceCommandOutput;
    };
  };
}
