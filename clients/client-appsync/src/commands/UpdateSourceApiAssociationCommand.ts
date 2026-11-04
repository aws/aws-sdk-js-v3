// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSourceApiAssociationRequest, UpdateSourceApiAssociationResponse } from "../models/models_0";
import { UpdateSourceApiAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates some of the configuration choices of a particular source API association.
 *
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
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Another modification is in progress at this time and it must complete before you can make your change.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal AppSync error occurred. Try your request again.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource specified in the request was not found. Check the resource, and then try again.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You aren't authorized to perform this operation.
 *
 * @throws {@link AppSyncServiceException}
 *
 * Base exception class for all service exceptions from AppSync service.
 *
 * @public
 */
export class UpdateSourceApiAssociationCommand extends command<UpdateSourceApiAssociationCommandInput, UpdateSourceApiAssociationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSourceApiAssociation",
  UpdateSourceApiAssociation$
) {
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
