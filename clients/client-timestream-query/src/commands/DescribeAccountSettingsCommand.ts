// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAccountSettingsRequest, DescribeAccountSettingsResponse } from "../models/models_0";
import { de_DescribeAccountSettingsCommand, se_DescribeAccountSettingsCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamQueryClientResolvedConfig } from "../TimestreamQueryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountSettingsCommand}.
 */
export interface DescribeAccountSettingsCommandInput extends DescribeAccountSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountSettingsCommand}.
 */
export interface DescribeAccountSettingsCommandOutput extends DescribeAccountSettingsResponse, __MetadataBearer {}

/**
 * <p>Describes the settings for your account that include the query pricing model and the configured maximum TCUs the service can use for your query workload.</p>
 *          <p>You're charged only for the duration of compute units used for your workloads.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, DescribeAccountSettingsCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, DescribeAccountSettingsCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * // import type { TimestreamQueryClientConfig } from "@aws-sdk/client-timestream-query";
 * const config = {}; // type is TimestreamQueryClientConfig
 * const client = new TimestreamQueryClient(config);
 * const input = {};
 * const command = new DescribeAccountSettingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountSettingsResponse
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
 * @param DescribeAccountSettingsCommandInput - {@link DescribeAccountSettingsCommandInput}
 * @returns {@link DescribeAccountSettingsCommandOutput}
 * @see {@link DescribeAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountSettingsCommandOutput} for command's `response` shape.
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
 * @throws {@link TimestreamQueryServiceException}
 * <p>Base exception class for all service exceptions from TimestreamQuery service.</p>
 *
 *
 * @public
 */
export class DescribeAccountSettingsCommand extends $Command
  .classBuilder<
    DescribeAccountSettingsCommandInput,
    DescribeAccountSettingsCommandOutput,
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
  .s("Timestream_20181101", "DescribeAccountSettings", {})
  .n("TimestreamQueryClient", "DescribeAccountSettingsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAccountSettingsCommand)
  .de(de_DescribeAccountSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeAccountSettingsResponse;
    };
    sdk: {
      input: DescribeAccountSettingsCommandInput;
      output: DescribeAccountSettingsCommandOutput;
    };
  };
}
