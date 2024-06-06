// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDataSetRefreshPropertiesRequest, DescribeDataSetRefreshPropertiesResponse } from "../models/models_3";
import {
  de_DescribeDataSetRefreshPropertiesCommand,
  se_DescribeDataSetRefreshPropertiesCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

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
export interface DescribeDataSetRefreshPropertiesCommandOutput
  extends DescribeDataSetRefreshPropertiesResponse,
    __MetadataBearer {}

/**
 * <p>Describes the refresh properties of a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDataSetRefreshPropertiesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDataSetRefreshPropertiesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
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
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "DescribeDataSetRefreshProperties", {})
  .n("QuickSightClient", "DescribeDataSetRefreshPropertiesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDataSetRefreshPropertiesCommand)
  .de(de_DescribeDataSetRefreshPropertiesCommand)
  .build() {}
