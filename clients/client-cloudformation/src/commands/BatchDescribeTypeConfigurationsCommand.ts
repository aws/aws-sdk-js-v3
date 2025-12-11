// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchDescribeTypeConfigurationsInput, BatchDescribeTypeConfigurationsOutput } from "../models/models_0";
import { BatchDescribeTypeConfigurations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDescribeTypeConfigurationsCommand}.
 */
export interface BatchDescribeTypeConfigurationsCommandInput extends BatchDescribeTypeConfigurationsInput {}
/**
 * @public
 *
 * The output of {@link BatchDescribeTypeConfigurationsCommand}.
 */
export interface BatchDescribeTypeConfigurationsCommandOutput
  extends BatchDescribeTypeConfigurationsOutput,
    __MetadataBearer {}

/**
 * <p>Returns configuration data for the specified CloudFormation extensions, from the CloudFormation
 *       registry in your current account and Region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-set-configuration.html">Edit configuration
 *         data for extensions in your account</a> in the
 *       <i>CloudFormation User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, BatchDescribeTypeConfigurationsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, BatchDescribeTypeConfigurationsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // BatchDescribeTypeConfigurationsInput
 *   TypeConfigurationIdentifiers: [ // TypeConfigurationIdentifiers // required
 *     { // TypeConfigurationIdentifier
 *       TypeArn: "STRING_VALUE",
 *       TypeConfigurationAlias: "STRING_VALUE",
 *       TypeConfigurationArn: "STRING_VALUE",
 *       Type: "RESOURCE" || "MODULE" || "HOOK",
 *       TypeName: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchDescribeTypeConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // BatchDescribeTypeConfigurationsOutput
 * //   Errors: [ // BatchDescribeTypeConfigurationsErrors
 * //     { // BatchDescribeTypeConfigurationsError
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       TypeConfigurationIdentifier: { // TypeConfigurationIdentifier
 * //         TypeArn: "STRING_VALUE",
 * //         TypeConfigurationAlias: "STRING_VALUE",
 * //         TypeConfigurationArn: "STRING_VALUE",
 * //         Type: "RESOURCE" || "MODULE" || "HOOK",
 * //         TypeName: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   UnprocessedTypeConfigurations: [ // UnprocessedTypeConfigurations
 * //     {
 * //       TypeArn: "STRING_VALUE",
 * //       TypeConfigurationAlias: "STRING_VALUE",
 * //       TypeConfigurationArn: "STRING_VALUE",
 * //       Type: "RESOURCE" || "MODULE" || "HOOK",
 * //       TypeName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   TypeConfigurations: [ // TypeConfigurationDetailsList
 * //     { // TypeConfigurationDetails
 * //       Arn: "STRING_VALUE",
 * //       Alias: "STRING_VALUE",
 * //       Configuration: "STRING_VALUE",
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       TypeArn: "STRING_VALUE",
 * //       TypeName: "STRING_VALUE",
 * //       IsDefaultConfiguration: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDescribeTypeConfigurationsCommandInput - {@link BatchDescribeTypeConfigurationsCommandInput}
 * @returns {@link BatchDescribeTypeConfigurationsCommandOutput}
 * @see {@link BatchDescribeTypeConfigurationsCommandInput} for command's `input` shape.
 * @see {@link BatchDescribeTypeConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CFNRegistryException} (client fault)
 *  <p>An error occurred during a CloudFormation registry operation.</p>
 *
 * @throws {@link TypeConfigurationNotFoundException} (client fault)
 *  <p>The specified extension configuration can't be found.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class BatchDescribeTypeConfigurationsCommand extends $Command
  .classBuilder<
    BatchDescribeTypeConfigurationsCommandInput,
    BatchDescribeTypeConfigurationsCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "BatchDescribeTypeConfigurations", {})
  .n("CloudFormationClient", "BatchDescribeTypeConfigurationsCommand")
  .sc(BatchDescribeTypeConfigurations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDescribeTypeConfigurationsInput;
      output: BatchDescribeTypeConfigurationsOutput;
    };
    sdk: {
      input: BatchDescribeTypeConfigurationsCommandInput;
      output: BatchDescribeTypeConfigurationsCommandOutput;
    };
  };
}
