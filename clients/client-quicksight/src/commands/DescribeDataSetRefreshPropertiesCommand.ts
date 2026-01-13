// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeDataSetRefreshPropertiesRequest,
  DescribeDataSetRefreshPropertiesResponse,
} from "../models/models_3";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeDataSetRefreshProperties$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDataSetRefreshPropertiesCommand}.
 */
export interface DescribeDataSetRefreshPropertiesCommandInput extends DescribeDataSetRefreshPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDataSetRefreshPropertiesCommand}.
 */
export interface DescribeDataSetRefreshPropertiesCommandOutput extends DescribeDataSetRefreshPropertiesResponse, __MetadataBearer {}

/**
 * <p>Describes the refresh properties of a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDataSetRefreshPropertiesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDataSetRefreshPropertiesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeDataSetRefreshPropertiesRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDataSetRefreshPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataSetRefreshPropertiesResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   DataSetRefreshProperties: { // DataSetRefreshProperties
 * //     RefreshConfiguration: { // RefreshConfiguration
 * //       IncrementalRefresh: { // IncrementalRefresh
 * //         LookbackWindow: { // LookbackWindow
 * //           ColumnName: "STRING_VALUE", // required
 * //           Size: Number("long"), // required
 * //           SizeUnit: "HOUR" || "DAY" || "WEEK", // required
 * //         },
 * //       },
 * //     },
 * //     FailureConfiguration: { // RefreshFailureConfiguration
 * //       EmailAlert: { // RefreshFailureEmailAlert
 * //         AlertStatus: "ENABLED" || "DISABLED",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDataSetRefreshPropertiesCommandInput - {@link DescribeDataSetRefreshPropertiesCommandInput}
 * @returns {@link DescribeDataSetRefreshPropertiesCommandOutput}
 * @see {@link DescribeDataSetRefreshPropertiesCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSetRefreshPropertiesCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
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
export class DescribeDataSetRefreshPropertiesCommand extends $Command
  .classBuilder<
    DescribeDataSetRefreshPropertiesCommandInput,
    DescribeDataSetRefreshPropertiesCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "DescribeDataSetRefreshProperties", {})
  .n("QuickSightClient", "DescribeDataSetRefreshPropertiesCommand")
  .sc(DescribeDataSetRefreshProperties$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDataSetRefreshPropertiesRequest;
      output: DescribeDataSetRefreshPropertiesResponse;
    };
    sdk: {
      input: DescribeDataSetRefreshPropertiesCommandInput;
      output: DescribeDataSetRefreshPropertiesCommandOutput;
    };
  };
}
