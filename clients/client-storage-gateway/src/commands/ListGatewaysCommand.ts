// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListGatewaysInput, ListGatewaysOutput } from "../models/models_0";
import { de_ListGatewaysCommand, se_ListGatewaysCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGatewaysCommand}.
 */
export interface ListGatewaysCommandInput extends ListGatewaysInput {}
/**
 * @public
 *
 * The output of {@link ListGatewaysCommand}.
 */
export interface ListGatewaysCommandOutput extends ListGatewaysOutput, __MetadataBearer {}

/**
 * <p>Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region
 *          specified in the request. The returned list is ordered by gateway Amazon Resource Name
 *          (ARN).</p>
 *          <p>By default, the operation returns a maximum of 100 gateways. This operation supports
 *          pagination that allows you to optionally reduce the number of gateways returned in a
 *          response.</p>
 *          <p>If you have more gateways than are returned in a response (that is, the response returns
 *          only a truncated list of your gateways), the response contains a marker that you can
 *          specify in your next request to fetch the next page of gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListGatewaysCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListGatewaysCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // ListGatewaysInput
 *   Marker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // ListGatewaysOutput
 * //   Gateways: [ // Gateways
 * //     { // GatewayInfo
 * //       GatewayId: "STRING_VALUE",
 * //       GatewayARN: "STRING_VALUE",
 * //       GatewayType: "STRING_VALUE",
 * //       GatewayOperationalState: "STRING_VALUE",
 * //       GatewayName: "STRING_VALUE",
 * //       Ec2InstanceId: "STRING_VALUE",
 * //       Ec2InstanceRegion: "STRING_VALUE",
 * //       HostEnvironment: "VMWARE" || "HYPER-V" || "EC2" || "KVM" || "OTHER" || "SNOWBALL",
 * //       HostEnvironmentId: "STRING_VALUE",
 * //       DeprecationDate: "STRING_VALUE",
 * //       SoftwareVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGatewaysCommandInput - {@link ListGatewaysCommandInput}
 * @returns {@link ListGatewaysCommandOutput}
 * @see {@link ListGatewaysCommandInput} for command's `input` shape.
 * @see {@link ListGatewaysCommandOutput} for command's `response` shape.
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
 * @example To lists region specific gateways per AWS account
 * ```javascript
 * // Lists gateways owned by an AWS account in a specified region as requested. Results are sorted by gateway ARN up to a maximum of 100 gateways.
 * const input = {
 *   Limit: 2,
 *   Marker: "1"
 * };
 * const command = new ListGatewaysCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Gateways: [
 *     {
 *       GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 *     },
 *     {
 *       GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-23A4567C"
 *     }
 *   ],
 *   Marker: "1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListGatewaysCommand extends $Command
  .classBuilder<
    ListGatewaysCommandInput,
    ListGatewaysCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "ListGateways", {})
  .n("StorageGatewayClient", "ListGatewaysCommand")
  .f(void 0, void 0)
  .ser(se_ListGatewaysCommand)
  .de(de_ListGatewaysCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGatewaysInput;
      output: ListGatewaysOutput;
    };
    sdk: {
      input: ListGatewaysCommandInput;
      output: ListGatewaysCommandOutput;
    };
  };
}
