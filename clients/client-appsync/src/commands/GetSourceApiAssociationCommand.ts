// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSourceApiAssociationRequest, GetSourceApiAssociationResponse } from "../models/models_0";
import { de_GetSourceApiAssociationCommand, se_GetSourceApiAssociationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSourceApiAssociationCommand}.
 */
export interface GetSourceApiAssociationCommandInput extends GetSourceApiAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetSourceApiAssociationCommand}.
 */
export interface GetSourceApiAssociationCommandOutput extends GetSourceApiAssociationResponse, __MetadataBearer {}

/**
 * <p>Retrieves a <code>SourceApiAssociation</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetSourceApiAssociationCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetSourceApiAssociationCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // GetSourceApiAssociationRequest
 *   mergedApiIdentifier: "STRING_VALUE", // required
 *   associationId: "STRING_VALUE", // required
 * };
 * const command = new GetSourceApiAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetSourceApiAssociationResponse
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
 * @param GetSourceApiAssociationCommandInput - {@link GetSourceApiAssociationCommandInput}
 * @returns {@link GetSourceApiAssociationCommandOutput}
 * @see {@link GetSourceApiAssociationCommandInput} for command's `input` shape.
 * @see {@link GetSourceApiAssociationCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
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
export class GetSourceApiAssociationCommand extends $Command
  .classBuilder<
    GetSourceApiAssociationCommandInput,
    GetSourceApiAssociationCommandOutput,
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
  .s("AWSDeepdishControlPlaneService", "GetSourceApiAssociation", {})
  .n("AppSyncClient", "GetSourceApiAssociationCommand")
  .f(void 0, void 0)
  .ser(se_GetSourceApiAssociationCommand)
  .de(de_GetSourceApiAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSourceApiAssociationRequest;
      output: GetSourceApiAssociationResponse;
    };
    sdk: {
      input: GetSourceApiAssociationCommandInput;
      output: GetSourceApiAssociationCommandOutput;
    };
  };
}
