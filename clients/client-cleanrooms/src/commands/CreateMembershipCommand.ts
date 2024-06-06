// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateMembershipInput, CreateMembershipOutput } from "../models/models_0";
import { de_CreateMembershipCommand, se_CreateMembershipCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMembershipCommand}.
 */
export interface CreateMembershipCommandInput extends CreateMembershipInput {}
/**
 * @public
 *
 * The output of {@link CreateMembershipCommand}.
 */
export interface CreateMembershipCommandOutput extends CreateMembershipOutput, __MetadataBearer {}

/**
 * <p>Creates a membership for a specific collaboration identifier and joins the
 *          collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreateMembershipCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreateMembershipCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // CreateMembershipInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   queryLogStatus: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   defaultResultConfiguration: { // MembershipProtectedQueryResultConfiguration
 *     outputConfiguration: { // MembershipProtectedQueryOutputConfiguration Union: only one key present
 *       s3: { // ProtectedQueryS3OutputConfiguration
 *         resultFormat: "STRING_VALUE", // required
 *         bucket: "STRING_VALUE", // required
 *         keyPrefix: "STRING_VALUE",
 *       },
 *     },
 *     roleArn: "STRING_VALUE",
 *   },
 *   paymentConfiguration: { // MembershipPaymentConfiguration
 *     queryCompute: { // MembershipQueryComputePaymentConfig
 *       isResponsible: true || false, // required
 *     },
 *   },
 * };
 * const command = new CreateMembershipCommand(input);
 * const response = await client.send(command);
 * // { // CreateMembershipOutput
 * //   membership: { // Membership
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     collaborationCreatorAccountId: "STRING_VALUE", // required
 * //     collaborationCreatorDisplayName: "STRING_VALUE", // required
 * //     collaborationName: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     status: "STRING_VALUE", // required
 * //     memberAbilities: [ // MemberAbilities // required
 * //       "STRING_VALUE",
 * //     ],
 * //     queryLogStatus: "STRING_VALUE", // required
 * //     defaultResultConfiguration: { // MembershipProtectedQueryResultConfiguration
 * //       outputConfiguration: { // MembershipProtectedQueryOutputConfiguration Union: only one key present
 * //         s3: { // ProtectedQueryS3OutputConfiguration
 * //           resultFormat: "STRING_VALUE", // required
 * //           bucket: "STRING_VALUE", // required
 * //           keyPrefix: "STRING_VALUE",
 * //         },
 * //       },
 * //       roleArn: "STRING_VALUE",
 * //     },
 * //     paymentConfiguration: { // MembershipPaymentConfiguration
 * //       queryCompute: { // MembershipQueryComputePaymentConfig
 * //         isResponsible: true || false, // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMembershipCommandInput - {@link CreateMembershipCommandInput}
 * @returns {@link CreateMembershipCommandOutput}
 * @see {@link CreateMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateMembershipCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request denied because service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 * @public
 */
export class CreateMembershipCommand extends $Command
  .classBuilder<
    CreateMembershipCommandInput,
    CreateMembershipCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "CreateMembership", {})
  .n("CleanRoomsClient", "CreateMembershipCommand")
  .f(void 0, void 0)
  .ser(se_CreateMembershipCommand)
  .de(de_CreateMembershipCommand)
  .build() {}
