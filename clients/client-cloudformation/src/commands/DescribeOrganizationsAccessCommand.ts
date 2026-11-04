// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeOrganizationsAccessInput, DescribeOrganizationsAccessOutput } from "../models/models_0";
import { DescribeOrganizationsAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeOrganizationsAccessCommand}.
 */
export interface DescribeOrganizationsAccessCommandInput extends DescribeOrganizationsAccessInput {}
/**
 * @public
 *
 * The output of {@link DescribeOrganizationsAccessCommand}.
 */
export interface DescribeOrganizationsAccessCommandOutput extends DescribeOrganizationsAccessOutput, __MetadataBearer {}

/**
 * Retrieves information about the account's `OrganizationAccess` status. This API can be called either by the management account or the delegated administrator by using the `CallAs` parameter. This API can also be called without the `CallAs` parameter by the management account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeOrganizationsAccessCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeOrganizationsAccessCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeOrganizationsAccessInput
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new DescribeOrganizationsAccessCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOrganizationsAccessOutput
 * //   Status: "ENABLED" || "DISABLED" || "DISABLED_PERMANENTLY",
 * // };
 *
 * ```
 *
 * @param DescribeOrganizationsAccessCommandInput - {@link DescribeOrganizationsAccessCommandInput}
 * @returns {@link DescribeOrganizationsAccessCommandOutput}
 * @see {@link DescribeOrganizationsAccessCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationsAccessCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * The specified operation isn't valid.
 *
 * @throws {@link OperationNotFoundException} (client fault)
 *
 * The specified ID refers to an operation that doesn't exist.
 *
 * @throws {@link CloudFormationServiceException}
 *
 * Base exception class for all service exceptions from CloudFormation service.
 *
 * @public
 */
export class DescribeOrganizationsAccessCommand extends command<DescribeOrganizationsAccessCommandInput, DescribeOrganizationsAccessCommandOutput>(
  _ep0,
  _mw0,
  "DescribeOrganizationsAccess",
  DescribeOrganizationsAccess$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeOrganizationsAccessInput;
      output: DescribeOrganizationsAccessOutput;
    };
    sdk: {
      input: DescribeOrganizationsAccessCommandInput;
      output: DescribeOrganizationsAccessCommandOutput;
    };
  };
}
