// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RestoreAnalysisRequest, RestoreAnalysisResponse } from "../models/models_4";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { RestoreAnalysis } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RestoreAnalysisCommand}.
 */
export interface RestoreAnalysisCommandInput extends RestoreAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link RestoreAnalysisCommand}.
 */
export interface RestoreAnalysisCommandOutput extends RestoreAnalysisResponse, __MetadataBearer {}

/**
 * <p>Restores an analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, RestoreAnalysisCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, RestoreAnalysisCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // RestoreAnalysisRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AnalysisId: "STRING_VALUE", // required
 *   RestoreToFolders: true || false,
 * };
 * const command = new RestoreAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // RestoreAnalysisResponse
 * //   Status: Number("int"),
 * //   Arn: "STRING_VALUE",
 * //   AnalysisId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   RestorationFailedFolderArns: [ // FolderArnList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param RestoreAnalysisCommandInput - {@link RestoreAnalysisCommandInput}
 * @returns {@link RestoreAnalysisCommandOutput}
 * @see {@link RestoreAnalysisCommandInput} for command's `input` shape.
 * @see {@link RestoreAnalysisCommandOutput} for command's `response` shape.
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
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
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
export class RestoreAnalysisCommand extends $Command
  .classBuilder<
    RestoreAnalysisCommandInput,
    RestoreAnalysisCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "RestoreAnalysis", {})
  .n("QuickSightClient", "RestoreAnalysisCommand")
  .sc(RestoreAnalysis)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreAnalysisRequest;
      output: RestoreAnalysisResponse;
    };
    sdk: {
      input: RestoreAnalysisCommandInput;
      output: RestoreAnalysisCommandOutput;
    };
  };
}
