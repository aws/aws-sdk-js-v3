// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListRegionsRequest, ListRegionsResponse } from "../models/models_0";
import { ListRegions$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRegionsCommand}.
 */
export interface ListRegionsCommandInput extends ListRegionsRequest {}
/**
 * @public
 *
 * The output of {@link ListRegionsCommand}.
 */
export interface ListRegionsCommandOutput extends ListRegionsResponse, __MetadataBearer {}

/**
 * <p>Lists all enabled Regions of an IAM Identity Center instance, including those that are being added or removed. This operation returns Regions with ACTIVE, ADDING, or REMOVING status.</p> <p>The following actions are related to <code>ListRegions</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_AddRegion.html"> AddRegion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_RemoveRegion.html">RemoveRegion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeRegion.html">DescribeRegion</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListRegionsCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListRegionsCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // ListRegionsRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRegionsCommand(input);
 * const response = await client.send(command);
 * // { // ListRegionsResponse
 * //   Regions: [ // RegionMetadataList
 * //     { // RegionMetadata
 * //       RegionName: "STRING_VALUE",
 * //       Status: "ACTIVE" || "ADDING" || "REMOVING",
 * //       AddedDate: new Date("TIMESTAMP"),
 * //       IsPrimaryRegion: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRegionsCommandInput - {@link ListRegionsCommandInput}
 * @returns {@link ListRegionsCommandOutput}
 * @see {@link ListRegionsCommandInput} for command's `input` shape.
 * @see {@link ListRegionsCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with an internal server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 *
 * @public
 */
export class ListRegionsCommand extends $Command
  .classBuilder<
    ListRegionsCommandInput,
    ListRegionsCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "ListRegions", {})
  .n("SSOAdminClient", "ListRegionsCommand")
  .sc(ListRegions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRegionsRequest;
      output: ListRegionsResponse;
    };
    sdk: {
      input: ListRegionsCommandInput;
      output: ListRegionsCommandOutput;
    };
  };
}
