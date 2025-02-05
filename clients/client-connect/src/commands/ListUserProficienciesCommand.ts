// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListUserProficienciesRequest, ListUserProficienciesResponse } from "../models/models_2";
import { de_ListUserProficienciesCommand, se_ListUserProficienciesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUserProficienciesCommand}.
 */
export interface ListUserProficienciesCommandInput extends ListUserProficienciesRequest {}
/**
 * @public
 *
 * The output of {@link ListUserProficienciesCommand}.
 */
export interface ListUserProficienciesCommandOutput extends ListUserProficienciesResponse, __MetadataBearer {}

/**
 * <p>Lists proficiencies associated with a user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListUserProficienciesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListUserProficienciesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectClient(config);
 * const input = { // ListUserProficienciesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListUserProficienciesCommand(input);
 * const response = await client.send(command);
 * // { // ListUserProficienciesResponse
 * //   NextToken: "STRING_VALUE",
 * //   UserProficiencyList: [ // UserProficiencyList
 * //     { // UserProficiency
 * //       AttributeName: "STRING_VALUE", // required
 * //       AttributeValue: "STRING_VALUE", // required
 * //       Level: Number("float"), // required
 * //     },
 * //   ],
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastModifiedRegion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUserProficienciesCommandInput - {@link ListUserProficienciesCommandInput}
 * @returns {@link ListUserProficienciesCommandOutput}
 * @see {@link ListUserProficienciesCommandInput} for command's `input` shape.
 * @see {@link ListUserProficienciesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListUserProficienciesCommand extends $Command
  .classBuilder<
    ListUserProficienciesCommandInput,
    ListUserProficienciesCommandOutput,
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
  .s("AmazonConnectService", "ListUserProficiencies", {})
  .n("ConnectClient", "ListUserProficienciesCommand")
  .f(void 0, void 0)
  .ser(se_ListUserProficienciesCommand)
  .de(de_ListUserProficienciesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUserProficienciesRequest;
      output: ListUserProficienciesResponse;
    };
    sdk: {
      input: ListUserProficienciesCommandInput;
      output: ListUserProficienciesCommandOutput;
    };
  };
}
