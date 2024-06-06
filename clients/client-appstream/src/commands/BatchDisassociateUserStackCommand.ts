// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchDisassociateUserStackRequest,
  BatchDisassociateUserStackRequestFilterSensitiveLog,
  BatchDisassociateUserStackResult,
  BatchDisassociateUserStackResultFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchDisassociateUserStackCommand, se_BatchDisassociateUserStackCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDisassociateUserStackCommand}.
 */
export interface BatchDisassociateUserStackCommandInput extends BatchDisassociateUserStackRequest {}
/**
 * @public
 *
 * The output of {@link BatchDisassociateUserStackCommand}.
 */
export interface BatchDisassociateUserStackCommandOutput extends BatchDisassociateUserStackResult, __MetadataBearer {}

/**
 * <p>Disassociates the specified users from the specified stacks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, BatchDisassociateUserStackCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, BatchDisassociateUserStackCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // BatchDisassociateUserStackRequest
 *   UserStackAssociations: [ // UserStackAssociationList // required
 *     { // UserStackAssociation
 *       StackName: "STRING_VALUE", // required
 *       UserName: "STRING_VALUE", // required
 *       AuthenticationType: "API" || "SAML" || "USERPOOL" || "AWS_AD", // required
 *       SendEmailNotification: true || false,
 *     },
 *   ],
 * };
 * const command = new BatchDisassociateUserStackCommand(input);
 * const response = await client.send(command);
 * // { // BatchDisassociateUserStackResult
 * //   errors: [ // UserStackAssociationErrorList
 * //     { // UserStackAssociationError
 * //       UserStackAssociation: { // UserStackAssociation
 * //         StackName: "STRING_VALUE", // required
 * //         UserName: "STRING_VALUE", // required
 * //         AuthenticationType: "API" || "SAML" || "USERPOOL" || "AWS_AD", // required
 * //         SendEmailNotification: true || false,
 * //       },
 * //       ErrorCode: "STACK_NOT_FOUND" || "USER_NAME_NOT_FOUND" || "DIRECTORY_NOT_FOUND" || "INTERNAL_ERROR",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDisassociateUserStackCommandInput - {@link BatchDisassociateUserStackCommandInput}
 * @returns {@link BatchDisassociateUserStackCommandOutput}
 * @see {@link BatchDisassociateUserStackCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateUserStackCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 * @public
 */
export class BatchDisassociateUserStackCommand extends $Command
  .classBuilder<
    BatchDisassociateUserStackCommandInput,
    BatchDisassociateUserStackCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PhotonAdminProxyService", "BatchDisassociateUserStack", {})
  .n("AppStreamClient", "BatchDisassociateUserStackCommand")
  .f(BatchDisassociateUserStackRequestFilterSensitiveLog, BatchDisassociateUserStackResultFilterSensitiveLog)
  .ser(se_BatchDisassociateUserStackCommand)
  .de(de_BatchDisassociateUserStackCommand)
  .build() {}
