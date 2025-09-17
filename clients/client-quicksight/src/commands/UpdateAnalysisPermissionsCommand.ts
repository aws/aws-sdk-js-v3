// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAnalysisPermissionsRequest, UpdateAnalysisPermissionsResponse } from "../models/models_5";
import { de_UpdateAnalysisPermissionsCommand, se_UpdateAnalysisPermissionsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAnalysisPermissionsCommand}.
 */
export interface UpdateAnalysisPermissionsCommandInput extends UpdateAnalysisPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAnalysisPermissionsCommand}.
 */
export interface UpdateAnalysisPermissionsCommandOutput extends UpdateAnalysisPermissionsResponse, __MetadataBearer {}

/**
 * <p>Updates the read and write permissions for an analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateAnalysisPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateAnalysisPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateAnalysisPermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AnalysisId: "STRING_VALUE", // required
 *   GrantPermissions: [ // UpdateResourcePermissionList
 *     { // ResourcePermission
 *       Principal: "STRING_VALUE", // required
 *       Actions: [ // ActionList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   RevokePermissions: [
 *     {
 *       Principal: "STRING_VALUE", // required
 *       Actions: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateAnalysisPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAnalysisPermissionsResponse
 * //   AnalysisArn: "STRING_VALUE",
 * //   AnalysisId: "STRING_VALUE",
 * //   Permissions: [ // UpdateResourcePermissionList
 * //     { // ResourcePermission
 * //       Principal: "STRING_VALUE", // required
 * //       Actions: [ // ActionList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateAnalysisPermissionsCommandInput - {@link UpdateAnalysisPermissionsCommandInput}
 * @returns {@link UpdateAnalysisPermissionsCommandOutput}
 * @see {@link UpdateAnalysisPermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateAnalysisPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
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
export class UpdateAnalysisPermissionsCommand extends $Command
  .classBuilder<
    UpdateAnalysisPermissionsCommandInput,
    UpdateAnalysisPermissionsCommandOutput,
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
  .s("QuickSight_20180401", "UpdateAnalysisPermissions", {})
  .n("QuickSightClient", "UpdateAnalysisPermissionsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAnalysisPermissionsCommand)
  .de(de_UpdateAnalysisPermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAnalysisPermissionsRequest;
      output: UpdateAnalysisPermissionsResponse;
    };
    sdk: {
      input: UpdateAnalysisPermissionsCommandInput;
      output: UpdateAnalysisPermissionsCommandOutput;
    };
  };
}
