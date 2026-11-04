// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListControlOperationsInput, ListControlOperationsOutput } from "../models/models_0";
import { ListControlOperations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Provides a list of operations in progress or queued. For usage examples, see [ListControlOperation examples](https://docs.aws.amazon.com/controltower/latest/controlreference/control-api-examples-short.html#list-control-operations-api-examples).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, ListControlOperationsCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, ListControlOperationsCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // import type { ControlTowerClientConfig } from "@aws-sdk/client-controltower";
 * const config = {}; // type is ControlTowerClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during processing of a request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link ControlTowerServiceException}
 *
 * Base exception class for all service exceptions from ControlTower service.
 *
 * @public
 */
export class ListControlOperationsCommand extends command<ListControlOperationsCommandInput, ListControlOperationsCommandOutput>(
  _ep0,
  _mw0,
  "ListControlOperations",
  ListControlOperations$
) {
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
