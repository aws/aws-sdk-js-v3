// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateWorkteamRequest, UpdateWorkteamResponse } from "../models/models_4";
import { de_UpdateWorkteamCommand, se_UpdateWorkteamCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkteamCommand}.
 */
export interface UpdateWorkteamCommandInput extends UpdateWorkteamRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkteamCommand}.
 */
export interface UpdateWorkteamCommandOutput extends UpdateWorkteamResponse, __MetadataBearer {}

/**
 * <p>Updates an existing work team with new member definitions or description.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateWorkteamCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateWorkteamCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateWorkteamRequest
 *   WorkteamName: "STRING_VALUE", // required
 *   MemberDefinitions: [ // MemberDefinitions
 *     { // MemberDefinition
 *       CognitoMemberDefinition: { // CognitoMemberDefinition
 *         UserPool: "STRING_VALUE", // required
 *         UserGroup: "STRING_VALUE", // required
 *         ClientId: "STRING_VALUE", // required
 *       },
 *       OidcMemberDefinition: { // OidcMemberDefinition
 *         Groups: [ // Groups
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 *   Description: "STRING_VALUE",
 *   NotificationConfiguration: { // NotificationConfiguration
 *     NotificationTopicArn: "STRING_VALUE",
 *   },
 *   WorkerAccessConfiguration: { // WorkerAccessConfiguration
 *     S3Presign: { // S3Presign
 *       IamPolicyConstraints: { // IamPolicyConstraints
 *         SourceIp: "Enabled" || "Disabled",
 *         VpcSourceIp: "Enabled" || "Disabled",
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateWorkteamCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkteamResponse
 * //   Workteam: { // Workteam
 * //     WorkteamName: "STRING_VALUE", // required
 * //     MemberDefinitions: [ // MemberDefinitions // required
 * //       { // MemberDefinition
 * //         CognitoMemberDefinition: { // CognitoMemberDefinition
 * //           UserPool: "STRING_VALUE", // required
 * //           UserGroup: "STRING_VALUE", // required
 * //           ClientId: "STRING_VALUE", // required
 * //         },
 * //         OidcMemberDefinition: { // OidcMemberDefinition
 * //           Groups: [ // Groups
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     WorkteamArn: "STRING_VALUE", // required
 * //     WorkforceArn: "STRING_VALUE",
 * //     ProductListingIds: [ // ProductListings
 * //       "STRING_VALUE",
 * //     ],
 * //     Description: "STRING_VALUE", // required
 * //     SubDomain: "STRING_VALUE",
 * //     CreateDate: new Date("TIMESTAMP"),
 * //     LastUpdatedDate: new Date("TIMESTAMP"),
 * //     NotificationConfiguration: { // NotificationConfiguration
 * //       NotificationTopicArn: "STRING_VALUE",
 * //     },
 * //     WorkerAccessConfiguration: { // WorkerAccessConfiguration
 * //       S3Presign: { // S3Presign
 * //         IamPolicyConstraints: { // IamPolicyConstraints
 * //           SourceIp: "Enabled" || "Disabled",
 * //           VpcSourceIp: "Enabled" || "Disabled",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateWorkteamCommandInput - {@link UpdateWorkteamCommandInput}
 * @returns {@link UpdateWorkteamCommandOutput}
 * @see {@link UpdateWorkteamCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkteamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class UpdateWorkteamCommand extends $Command
  .classBuilder<
    UpdateWorkteamCommandInput,
    UpdateWorkteamCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "UpdateWorkteam", {})
  .n("SageMakerClient", "UpdateWorkteamCommand")
  .f(void 0, void 0)
  .ser(se_UpdateWorkteamCommand)
  .de(de_UpdateWorkteamCommand)
  .build() {}
