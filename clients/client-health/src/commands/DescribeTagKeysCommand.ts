// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTagKeysResponse } from "../models/models_0";
import { DescribeTagKeys$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTagKeysCommand}.
 */
export interface DescribeTagKeysCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeTagKeysCommand}.
 */
export interface DescribeTagKeysCommandOutput extends DescribeTagKeysResponse, __MetadataBearer {}

/**
 * <p>Returns the list of resource tag keys configured for Health event tracking in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeTagKeysCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeTagKeysCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = {};
 * const command = new DescribeTagKeysCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTagKeysResponse
 * //   keys: [ // ResourceTagKeyList
 * //     { // ResourceTagKey
 * //       key: "STRING_VALUE",
 * //       enabledForEventBridge: true || false,
 * //       status: "PENDING" || "ACTIVE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTagKeysCommandInput - {@link DescribeTagKeysCommandInput}
 * @returns {@link DescribeTagKeysCommandOutput}
 * @see {@link DescribeTagKeysCommandInput} for command's `input` shape.
 * @see {@link DescribeTagKeysCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 *
 * @public
 */
export class DescribeTagKeysCommand extends command<DescribeTagKeysCommandInput, DescribeTagKeysCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTagKeys",
  DescribeTagKeys$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeTagKeysResponse;
    };
    sdk: {
      input: DescribeTagKeysCommandInput;
      output: DescribeTagKeysCommandOutput;
    };
  };
}
