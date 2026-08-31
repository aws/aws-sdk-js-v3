// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAppRequest, DescribeAppResponse } from "../models/models_4";
import { DescribeApp$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAppCommand}.
 */
export interface DescribeAppCommandInput extends DescribeAppRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppCommand}.
 */
export interface DescribeAppCommandOutput extends DescribeAppResponse, __MetadataBearer {}

/**
 * <p>Describes an app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeAppCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeAppCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeAppRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AppId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAppCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppResponse
 * //   App: { // AppSummary
 * //     AppId: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     Visibility: "PRIVATE" || "PUBLIC",
 * //   },
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAppCommandInput - {@link DescribeAppCommandInput}
 * @returns {@link DescribeAppCommandOutput}
 * @see {@link DescribeAppCommandInput} for command's `input` shape.
 * @see {@link DescribeAppCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameter has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
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
export class DescribeAppCommand extends command<DescribeAppCommandInput, DescribeAppCommandOutput>(
  _ep0,
  _mw0,
  "DescribeApp",
  DescribeApp$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAppRequest;
      output: DescribeAppResponse;
    };
    sdk: {
      input: DescribeAppCommandInput;
      output: DescribeAppCommandOutput;
    };
  };
}
