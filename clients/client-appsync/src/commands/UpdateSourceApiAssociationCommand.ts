// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateSourceApiAssociationRequest, UpdateSourceApiAssociationResponse } from "../models/models_0";
import { UpdateSourceApiAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSourceApiAssociationCommand}.
 */
export interface UpdateSourceApiAssociationCommandInput extends UpdateSourceApiAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSourceApiAssociationCommand}.
 */
export interface UpdateSourceApiAssociationCommandOutput extends UpdateSourceApiAssociationResponse, __MetadataBearer {}

/**
 * <p>Updates some of the configuration choices of a particular source API association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, UpdateSourceApiAssociationCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, UpdateSourceApiAssociationCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // UpdateSourceApiAssociationRequest
 *   associationId: "STRING_VALUE", // required
 *   mergedApiIdentifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   sourceApiAssociationConfig: { // SourceApiAssociationConfig
 *     mergeType: "MANUAL_MERGE" || "AUTO_MERGE",
 *   },
 * };
 * const command = new UpdateSourceApiAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSourceApiAssociationResponse
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
 * @param UpdateSourceApiAssociationCommandInput - {@link UpdateSourceApiAssociationCommandInput}
 * @returns {@link UpdateSourceApiAssociationCommandOutput}
 * @see {@link UpdateSourceApiAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateSourceApiAssociationCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class UpdateSourceApiAssociationCommand extends $Command
  .classBuilder<
    UpdateSourceApiAssociationCommandInput,
    UpdateSourceApiAssociationCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepdishControlPlaneService", "UpdateSourceApiAssociation", {})
  .n("AppSyncClient", "UpdateSourceApiAssociationCommand")
  .sc(UpdateSourceApiAssociation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSourceApiAssociationRequest;
      output: UpdateSourceApiAssociationResponse;
    };
    sdk: {
      input: UpdateSourceApiAssociationCommandInput;
      output: UpdateSourceApiAssociationCommandOutput;
    };
  };
}
