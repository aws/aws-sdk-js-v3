// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetCustomDomainAssociationRequest, GetCustomDomainAssociationResponse } from "../models/models_0";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { GetCustomDomainAssociation } from "../schemas/schemas_4_CustomDomain";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCustomDomainAssociationCommand}.
 */
export interface GetCustomDomainAssociationCommandInput extends GetCustomDomainAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetCustomDomainAssociationCommand}.
 */
export interface GetCustomDomainAssociationCommandOutput extends GetCustomDomainAssociationResponse, __MetadataBearer {}

/**
 * <p>Gets information about a specific custom domain association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, GetCustomDomainAssociationCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, GetCustomDomainAssociationCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // GetCustomDomainAssociationRequest
 *   customDomainName: "STRING_VALUE", // required
 *   workgroupName: "STRING_VALUE", // required
 * };
 * const command = new GetCustomDomainAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetCustomDomainAssociationResponse
 * //   customDomainName: "STRING_VALUE",
 * //   workgroupName: "STRING_VALUE",
 * //   customDomainCertificateArn: "STRING_VALUE",
 * //   customDomainCertificateExpiryTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetCustomDomainAssociationCommandInput - {@link GetCustomDomainAssociationCommandInput}
 * @returns {@link GetCustomDomainAssociationCommandOutput}
 * @see {@link GetCustomDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link GetCustomDomainAssociationCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetCustomDomainAssociationCommand extends $Command
  .classBuilder<
    GetCustomDomainAssociationCommandInput,
    GetCustomDomainAssociationCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "GetCustomDomainAssociation", {})
  .n("RedshiftServerlessClient", "GetCustomDomainAssociationCommand")
  .sc(GetCustomDomainAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCustomDomainAssociationRequest;
      output: GetCustomDomainAssociationResponse;
    };
    sdk: {
      input: GetCustomDomainAssociationCommandInput;
      output: GetCustomDomainAssociationCommandOutput;
    };
  };
}
