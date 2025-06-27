// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDomainAssociationRequest, UpdateDomainAssociationResult } from "../models/models_2";
import { de_UpdateDomainAssociationCommand, se_UpdateDomainAssociationCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDomainAssociationCommand}.
 */
export interface UpdateDomainAssociationCommandInput extends UpdateDomainAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDomainAssociationCommand}.
 */
export interface UpdateDomainAssociationCommandOutput extends UpdateDomainAssociationResult, __MetadataBearer {}

/**
 * <p>Moves a domain from its current distribution or distribution tenant to another one.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateDomainAssociationCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateDomainAssociationCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateDomainAssociationRequest
 *   Domain: "STRING_VALUE", // required
 *   TargetResource: { // DistributionResourceId
 *     DistributionId: "STRING_VALUE",
 *     DistributionTenantId: "STRING_VALUE",
 *   },
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new UpdateDomainAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDomainAssociationResult
 * //   Domain: "STRING_VALUE",
 * //   ResourceId: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDomainAssociationCommandInput - {@link UpdateDomainAssociationCommandInput}
 * @returns {@link UpdateDomainAssociationCommandOutput}
 * @see {@link UpdateDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainAssociationCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link IllegalUpdate} (client fault)
 *  <p>The update contains modifications that are not allowed.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to <code>false</code>.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class UpdateDomainAssociationCommand extends $Command
  .classBuilder<
    UpdateDomainAssociationCommandInput,
    UpdateDomainAssociationCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "UpdateDomainAssociation", {})
  .n("CloudFrontClient", "UpdateDomainAssociationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDomainAssociationCommand)
  .de(de_UpdateDomainAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDomainAssociationRequest;
      output: UpdateDomainAssociationResult;
    };
    sdk: {
      input: UpdateDomainAssociationCommandInput;
      output: UpdateDomainAssociationCommandOutput;
    };
  };
}
