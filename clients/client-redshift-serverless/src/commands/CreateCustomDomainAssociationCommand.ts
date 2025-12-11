// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateCustomDomainAssociationRequest, CreateCustomDomainAssociationResponse } from "../models/models_0";
import type {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { CreateCustomDomainAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCustomDomainAssociationCommand}.
 */
export interface CreateCustomDomainAssociationCommandInput extends CreateCustomDomainAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomDomainAssociationCommand}.
 */
export interface CreateCustomDomainAssociationCommandOutput
  extends CreateCustomDomainAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a custom domain association for Amazon Redshift Serverless.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, CreateCustomDomainAssociationCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, CreateCustomDomainAssociationCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // CreateCustomDomainAssociationRequest
 *   workgroupName: "STRING_VALUE", // required
 *   customDomainName: "STRING_VALUE", // required
 *   customDomainCertificateArn: "STRING_VALUE", // required
 * };
 * const command = new CreateCustomDomainAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomDomainAssociationResponse
 * //   customDomainName: "STRING_VALUE",
 * //   workgroupName: "STRING_VALUE",
 * //   customDomainCertificateArn: "STRING_VALUE",
 * //   customDomainCertificateExpiryTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateCustomDomainAssociationCommandInput - {@link CreateCustomDomainAssociationCommandInput}
 * @returns {@link CreateCustomDomainAssociationCommandOutput}
 * @see {@link CreateCustomDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateCustomDomainAssociationCommandOutput} for command's `response` shape.
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
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class CreateCustomDomainAssociationCommand extends $Command
  .classBuilder<
    CreateCustomDomainAssociationCommandInput,
    CreateCustomDomainAssociationCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "CreateCustomDomainAssociation", {})
  .n("RedshiftServerlessClient", "CreateCustomDomainAssociationCommand")
  .sc(CreateCustomDomainAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomDomainAssociationRequest;
      output: CreateCustomDomainAssociationResponse;
    };
    sdk: {
      input: CreateCustomDomainAssociationCommandInput;
      output: CreateCustomDomainAssociationCommandOutput;
    };
  };
}
