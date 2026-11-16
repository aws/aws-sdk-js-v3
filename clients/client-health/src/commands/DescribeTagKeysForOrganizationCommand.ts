// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTagKeysForOrganizationResponse } from "../models/models_0";
import { DescribeTagKeysForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTagKeysForOrganizationCommand}.
 */
export interface DescribeTagKeysForOrganizationCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeTagKeysForOrganizationCommand}.
 */
export interface DescribeTagKeysForOrganizationCommandOutput extends DescribeTagKeysForOrganizationResponse, __MetadataBearer {}

/**
 * <p>Returns the list of tag keys configured for Health event tracking across your organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeTagKeysForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeTagKeysForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = {};
 * const command = new DescribeTagKeysForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTagKeysForOrganizationResponse
 * //   keys: [ // OrganizationTagKeyList
 * //     { // OrganizationTagKey
 * //       key: "STRING_VALUE",
 * //       enabledForEventBridge: true || false,
 * //       status: "PENDING" || "ACTIVE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTagKeysForOrganizationCommandInput - {@link DescribeTagKeysForOrganizationCommandInput}
 * @returns {@link DescribeTagKeysForOrganizationCommandOutput}
 * @see {@link DescribeTagKeysForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeTagKeysForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 *
 * @public
 */
export class DescribeTagKeysForOrganizationCommand extends command<DescribeTagKeysForOrganizationCommandInput, DescribeTagKeysForOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTagKeysForOrganization",
  DescribeTagKeysForOrganization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeTagKeysForOrganizationResponse;
    };
    sdk: {
      input: DescribeTagKeysForOrganizationCommandInput;
      output: DescribeTagKeysForOrganizationCommandOutput;
    };
  };
}
