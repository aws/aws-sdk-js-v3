// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAccountSettingsRequest, UpdateAccountSettingsResponse } from "../models/models_0";
import { de_UpdateAccountSettingsCommand, se_UpdateAccountSettingsCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamQueryClientResolvedConfig } from "../TimestreamQueryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Transitions your account to use TCUs for query pricing and modifies the maximum query compute units that you've configured. If you reduce the value of <code>MaxQueryTCU</code> to a desired configuration, the new value can take up to 24 hours to be effective.</p>
 *          <note>
 *             <p>After you've transitioned your account to use TCUs for query pricing, you can't transition to using bytes scanned for query pricing.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, UpdateAccountSettingsCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, UpdateAccountSettingsCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
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
 *  <p>You do not have the necessary permissions to access the account settings.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *  <p>The requested endpoint is invalid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to excessive requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Invalid or malformed request. </p>
 *
 * @throws {@link TimestreamQueryServiceException}
 * <p>Base exception class for all service exceptions from TimestreamQuery service.</p>
 *
 *
 * @public
 */
export class UpdateAccountSettingsCommand extends $Command
  .classBuilder<
    UpdateAccountSettingsCommandInput,
    UpdateAccountSettingsCommandOutput,
    TimestreamQueryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TimestreamQueryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEndpointDiscoveryPlugin(config, {
        clientStack: cs,
        isDiscoveredEndpointRequired: true,
        options: o,
      }),
    ];
  })
  .s("Timestream_20181101", "UpdateAccountSettings", {})
  .n("TimestreamQueryClient", "UpdateAccountSettingsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAccountSettingsCommand)
  .de(de_UpdateAccountSettingsCommand)
  .build() {
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
