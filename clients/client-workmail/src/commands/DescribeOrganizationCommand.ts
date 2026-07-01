// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeOrganizationRequest, DescribeOrganizationResponse } from "../models/models_0";
import { DescribeOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeOrganizationCommand}.
 */
export interface DescribeOrganizationCommandInput extends DescribeOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOrganizationCommand}.
 */
export interface DescribeOrganizationCommandOutput extends DescribeOrganizationResponse, __MetadataBearer {}

/**
 * <p>Provides more information regarding a given organization based on its
 *          identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DescribeOrganizationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DescribeOrganizationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // DescribeOrganizationRequest
 *   OrganizationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOrganizationResponse
 * //   OrganizationId: "STRING_VALUE",
 * //   Alias: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * //   DirectoryId: "STRING_VALUE",
 * //   DirectoryType: "STRING_VALUE",
 * //   DefaultMailDomain: "STRING_VALUE",
 * //   CompletedDate: new Date("TIMESTAMP"),
 * //   ErrorMessage: "STRING_VALUE",
 * //   ARN: "STRING_VALUE",
 * //   MigrationAdmin: "STRING_VALUE",
 * //   InteroperabilityEnabled: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeOrganizationCommandInput - {@link DescribeOrganizationCommandInput}
 * @returns {@link DescribeOrganizationCommandOutput}
 * @see {@link DescribeOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class DescribeOrganizationCommand extends command<DescribeOrganizationCommandInput, DescribeOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeOrganization",
  DescribeOrganization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeOrganizationRequest;
      output: DescribeOrganizationResponse;
    };
    sdk: {
      input: DescribeOrganizationCommandInput;
      output: DescribeOrganizationCommandOutput;
    };
  };
}
