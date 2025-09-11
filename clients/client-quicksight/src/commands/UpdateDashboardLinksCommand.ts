// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDashboardLinksRequest, UpdateDashboardLinksResponse } from "../models/models_5";
import { de_UpdateDashboardLinksCommand, se_UpdateDashboardLinksCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDashboardLinksCommand}.
 */
export interface UpdateDashboardLinksCommandInput extends UpdateDashboardLinksRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDashboardLinksCommand}.
 */
export interface UpdateDashboardLinksCommandOutput extends UpdateDashboardLinksResponse, __MetadataBearer {}

/**
 * <p>Updates the linked analyses on a dashboard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDashboardLinksCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDashboardLinksCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // UpdateDashboardLinksRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DashboardId: "STRING_VALUE", // required
 *   LinkEntities: [ // LinkEntityArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateDashboardLinksCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDashboardLinksResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   DashboardArn: "STRING_VALUE",
 * //   LinkEntities: [ // LinkEntityArnList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateDashboardLinksCommandInput - {@link UpdateDashboardLinksCommandInput}
 * @returns {@link UpdateDashboardLinksCommandOutput}
 * @see {@link UpdateDashboardLinksCommandInput} for command's `input` shape.
 * @see {@link UpdateDashboardLinksCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class UpdateDashboardLinksCommand extends $Command
  .classBuilder<
    UpdateDashboardLinksCommandInput,
    UpdateDashboardLinksCommandOutput,
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
  .s("QuickSight_20180401", "UpdateDashboardLinks", {})
  .n("QuickSightClient", "UpdateDashboardLinksCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDashboardLinksCommand)
  .de(de_UpdateDashboardLinksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDashboardLinksRequest;
      output: UpdateDashboardLinksResponse;
    };
    sdk: {
      input: UpdateDashboardLinksCommandInput;
      output: UpdateDashboardLinksCommandOutput;
    };
  };
}
