// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeProductInput, DescribeProductOutput } from "../models/models_0";
import { DescribeProduct$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeProductCommand}.
 */
export interface DescribeProductCommandInput extends DescribeProductInput {}
/**
 * @public
 *
 * The output of {@link DescribeProductCommand}.
 */
export interface DescribeProductCommandOutput extends DescribeProductOutput, __MetadataBearer {}

/**
 * <p>Gets information about the specified product.</p>
 *          <note>
 *             <p>
 *             Running this operation
 *             with administrator access
 *             results
 *             in a failure.
 *             <a>DescribeProductAsAdmin</a> should be used instead.
 *          </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribeProductInput
 *   AcceptLanguage: "STRING_VALUE",
 *   Id: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 * };
 * const command = new DescribeProductCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProductOutput
 * //   ProductViewSummary: { // ProductViewSummary
 * //     Id: "STRING_VALUE",
 * //     ProductId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Owner: "STRING_VALUE",
 * //     ShortDescription: "STRING_VALUE",
 * //     Type: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE" || "TERRAFORM_OPEN_SOURCE" || "TERRAFORM_CLOUD" || "EXTERNAL",
 * //     Distributor: "STRING_VALUE",
 * //     HasDefaultPath: true || false,
 * //     SupportEmail: "STRING_VALUE",
 * //     SupportDescription: "STRING_VALUE",
 * //     SupportUrl: "STRING_VALUE",
 * //   },
 * //   ProvisioningArtifacts: [ // ProvisioningArtifacts
 * //     { // ProvisioningArtifact
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       Guidance: "DEFAULT" || "DEPRECATED",
 * //     },
 * //   ],
 * //   Budgets: [ // Budgets
 * //     { // BudgetDetail
 * //       BudgetName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   LaunchPaths: [ // LaunchPaths
 * //     { // LaunchPath
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeProductCommandInput - {@link DescribeProductCommandInput}
 * @returns {@link DescribeProductCommandOutput}
 * @see {@link DescribeProductCommandInput} for command's `input` shape.
 * @see {@link DescribeProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 *
 * @public
 */
export class DescribeProductCommand extends command<DescribeProductCommandInput, DescribeProductCommandOutput>(
  _ep0,
  _mw0,
  "DescribeProduct",
  DescribeProduct$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProductInput;
      output: DescribeProductOutput;
    };
    sdk: {
      input: DescribeProductCommandInput;
      output: DescribeProductCommandOutput;
    };
  };
}
