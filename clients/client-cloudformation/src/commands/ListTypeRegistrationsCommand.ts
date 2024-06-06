// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTypeRegistrationsInput, ListTypeRegistrationsOutput } from "../models/models_0";
import { de_ListTypeRegistrationsCommand, se_ListTypeRegistrationsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTypeRegistrationsCommand}.
 */
export interface ListTypeRegistrationsCommandInput extends ListTypeRegistrationsInput {}
/**
 * @public
 *
 * The output of {@link ListTypeRegistrationsCommand}.
 */
export interface ListTypeRegistrationsCommandOutput extends ListTypeRegistrationsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of registration tokens for the specified extension(s).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListTypeRegistrationsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListTypeRegistrationsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // ListTypeRegistrationsInput
 *   Type: "RESOURCE" || "MODULE" || "HOOK",
 *   TypeName: "STRING_VALUE",
 *   TypeArn: "STRING_VALUE",
 *   RegistrationStatusFilter: "COMPLETE" || "IN_PROGRESS" || "FAILED",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTypeRegistrationsCommand(input);
 * const response = await client.send(command);
 * // { // ListTypeRegistrationsOutput
 * //   RegistrationTokenList: [ // RegistrationTokenList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTypeRegistrationsCommandInput - {@link ListTypeRegistrationsCommandInput}
 * @returns {@link ListTypeRegistrationsCommandOutput}
 * @see {@link ListTypeRegistrationsCommandInput} for command's `input` shape.
 * @see {@link ListTypeRegistrationsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CFNRegistryException} (client fault)
 *  <p>An error occurred during a CloudFormation registry operation.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 * @public
 */
export class ListTypeRegistrationsCommand extends $Command
  .classBuilder<
    ListTypeRegistrationsCommandInput,
    ListTypeRegistrationsCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "ListTypeRegistrations", {})
  .n("CloudFormationClient", "ListTypeRegistrationsCommand")
  .f(void 0, void 0)
  .ser(se_ListTypeRegistrationsCommand)
  .de(de_ListTypeRegistrationsCommand)
  .build() {}
