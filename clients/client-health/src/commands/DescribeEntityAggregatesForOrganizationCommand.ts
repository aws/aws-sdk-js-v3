// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import type {
  DescribeEntityAggregatesForOrganizationRequest,
  DescribeEntityAggregatesForOrganizationResponse,
} from "../models/models_0";
import { DescribeEntityAggregatesForOrganization } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEntityAggregatesForOrganizationCommand}.
 */
export interface DescribeEntityAggregatesForOrganizationCommandInput
  extends DescribeEntityAggregatesForOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEntityAggregatesForOrganizationCommand}.
 */
export interface DescribeEntityAggregatesForOrganizationCommandOutput
  extends DescribeEntityAggregatesForOrganizationResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of entity aggregates for your Organizations that are affected by each of the specified events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEntityAggregatesForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEntityAggregatesForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = { // DescribeEntityAggregatesForOrganizationRequest
 *   eventArns: [ // OrganizationEventArnsList // required
 *     "STRING_VALUE",
 *   ],
 *   awsAccountIds: [ // OrganizationAccountIdsList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeEntityAggregatesForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEntityAggregatesForOrganizationResponse
 * //   organizationEntityAggregates: [ // OrganizationEntityAggregatesList
 * //     { // OrganizationEntityAggregate
 * //       eventArn: "STRING_VALUE",
 * //       count: Number("int"),
 * //       statuses: { // entityStatuses
 * //         "<keys>": Number("int"),
 * //       },
 * //       accounts: [ // AccountEntityAggregatesList
 * //         { // AccountEntityAggregate
 * //           accountId: "STRING_VALUE",
 * //           count: Number("int"),
 * //           statuses: {
 * //             "<keys>": Number("int"),
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEntityAggregatesForOrganizationCommandInput - {@link DescribeEntityAggregatesForOrganizationCommandInput}
 * @returns {@link DescribeEntityAggregatesForOrganizationCommandOutput}
 * @see {@link DescribeEntityAggregatesForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeEntityAggregatesForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 *
 * @public
 */
export class DescribeEntityAggregatesForOrganizationCommand extends $Command
  .classBuilder<
    DescribeEntityAggregatesForOrganizationCommandInput,
    DescribeEntityAggregatesForOrganizationCommandOutput,
    HealthClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: HealthClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHealth_20160804", "DescribeEntityAggregatesForOrganization", {})
  .n("HealthClient", "DescribeEntityAggregatesForOrganizationCommand")
  .sc(DescribeEntityAggregatesForOrganization)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEntityAggregatesForOrganizationRequest;
      output: DescribeEntityAggregatesForOrganizationResponse;
    };
    sdk: {
      input: DescribeEntityAggregatesForOrganizationCommandInput;
      output: DescribeEntityAggregatesForOrganizationCommandOutput;
    };
  };
}
