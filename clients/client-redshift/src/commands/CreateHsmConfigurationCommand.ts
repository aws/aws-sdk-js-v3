// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateHsmConfigurationMessage, CreateHsmConfigurationResult } from "../models/models_0";
import { de_CreateHsmConfigurationCommand, se_CreateHsmConfigurationCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateHsmConfigurationCommand}.
 */
export interface CreateHsmConfigurationCommandInput extends CreateHsmConfigurationMessage {}
/**
 * @public
 *
 * The output of {@link CreateHsmConfigurationCommand}.
 */
export interface CreateHsmConfigurationCommandOutput extends CreateHsmConfigurationResult, __MetadataBearer {}

/**
 * <p>Creates an HSM configuration that contains the information required by an Amazon Redshift
 *             cluster to store and use database encryption keys in a Hardware Security Module (HSM).
 *             After creating the HSM configuration, you can specify it as a parameter when creating a
 *             cluster. The cluster will then store its encryption keys in the HSM.</p>
 *          <p>In addition to creating an HSM configuration, you must also create an HSM client
 *             certificate. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a>
 *             in the Amazon Redshift Cluster Management Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateHsmConfigurationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateHsmConfigurationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // CreateHsmConfigurationMessage
 *   HsmConfigurationIdentifier: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   HsmIpAddress: "STRING_VALUE", // required
 *   HsmPartitionName: "STRING_VALUE", // required
 *   HsmPartitionPassword: "STRING_VALUE", // required
 *   HsmServerPublicCertificate: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateHsmConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateHsmConfigurationResult
 * //   HsmConfiguration: { // HsmConfiguration
 * //     HsmConfigurationIdentifier: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     HsmIpAddress: "STRING_VALUE",
 * //     HsmPartitionName: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateHsmConfigurationCommandInput - {@link CreateHsmConfigurationCommandInput}
 * @returns {@link CreateHsmConfigurationCommandOutput}
 * @see {@link CreateHsmConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateHsmConfigurationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link HsmConfigurationAlreadyExistsFault} (client fault)
 *  <p>There is already an existing Amazon Redshift HSM configuration with the specified
 *             identifier.</p>
 *
 * @throws {@link HsmConfigurationQuotaExceededFault} (client fault)
 *  <p>The quota for HSM configurations has been reached.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *  <p>You have exceeded the number of tags allowed.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 * @public
 */
export class CreateHsmConfigurationCommand extends $Command
  .classBuilder<
    CreateHsmConfigurationCommandInput,
    CreateHsmConfigurationCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "CreateHsmConfiguration", {})
  .n("RedshiftClient", "CreateHsmConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateHsmConfigurationCommand)
  .de(de_CreateHsmConfigurationCommand)
  .build() {}
