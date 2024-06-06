// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateCustomDomainAssociationRequest, UpdateCustomDomainAssociationResponse } from "../models/models_0";
import {
  de_UpdateCustomDomainAssociationCommand,
  se_UpdateCustomDomainAssociationCommand,
} from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCustomDomainAssociationCommand}.
 */
export interface UpdateCustomDomainAssociationCommandInput extends UpdateCustomDomainAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCustomDomainAssociationCommand}.
 */
export interface UpdateCustomDomainAssociationCommandOutput
  extends UpdateCustomDomainAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Updates an Amazon Redshift Serverless certificate associated with a custom domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, UpdateCustomDomainAssociationCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, UpdateCustomDomainAssociationCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // UpdateCustomDomainAssociationRequest
 *   workgroupName: "STRING_VALUE", // required
 *   customDomainName: "STRING_VALUE", // required
 *   customDomainCertificateArn: "STRING_VALUE", // required
 * };
 * const command = new UpdateCustomDomainAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCustomDomainAssociationResponse
 * //   customDomainName: "STRING_VALUE",
 * //   workgroupName: "STRING_VALUE",
 * //   customDomainCertificateArn: "STRING_VALUE",
 * //   customDomainCertificateExpiryTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateCustomDomainAssociationCommandInput - {@link UpdateCustomDomainAssociationCommandInput}
 * @returns {@link UpdateCustomDomainAssociationCommandOutput}
 * @see {@link UpdateCustomDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomDomainAssociationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 * @public
 */
export class UpdateCustomDomainAssociationCommand extends $Command
  .classBuilder<
    UpdateCustomDomainAssociationCommandInput,
    UpdateCustomDomainAssociationCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServerless", "UpdateCustomDomainAssociation", {})
  .n("RedshiftServerlessClient", "UpdateCustomDomainAssociationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCustomDomainAssociationCommand)
  .de(de_UpdateCustomDomainAssociationCommand)
  .build() {}
