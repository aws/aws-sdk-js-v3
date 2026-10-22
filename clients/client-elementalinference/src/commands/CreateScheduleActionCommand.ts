// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateScheduleActionRequest, CreateScheduleActionResponse } from "../models/models_0";
import { CreateScheduleAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateScheduleActionCommand}.
 */
export interface CreateScheduleActionCommandInput extends CreateScheduleActionRequest {}
/**
 * @public
 *
 * The output of {@link CreateScheduleActionCommand}.
 */
export interface CreateScheduleActionCommandOutput extends CreateScheduleActionResponse, __MetadataBearer {}

/**
 * <p>Creates a schedule action on a feed. A schedule action applies configuration changes to the feed at a time that you specify, in the same way as an UpdateFeed request. </p> <p>Elemental Inference validates the targets of the action when you create it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, CreateScheduleActionCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, CreateScheduleActionCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // CreateScheduleActionRequest
 *   id: "STRING_VALUE", // required
 *   actionName: "STRING_VALUE", // required
 *   startConfiguration: { // ScheduleActionStartConfiguration Union: only one key present
 *     fixedModeScheduleActionStartSettings: { // FixedModeScheduleActionStartSettings
 *       scheduledAt: new Date("TIMESTAMP"), // required
 *     },
 *   },
 *   operations: [ // ScheduleActionOperations // required
 *     { // ScheduleActionOperation Union: only one key present
 *       updateOutputStatus: { // UpdateOutputStatus
 *         outputName: "STRING_VALUE", // required
 *         status: "ENABLED" || "DISABLED", // required
 *       },
 *       updateClippingDataSourceConfiguration: { // UpdateClippingDataSourceConfiguration
 *         outputName: "STRING_VALUE", // required
 *         dataSourceConfiguration: { // DataSourceConfiguration
 *           fixtureId: "STRING_VALUE", // required
 *         },
 *       },
 *       removeClippingDataSourceConfiguration: { // RemoveClippingDataSourceConfiguration
 *         outputName: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateScheduleActionCommand(input);
 * const response = await client.send(command);
 * // { // CreateScheduleActionResponse
 * //   actionName: "STRING_VALUE", // required
 * //   startConfiguration: { // ScheduleActionStartConfiguration Union: only one key present
 * //     fixedModeScheduleActionStartSettings: { // FixedModeScheduleActionStartSettings
 * //       scheduledAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   },
 * //   operations: [ // ScheduleActionOperations // required
 * //     { // ScheduleActionOperation Union: only one key present
 * //       updateOutputStatus: { // UpdateOutputStatus
 * //         outputName: "STRING_VALUE", // required
 * //         status: "ENABLED" || "DISABLED", // required
 * //       },
 * //       updateClippingDataSourceConfiguration: { // UpdateClippingDataSourceConfiguration
 * //         outputName: "STRING_VALUE", // required
 * //         dataSourceConfiguration: { // DataSourceConfiguration
 * //           fixtureId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       removeClippingDataSourceConfiguration: { // RemoveClippingDataSourceConfiguration
 * //         outputName: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   status: "PENDING" || "COMPLETED" || "FAILED", // required
 * //   error: { // ScheduleActionError
 * //     errorCode: "INVALID_ACTION_TARGET" || "INTERNAL_ERROR", // required
 * //     errorMessage: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateScheduleActionCommandInput - {@link CreateScheduleActionCommandInput}
 * @returns {@link CreateScheduleActionCommandOutput}
 * @see {@link CreateScheduleActionCommandInput} for command's `input` shape.
 * @see {@link CreateScheduleActionCommandOutput} for command's `response` shape.
 * @see {@link ElementalInferenceClientResolvedConfig | config} for ElementalInferenceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error occurred. This is a temporary condition and the request can be retried. If the problem persists, contact AWS Support. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the action doesn't exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was rejected because it would exceed one or more service quotas for your account. Review your service quotas and either delete unused resources or request a quota increase. </p>
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
export class CreateScheduleActionCommand extends command<CreateScheduleActionCommandInput, CreateScheduleActionCommandOutput>(
  _ep0,
  _mw0,
  "CreateScheduleAction",
  CreateScheduleAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateScheduleActionRequest;
      output: CreateScheduleActionResponse;
    };
    sdk: {
      input: CreateScheduleActionCommandInput;
      output: CreateScheduleActionCommandOutput;
    };
  };
}
