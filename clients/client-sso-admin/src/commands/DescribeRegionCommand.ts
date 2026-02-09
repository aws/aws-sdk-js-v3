// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeRegionRequest, DescribeRegionResponse } from "../models/models_0";
import { DescribeRegion$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRegionCommand}.
 */
export interface DescribeRegionCommandInput extends DescribeRegionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRegionCommand}.
 */
export interface DescribeRegionCommandOutput extends DescribeRegionResponse, __MetadataBearer {}

/**
 * <p>Retrieves details about a specific Region enabled in an IAM Identity Center instance. Details include the Region name, current status (ACTIVE, ADDING, or REMOVING), the date when the Region was added, and whether it is the primary Region. The request must be made from one of the enabled Regions of the IAM Identity Center instance.</p> <p>The following actions are related to <code>DescribeRegion</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_AddRegion.html"> AddRegion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_RemoveRegion.html">RemoveRegion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListRegions.html">ListRegions</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeRegionCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeRegionCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // DescribeRegionRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   RegionName: "STRING_VALUE", // required
 * };
 * const command = new DescribeRegionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRegionResponse
 * //   RegionName: "STRING_VALUE",
 * //   Status: "ACTIVE" || "ADDING" || "REMOVING",
 * //   AddedDate: new Date("TIMESTAMP"),
 * //   IsPrimaryRegion: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeRegionCommandInput - {@link DescribeRegionCommandInput}
 * @returns {@link DescribeRegionCommandOutput}
 * @see {@link DescribeRegionCommandInput} for command's `input` shape.
 * @see {@link DescribeRegionCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
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
export class DescribeRegionCommand extends $Command
  .classBuilder<
    DescribeRegionCommandInput,
    DescribeRegionCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "DescribeRegion", {})
  .n("SSOAdminClient", "DescribeRegionCommand")
  .sc(DescribeRegion$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRegionRequest;
      output: DescribeRegionResponse;
    };
    sdk: {
      input: DescribeRegionCommandInput;
      output: DescribeRegionCommandOutput;
    };
  };
}
