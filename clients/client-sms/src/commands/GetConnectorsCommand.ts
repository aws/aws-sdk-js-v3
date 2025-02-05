// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetConnectorsRequest, GetConnectorsResponse } from "../models/models_0";
import { de_GetConnectorsCommand, se_GetConnectorsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConnectorsCommand}.
 */
export interface GetConnectorsCommandInput extends GetConnectorsRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectorsCommand}.
 */
export interface GetConnectorsCommandOutput extends GetConnectorsResponse, __MetadataBearer {}

/**
 * <p>Describes the connectors registered with the Server Migration Service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetConnectorsCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetConnectorsCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SMSClient(config);
 * const input = { // GetConnectorsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetConnectorsCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectorsResponse
 * //   connectorList: [ // ConnectorList
 * //     { // Connector
 * //       connectorId: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       status: "HEALTHY" || "UNHEALTHY",
 * //       capabilityList: [ // ConnectorCapabilityList
 * //         "VSPHERE" || "SCVMM" || "HYPERV-MANAGER" || "SNAPSHOT_BATCHING" || "SMS_OPTIMIZED",
 * //       ],
 * //       vmManagerName: "STRING_VALUE",
 * //       vmManagerType: "VSPHERE" || "SCVMM" || "HYPERV-MANAGER",
 * //       vmManagerId: "STRING_VALUE",
 * //       ipAddress: "STRING_VALUE",
 * //       macAddress: "STRING_VALUE",
 * //       associatedOn: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConnectorsCommandInput - {@link GetConnectorsCommandInput}
 * @returns {@link GetConnectorsCommandOutput}
 * @see {@link GetConnectorsCommandInput} for command's `input` shape.
 * @see {@link GetConnectorsCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 * @public
 */
export class GetConnectorsCommand extends $Command
  .classBuilder<
    GetConnectorsCommandInput,
    GetConnectorsCommandOutput,
    SMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSServerMigrationService_V2016_10_24", "GetConnectors", {})
  .n("SMSClient", "GetConnectorsCommand")
  .f(void 0, void 0)
  .ser(se_GetConnectorsCommand)
  .de(de_GetConnectorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConnectorsRequest;
      output: GetConnectorsResponse;
    };
    sdk: {
      input: GetConnectorsCommandInput;
      output: GetConnectorsCommandOutput;
    };
  };
}
