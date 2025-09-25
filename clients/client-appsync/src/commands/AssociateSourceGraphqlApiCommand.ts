// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateSourceGraphqlApiRequest, AssociateSourceGraphqlApiResponse } from "../models/models_0";
import { AssociateSourceGraphqlApi } from "../schemas/schemas_7_Api";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateSourceGraphqlApiCommand}.
 */
export interface AssociateSourceGraphqlApiCommandInput extends AssociateSourceGraphqlApiRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSourceGraphqlApiCommand}.
 */
export interface AssociateSourceGraphqlApiCommandOutput extends AssociateSourceGraphqlApiResponse, __MetadataBearer {}

/**
 * <p>Creates an association between a Merged API and source API using the Merged API's
 *          identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, AssociateSourceGraphqlApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, AssociateSourceGraphqlApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // AssociateSourceGraphqlApiRequest
 *   mergedApiIdentifier: "STRING_VALUE", // required
 *   sourceApiIdentifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   sourceApiAssociationConfig: { // SourceApiAssociationConfig
 *     mergeType: "MANUAL_MERGE" || "AUTO_MERGE",
 *   },
 * };
 * const command = new AssociateSourceGraphqlApiCommand(input);
 * const response = await client.send(command);
 * // { // AssociateSourceGraphqlApiResponse
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
 * @param AssociateSourceGraphqlApiCommandInput - {@link AssociateSourceGraphqlApiCommandInput}
 * @returns {@link AssociateSourceGraphqlApiCommandOutput}
 * @see {@link AssociateSourceGraphqlApiCommandInput} for command's `input` shape.
 * @see {@link AssociateSourceGraphqlApiCommandOutput} for command's `response` shape.
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
export class AssociateSourceGraphqlApiCommand extends $Command
  .classBuilder<
    AssociateSourceGraphqlApiCommandInput,
    AssociateSourceGraphqlApiCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepdishControlPlaneService", "AssociateSourceGraphqlApi", {})
  .n("AppSyncClient", "AssociateSourceGraphqlApiCommand")
  .sc(AssociateSourceGraphqlApi)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateSourceGraphqlApiRequest;
      output: AssociateSourceGraphqlApiResponse;
    };
    sdk: {
      input: AssociateSourceGraphqlApiCommandInput;
      output: AssociateSourceGraphqlApiCommandOutput;
    };
  };
}
