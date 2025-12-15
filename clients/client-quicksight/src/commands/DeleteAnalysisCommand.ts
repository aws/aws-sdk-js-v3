// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAnalysisRequest, DeleteAnalysisResponse } from "../models/models_3";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DeleteAnalysis$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAnalysisCommand}.
 */
export interface DeleteAnalysisCommandInput extends DeleteAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAnalysisCommand}.
 */
export interface DeleteAnalysisCommandOutput extends DeleteAnalysisResponse, __MetadataBearer {}

/**
 * <p>Deletes an analysis from Amazon Quick Sight. You can optionally include a recovery window during
 *             which you can restore the analysis. If you don't specify a recovery window value, the
 *             operation defaults to 30 days. Amazon Quick Sight attaches a <code>DeletionTime</code> stamp to
 *             the response that specifies the end of the recovery window. At the end of the recovery
 *             window, Amazon Quick Sight deletes the analysis permanently.</p>
 *          <p>At any time before recovery window ends, you can use the <code>RestoreAnalysis</code>
 *             API operation to remove the <code>DeletionTime</code> stamp and cancel the deletion of
 *             the analysis. The analysis remains visible in the API until it's deleted, so you can
 *             describe it but you can't make a template from it.</p>
 *          <p>An analysis that's scheduled for deletion isn't accessible in the Amazon Quick Sight console.
 *             To access it in the console, restore it. Deleting an analysis doesn't delete the
 *             dashboards that you publish from it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteAnalysisCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteAnalysisCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteAnalysisRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AnalysisId: "STRING_VALUE", // required
 *   RecoveryWindowInDays: Number("long"),
 *   ForceDeleteWithoutRecovery: true || false,
 * };
 * const command = new DeleteAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAnalysisResponse
 * //   Status: Number("int"),
 * //   Arn: "STRING_VALUE",
 * //   AnalysisId: "STRING_VALUE",
 * //   DeletionTime: new Date("TIMESTAMP"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteAnalysisCommandInput - {@link DeleteAnalysisCommandInput}
 * @returns {@link DeleteAnalysisCommandOutput}
 * @see {@link DeleteAnalysisCommandInput} for command's `input` shape.
 * @see {@link DeleteAnalysisCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon Quick Suite
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DeleteAnalysisCommand extends $Command
  .classBuilder<
    DeleteAnalysisCommandInput,
    DeleteAnalysisCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "DeleteAnalysis", {})
  .n("QuickSightClient", "DeleteAnalysisCommand")
  .sc(DeleteAnalysis$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAnalysisRequest;
      output: DeleteAnalysisResponse;
    };
    sdk: {
      input: DeleteAnalysisCommandInput;
      output: DeleteAnalysisCommandOutput;
    };
  };
}
