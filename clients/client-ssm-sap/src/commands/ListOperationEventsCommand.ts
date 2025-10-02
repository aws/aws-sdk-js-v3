// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListOperationEventsInput, ListOperationEventsOutput } from "../models/models_0";
import { de_ListOperationEventsCommand, se_ListOperationEventsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOperationEventsCommand}.
 */
export interface ListOperationEventsCommandInput extends ListOperationEventsInput {}
/**
 * @public
 *
 * The output of {@link ListOperationEventsCommand}.
 */
export interface ListOperationEventsCommandOutput extends ListOperationEventsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of operations events.</p> <p>Available parameters include <code>OperationID</code>, as well as optional parameters <code>MaxResults</code>, <code>NextToken</code>, and <code>Filters</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, ListOperationEventsCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, ListOperationEventsCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * // import type { SsmSapClientConfig } from "@aws-sdk/client-ssm-sap";
 * const config = {}; // type is SsmSapClientConfig
 * const client = new SsmSapClient(config);
 * const input = { // ListOperationEventsInput
 *   OperationId: "STRING_VALUE", // required
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
 * const command = new ListOperationEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListOperationEventsOutput
 * //   OperationEvents: [ // OperationEventList
 * //     { // OperationEvent
 * //       Description: "STRING_VALUE",
 * //       Resource: { // Resource
 * //         ResourceArn: "STRING_VALUE",
 * //         ResourceType: "STRING_VALUE",
 * //       },
 * //       Status: "IN_PROGRESS" || "COMPLETED" || "FAILED",
 * //       StatusMessage: "STRING_VALUE",
 * //       Timestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOperationEventsCommandInput - {@link ListOperationEventsCommandInput}
 * @returns {@link ListOperationEventsCommandOutput}
 * @see {@link ListOperationEventsCommandInput} for command's `input` shape.
 * @see {@link ListOperationEventsCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
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
export class ListOperationEventsCommand extends $Command
  .classBuilder<
    ListOperationEventsCommandInput,
    ListOperationEventsCommandOutput,
    SsmSapClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SsmSapClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SsmSap", "ListOperationEvents", {})
  .n("SsmSapClient", "ListOperationEventsCommand")
  .f(void 0, void 0)
  .ser(se_ListOperationEventsCommand)
  .de(de_ListOperationEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOperationEventsInput;
      output: ListOperationEventsOutput;
    };
    sdk: {
      input: ListOperationEventsCommandInput;
      output: ListOperationEventsCommandOutput;
    };
  };
}
