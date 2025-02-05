// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchAssociateUserStackRequest,
  BatchAssociateUserStackRequestFilterSensitiveLog,
  BatchAssociateUserStackResult,
  BatchAssociateUserStackResultFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchAssociateUserStackCommand, se_BatchAssociateUserStackCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchAssociateUserStackCommand}.
 */
export interface BatchAssociateUserStackCommandInput extends BatchAssociateUserStackRequest {}
/**
 * @public
 *
 * The output of {@link BatchAssociateUserStackCommand}.
 */
export interface BatchAssociateUserStackCommandOutput extends BatchAssociateUserStackResult, __MetadataBearer {}

/**
 * <p>Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, BatchAssociateUserStackCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, BatchAssociateUserStackCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppStreamClient(config);
 * const input = { // BatchAssociateUserStackRequest
 *   UserStackAssociations: [ // UserStackAssociationList // required
 *     { // UserStackAssociation
 *       StackName: "STRING_VALUE", // required
 *       UserName: "STRING_VALUE", // required
 *       AuthenticationType: "API" || "SAML" || "USERPOOL" || "AWS_AD", // required
 *       SendEmailNotification: true || false,
 *     },
 *   ],
 * };
 * const command = new BatchAssociateUserStackCommand(input);
 * const response = await client.send(command);
 * // { // BatchAssociateUserStackResult
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
 * @param BatchAssociateUserStackCommandInput - {@link BatchAssociateUserStackCommandInput}
 * @returns {@link BatchAssociateUserStackCommandOutput}
 * @see {@link BatchAssociateUserStackCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateUserStackCommandOutput} for command's `response` shape.
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
export class BatchAssociateUserStackCommand extends $Command
  .classBuilder<
    BatchAssociateUserStackCommandInput,
    BatchAssociateUserStackCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PhotonAdminProxyService", "BatchAssociateUserStack", {})
  .n("AppStreamClient", "BatchAssociateUserStackCommand")
  .f(BatchAssociateUserStackRequestFilterSensitiveLog, BatchAssociateUserStackResultFilterSensitiveLog)
  .ser(se_BatchAssociateUserStackCommand)
  .de(de_BatchAssociateUserStackCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchAssociateUserStackRequest;
      output: BatchAssociateUserStackResult;
    };
    sdk: {
      input: BatchAssociateUserStackCommandInput;
      output: BatchAssociateUserStackCommandOutput;
    };
  };
}
