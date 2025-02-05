// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCapacityAssignmentConfigurationInput, GetCapacityAssignmentConfigurationOutput } from "../models/models_0";
import {
  de_GetCapacityAssignmentConfigurationCommand,
  se_GetCapacityAssignmentConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCapacityAssignmentConfigurationCommand}.
 */
export interface GetCapacityAssignmentConfigurationCommandInput extends GetCapacityAssignmentConfigurationInput {}
/**
 * @public
 *
 * The output of {@link GetCapacityAssignmentConfigurationCommand}.
 */
export interface GetCapacityAssignmentConfigurationCommandOutput
  extends GetCapacityAssignmentConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Gets the capacity assignment configuration for a capacity reservation, if one
 *             exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetCapacityAssignmentConfigurationCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetCapacityAssignmentConfigurationCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AthenaClient(config);
 * const input = { // GetCapacityAssignmentConfigurationInput
 *   CapacityReservationName: "STRING_VALUE", // required
 * };
 * const command = new GetCapacityAssignmentConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetCapacityAssignmentConfigurationOutput
 * //   CapacityAssignmentConfiguration: { // CapacityAssignmentConfiguration
 * //     CapacityReservationName: "STRING_VALUE",
 * //     CapacityAssignments: [ // CapacityAssignmentsList
 * //       { // CapacityAssignment
 * //         WorkGroupNames: [ // WorkGroupNamesList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCapacityAssignmentConfigurationCommandInput - {@link GetCapacityAssignmentConfigurationCommandInput}
 * @returns {@link GetCapacityAssignmentConfigurationCommandOutput}
 * @see {@link GetCapacityAssignmentConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetCapacityAssignmentConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 * @public
 */
export class GetCapacityAssignmentConfigurationCommand extends $Command
  .classBuilder<
    GetCapacityAssignmentConfigurationCommandInput,
    GetCapacityAssignmentConfigurationCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "GetCapacityAssignmentConfiguration", {})
  .n("AthenaClient", "GetCapacityAssignmentConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetCapacityAssignmentConfigurationCommand)
  .de(de_GetCapacityAssignmentConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCapacityAssignmentConfigurationInput;
      output: GetCapacityAssignmentConfigurationOutput;
    };
    sdk: {
      input: GetCapacityAssignmentConfigurationCommandInput;
      output: GetCapacityAssignmentConfigurationCommandOutput;
    };
  };
}
