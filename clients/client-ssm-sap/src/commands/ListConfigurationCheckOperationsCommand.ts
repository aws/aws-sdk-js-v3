// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListConfigurationCheckOperationsInput, ListConfigurationCheckOperationsOutput } from "../models/models_0";
import { ListConfigurationCheckOperations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListConfigurationCheckOperationsCommand}.
 */
export interface ListConfigurationCheckOperationsCommandInput extends ListConfigurationCheckOperationsInput {}
/**
 * @public
 *
 * The output of {@link ListConfigurationCheckOperationsCommand}.
 */
export interface ListConfigurationCheckOperationsCommandOutput extends ListConfigurationCheckOperationsOutput, __MetadataBearer {}

/**
 * <p>Lists the configuration check operations performed by AWS Systems Manager for SAP.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, ListConfigurationCheckOperationsCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, ListConfigurationCheckOperationsCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * // import type { SsmSapClientConfig } from "@aws-sdk/client-ssm-sap";
 * const config = {}; // type is SsmSapClientConfig
 * const client = new SsmSapClient(config);
 * const input = { // ListConfigurationCheckOperationsInput
 *   ApplicationId: "STRING_VALUE", // required
 *   ListMode: "ALL_OPERATIONS" || "LATEST_PER_CHECK",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *       Operator: "Equals" || "GreaterThanOrEquals" || "LessThanOrEquals", // required
 *     },
 *   ],
 * };
 * const command = new ListConfigurationCheckOperationsCommand(input);
 * const response = await client.send(command);
 * // { // ListConfigurationCheckOperationsOutput
 * //   ConfigurationCheckOperations: [ // ConfigurationCheckOperationList
 * //     { // ConfigurationCheckOperation
 * //       Id: "STRING_VALUE",
 * //       ApplicationId: "STRING_VALUE",
 * //       Status: "INPROGRESS" || "SUCCESS" || "ERROR",
 * //       StatusMessage: "STRING_VALUE",
 * //       ConfigurationCheckId: "SAP_CHECK_01" || "SAP_CHECK_02" || "SAP_CHECK_03",
 * //       ConfigurationCheckName: "STRING_VALUE",
 * //       ConfigurationCheckDescription: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       RuleStatusCounts: { // RuleStatusCounts
 * //         Failed: Number("int"),
 * //         Warning: Number("int"),
 * //         Info: Number("int"),
 * //         Passed: Number("int"),
 * //         Unknown: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfigurationCheckOperationsCommandInput - {@link ListConfigurationCheckOperationsCommandInput}
 * @returns {@link ListConfigurationCheckOperationsCommandOutput}
 * @see {@link ListConfigurationCheckOperationsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationCheckOperationsCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource is not available.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 * @throws {@link SsmSapServiceException}
 * <p>Base exception class for all service exceptions from SsmSap service.</p>
 *
 *
 * @public
 */
export class ListConfigurationCheckOperationsCommand extends command<ListConfigurationCheckOperationsCommandInput, ListConfigurationCheckOperationsCommandOutput>(
  _ep0,
  _mw0,
  "ListConfigurationCheckOperations",
  ListConfigurationCheckOperations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfigurationCheckOperationsInput;
      output: ListConfigurationCheckOperationsOutput;
    };
    sdk: {
      input: ListConfigurationCheckOperationsCommandInput;
      output: ListConfigurationCheckOperationsCommandOutput;
    };
  };
}
