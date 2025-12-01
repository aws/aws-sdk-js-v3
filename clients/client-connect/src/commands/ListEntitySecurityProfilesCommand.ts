// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEntitySecurityProfilesRequest, ListEntitySecurityProfilesResponse } from "../models/models_2";
import { ListEntitySecurityProfiles } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEntitySecurityProfilesCommand}.
 */
export interface ListEntitySecurityProfilesCommandInput extends ListEntitySecurityProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListEntitySecurityProfilesCommand}.
 */
export interface ListEntitySecurityProfilesCommandOutput extends ListEntitySecurityProfilesResponse, __MetadataBearer {}

/**
 * <p> Lists all security profiles attached to a Q in Connect AIAgent Entity in an Amazon Connect instance. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListEntitySecurityProfilesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListEntitySecurityProfilesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListEntitySecurityProfilesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   EntityType: "USER" || "AI_AGENT", // required
 *   EntityArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEntitySecurityProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListEntitySecurityProfilesResponse
 * //   SecurityProfiles: [ // SecurityProfiles100
 * //     { // SecurityProfileItem
 * //       Id: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEntitySecurityProfilesCommandInput - {@link ListEntitySecurityProfilesCommandInput}
 * @returns {@link ListEntitySecurityProfilesCommandOutput}
 * @see {@link ListEntitySecurityProfilesCommandInput} for command's `input` shape.
 * @see {@link ListEntitySecurityProfilesCommandOutput} for command's `response` shape.
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
export class ListEntitySecurityProfilesCommand extends $Command
  .classBuilder<
    ListEntitySecurityProfilesCommandInput,
    ListEntitySecurityProfilesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListEntitySecurityProfiles", {})
  .n("ConnectClient", "ListEntitySecurityProfilesCommand")
  .sc(ListEntitySecurityProfiles)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEntitySecurityProfilesRequest;
      output: ListEntitySecurityProfilesResponse;
    };
    sdk: {
      input: ListEntitySecurityProfilesCommandInput;
      output: ListEntitySecurityProfilesCommandOutput;
    };
  };
}
