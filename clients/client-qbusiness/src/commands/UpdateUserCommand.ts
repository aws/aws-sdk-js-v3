// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateUserRequest, UpdateUserResponse } from "../models/models_1";
import { de_UpdateUserCommand, se_UpdateUserCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserCommand}.
 */
export interface UpdateUserCommandInput extends UpdateUserRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserCommand}.
 */
export interface UpdateUserCommandOutput extends UpdateUserResponse, __MetadataBearer {}

/**
 * <p>Updates a information associated with a user id.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, UpdateUserCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, UpdateUserCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // UpdateUserRequest
 *   applicationId: "STRING_VALUE", // required
 *   userId: "STRING_VALUE", // required
 *   userAliasesToUpdate: [ // UserAliases
 *     { // UserAlias
 *       indexId: "STRING_VALUE",
 *       dataSourceId: "STRING_VALUE",
 *       userId: "STRING_VALUE", // required
 *     },
 *   ],
 *   userAliasesToDelete: [
 *     {
 *       indexId: "STRING_VALUE",
 *       dataSourceId: "STRING_VALUE",
 *       userId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateUserCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUserResponse
 * //   userAliasesAdded: [ // UserAliases
 * //     { // UserAlias
 * //       indexId: "STRING_VALUE",
 * //       dataSourceId: "STRING_VALUE",
 * //       userId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   userAliasesUpdated: [
 * //     {
 * //       indexId: "STRING_VALUE",
 * //       dataSourceId: "STRING_VALUE",
 * //       userId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   userAliasesDeleted: [
 * //     {
 * //       indexId: "STRING_VALUE",
 * //       dataSourceId: "STRING_VALUE",
 * //       userId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateUserCommandInput - {@link UpdateUserCommandInput}
 * @returns {@link UpdateUserCommandOutput}
 * @see {@link UpdateUserCommandInput} for command's `input` shape.
 * @see {@link UpdateUserCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the set limits for your Amazon Q Business service. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class UpdateUserCommand extends $Command
  .classBuilder<
    UpdateUserCommandInput,
    UpdateUserCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "UpdateUser", {})
  .n("QBusinessClient", "UpdateUserCommand")
  .f(void 0, void 0)
  .ser(se_UpdateUserCommand)
  .de(de_UpdateUserCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserRequest;
      output: UpdateUserResponse;
    };
    sdk: {
      input: UpdateUserCommandInput;
      output: UpdateUserCommandOutput;
    };
  };
}
