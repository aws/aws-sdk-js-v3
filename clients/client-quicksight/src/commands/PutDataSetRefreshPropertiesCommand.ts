// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutDataSetRefreshPropertiesRequest, PutDataSetRefreshPropertiesResponse } from "../models/models_4";
import {
  de_PutDataSetRefreshPropertiesCommand,
  se_PutDataSetRefreshPropertiesCommand,
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
 * The input for {@link PutDataSetRefreshPropertiesCommand}.
 */
export interface PutDataSetRefreshPropertiesCommandInput extends PutDataSetRefreshPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link PutDataSetRefreshPropertiesCommand}.
 */
export interface PutDataSetRefreshPropertiesCommandOutput
  extends PutDataSetRefreshPropertiesResponse,
    __MetadataBearer {}

/**
 * <p>Creates or updates the dataset refresh properties for the dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, PutDataSetRefreshPropertiesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, PutDataSetRefreshPropertiesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // PutDataSetRefreshPropertiesRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
 *   DataSetRefreshProperties: { // DataSetRefreshProperties
 *     RefreshConfiguration: { // RefreshConfiguration
 *       IncrementalRefresh: { // IncrementalRefresh
 *         LookbackWindow: { // LookbackWindow
 *           ColumnName: "STRING_VALUE", // required
 *           Size: Number("long"), // required
 *           SizeUnit: "HOUR" || "DAY" || "WEEK", // required
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new PutDataSetRefreshPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // PutDataSetRefreshPropertiesResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param PutDataSetRefreshPropertiesCommandInput - {@link PutDataSetRefreshPropertiesCommandInput}
 * @returns {@link PutDataSetRefreshPropertiesCommandOutput}
 * @see {@link PutDataSetRefreshPropertiesCommandInput} for command's `input` shape.
 * @see {@link PutDataSetRefreshPropertiesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
export class PutDataSetRefreshPropertiesCommand extends $Command
  .classBuilder<
    PutDataSetRefreshPropertiesCommandInput,
    PutDataSetRefreshPropertiesCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "PutDataSetRefreshProperties", {})
  .n("QuickSightClient", "PutDataSetRefreshPropertiesCommand")
  .f(void 0, void 0)
  .ser(se_PutDataSetRefreshPropertiesCommand)
  .de(de_PutDataSetRefreshPropertiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDataSetRefreshPropertiesRequest;
      output: PutDataSetRefreshPropertiesResponse;
    };
    sdk: {
      input: PutDataSetRefreshPropertiesCommandInput;
      output: PutDataSetRefreshPropertiesCommandOutput;
    };
  };
}
