// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeAccountRequest, DescribeAccountResult } from "../models/models_0";
import { DescribeAccount$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountCommand}.
 */
export interface DescribeAccountCommandInput extends DescribeAccountRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountCommand}.
 */
export interface DescribeAccountCommandOutput extends DescribeAccountResult, __MetadataBearer {}

/**
 * <p>Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for
 *          the specified account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeAccountCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeAccountCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = {};
 * const command = new DescribeAccountCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountResult
 * //   DedicatedTenancySupport: "ENABLED" || "DISABLED",
 * //   DedicatedTenancyManagementCidrRange: "STRING_VALUE",
 * //   DedicatedTenancyAccountType: "SOURCE_ACCOUNT" || "TARGET_ACCOUNT",
 * //   Message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAccountCommandInput - {@link DescribeAccountCommandInput}
 * @returns {@link DescribeAccountCommandOutput}
 * @see {@link DescribeAccountCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class DescribeAccountCommand extends $Command
  .classBuilder<
    DescribeAccountCommandInput,
    DescribeAccountCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "DescribeAccount", {})
  .n("WorkSpacesClient", "DescribeAccountCommand")
  .sc(DescribeAccount$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeAccountResult;
    };
    sdk: {
      input: DescribeAccountCommandInput;
      output: DescribeAccountCommandOutput;
    };
  };
}
