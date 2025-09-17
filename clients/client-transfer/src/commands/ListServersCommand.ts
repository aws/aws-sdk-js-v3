// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListServersRequest, ListServersResponse } from "../models/models_0";
import { de_ListServersCommand, se_ListServersCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServersCommand}.
 */
export interface ListServersCommandInput extends ListServersRequest {}
/**
 * @public
 *
 * The output of {@link ListServersCommand}.
 */
export interface ListServersCommandOutput extends ListServersResponse, __MetadataBearer {}

/**
 * <p>Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListServersCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListServersCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // ListServersRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListServersCommand(input);
 * const response = await client.send(command);
 * // { // ListServersResponse
 * //   NextToken: "STRING_VALUE",
 * //   Servers: [ // ListedServers // required
 * //     { // ListedServer
 * //       Arn: "STRING_VALUE", // required
 * //       Domain: "S3" || "EFS",
 * //       IdentityProviderType: "SERVICE_MANAGED" || "API_GATEWAY" || "AWS_DIRECTORY_SERVICE" || "AWS_LAMBDA",
 * //       EndpointType: "PUBLIC" || "VPC" || "VPC_ENDPOINT",
 * //       LoggingRole: "STRING_VALUE",
 * //       ServerId: "STRING_VALUE",
 * //       State: "OFFLINE" || "ONLINE" || "STARTING" || "STOPPING" || "START_FAILED" || "STOP_FAILED",
 * //       UserCount: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListServersCommandInput - {@link ListServersCommandInput}
 * @returns {@link ListServersCommandOutput}
 * @see {@link ListServersCommandInput} for command's `input` shape.
 * @see {@link ListServersCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> parameter that was passed is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 *
 * @public
 */
export class ListServersCommand extends $Command
  .classBuilder<
    ListServersCommandInput,
    ListServersCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TransferService", "ListServers", {})
  .n("TransferClient", "ListServersCommand")
  .f(void 0, void 0)
  .ser(se_ListServersCommand)
  .de(de_ListServersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServersRequest;
      output: ListServersResponse;
    };
    sdk: {
      input: ListServersCommandInput;
      output: ListServersCommandOutput;
    };
  };
}
