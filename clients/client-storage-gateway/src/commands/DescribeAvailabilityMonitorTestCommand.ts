// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAvailabilityMonitorTestInput, DescribeAvailabilityMonitorTestOutput } from "../models/models_0";
import { DescribeAvailabilityMonitorTest } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAvailabilityMonitorTestCommand}.
 */
export interface DescribeAvailabilityMonitorTestCommandInput extends DescribeAvailabilityMonitorTestInput {}
/**
 * @public
 *
 * The output of {@link DescribeAvailabilityMonitorTestCommand}.
 */
export interface DescribeAvailabilityMonitorTestCommandOutput
  extends DescribeAvailabilityMonitorTestOutput,
    __MetadataBearer {}

/**
 * <p>Returns information about the most recent high availability monitoring test that was
 *          performed on the host in a cluster. If a test isn't performed, the status and start
 *          time in the response would be null.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeAvailabilityMonitorTestCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeAvailabilityMonitorTestCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeAvailabilityMonitorTestInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeAvailabilityMonitorTestCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAvailabilityMonitorTestOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   Status: "COMPLETE" || "FAILED" || "PENDING",
 * //   StartTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeAvailabilityMonitorTestCommandInput - {@link DescribeAvailabilityMonitorTestCommandInput}
 * @returns {@link DescribeAvailabilityMonitorTestCommandOutput}
 * @see {@link DescribeAvailabilityMonitorTestCommandInput} for command's `input` shape.
 * @see {@link DescribeAvailabilityMonitorTestCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 *
 * @public
 */
export class DescribeAvailabilityMonitorTestCommand extends $Command
  .classBuilder<
    DescribeAvailabilityMonitorTestCommandInput,
    DescribeAvailabilityMonitorTestCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "DescribeAvailabilityMonitorTest", {})
  .n("StorageGatewayClient", "DescribeAvailabilityMonitorTestCommand")
  .sc(DescribeAvailabilityMonitorTest)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAvailabilityMonitorTestInput;
      output: DescribeAvailabilityMonitorTestOutput;
    };
    sdk: {
      input: DescribeAvailabilityMonitorTestCommandInput;
      output: DescribeAvailabilityMonitorTestCommandOutput;
    };
  };
}
