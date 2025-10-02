// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeUserStackAssociationsRequest,
  DescribeUserStackAssociationsRequestFilterSensitiveLog,
  DescribeUserStackAssociationsResult,
  DescribeUserStackAssociationsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeUserStackAssociationsCommand,
  se_DescribeUserStackAssociationsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeUserStackAssociationsCommand}.
 */
export interface DescribeUserStackAssociationsCommandInput extends DescribeUserStackAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeUserStackAssociationsCommand}.
 */
export interface DescribeUserStackAssociationsCommandOutput
  extends DescribeUserStackAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The stack name</p>
 *             </li>
 *             <li>
 *                <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeUserStackAssociationsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeUserStackAssociationsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DescribeUserStackAssociationsRequest
 *   StackName: "STRING_VALUE",
 *   UserName: "STRING_VALUE",
 *   AuthenticationType: "API" || "SAML" || "USERPOOL" || "AWS_AD",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeUserStackAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUserStackAssociationsResult
 * //   UserStackAssociations: [ // UserStackAssociationList
 * //     { // UserStackAssociation
 * //       StackName: "STRING_VALUE", // required
 * //       UserName: "STRING_VALUE", // required
 * //       AuthenticationType: "API" || "SAML" || "USERPOOL" || "AWS_AD", // required
 * //       SendEmailNotification: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeUserStackAssociationsCommandInput - {@link DescribeUserStackAssociationsCommandInput}
 * @returns {@link DescribeUserStackAssociationsCommandOutput}
 * @see {@link DescribeUserStackAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeUserStackAssociationsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeUserStackAssociationsCommand extends $Command
  .classBuilder<
    DescribeUserStackAssociationsCommandInput,
    DescribeUserStackAssociationsCommandOutput,
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
  .s("PhotonAdminProxyService", "DescribeUserStackAssociations", {})
  .n("AppStreamClient", "DescribeUserStackAssociationsCommand")
  .f(DescribeUserStackAssociationsRequestFilterSensitiveLog, DescribeUserStackAssociationsResultFilterSensitiveLog)
  .ser(se_DescribeUserStackAssociationsCommand)
  .de(de_DescribeUserStackAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeUserStackAssociationsRequest;
      output: DescribeUserStackAssociationsResult;
    };
    sdk: {
      input: DescribeUserStackAssociationsCommandInput;
      output: DescribeUserStackAssociationsCommandOutput;
    };
  };
}
