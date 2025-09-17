// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetLinksRequest, GetLinksResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_GetLinksCommand, se_GetLinksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLinksCommand}.
 */
export interface GetLinksCommandInput extends GetLinksRequest {}
/**
 * @public
 *
 * The output of {@link GetLinksCommand}.
 */
export interface GetLinksCommandOutput extends GetLinksResponse, __MetadataBearer {}

/**
 * <p>Gets information about one or more links in a specified global network.</p>
 *          <p>If you specify the site ID, you cannot specify the type or provider in the same request. You can specify the type and provider in the same request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetLinksCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetLinksCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // GetLinksRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   LinkIds: [ // LinkIdList
 *     "STRING_VALUE",
 *   ],
 *   SiteId: "STRING_VALUE",
 *   Type: "STRING_VALUE",
 *   Provider: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetLinksCommand(input);
 * const response = await client.send(command);
 * // { // GetLinksResponse
 * //   Links: [ // LinkList
 * //     { // Link
 * //       LinkId: "STRING_VALUE",
 * //       LinkArn: "STRING_VALUE",
 * //       GlobalNetworkId: "STRING_VALUE",
 * //       SiteId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       Bandwidth: { // Bandwidth
 * //         UploadSpeed: Number("int"),
 * //         DownloadSpeed: Number("int"),
 * //       },
 * //       Provider: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       State: "PENDING" || "AVAILABLE" || "DELETING" || "UPDATING",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLinksCommandInput - {@link GetLinksCommandInput}
 * @returns {@link GetLinksCommandOutput}
 * @see {@link GetLinksCommandInput} for command's `input` shape.
 * @see {@link GetLinksCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 *
 * @public
 */
export class GetLinksCommand extends $Command
  .classBuilder<
    GetLinksCommandInput,
    GetLinksCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkManager", "GetLinks", {})
  .n("NetworkManagerClient", "GetLinksCommand")
  .f(void 0, void 0)
  .ser(se_GetLinksCommand)
  .de(de_GetLinksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLinksRequest;
      output: GetLinksResponse;
    };
    sdk: {
      input: GetLinksCommandInput;
      output: GetLinksCommandOutput;
    };
  };
}
