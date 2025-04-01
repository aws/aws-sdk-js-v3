// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateMergedGraphqlApiRequest, AssociateMergedGraphqlApiResponse } from "../models/models_0";
import { de_AssociateMergedGraphqlApiCommand, se_AssociateMergedGraphqlApiCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateMergedGraphqlApiCommand}.
 */
export interface AssociateMergedGraphqlApiCommandInput extends AssociateMergedGraphqlApiRequest {}
/**
 * @public
 *
 * The output of {@link AssociateMergedGraphqlApiCommand}.
 */
export interface AssociateMergedGraphqlApiCommandOutput extends AssociateMergedGraphqlApiResponse, __MetadataBearer {}

/**
 * <p>Creates an association between a Merged API and source API using the source API's
 *          identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, AssociateMergedGraphqlApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, AssociateMergedGraphqlApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // AssociateMergedGraphqlApiRequest
 *   sourceApiIdentifier: "STRING_VALUE", // required
 *   mergedApiIdentifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   sourceApiAssociationConfig: { // SourceApiAssociationConfig
 *     mergeType: "MANUAL_MERGE" || "AUTO_MERGE",
 *   },
 * };
 * const command = new AssociateMergedGraphqlApiCommand(input);
 * const response = await client.send(command);
 * // { // AssociateMergedGraphqlApiResponse
 * //   sourceApiAssociation: { // SourceApiAssociation
 * //     associationId: "STRING_VALUE",
 * //     associationArn: "STRING_VALUE",
 * //     sourceApiId: "STRING_VALUE",
 * //     sourceApiArn: "STRING_VALUE",
 * //     mergedApiArn: "STRING_VALUE",
 * //     mergedApiId: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     sourceApiAssociationConfig: { // SourceApiAssociationConfig
 * //       mergeType: "MANUAL_MERGE" || "AUTO_MERGE",
 * //     },
 * //     sourceApiAssociationStatus: "MERGE_SCHEDULED" || "MERGE_FAILED" || "MERGE_SUCCESS" || "MERGE_IN_PROGRESS" || "AUTO_MERGE_SCHEDULE_FAILED" || "DELETION_SCHEDULED" || "DELETION_IN_PROGRESS" || "DELETION_FAILED",
 * //     sourceApiAssociationStatusDetail: "STRING_VALUE",
 * //     lastSuccessfulMergeDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateMergedGraphqlApiCommandInput - {@link AssociateMergedGraphqlApiCommandInput}
 * @returns {@link AssociateMergedGraphqlApiCommandOutput}
 * @see {@link AssociateMergedGraphqlApiCommandInput} for command's `input` shape.
 * @see {@link AssociateMergedGraphqlApiCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
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
 *
 * @public
 */
export class AssociateMergedGraphqlApiCommand extends $Command
  .classBuilder<
    AssociateMergedGraphqlApiCommandInput,
    AssociateMergedGraphqlApiCommandOutput,
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
  .s("AWSDeepdishControlPlaneService", "AssociateMergedGraphqlApi", {})
  .n("AppSyncClient", "AssociateMergedGraphqlApiCommand")
  .f(void 0, void 0)
  .ser(se_AssociateMergedGraphqlApiCommand)
  .de(de_AssociateMergedGraphqlApiCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateMergedGraphqlApiRequest;
      output: AssociateMergedGraphqlApiResponse;
    };
    sdk: {
      input: AssociateMergedGraphqlApiCommandInput;
      output: AssociateMergedGraphqlApiCommandOutput;
    };
  };
}
