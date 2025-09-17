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
import { ListServiceDependentsInput, ListServiceDependentsOutput } from "../models/models_0";
import { de_ListServiceDependentsCommand, se_ListServiceDependentsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServiceDependentsCommand}.
 */
export interface ListServiceDependentsCommandInput extends ListServiceDependentsInput {}
/**
 * @public
 *
 * The output of {@link ListServiceDependentsCommand}.
 */
export interface ListServiceDependentsCommandOutput extends ListServiceDependentsOutput, __MetadataBearer {}

/**
 * <p>Returns the list of dependents that invoked the specified service during the provided time range. Dependents include
 *          other services, CloudWatch Synthetics canaries, and clients that are instrumented with CloudWatch RUM app monitors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, ListServiceDependentsCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, ListServiceDependentsCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = { // ListServiceDependentsInput
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   KeyAttributes: { // Attributes // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListServiceDependentsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceDependentsOutput
 * //   StartTime: new Date("TIMESTAMP"), // required
 * //   EndTime: new Date("TIMESTAMP"), // required
 * //   ServiceDependents: [ // ServiceDependents // required
 * //     { // ServiceDependent
 * //       OperationName: "STRING_VALUE",
 * //       DependentKeyAttributes: { // Attributes // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       DependentOperationName: "STRING_VALUE",
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
 * @param ListServiceDependentsCommandInput - {@link ListServiceDependentsCommandInput}
 * @returns {@link ListServiceDependentsCommandOutput}
 * @see {@link ListServiceDependentsCommandInput} for command's `input` shape.
 * @see {@link ListServiceDependentsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListServiceDependentsCommand extends $Command
  .classBuilder<
    ListServiceDependentsCommandInput,
    ListServiceDependentsCommandOutput,
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
  .s("ApplicationSignals", "ListServiceDependents", {})
  .n("ApplicationSignalsClient", "ListServiceDependentsCommand")
  .f(void 0, void 0)
  .ser(se_ListServiceDependentsCommand)
  .de(de_ListServiceDependentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceDependentsInput;
      output: ListServiceDependentsOutput;
    };
    sdk: {
      input: ListServiceDependentsCommandInput;
      output: ListServiceDependentsCommandOutput;
    };
  };
}
