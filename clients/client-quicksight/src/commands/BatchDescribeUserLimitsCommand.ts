// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchDescribeUserLimitsRequest, BatchDescribeUserLimitsResponse } from "../models/models_2";
import { BatchDescribeUserLimits$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDescribeUserLimitsCommand}.
 */
export interface BatchDescribeUserLimitsCommandInput extends BatchDescribeUserLimitsRequest {}
/**
 * @public
 *
 * The output of {@link BatchDescribeUserLimitsCommand}.
 */
export interface BatchDescribeUserLimitsCommandOutput extends BatchDescribeUserLimitsResponse, __MetadataBearer {}

/**
 * <p>Describes the effective resource limits for one or more Amazon Quick Sight users, including the limits that apply to each user based on their profile assignments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, BatchDescribeUserLimitsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, BatchDescribeUserLimitsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // BatchDescribeUserLimitsRequest
 *   accountId: "STRING_VALUE", // required
 *   users: [ // BatchDescribeUserLimitsRequestUsersList
 *     { // UserLimitsEntry
 *       userName: "STRING_VALUE", // required
 *       namespace: "STRING_VALUE", // required
 *     },
 *   ],
 *   resourceTypes: [ // ResourceTypeList
 *     "INDEX_STORAGE" || "AGENT_HOURS",
 *   ],
 * };
 * const command = new BatchDescribeUserLimitsCommand(input);
 * const response = await client.send(command);
 * // { // BatchDescribeUserLimitsResponse
 * //   userLimits: [ // UserLimitsList // required
 * //     { // UserLimits
 * //       userName: "STRING_VALUE", // required
 * //       namespace: "STRING_VALUE", // required
 * //       effectiveLimits: [ // EffectiveLimitList // required
 * //         { // EffectiveLimit
 * //           resourceType: "INDEX_STORAGE" || "AGENT_HOURS", // required
 * //           limitValue: Number("long"), // required
 * //           limitUnit: "MB" || "GB" || "HOURS" || "DAYS", // required
 * //           source: "DIRECT_USER" || "GROUP" || "ROLE" || "ACCOUNT" || "SYSTEM_DEFAULT", // required
 * //           profileId: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   errors: [ // BatchDescribeUserLimitsErrorList // required
 * //     { // BatchDescribeUserLimitsError
 * //       userName: "STRING_VALUE",
 * //       namespace: "STRING_VALUE",
 * //       userArn: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDescribeUserLimitsCommandInput - {@link BatchDescribeUserLimitsCommandInput}
 * @returns {@link BatchDescribeUserLimitsCommandOutput}
 * @see {@link BatchDescribeUserLimitsCommandInput} for command's `input` shape.
 * @see {@link BatchDescribeUserLimitsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class BatchDescribeUserLimitsCommand extends command<BatchDescribeUserLimitsCommandInput, BatchDescribeUserLimitsCommandOutput>(
  _ep0,
  _mw0,
  "BatchDescribeUserLimits",
  BatchDescribeUserLimits$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDescribeUserLimitsRequest;
      output: BatchDescribeUserLimitsResponse;
    };
    sdk: {
      input: BatchDescribeUserLimitsCommandInput;
      output: BatchDescribeUserLimitsCommandOutput;
    };
  };
}
