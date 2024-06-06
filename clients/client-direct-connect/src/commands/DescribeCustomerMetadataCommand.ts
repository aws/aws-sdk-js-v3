// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCustomerMetadataResponse } from "../models/models_0";
import { de_DescribeCustomerMetadataCommand, se_DescribeCustomerMetadataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCustomerMetadataCommand}.
 */
export interface DescribeCustomerMetadataCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeCustomerMetadataCommand}.
 */
export interface DescribeCustomerMetadataCommandOutput extends DescribeCustomerMetadataResponse, __MetadataBearer {}

/**
 * <p>Get and view a list of customer agreements, along with their signed status and whether the customer is an NNIPartner, NNIPartnerV2, or a nonPartner. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeCustomerMetadataCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeCustomerMetadataCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = {};
 * const command = new DescribeCustomerMetadataCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCustomerMetadataResponse
 * //   agreements: [ // AgreementList
 * //     { // CustomerAgreement
 * //       agreementName: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nniPartnerType: "v1" || "v2" || "nonPartner",
 * // };
 *
 * ```
 *
 * @param DescribeCustomerMetadataCommandInput - {@link DescribeCustomerMetadataCommandInput}
 * @returns {@link DescribeCustomerMetadataCommandOutput}
 * @see {@link DescribeCustomerMetadataCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomerMetadataCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 * @public
 */
export class DescribeCustomerMetadataCommand extends $Command
  .classBuilder<
    DescribeCustomerMetadataCommandInput,
    DescribeCustomerMetadataCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OvertureService", "DescribeCustomerMetadata", {})
  .n("DirectConnectClient", "DescribeCustomerMetadataCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCustomerMetadataCommand)
  .de(de_DescribeCustomerMetadataCommand)
  .build() {}
