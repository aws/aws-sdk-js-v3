// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAuthenticationProfilesRequest, ListAuthenticationProfilesResponse } from "../models/models_1";
import { de_ListAuthenticationProfilesCommand, se_ListAuthenticationProfilesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAuthenticationProfilesCommand}.
 */
export interface ListAuthenticationProfilesCommandInput extends ListAuthenticationProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListAuthenticationProfilesCommand}.
 */
export interface ListAuthenticationProfilesCommandOutput extends ListAuthenticationProfilesResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change. To
 * request access to this API, contact Amazon Web Services Support.</p>
 *          <p>Provides summary information about the authentication profiles in a specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListAuthenticationProfilesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListAuthenticationProfilesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListAuthenticationProfilesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAuthenticationProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListAuthenticationProfilesResponse
 * //   AuthenticationProfileSummaryList: [ // AuthenticationProfileSummaryList
 * //     { // AuthenticationProfileSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       IsDefault: true || false,
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAuthenticationProfilesCommandInput - {@link ListAuthenticationProfilesCommandInput}
 * @returns {@link ListAuthenticationProfilesCommandOutput}
 * @see {@link ListAuthenticationProfilesCommandInput} for command's `input` shape.
 * @see {@link ListAuthenticationProfilesCommandOutput} for command's `response` shape.
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
export class ListAuthenticationProfilesCommand extends $Command
  .classBuilder<
    ListAuthenticationProfilesCommandInput,
    ListAuthenticationProfilesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "ListAuthenticationProfiles", {})
  .n("ConnectClient", "ListAuthenticationProfilesCommand")
  .f(void 0, void 0)
  .ser(se_ListAuthenticationProfilesCommand)
  .de(de_ListAuthenticationProfilesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAuthenticationProfilesRequest;
      output: ListAuthenticationProfilesResponse;
    };
    sdk: {
      input: ListAuthenticationProfilesCommandInput;
      output: ListAuthenticationProfilesCommandOutput;
    };
  };
}
