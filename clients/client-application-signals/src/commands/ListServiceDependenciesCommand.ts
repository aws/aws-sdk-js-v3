// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListServiceDependenciesInput, ListServiceDependenciesOutput } from "../models/models_0";
import { ListServiceDependencies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListServiceDependenciesCommand}.
 */
export interface ListServiceDependenciesCommandInput extends ListServiceDependenciesInput {}
/**
 * @public
 *
 * The output of {@link ListServiceDependenciesCommand}.
 */
export interface ListServiceDependenciesCommandOutput extends ListServiceDependenciesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of service dependencies of the service that you specify. A dependency is an infrastructure component that an operation of this service connects with. Dependencies can include Amazon Web Services services, Amazon Web Services resources, and third-party services. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, ListServiceDependenciesCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, ListServiceDependenciesCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = { // ListServiceDependenciesInput
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   KeyAttributes: { // Attributes // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListServiceDependenciesCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceDependenciesOutput
 * //   StartTime: new Date("TIMESTAMP"), // required
 * //   EndTime: new Date("TIMESTAMP"), // required
 * //   ServiceDependencies: [ // ServiceDependencies // required
 * //     { // ServiceDependency
 * //       OperationName: "STRING_VALUE", // required
 * //       DependencyKeyAttributes: { // Attributes // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       DependencyOperationName: "STRING_VALUE", // required
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
 * @param ListServiceDependenciesCommandInput - {@link ListServiceDependenciesCommandInput}
 * @returns {@link ListServiceDependenciesCommandOutput}
 * @see {@link ListServiceDependenciesCommandInput} for command's `input` shape.
 * @see {@link ListServiceDependenciesCommandOutput} for command's `response` shape.
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
export class ListServiceDependenciesCommand extends command<ListServiceDependenciesCommandInput, ListServiceDependenciesCommandOutput>(
  _ep0,
  _mw0,
  "ListServiceDependencies",
  ListServiceDependencies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceDependenciesInput;
      output: ListServiceDependenciesOutput;
    };
    sdk: {
      input: ListServiceDependenciesCommandInput;
      output: ListServiceDependenciesCommandOutput;
    };
  };
}
