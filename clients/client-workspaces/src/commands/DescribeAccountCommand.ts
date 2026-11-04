// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAccountRequest, DescribeAccountResult } from "../models/models_0";
import { DescribeAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for the specified account.
 *
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
 *
 * The user is not authorized to access a resource.
 *
 * @throws {@link WorkSpacesServiceException}
 *
 * Base exception class for all service exceptions from WorkSpaces service.
 *
 * @public
 */
export class DescribeAccountCommand extends command<DescribeAccountCommandInput, DescribeAccountCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAccount",
  DescribeAccount$
) {
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
