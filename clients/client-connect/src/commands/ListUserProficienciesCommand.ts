// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListUserProficienciesRequest, ListUserProficienciesResponse } from "../models/models_2";
import { ListUserProficiencies } from "../schemas/schemas_0";

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
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListUserProficiencies", {})
  .n("ConnectClient", "ListUserProficienciesCommand")
  .sc(ListUserProficiencies)
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
