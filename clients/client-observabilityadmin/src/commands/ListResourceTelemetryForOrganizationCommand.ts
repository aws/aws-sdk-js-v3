// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListResourceTelemetryForOrganizationInput,
  ListResourceTelemetryForOrganizationOutput,
} from "../models/models_0";
import {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import {
  de_ListResourceTelemetryForOrganizationCommand,
  se_ListResourceTelemetryForOrganizationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceTelemetryForOrganizationCommand}.
 */
export interface ListResourceTelemetryForOrganizationCommandInput extends ListResourceTelemetryForOrganizationInput {}
/**
 * @public
 *
 * The output of {@link ListResourceTelemetryForOrganizationCommand}.
 */
export interface ListResourceTelemetryForOrganizationCommandOutput
  extends ListResourceTelemetryForOrganizationOutput,
    __MetadataBearer {}

/**
 * <p>
 *       Returns a list of telemetry configurations for AWS resources supported by telemetry config in the organization.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, ListResourceTelemetryForOrganizationCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, ListResourceTelemetryForOrganizationCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * const client = new ObservabilityAdminClient(config);
 * const input = { // ListResourceTelemetryForOrganizationInput
 *   AccountIdentifiers: [ // AccountIdentifiers
 *     "STRING_VALUE",
 *   ],
 *   ResourceIdentifierPrefix: "STRING_VALUE",
 *   ResourceTypes: [ // ResourceTypes
 *     "AWS::EC2::Instance" || "AWS::EC2::VPC" || "AWS::Lambda::Function",
 *   ],
 *   TelemetryConfigurationState: { // TelemetryConfigurationState
 *     "<keys>": "Enabled" || "Disabled" || "NotApplicable",
 *   },
 *   ResourceTags: { // TagMapInput
 *     "<keys>": "STRING_VALUE",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResourceTelemetryForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceTelemetryForOrganizationOutput
 * //   TelemetryConfigurations: [ // TelemetryConfigurations
 * //     { // TelemetryConfiguration
 * //       AccountIdentifier: "STRING_VALUE",
 * //       TelemetryConfigurationState: { // TelemetryConfigurationState
 * //         "<keys>": "Enabled" || "Disabled" || "NotApplicable",
 * //       },
 * //       ResourceType: "AWS::EC2::Instance" || "AWS::EC2::VPC" || "AWS::Lambda::Function",
 * //       ResourceIdentifier: "STRING_VALUE",
 * //       ResourceTags: { // TagMapOutput
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       LastUpdateTimeStamp: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceTelemetryForOrganizationCommandInput - {@link ListResourceTelemetryForOrganizationCommandInput}
 * @returns {@link ListResourceTelemetryForOrganizationCommandOutput}
 * @see {@link ListResourceTelemetryForOrganizationCommandInput} for command's `input` shape.
 * @see {@link ListResourceTelemetryForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *       Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for AWS resources</a> in the IAM user guide.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *       Indicates the request has failed to process because of an unknown server error, exception, or failure.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *      Indicates input validation failed. Check your request parameters and retry the request.
 *     </p>
 *
 * @throws {@link ObservabilityAdminServiceException}
 * <p>Base exception class for all service exceptions from ObservabilityAdmin service.</p>
 *
 *
 * @public
 */
export class ListResourceTelemetryForOrganizationCommand extends $Command
  .classBuilder<
    ListResourceTelemetryForOrganizationCommandInput,
    ListResourceTelemetryForOrganizationCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ObservabilityAdmin", "ListResourceTelemetryForOrganization", {})
  .n("ObservabilityAdminClient", "ListResourceTelemetryForOrganizationCommand")
  .f(void 0, void 0)
  .ser(se_ListResourceTelemetryForOrganizationCommand)
  .de(de_ListResourceTelemetryForOrganizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceTelemetryForOrganizationInput;
      output: ListResourceTelemetryForOrganizationOutput;
    };
    sdk: {
      input: ListResourceTelemetryForOrganizationCommandInput;
      output: ListResourceTelemetryForOrganizationCommandOutput;
    };
  };
}
