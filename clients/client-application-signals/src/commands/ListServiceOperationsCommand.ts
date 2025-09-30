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
import { ListServiceOperationsInput, ListServiceOperationsOutput } from "../models/models_0";
import { de_ListServiceOperationsCommand, se_ListServiceOperationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServiceOperationsCommand}.
 */
export interface ListServiceOperationsCommandInput extends ListServiceOperationsInput {}
/**
 * @public
 *
 * The output of {@link ListServiceOperationsCommand}.
 */
export interface ListServiceOperationsCommandOutput extends ListServiceOperationsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of the <i>operations</i> of this service that have been discovered by Application Signals. Only the operations that were invoked during the specified time range are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, ListServiceOperationsCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, ListServiceOperationsCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = { // ListServiceOperationsInput
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   KeyAttributes: { // Attributes // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListServiceOperationsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceOperationsOutput
 * //   StartTime: new Date("TIMESTAMP"), // required
 * //   EndTime: new Date("TIMESTAMP"), // required
 * //   ServiceOperations: [ // ServiceOperations // required
 * //     { // ServiceOperation
 * //       Name: "STRING_VALUE", // required
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
 * @param ListServiceOperationsCommandInput - {@link ListServiceOperationsCommandInput}
 * @returns {@link ListServiceOperationsCommandOutput}
 * @see {@link ListServiceOperationsCommandInput} for command's `input` shape.
 * @see {@link ListServiceOperationsCommandOutput} for command's `response` shape.
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
export class ListServiceOperationsCommand extends $Command
  .classBuilder<
    ListServiceOperationsCommandInput,
    ListServiceOperationsCommandOutput,
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
  .s("ApplicationSignals", "ListServiceOperations", {})
  .n("ApplicationSignalsClient", "ListServiceOperationsCommand")
  .f(void 0, void 0)
  .ser(se_ListServiceOperationsCommand)
  .de(de_ListServiceOperationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceOperationsInput;
      output: ListServiceOperationsOutput;
    };
    sdk: {
      input: ListServiceOperationsCommandInput;
      output: ListServiceOperationsCommandOutput;
    };
  };
}
