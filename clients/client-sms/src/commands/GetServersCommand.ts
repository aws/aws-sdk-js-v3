// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetServersRequest, GetServersResponse } from "../models/models_0";
import { de_GetServersCommand, se_GetServersCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServersCommand}.
 */
export interface GetServersCommandInput extends GetServersRequest {}
/**
 * @public
 *
 * The output of {@link GetServersCommand}.
 */
export interface GetServersCommandOutput extends GetServersResponse, __MetadataBearer {}

/**
 * <p>Describes the servers in your server catalog.</p>
 *          <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetServersCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetServersCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SMSClient(config);
 * const input = { // GetServersRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   vmServerAddressList: [ // VmServerAddressList
 *     { // VmServerAddress
 *       vmManagerId: "STRING_VALUE",
 *       vmId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new GetServersCommand(input);
 * const response = await client.send(command);
 * // { // GetServersResponse
 * //   lastModifiedOn: new Date("TIMESTAMP"),
 * //   serverCatalogStatus: "NOT_IMPORTED" || "IMPORTING" || "AVAILABLE" || "DELETED" || "EXPIRED",
 * //   serverList: [ // ServerList
 * //     { // Server
 * //       serverId: "STRING_VALUE",
 * //       serverType: "VIRTUAL_MACHINE",
 * //       vmServer: { // VmServer
 * //         vmServerAddress: { // VmServerAddress
 * //           vmManagerId: "STRING_VALUE",
 * //           vmId: "STRING_VALUE",
 * //         },
 * //         vmName: "STRING_VALUE",
 * //         vmManagerName: "STRING_VALUE",
 * //         vmManagerType: "VSPHERE" || "SCVMM" || "HYPERV-MANAGER",
 * //         vmPath: "STRING_VALUE",
 * //       },
 * //       replicationJobId: "STRING_VALUE",
 * //       replicationJobTerminated: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetServersCommandInput - {@link GetServersCommandInput}
 * @returns {@link GetServersCommandOutput}
 * @see {@link GetServersCommandInput} for command's `input` shape.
 * @see {@link GetServersCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 * @throws {@link InternalError} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A specified parameter is not valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing.</p>
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
export class GetServersCommand extends $Command
  .classBuilder<
    GetServersCommandInput,
    GetServersCommandOutput,
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
  .s("AWSServerMigrationService_V2016_10_24", "GetServers", {})
  .n("SMSClient", "GetServersCommand")
  .f(void 0, void 0)
  .ser(se_GetServersCommand)
  .de(de_GetServersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServersRequest;
      output: GetServersResponse;
    };
    sdk: {
      input: GetServersCommandInput;
      output: GetServersCommandOutput;
    };
  };
}
