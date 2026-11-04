// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAccountSettingsRequest, DescribeAccountSettingsResponse } from "../models/models_0";
import { DescribeAccountSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Describes the settings for your account that include the query pricing model and the configured maximum TCUs the service can use for your query workload.
 *
 * You're charged only for the duration of compute units used for your workloads.
 *
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
 * @throws {@link TimestreamQueryServiceException}
 *
 * Base exception class for all service exceptions from TimestreamQuery service.
 *
 * @public
 */
export class DescribeAccountSettingsCommand extends command<DescribeAccountSettingsCommandInput, DescribeAccountSettingsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAccountSettings",
  DescribeAccountSettings$
) {
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
