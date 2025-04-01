// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListControlOperationsInput, ListControlOperationsOutput } from "../models/models_0";
import { de_ListControlOperationsCommand, se_ListControlOperationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListControlOperationsCommand}.
 */
export interface ListControlOperationsCommandInput extends ListControlOperationsInput {}
/**
 * @public
 *
 * The output of {@link ListControlOperationsCommand}.
 */
export interface ListControlOperationsCommandOutput extends ListControlOperationsOutput, __MetadataBearer {}

/**
 * <p>Provides a list of operations in progress or queued. For usage examples, see <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-api-examples-short.html#list-control-operations-api-examples">ListControlOperation examples</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, ListControlOperationsCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, ListControlOperationsCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * const client = new ControlTowerClient(config);
 * const input = { // ListControlOperationsInput
 *   filter: { // ControlOperationFilter
 *     controlIdentifiers: [ // ControlIdentifiers
 *       "STRING_VALUE",
 *     ],
 *     targetIdentifiers: [ // TargetIdentifiers
 *       "STRING_VALUE",
 *     ],
 *     enabledControlIdentifiers: [ // EnabledControlIdentifiers
 *       "STRING_VALUE",
 *     ],
 *     statuses: [ // ControlOperationStatuses
 *       "SUCCEEDED" || "FAILED" || "IN_PROGRESS",
 *     ],
 *     controlOperationTypes: [ // ControlOperationTypes
 *       "ENABLE_CONTROL" || "DISABLE_CONTROL" || "UPDATE_ENABLED_CONTROL" || "RESET_ENABLED_CONTROL",
 *     ],
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListControlOperationsCommand(input);
 * const response = await client.send(command);
 * // { // ListControlOperationsOutput
 * //   controlOperations: [ // ControlOperations // required
 * //     { // ControlOperationSummary
 * //       operationType: "ENABLE_CONTROL" || "DISABLE_CONTROL" || "UPDATE_ENABLED_CONTROL" || "RESET_ENABLED_CONTROL",
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       status: "SUCCEEDED" || "FAILED" || "IN_PROGRESS",
 * //       statusMessage: "STRING_VALUE",
 * //       operationIdentifier: "STRING_VALUE",
 * //       controlIdentifier: "STRING_VALUE",
 * //       targetIdentifier: "STRING_VALUE",
 * //       enabledControlIdentifier: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListControlOperationsCommandInput - {@link ListControlOperationsCommandInput}
 * @returns {@link ListControlOperationsCommandOutput}
 * @see {@link ListControlOperationsCommandInput} for command's `input` shape.
 * @see {@link ListControlOperationsCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of a request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ControlTowerServiceException}
 * <p>Base exception class for all service exceptions from ControlTower service.</p>
 *
 *
 * @public
 */
export class ListControlOperationsCommand extends $Command
  .classBuilder<
    ListControlOperationsCommandInput,
    ListControlOperationsCommandOutput,
    ControlTowerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ControlTowerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSControlTowerApis", "ListControlOperations", {})
  .n("ControlTowerClient", "ListControlOperationsCommand")
  .f(void 0, void 0)
  .ser(se_ListControlOperationsCommand)
  .de(de_ListControlOperationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListControlOperationsInput;
      output: ListControlOperationsOutput;
    };
    sdk: {
      input: ListControlOperationsCommandInput;
      output: ListControlOperationsCommandOutput;
    };
  };
}
