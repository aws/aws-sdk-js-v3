// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListScheduleActionsRequest, ListScheduleActionsResponse } from "../models/models_0";
import { ListScheduleActions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListScheduleActionsCommand}.
 */
export interface ListScheduleActionsCommandInput extends ListScheduleActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListScheduleActionsCommand}.
 */
export interface ListScheduleActionsCommandOutput extends ListScheduleActionsResponse, __MetadataBearer {}

/**
 * <p>Displays a list of the schedule actions on a feed, including the status of each action and, for a failed action, information about why it failed. </p> <p>Elemental Inference keeps an action whose status is COMPLETED or FAILED for about 48 hours after its scheduled time, and then deletes it automatically. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, ListScheduleActionsCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, ListScheduleActionsCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // ListScheduleActionsRequest
 *   id: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListScheduleActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListScheduleActionsResponse
 * //   scheduleActions: [ // ScheduleActionList // required
 * //     { // ScheduleAction
 * //       actionName: "STRING_VALUE", // required
 * //       startConfiguration: { // ScheduleActionStartConfiguration Union: only one key present
 * //         fixedModeScheduleActionStartSettings: { // FixedModeScheduleActionStartSettings
 * //           scheduledAt: new Date("TIMESTAMP"), // required
 * //         },
 * //       },
 * //       operations: [ // ScheduleActionOperations // required
 * //         { // ScheduleActionOperation Union: only one key present
 * //           updateOutputStatus: { // UpdateOutputStatus
 * //             outputName: "STRING_VALUE", // required
 * //             status: "ENABLED" || "DISABLED", // required
 * //           },
 * //           updateClippingDataSourceConfiguration: { // UpdateClippingDataSourceConfiguration
 * //             outputName: "STRING_VALUE", // required
 * //             dataSourceConfiguration: { // DataSourceConfiguration
 * //               fixtureId: "STRING_VALUE", // required
 * //             },
 * //           },
 * //           removeClippingDataSourceConfiguration: { // RemoveClippingDataSourceConfiguration
 * //             outputName: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //       status: "PENDING" || "COMPLETED" || "FAILED", // required
 * //       error: { // ScheduleActionError
 * //         errorCode: "INVALID_ACTION_TARGET" || "INTERNAL_ERROR", // required
 * //         errorMessage: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListScheduleActionsCommandInput - {@link ListScheduleActionsCommandInput}
 * @returns {@link ListScheduleActionsCommandOutput}
 * @see {@link ListScheduleActionsCommandInput} for command's `input` shape.
 * @see {@link ListScheduleActionsCommandOutput} for command's `response` shape.
 * @see {@link ElementalInferenceClientResolvedConfig | config} for ElementalInferenceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error occurred. This is a temporary condition and the request can be retried. If the problem persists, contact AWS Support. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the action doesn't exist.</p>
 *
 * @throws {@link TooManyRequestException} (client fault)
 *  <p>The request was denied due to request throttling. Too many requests have been made within a given time period. Reduce the frequency of requests and use exponential backoff when retrying. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service. Check the error message for details about which parameter or field is invalid and correct the request before retrying. </p>
 *
 * @throws {@link ElementalInferenceServiceException}
 * <p>Base exception class for all service exceptions from ElementalInference service.</p>
 *
 *
 * @public
 */
export class ListScheduleActionsCommand extends command<ListScheduleActionsCommandInput, ListScheduleActionsCommandOutput>(
  _ep0,
  _mw0,
  "ListScheduleActions",
  ListScheduleActions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListScheduleActionsRequest;
      output: ListScheduleActionsResponse;
    };
    sdk: {
      input: ListScheduleActionsCommandInput;
      output: ListScheduleActionsCommandOutput;
    };
  };
}
