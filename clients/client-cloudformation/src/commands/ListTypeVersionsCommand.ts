// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTypeVersionsInput, ListTypeVersionsOutput } from "../models/models_1";
import { ListTypeVersions } from "../schemas/schemas_1_Type";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTypeVersionsCommand}.
 */
export interface ListTypeVersionsCommandInput extends ListTypeVersionsInput {}
/**
 * @public
 *
 * The output of {@link ListTypeVersionsCommand}.
 */
export interface ListTypeVersionsCommandOutput extends ListTypeVersionsOutput, __MetadataBearer {}

/**
 * <p>Returns summary information about the versions of an extension.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListTypeVersionsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListTypeVersionsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // ListTypeVersionsInput
 *   Type: "RESOURCE" || "MODULE" || "HOOK",
 *   TypeName: "STRING_VALUE",
 *   Arn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DeprecatedStatus: "LIVE" || "DEPRECATED",
 *   PublisherId: "STRING_VALUE",
 * };
 * const command = new ListTypeVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTypeVersionsOutput
 * //   TypeVersionSummaries: [ // TypeVersionSummaries
 * //     { // TypeVersionSummary
 * //       Type: "RESOURCE" || "MODULE" || "HOOK",
 * //       TypeName: "STRING_VALUE",
 * //       VersionId: "STRING_VALUE",
 * //       IsDefaultVersion: true || false,
 * //       Arn: "STRING_VALUE",
 * //       TimeCreated: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //       PublicVersionNumber: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTypeVersionsCommandInput - {@link ListTypeVersionsCommandInput}
 * @returns {@link ListTypeVersionsCommandOutput}
 * @see {@link ListTypeVersionsCommandInput} for command's `input` shape.
 * @see {@link ListTypeVersionsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CFNRegistryException} (client fault)
 *  <p>An error occurred during a CloudFormation registry operation.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class ListTypeVersionsCommand extends $Command
  .classBuilder<
    ListTypeVersionsCommandInput,
    ListTypeVersionsCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "ListTypeVersions", {})
  .n("CloudFormationClient", "ListTypeVersionsCommand")
  .sc(ListTypeVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTypeVersionsInput;
      output: ListTypeVersionsOutput;
    };
    sdk: {
      input: ListTypeVersionsCommandInput;
      output: ListTypeVersionsCommandOutput;
    };
  };
}
