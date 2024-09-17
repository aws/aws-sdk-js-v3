// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListStudiosRequest, ListStudiosResponse, ListStudiosResponseFilterSensitiveLog } from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { de_ListStudiosCommand, se_ListStudiosCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStudiosCommand}.
 */
export interface ListStudiosCommandInput extends ListStudiosRequest {}
/**
 * @public
 *
 * The output of {@link ListStudiosCommand}.
 */
export interface ListStudiosCommandOutput extends ListStudiosResponse, __MetadataBearer {}

/**
 * <p>List studios in your Amazon Web Services accounts in the requested Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListStudiosCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListStudiosCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // ListStudiosRequest
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListStudiosCommand(input);
 * const response = await client.send(command);
 * // { // ListStudiosResponse
 * //   nextToken: "STRING_VALUE",
 * //   studios: [ // StudioList // required
 * //     { // Studio
 * //       adminRoleArn: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       displayName: "STRING_VALUE",
 * //       homeRegion: "STRING_VALUE",
 * //       ssoClientId: "STRING_VALUE",
 * //       state: "CREATE_IN_PROGRESS" || "READY" || "UPDATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "DELETED" || "DELETE_FAILED" || "CREATE_FAILED" || "UPDATE_FAILED",
 * //       statusCode: "STUDIO_CREATED" || "STUDIO_DELETED" || "STUDIO_UPDATED" || "STUDIO_CREATE_IN_PROGRESS" || "STUDIO_UPDATE_IN_PROGRESS" || "STUDIO_DELETE_IN_PROGRESS" || "STUDIO_WITH_LAUNCH_PROFILES_NOT_DELETED" || "STUDIO_WITH_STUDIO_COMPONENTS_NOT_DELETED" || "STUDIO_WITH_STREAMING_IMAGES_NOT_DELETED" || "AWS_SSO_NOT_ENABLED" || "AWS_SSO_ACCESS_DENIED" || "ROLE_NOT_OWNED_BY_STUDIO_OWNER" || "ROLE_COULD_NOT_BE_ASSUMED" || "INTERNAL_ERROR" || "ENCRYPTION_KEY_NOT_FOUND" || "ENCRYPTION_KEY_ACCESS_DENIED" || "AWS_SSO_CONFIGURATION_REPAIRED" || "AWS_SSO_CONFIGURATION_REPAIR_IN_PROGRESS" || "AWS_STS_REGION_DISABLED",
 * //       statusMessage: "STRING_VALUE",
 * //       studioEncryptionConfiguration: { // StudioEncryptionConfiguration
 * //         keyArn: "STRING_VALUE",
 * //         keyType: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KEY", // required
 * //       },
 * //       studioId: "STRING_VALUE",
 * //       studioName: "STRING_VALUE",
 * //       studioUrl: "STRING_VALUE",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       userRoleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListStudiosCommandInput - {@link ListStudiosCommandInput}
 * @returns {@link ListStudiosCommandOutput}
 * @see {@link ListStudiosCommandInput} for command's `input` shape.
 * @see {@link ListStudiosCommandOutput} for command's `response` shape.
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
export class ListStudiosCommand extends $Command
  .classBuilder<
    ListStudiosCommandInput,
    ListStudiosCommandOutput,
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
  .s("nimble", "ListStudios", {})
  .n("NimbleClient", "ListStudiosCommand")
  .f(void 0, ListStudiosResponseFilterSensitiveLog)
  .ser(se_ListStudiosCommand)
  .de(de_ListStudiosCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStudiosRequest;
      output: ListStudiosResponse;
    };
    sdk: {
      input: ListStudiosCommandInput;
      output: ListStudiosCommandOutput;
    };
  };
}
