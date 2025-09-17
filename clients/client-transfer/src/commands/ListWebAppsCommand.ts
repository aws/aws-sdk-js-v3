// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListWebAppsRequest, ListWebAppsResponse } from "../models/models_0";
import { de_ListWebAppsCommand, se_ListWebAppsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWebAppsCommand}.
 */
export interface ListWebAppsCommandInput extends ListWebAppsRequest {}
/**
 * @public
 *
 * The output of {@link ListWebAppsCommand}.
 */
export interface ListWebAppsCommandOutput extends ListWebAppsResponse, __MetadataBearer {}

/**
 * <p>Lists all web apps associated with your Amazon Web Services account for your current region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListWebAppsCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListWebAppsCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // ListWebAppsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListWebAppsCommand(input);
 * const response = await client.send(command);
 * // { // ListWebAppsResponse
 * //   NextToken: "STRING_VALUE",
 * //   WebApps: [ // ListedWebApps // required
 * //     { // ListedWebApp
 * //       Arn: "STRING_VALUE", // required
 * //       WebAppId: "STRING_VALUE", // required
 * //       AccessEndpoint: "STRING_VALUE",
 * //       WebAppEndpoint: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWebAppsCommandInput - {@link ListWebAppsCommandInput}
 * @returns {@link ListWebAppsCommandOutput}
 * @see {@link ListWebAppsCommandInput} for command's `input` shape.
 * @see {@link ListWebAppsCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 *
 * @public
 */
export class ListWebAppsCommand extends $Command
  .classBuilder<
    ListWebAppsCommandInput,
    ListWebAppsCommandOutput,
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
  .s("TransferService", "ListWebApps", {})
  .n("TransferClient", "ListWebAppsCommand")
  .f(void 0, void 0)
  .ser(se_ListWebAppsCommand)
  .de(de_ListWebAppsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWebAppsRequest;
      output: ListWebAppsResponse;
    };
    sdk: {
      input: ListWebAppsCommandInput;
      output: ListWebAppsCommandOutput;
    };
  };
}
