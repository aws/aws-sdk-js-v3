// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAccountSettingsRequest, UpdateAccountSettingsResponse } from "../models/models_0";
import { UpdateAccountSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAccountSettingsCommand}.
 */
export interface UpdateAccountSettingsCommandInput extends UpdateAccountSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccountSettingsCommand}.
 */
export interface UpdateAccountSettingsCommandOutput extends UpdateAccountSettingsResponse, __MetadataBearer {}

/**
 * Transitions your account to use TCUs for query pricing and modifies the maximum query compute units that you've configured. If you reduce the value of `MaxQueryTCU` to a desired configuration, the new value can take up to 24 hours to be effective.
 *
 * > **Note:** After you've transitioned your account to use TCUs for query pricing, you can't transition to using bytes scanned for query pricing.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, UpdateAccountSettingsCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, UpdateAccountSettingsCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * // import type { TimestreamQueryClientConfig } from "@aws-sdk/client-timestream-query";
 * const config = {}; // type is TimestreamQueryClientConfig
 * const client = new TimestreamQueryClient(config);
 * const input = { // UpdateAccountSettingsRequest
 *   MaxQueryTCU: Number("int"),
 *   QueryPricingModel: "BYTES_SCANNED" || "COMPUTE_UNITS",
 *   QueryCompute: { // QueryComputeRequest
 *     ComputeMode: "ON_DEMAND" || "PROVISIONED",
 *     ProvisionedCapacity: { // ProvisionedCapacityRequest
 *       TargetQueryTCU: Number("int"), // required
 *       NotificationConfiguration: { // AccountSettingsNotificationConfiguration
 *         SnsConfiguration: { // SnsConfiguration
 *           TopicArn: "STRING_VALUE", // required
 *         },
 *         RoleArn: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateAccountSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccountSettingsResponse
 * //   MaxQueryTCU: Number("int"),
 * //   QueryPricingModel: "BYTES_SCANNED" || "COMPUTE_UNITS",
 * //   QueryCompute: { // QueryComputeResponse
 * //     ComputeMode: "ON_DEMAND" || "PROVISIONED",
 * //     ProvisionedCapacity: { // ProvisionedCapacityResponse
 * //       ActiveQueryTCU: Number("int"),
 * //       NotificationConfiguration: { // AccountSettingsNotificationConfiguration
 * //         SnsConfiguration: { // SnsConfiguration
 * //           TopicArn: "STRING_VALUE", // required
 * //         },
 * //         RoleArn: "STRING_VALUE", // required
 * //       },
 * //       LastUpdate: { // LastUpdate
 * //         TargetQueryTCU: Number("int"),
 * //         Status: "PENDING" || "FAILED" || "SUCCEEDED",
 * //         StatusMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAccountSettingsCommandInput - {@link UpdateAccountSettingsCommandInput}
 * @returns {@link UpdateAccountSettingsCommandOutput}
 * @see {@link UpdateAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for TimestreamQueryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have the necessary permissions to access the account settings.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred while processing the request.
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * The requested endpoint is invalid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled due to excessive requests.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Invalid or malformed request.
 *
 * @throws {@link TimestreamQueryServiceException}
 *
 * Base exception class for all service exceptions from TimestreamQuery service.
 *
 * @public
 */
export class UpdateAccountSettingsCommand extends command<UpdateAccountSettingsCommandInput, UpdateAccountSettingsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAccountSettings",
  UpdateAccountSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccountSettingsRequest;
      output: UpdateAccountSettingsResponse;
    };
    sdk: {
      input: UpdateAccountSettingsCommandInput;
      output: UpdateAccountSettingsCommandOutput;
    };
  };
}
