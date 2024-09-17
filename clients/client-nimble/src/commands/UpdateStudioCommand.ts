// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateStudioRequest,
  UpdateStudioRequestFilterSensitiveLog,
  UpdateStudioResponse,
  UpdateStudioResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { de_UpdateStudioCommand, se_UpdateStudioCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateStudioCommand}.
 */
export interface UpdateStudioCommandInput extends UpdateStudioRequest {}
/**
 * @public
 *
 * The output of {@link UpdateStudioCommand}.
 */
export interface UpdateStudioCommandOutput extends UpdateStudioResponse, __MetadataBearer {}

/**
 * <p>Update a Studio resource.</p>
 *         <p>Currently, this operation only supports updating the displayName of your
 *             studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, UpdateStudioCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, UpdateStudioCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // UpdateStudioRequest
 *   adminRoleArn: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   displayName: "STRING_VALUE",
 *   studioId: "STRING_VALUE", // required
 *   userRoleArn: "STRING_VALUE",
 * };
 * const command = new UpdateStudioCommand(input);
 * const response = await client.send(command);
 * // { // UpdateStudioResponse
 * //   studio: { // Studio
 * //     adminRoleArn: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     displayName: "STRING_VALUE",
 * //     homeRegion: "STRING_VALUE",
 * //     ssoClientId: "STRING_VALUE",
 * //     state: "CREATE_IN_PROGRESS" || "READY" || "UPDATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "DELETED" || "DELETE_FAILED" || "CREATE_FAILED" || "UPDATE_FAILED",
 * //     statusCode: "STUDIO_CREATED" || "STUDIO_DELETED" || "STUDIO_UPDATED" || "STUDIO_CREATE_IN_PROGRESS" || "STUDIO_UPDATE_IN_PROGRESS" || "STUDIO_DELETE_IN_PROGRESS" || "STUDIO_WITH_LAUNCH_PROFILES_NOT_DELETED" || "STUDIO_WITH_STUDIO_COMPONENTS_NOT_DELETED" || "STUDIO_WITH_STREAMING_IMAGES_NOT_DELETED" || "AWS_SSO_NOT_ENABLED" || "AWS_SSO_ACCESS_DENIED" || "ROLE_NOT_OWNED_BY_STUDIO_OWNER" || "ROLE_COULD_NOT_BE_ASSUMED" || "INTERNAL_ERROR" || "ENCRYPTION_KEY_NOT_FOUND" || "ENCRYPTION_KEY_ACCESS_DENIED" || "AWS_SSO_CONFIGURATION_REPAIRED" || "AWS_SSO_CONFIGURATION_REPAIR_IN_PROGRESS" || "AWS_STS_REGION_DISABLED",
 * //     statusMessage: "STRING_VALUE",
 * //     studioEncryptionConfiguration: { // StudioEncryptionConfiguration
 * //       keyArn: "STRING_VALUE",
 * //       keyType: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KEY", // required
 * //     },
 * //     studioId: "STRING_VALUE",
 * //     studioName: "STRING_VALUE",
 * //     studioUrl: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     userRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateStudioCommandInput - {@link UpdateStudioCommandInput}
 * @returns {@link UpdateStudioCommandOutput}
 * @see {@link UpdateStudioCommandInput} for command's `input` shape.
 * @see {@link UpdateStudioCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation. Check your IAM
 *             policies, and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Another operation is in progress. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your current quota does not allow you to perform the request action. You can request
 *             increases for some quotas, and other quotas cannot be increased.</p>
 *         <p>Please use Amazon Web Services Service Quotas to request an increase. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link NimbleServiceException}
 * <p>Base exception class for all service exceptions from Nimble service.</p>
 *
 * @public
 */
export class UpdateStudioCommand extends $Command
  .classBuilder<
    UpdateStudioCommandInput,
    UpdateStudioCommandOutput,
    NimbleClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NimbleClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("nimble", "UpdateStudio", {})
  .n("NimbleClient", "UpdateStudioCommand")
  .f(UpdateStudioRequestFilterSensitiveLog, UpdateStudioResponseFilterSensitiveLog)
  .ser(se_UpdateStudioCommand)
  .de(de_UpdateStudioCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStudioRequest;
      output: UpdateStudioResponse;
    };
    sdk: {
      input: UpdateStudioCommandInput;
      output: UpdateStudioCommandOutput;
    };
  };
}
