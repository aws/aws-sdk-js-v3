// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeHsmConfigurationsMessage, HsmConfigurationMessage } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeHsmConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeHsmConfigurationsCommand}.
 */
export interface DescribeHsmConfigurationsCommandInput extends DescribeHsmConfigurationsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeHsmConfigurationsCommand}.
 */
export interface DescribeHsmConfigurationsCommandOutput extends HsmConfigurationMessage, __MetadataBearer {}

/**
 * <p>Returns information about the specified Amazon Redshift HSM configuration. If no
 *             configuration ID is specified, returns information about all the HSM configurations
 *             owned by your Amazon Web Services account.</p>
 *          <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all HSM connections that match any combination of the specified keys and values. For
 *             example, if you have <code>owner</code> and <code>environment</code> for tag keys, and
 *                 <code>admin</code> and <code>test</code> for tag values, all HSM connections that
 *             have any combination of those values are returned.</p>
 *          <p>If both tag keys and values are omitted from the request, HSM connections are
 *             returned regardless of whether they have tag keys or values associated with
 *             them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeHsmConfigurationsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeHsmConfigurationsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DescribeHsmConfigurationsMessage
 *   HsmConfigurationIdentifier: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   TagKeys: [ // TagKeyList
 *     "STRING_VALUE",
 *   ],
 *   TagValues: [ // TagValueList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeHsmConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // HsmConfigurationMessage
 * //   Marker: "STRING_VALUE",
 * //   HsmConfigurations: [ // HsmConfigurationList
 * //     { // HsmConfiguration
 * //       HsmConfigurationIdentifier: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       HsmIpAddress: "STRING_VALUE",
 * //       HsmPartitionName: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeHsmConfigurationsCommandInput - {@link DescribeHsmConfigurationsCommandInput}
 * @returns {@link DescribeHsmConfigurationsCommandOutput}
 * @see {@link DescribeHsmConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeHsmConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link HsmConfigurationNotFoundFault} (client fault)
 *  <p>There is no Amazon Redshift HSM configuration with the specified identifier.</p>
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DescribeHsmConfigurationsCommand extends $Command
  .classBuilder<
    DescribeHsmConfigurationsCommandInput,
    DescribeHsmConfigurationsCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DescribeHsmConfigurations", {})
  .n("RedshiftClient", "DescribeHsmConfigurationsCommand")
  .sc(DescribeHsmConfigurations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeHsmConfigurationsMessage;
      output: HsmConfigurationMessage;
    };
    sdk: {
      input: DescribeHsmConfigurationsCommandInput;
      output: DescribeHsmConfigurationsCommandOutput;
    };
  };
}
