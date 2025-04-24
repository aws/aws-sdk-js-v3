// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDataAccessorRequest, DeleteDataAccessorResponse } from "../models/models_0";
import { de_DeleteDataAccessorCommand, se_DeleteDataAccessorCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataAccessorCommand}.
 */
export interface DeleteDataAccessorCommandInput extends DeleteDataAccessorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataAccessorCommand}.
 */
export interface DeleteDataAccessorCommandOutput extends DeleteDataAccessorResponse, __MetadataBearer {}

/**
 * <p>Deletes a specified data accessor. This operation permanently removes the data accessor and its associated IAM Identity Center application. Any access granted to the ISV through this data accessor will be revoked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, DeleteDataAccessorCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, DeleteDataAccessorCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // DeleteDataAccessorRequest
 *   applicationId: "STRING_VALUE", // required
 *   dataAccessorId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataAccessorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDataAccessorCommandInput - {@link DeleteDataAccessorCommandInput}
 * @returns {@link DeleteDataAccessorCommandOutput}
 * @see {@link DeleteDataAccessorCommandInput} for command's `input` shape.
 * @see {@link DeleteDataAccessorCommandOutput} for command's `response` shape.
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
export class DeleteDataAccessorCommand extends $Command
  .classBuilder<
    DeleteDataAccessorCommandInput,
    DeleteDataAccessorCommandOutput,
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
  .s("ExpertQ", "DeleteDataAccessor", {})
  .n("QBusinessClient", "DeleteDataAccessorCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDataAccessorCommand)
  .de(de_DeleteDataAccessorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataAccessorRequest;
      output: {};
    };
    sdk: {
      input: DeleteDataAccessorCommandInput;
      output: DeleteDataAccessorCommandOutput;
    };
  };
}
