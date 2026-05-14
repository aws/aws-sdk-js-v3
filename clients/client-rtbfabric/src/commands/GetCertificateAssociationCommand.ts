// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetCertificateAssociationRequest, GetCertificateAssociationResponse } from "../models/models_0";
import type { RTBFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RTBFabricClient";
import { GetCertificateAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCertificateAssociationCommand}.
 */
export interface GetCertificateAssociationCommandInput extends GetCertificateAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetCertificateAssociationCommand}.
 */
export interface GetCertificateAssociationCommandOutput extends GetCertificateAssociationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of a certificate association with a responder gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, GetCertificateAssociationCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, GetCertificateAssociationCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // GetCertificateAssociationRequest
 *   gatewayId: "STRING_VALUE", // required
 *   acmCertificateArn: "STRING_VALUE", // required
 * };
 * const command = new GetCertificateAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetCertificateAssociationResponse
 * //   gatewayId: "STRING_VALUE", // required
 * //   acmCertificateArn: "STRING_VALUE", // required
 * //   status: "PENDING_ASSOCIATION" || "ASSOCIATED" || "PENDING_DISASSOCIATION" || "DISASSOCIATED" || "FAILED", // required
 * //   associatedAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetCertificateAssociationCommandInput - {@link GetCertificateAssociationCommandInput}
 * @returns {@link GetCertificateAssociationCommandOutput}
 * @see {@link GetCertificateAssociationCommandInput} for command's `input` shape.
 * @see {@link GetCertificateAssociationCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request could not be completed because of an internal server error. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request could not be completed because the resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request could not be completed because it fails satisfy the constraints specified by the service.</p>
 *
 * @throws {@link RTBFabricServiceException}
 * <p>Base exception class for all service exceptions from RTBFabric service.</p>
 *
 *
 * @example Get certificate association details from a responder gateway
 * ```javascript
 * // Retrieve details of an ACM certificate association with a responder gateway
 * const input = {
 *   acmCertificateArn: "arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012",
 *   gatewayId: "rtb-gw-12345678"
 * };
 * const command = new GetCertificateAssociationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   acmCertificateArn: "arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012",
 *   associatedAt: 1704067200,
 *   gatewayId: "rtb-gw-12345678",
 *   status: "ASSOCIATED",
 *   updatedAt: 1704067200
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetCertificateAssociationCommand extends $Command
  .classBuilder<
    GetCertificateAssociationCommandInput,
    GetCertificateAssociationCommandOutput,
    RTBFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RTBFabricClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RTBFabric", "GetCertificateAssociation", {})
  .n("RTBFabricClient", "GetCertificateAssociationCommand")
  .sc(GetCertificateAssociation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCertificateAssociationRequest;
      output: GetCertificateAssociationResponse;
    };
    sdk: {
      input: GetCertificateAssociationCommandInput;
      output: GetCertificateAssociationCommandOutput;
    };
  };
}
