// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTagsForOrganizationRequest, DescribeTagsForOrganizationResponse } from "../models/models_0";
import { DescribeTagsForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTagsForOrganizationCommand}.
 */
export interface DescribeTagsForOrganizationCommandInput extends DescribeTagsForOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTagsForOrganizationCommand}.
 */
export interface DescribeTagsForOrganizationCommandOutput extends DescribeTagsForOrganizationResponse, __MetadataBearer {}

/**
 * <p>Returns the tags associated with Health events across all accounts in your organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeTagsForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeTagsForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = { // DescribeTagsForOrganizationRequest
 *   filter: { // DescribeTagsForOrganizationFilter
 *     tagTypes: [ // OrganizationTagTypeFilter
 *       "ORGANIZATION_RESOURCE_TAG" || "ORGANIZATION_ACCOUNT_TAG",
 *     ],
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeTagsForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTagsForOrganizationResponse
 * //   tags: [ // OrganizationTagList
 * //     { // OrganizationTag
 * //       key: "STRING_VALUE",
 * //       value: "STRING_VALUE",
 * //       type: "ORGANIZATION_RESOURCE_TAG" || "ORGANIZATION_ACCOUNT_TAG",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTagsForOrganizationCommandInput - {@link DescribeTagsForOrganizationCommandInput}
 * @returns {@link DescribeTagsForOrganizationCommandOutput}
 * @see {@link DescribeTagsForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeTagsForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link InvalidPaginationToken} (client fault)
 *  <p>The specified pagination token (<code>nextToken</code>) is not valid.</p>
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 *
 * @public
 */
export class DescribeTagsForOrganizationCommand extends command<DescribeTagsForOrganizationCommandInput, DescribeTagsForOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTagsForOrganization",
  DescribeTagsForOrganization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTagsForOrganizationRequest;
      output: DescribeTagsForOrganizationResponse;
    };
    sdk: {
      input: DescribeTagsForOrganizationCommandInput;
      output: DescribeTagsForOrganizationCommandOutput;
    };
  };
}
