// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListIpRoutesRequest, ListIpRoutesResult } from "../models/models_0";
import { de_ListIpRoutesCommand, se_ListIpRoutesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIpRoutesCommand}.
 */
export interface ListIpRoutesCommandInput extends ListIpRoutesRequest {}
/**
 * @public
 *
 * The output of {@link ListIpRoutesCommand}.
 */
export interface ListIpRoutesCommandOutput extends ListIpRoutesResult, __MetadataBearer {}

/**
 * <p>Lists the address blocks that you have added to a directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ListIpRoutesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ListIpRoutesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // ListIpRoutesRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListIpRoutesCommand(input);
 * const response = await client.send(command);
 * // { // ListIpRoutesResult
 * //   IpRoutesInfo: [ // IpRoutesInfo
 * //     { // IpRouteInfo
 * //       DirectoryId: "STRING_VALUE",
 * //       CidrIp: "STRING_VALUE",
 * //       CidrIpv6: "STRING_VALUE",
 * //       IpRouteStatusMsg: "Adding" || "Added" || "Removing" || "Removed" || "AddFailed" || "RemoveFailed",
 * //       AddedDateTime: new Date("TIMESTAMP"),
 * //       IpRouteStatusReason: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIpRoutesCommandInput - {@link ListIpRoutesCommandInput}
 * @returns {@link ListIpRoutesCommandOutput}
 * @see {@link ListIpRoutesCommandInput} for command's `input` shape.
 * @see {@link ListIpRoutesCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @example To list IP routes
 * ```javascript
 * // The following example lists the address blocks that have been added to a specified directory.
 * const input = {
 *   DirectoryId: "d-92654abfed",
 *   Limit: 0
 * };
 * const command = new ListIpRoutesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   IpRoutesInfo: [
 *     {
 *       AddedDateTime: 1.48157763163E9,
 *       CidrIp: "12.12.12.12/32",
 *       Description: "example",
 *       DirectoryId: "d-92654abfed",
 *       IpRouteStatusMsg: "Added"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListIpRoutesCommand extends $Command
  .classBuilder<
    ListIpRoutesCommandInput,
    ListIpRoutesCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "ListIpRoutes", {})
  .n("DirectoryServiceClient", "ListIpRoutesCommand")
  .f(void 0, void 0)
  .ser(se_ListIpRoutesCommand)
  .de(de_ListIpRoutesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIpRoutesRequest;
      output: ListIpRoutesResult;
    };
    sdk: {
      input: ListIpRoutesCommandInput;
      output: ListIpRoutesCommandOutput;
    };
  };
}
