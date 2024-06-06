// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePortfolioShareStatusInput, DescribePortfolioShareStatusOutput } from "../models/models_0";
import {
  de_DescribePortfolioShareStatusCommand,
  se_DescribePortfolioShareStatusCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePortfolioShareStatusCommand}.
 */
export interface DescribePortfolioShareStatusCommandInput extends DescribePortfolioShareStatusInput {}
/**
 * @public
 *
 * The output of {@link DescribePortfolioShareStatusCommand}.
 */
export interface DescribePortfolioShareStatusCommandOutput
  extends DescribePortfolioShareStatusOutput,
    __MetadataBearer {}

/**
 * <p>Gets the status of the specified portfolio share operation. This API can only be called
 *          by the management account in the organization or by a delegated admin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribePortfolioShareStatusCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribePortfolioShareStatusCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribePortfolioShareStatusInput
 *   PortfolioShareToken: "STRING_VALUE", // required
 * };
 * const command = new DescribePortfolioShareStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribePortfolioShareStatusOutput
 * //   PortfolioShareToken: "STRING_VALUE",
 * //   PortfolioId: "STRING_VALUE",
 * //   OrganizationNodeValue: "STRING_VALUE",
 * //   Status: "NOT_STARTED" || "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "ERROR",
 * //   ShareDetails: { // ShareDetails
 * //     SuccessfulShares: [ // SuccessfulShares
 * //       "STRING_VALUE",
 * //     ],
 * //     ShareErrors: [ // ShareErrors
 * //       { // ShareError
 * //         Accounts: [ // Namespaces
 * //           "STRING_VALUE",
 * //         ],
 * //         Message: "STRING_VALUE",
 * //         Error: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePortfolioShareStatusCommandInput - {@link DescribePortfolioShareStatusCommandInput}
 * @returns {@link DescribePortfolioShareStatusCommandOutput}
 * @see {@link DescribePortfolioShareStatusCommandInput} for command's `input` shape.
 * @see {@link DescribePortfolioShareStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 * @public
 */
export class DescribePortfolioShareStatusCommand extends $Command
  .classBuilder<
    DescribePortfolioShareStatusCommandInput,
    DescribePortfolioShareStatusCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242ServiceCatalogService", "DescribePortfolioShareStatus", {})
  .n("ServiceCatalogClient", "DescribePortfolioShareStatusCommand")
  .f(void 0, void 0)
  .ser(se_DescribePortfolioShareStatusCommand)
  .de(de_DescribePortfolioShareStatusCommand)
  .build() {}
