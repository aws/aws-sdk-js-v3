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
import { ListServicesInput, ListServicesOutput } from "../models/models_0";
import { de_ListServicesCommand, se_ListServicesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServicesCommand}.
 */
export interface ListServicesCommandInput extends ListServicesInput {}
/**
 * @public
 *
 * The output of {@link ListServicesCommand}.
 */
export interface ListServicesCommandOutput extends ListServicesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of services that have been discovered by Application Signals.
 *          A service represents a minimum logical and transactional unit that completes a business function. Services
 *          are discovered through Application Signals instrumentation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, ListServicesCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, ListServicesCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * const client = new ApplicationSignalsClient(config);
 * const input = { // ListServicesInput
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   IncludeLinkedAccounts: true || false,
 *   AwsAccountId: "STRING_VALUE",
 * };
 * const command = new ListServicesCommand(input);
 * const response = await client.send(command);
 * // { // ListServicesOutput
 * //   StartTime: new Date("TIMESTAMP"), // required
 * //   EndTime: new Date("TIMESTAMP"), // required
 * //   ServiceSummaries: [ // ServiceSummaries // required
 * //     { // ServiceSummary
 * //       KeyAttributes: { // Attributes // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       AttributeMaps: [ // AttributeMaps
 * //         { // AttributeMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       ],
 * //       MetricReferences: [ // MetricReferences // required
 * //         { // MetricReference
 * //           Namespace: "STRING_VALUE", // required
 * //           MetricType: "STRING_VALUE", // required
 * //           Dimensions: [ // Dimensions
 * //             { // Dimension
 * //               Name: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           MetricName: "STRING_VALUE", // required
 * //           AccountId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServicesCommandInput - {@link ListServicesCommandInput}
 * @returns {@link ListServicesCommandOutput}
 * @see {@link ListServicesCommandInput} for command's `input` shape.
 * @see {@link ListServicesCommandOutput} for command's `response` shape.
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
export class ListServicesCommand extends $Command
  .classBuilder<
    ListServicesCommandInput,
    ListServicesCommandOutput,
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
  .s("ApplicationSignals", "ListServices", {})
  .n("ApplicationSignalsClient", "ListServicesCommand")
  .f(void 0, void 0)
  .ser(se_ListServicesCommand)
  .de(de_ListServicesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServicesInput;
      output: ListServicesOutput;
    };
    sdk: {
      input: ListServicesCommandInput;
      output: ListServicesCommandOutput;
    };
  };
}
