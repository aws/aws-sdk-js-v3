// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePortfolioShareInput, UpdatePortfolioShareOutput } from "../models/models_0";
import { de_UpdatePortfolioShareCommand, se_UpdatePortfolioShareCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePortfolioShareCommand}.
 */
export interface UpdatePortfolioShareCommandInput extends UpdatePortfolioShareInput {}
/**
 * @public
 *
 * The output of {@link UpdatePortfolioShareCommand}.
 */
export interface UpdatePortfolioShareCommandOutput extends UpdatePortfolioShareOutput, __MetadataBearer {}

/**
 * <p>Updates the specified portfolio share. You can use this API to enable or disable <code>TagOptions</code> sharing
 *          or Principal sharing for an existing portfolio share. </p>
 *          <p>The portfolio share cannot be updated if the <code>CreatePortfolioShare</code> operation is <code>IN_PROGRESS</code>, as the share is not available to recipient entities.
 *          In this case, you must wait for the portfolio share to be completed.</p>
 *          <p>You must provide the <code>accountId</code> or organization node in the input, but not both.</p>
 *          <p>If the portfolio is shared to both an external account and an organization node, and both shares need to be updated, you must invoke <code>UpdatePortfolioShare</code> separately for each share type. </p>
 *          <p>This API cannot be used for removing the portfolio share. You must use <code>DeletePortfolioShare</code> API for that action. </p>
 *          <note>
 *             <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is
 *          then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin,
 *          but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal
 *          name association for the portfolio. Although this user may not know which principal names are associated through
 *          Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then
 *          Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration,
 *          the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdatePortfolioShareCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdatePortfolioShareCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // UpdatePortfolioShareInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PortfolioId: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 *   OrganizationNode: { // OrganizationNode
 *     Type: "ORGANIZATION" || "ORGANIZATIONAL_UNIT" || "ACCOUNT",
 *     Value: "STRING_VALUE",
 *   },
 *   ShareTagOptions: true || false,
 *   SharePrincipals: true || false,
 * };
 * const command = new UpdatePortfolioShareCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePortfolioShareOutput
 * //   PortfolioShareToken: "STRING_VALUE",
 * //   Status: "NOT_STARTED" || "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "ERROR",
 * // };
 *
 * ```
 *
 * @param UpdatePortfolioShareCommandInput - {@link UpdatePortfolioShareCommandInput}
 * @returns {@link UpdatePortfolioShareCommandOutput}
 * @see {@link UpdatePortfolioShareCommandInput} for command's `input` shape.
 * @see {@link UpdatePortfolioShareCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>An attempt was made to modify a resource that is in a state that is not valid.
 *          Check your resources to ensure that they are in valid states before retrying the operation.</p>
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
 *
 * @public
 */
export class UpdatePortfolioShareCommand extends $Command
  .classBuilder<
    UpdatePortfolioShareCommandInput,
    UpdatePortfolioShareCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242ServiceCatalogService", "UpdatePortfolioShare", {})
  .n("ServiceCatalogClient", "UpdatePortfolioShareCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePortfolioShareCommand)
  .de(de_UpdatePortfolioShareCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePortfolioShareInput;
      output: UpdatePortfolioShareOutput;
    };
    sdk: {
      input: UpdatePortfolioShareCommandInput;
      output: UpdatePortfolioShareCommandOutput;
    };
  };
}
