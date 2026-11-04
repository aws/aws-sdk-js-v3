// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeRegionRequest, DescribeRegionResponse } from "../models/models_0";
import { DescribeRegion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves details about a specific Region enabled in an IAM Identity Center instance. Details include the Region name, current status (ACTIVE, ADDING, or REMOVING), the date when the Region was added, and whether it is the primary Region. The request must be made from one of the enabled Regions of the IAM Identity Center instance.
 *
 * The following actions are related to `DescribeRegion`:
 *
 * - [AddRegion](https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_AddRegion.html)
 * - [RemoveRegion](https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_RemoveRegion.html)
 * - [ListRegions](https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListRegions.html)
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Indicates that a requested resource is not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Indicates that the principal has crossed the throttling limits of the API operations.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed because it contains a syntax error.
 *
 * @throws {@link SSOAdminServiceException}
 *
 * Base exception class for all service exceptions from SSOAdmin service.
 *
 * @public
 */
export class DescribeRegionCommand extends command<DescribeRegionCommandInput, DescribeRegionCommandOutput>(
  _ep0,
  _mw0,
  "DescribeRegion",
  DescribeRegion$
) {
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
