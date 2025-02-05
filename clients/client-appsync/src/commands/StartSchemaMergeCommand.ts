// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartSchemaMergeRequest, StartSchemaMergeResponse } from "../models/models_0";
import { de_StartSchemaMergeCommand, se_StartSchemaMergeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartSchemaMergeCommand}.
 */
export interface StartSchemaMergeCommandInput extends StartSchemaMergeRequest {}
/**
 * @public
 *
 * The output of {@link StartSchemaMergeCommand}.
 */
export interface StartSchemaMergeCommandOutput extends StartSchemaMergeResponse, __MetadataBearer {}

/**
 * <p>Initiates a merge operation. Returns a status that shows the result of the merge
 *          operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, StartSchemaMergeCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, StartSchemaMergeCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppSyncClient(config);
 * const input = { // StartSchemaMergeRequest
 *   associationId: "STRING_VALUE", // required
 *   mergedApiIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StartSchemaMergeCommand(input);
 * const response = await client.send(command);
 * // { // StartSchemaMergeResponse
 * //   sourceApiAssociationStatus: "MERGE_SCHEDULED" || "MERGE_FAILED" || "MERGE_SUCCESS" || "MERGE_IN_PROGRESS" || "AUTO_MERGE_SCHEDULE_FAILED" || "DELETION_SCHEDULED" || "DELETION_IN_PROGRESS" || "DELETION_FAILED",
 * // };
 *
 * ```
 *
 * @param StartSchemaMergeCommandInput - {@link StartSchemaMergeCommandInput}
 * @returns {@link StartSchemaMergeCommandOutput}
 * @see {@link StartSchemaMergeCommandInput} for command's `input` shape.
 * @see {@link StartSchemaMergeCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is in progress at this time and it must complete before you can
 *          make your change.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 * @public
 */
export class StartSchemaMergeCommand extends $Command
  .classBuilder<
    StartSchemaMergeCommandInput,
    StartSchemaMergeCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepdishControlPlaneService", "StartSchemaMerge", {})
  .n("AppSyncClient", "StartSchemaMergeCommand")
  .f(void 0, void 0)
  .ser(se_StartSchemaMergeCommand)
  .de(de_StartSchemaMergeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSchemaMergeRequest;
      output: StartSchemaMergeResponse;
    };
    sdk: {
      input: StartSchemaMergeCommandInput;
      output: StartSchemaMergeCommandOutput;
    };
  };
}
