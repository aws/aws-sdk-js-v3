// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSecurityProfileApplicationsRequest, ListSecurityProfileApplicationsResponse } from "../models/models_2";
import { ListSecurityProfileApplications } from "../schemas/schemas_80_SecurityProfile";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSecurityProfileApplicationsCommand}.
 */
export interface ListSecurityProfileApplicationsCommandInput extends ListSecurityProfileApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSecurityProfileApplicationsCommand}.
 */
export interface ListSecurityProfileApplicationsCommandOutput
  extends ListSecurityProfileApplicationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of third-party applications in a specific security profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListSecurityProfileApplicationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListSecurityProfileApplicationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListSecurityProfileApplicationsRequest
 *   SecurityProfileId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSecurityProfileApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSecurityProfileApplicationsResponse
 * //   Applications: [ // Applications
 * //     { // Application
 * //       Namespace: "STRING_VALUE",
 * //       ApplicationPermissions: [ // ApplicationPermissions
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastModifiedRegion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSecurityProfileApplicationsCommandInput - {@link ListSecurityProfileApplicationsCommandInput}
 * @returns {@link ListSecurityProfileApplicationsCommandOutput}
 * @see {@link ListSecurityProfileApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListSecurityProfileApplicationsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ListSecurityProfileApplicationsCommand extends $Command
  .classBuilder<
    ListSecurityProfileApplicationsCommandInput,
    ListSecurityProfileApplicationsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListSecurityProfileApplications", {})
  .n("ConnectClient", "ListSecurityProfileApplicationsCommand")
  .sc(ListSecurityProfileApplications)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSecurityProfileApplicationsRequest;
      output: ListSecurityProfileApplicationsResponse;
    };
    sdk: {
      input: ListSecurityProfileApplicationsCommandInput;
      output: ListSecurityProfileApplicationsCommandOutput;
    };
  };
}
