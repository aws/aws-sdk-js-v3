// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTypeInput, DescribeTypeOutput } from "../models/models_0";
import { DescribeType } from "../schemas/schemas_1_Type";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTypeCommand}.
 */
export interface DescribeTypeCommandInput extends DescribeTypeInput {}
/**
 * @public
 *
 * The output of {@link DescribeTypeCommand}.
 */
export interface DescribeTypeCommandOutput extends DescribeTypeOutput, __MetadataBearer {}

/**
 * <p>Returns detailed information about an extension from the CloudFormation registry in your
 *       current account and Region.</p>
 *          <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information
 *       about that specific extension version. Otherwise, it returns information about the default
 *       extension version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeTypeInput
 *   Type: "RESOURCE" || "MODULE" || "HOOK",
 *   TypeName: "STRING_VALUE",
 *   Arn: "STRING_VALUE",
 *   VersionId: "STRING_VALUE",
 *   PublisherId: "STRING_VALUE",
 *   PublicVersionNumber: "STRING_VALUE",
 * };
 * const command = new DescribeTypeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTypeOutput
 * //   Arn: "STRING_VALUE",
 * //   Type: "RESOURCE" || "MODULE" || "HOOK",
 * //   TypeName: "STRING_VALUE",
 * //   DefaultVersionId: "STRING_VALUE",
 * //   IsDefaultVersion: true || false,
 * //   TypeTestsStatus: "PASSED" || "FAILED" || "IN_PROGRESS" || "NOT_TESTED",
 * //   TypeTestsStatusDescription: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Schema: "STRING_VALUE",
 * //   ProvisioningType: "NON_PROVISIONABLE" || "IMMUTABLE" || "FULLY_MUTABLE",
 * //   DeprecatedStatus: "LIVE" || "DEPRECATED",
 * //   LoggingConfig: { // LoggingConfig
 * //     LogRoleArn: "STRING_VALUE", // required
 * //     LogGroupName: "STRING_VALUE", // required
 * //   },
 * //   RequiredActivatedTypes: [ // RequiredActivatedTypes
 * //     { // RequiredActivatedType
 * //       TypeNameAlias: "STRING_VALUE",
 * //       OriginalTypeName: "STRING_VALUE",
 * //       PublisherId: "STRING_VALUE",
 * //       SupportedMajorVersions: [ // SupportedMajorVersions
 * //         Number("int"),
 * //       ],
 * //     },
 * //   ],
 * //   ExecutionRoleArn: "STRING_VALUE",
 * //   Visibility: "PUBLIC" || "PRIVATE",
 * //   SourceUrl: "STRING_VALUE",
 * //   DocumentationUrl: "STRING_VALUE",
 * //   LastUpdated: new Date("TIMESTAMP"),
 * //   TimeCreated: new Date("TIMESTAMP"),
 * //   ConfigurationSchema: "STRING_VALUE",
 * //   PublisherId: "STRING_VALUE",
 * //   OriginalTypeName: "STRING_VALUE",
 * //   OriginalTypeArn: "STRING_VALUE",
 * //   PublicVersionNumber: "STRING_VALUE",
 * //   LatestPublicVersion: "STRING_VALUE",
 * //   IsActivated: true || false,
 * //   AutoUpdate: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeTypeCommandInput - {@link DescribeTypeCommandInput}
 * @returns {@link DescribeTypeCommandOutput}
 * @see {@link DescribeTypeCommandInput} for command's `input` shape.
 * @see {@link DescribeTypeCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CFNRegistryException} (client fault)
 *  <p>An error occurred during a CloudFormation registry operation.</p>
 *
 * @throws {@link TypeNotFoundException} (client fault)
 *  <p>The specified extension doesn't exist in the CloudFormation registry.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DescribeTypeCommand extends $Command
  .classBuilder<
    DescribeTypeCommandInput,
    DescribeTypeCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "DescribeType", {})
  .n("CloudFormationClient", "DescribeTypeCommand")
  .sc(DescribeType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTypeInput;
      output: DescribeTypeOutput;
    };
    sdk: {
      input: DescribeTypeCommandInput;
      output: DescribeTypeCommandOutput;
    };
  };
}
