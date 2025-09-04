// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTypesInput, ListTypesOutput } from "../models/models_1";
import { de_ListTypesCommand, se_ListTypesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTypesCommand}.
 */
export interface ListTypesCommandInput extends ListTypesInput {}
/**
 * @public
 *
 * The output of {@link ListTypesCommand}.
 */
export interface ListTypesCommandOutput extends ListTypesOutput, __MetadataBearer {}

/**
 * <p>Returns summary information about all extensions, including your private resource types,
 *       modules, and Hooks as well as all public extensions from Amazon Web Services and third-party
 *       publishers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListTypesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListTypesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // ListTypesInput
 *   Visibility: "PUBLIC" || "PRIVATE",
 *   ProvisioningType: "NON_PROVISIONABLE" || "IMMUTABLE" || "FULLY_MUTABLE",
 *   DeprecatedStatus: "LIVE" || "DEPRECATED",
 *   Type: "RESOURCE" || "MODULE" || "HOOK",
 *   Filters: { // TypeFilters
 *     Category: "REGISTERED" || "ACTIVATED" || "THIRD_PARTY" || "AWS_TYPES",
 *     PublisherId: "STRING_VALUE",
 *     TypeNamePrefix: "STRING_VALUE",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListTypesOutput
 * //   TypeSummaries: [ // TypeSummaries
 * //     { // TypeSummary
 * //       Type: "RESOURCE" || "MODULE" || "HOOK",
 * //       TypeName: "STRING_VALUE",
 * //       DefaultVersionId: "STRING_VALUE",
 * //       TypeArn: "STRING_VALUE",
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //       PublisherId: "STRING_VALUE",
 * //       OriginalTypeName: "STRING_VALUE",
 * //       PublicVersionNumber: "STRING_VALUE",
 * //       LatestPublicVersion: "STRING_VALUE",
 * //       PublisherIdentity: "AWS_Marketplace" || "GitHub" || "Bitbucket",
 * //       PublisherName: "STRING_VALUE",
 * //       IsActivated: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTypesCommandInput - {@link ListTypesCommandInput}
 * @returns {@link ListTypesCommandOutput}
 * @see {@link ListTypesCommandInput} for command's `input` shape.
 * @see {@link ListTypesCommandOutput} for command's `response` shape.
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
export class ListTypesCommand extends $Command
  .classBuilder<
    ListTypesCommandInput,
    ListTypesCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "ListTypes", {})
  .n("CloudFormationClient", "ListTypesCommand")
  .f(void 0, void 0)
  .ser(se_ListTypesCommand)
  .de(de_ListTypesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTypesInput;
      output: ListTypesOutput;
    };
    sdk: {
      input: ListTypesCommandInput;
      output: ListTypesCommandOutput;
    };
  };
}
