// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListCertificateAssociationsRequest, ListCertificateAssociationsResponse } from "../models/models_0";
import type { RTBFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RTBFabricClient";
import { ListCertificateAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCertificateAssociationsCommand}.
 */
export interface ListCertificateAssociationsCommandInput extends ListCertificateAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListCertificateAssociationsCommand}.
 */
export interface ListCertificateAssociationsCommandOutput extends ListCertificateAssociationsResponse, __MetadataBearer {}

/**
 * <p>Lists the certificate associations for a responder gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, ListCertificateAssociationsCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, ListCertificateAssociationsCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // ListCertificateAssociationsRequest
 *   gatewayId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCertificateAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCertificateAssociationsResponse
 * //   certificateAssociations: [ // CertificateAssociationSummaryList // required
 * //     { // CertificateAssociationSummary
 * //       acmCertificateArn: "STRING_VALUE", // required
 * //       status: "PENDING_ASSOCIATION" || "ASSOCIATED" || "PENDING_DISASSOCIATION" || "DISASSOCIATED" || "FAILED", // required
 * //       associatedAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCertificateAssociationsCommandInput - {@link ListCertificateAssociationsCommandInput}
 * @returns {@link ListCertificateAssociationsCommandOutput}
 * @see {@link ListCertificateAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListCertificateAssociationsCommandOutput} for command's `response` shape.
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
 * @example List certificate associations for a responder gateway
 * ```javascript
 * // Retrieve all certificate associations for a responder gateway
 * const input = {
 *   gatewayId: "rtb-gw-12345678",
 *   maxResults: 5
 * };
 * const command = new ListCertificateAssociationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   certificateAssociations: [
 *     {
 *       acmCertificateArn: "arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012",
 *       associatedAt: 1704067200,
 *       status: "ASSOCIATED",
 *       updatedAt: 1704067200
 *     }
 *   ],
 *   nextToken: "token123"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListCertificateAssociationsCommand extends $Command
  .classBuilder<
    ListCertificateAssociationsCommandInput,
    ListCertificateAssociationsCommandOutput,
    RTBFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RTBFabricClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RTBFabric", "ListCertificateAssociations", {})
  .n("RTBFabricClient", "ListCertificateAssociationsCommand")
  .sc(ListCertificateAssociations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCertificateAssociationsRequest;
      output: ListCertificateAssociationsResponse;
    };
    sdk: {
      input: ListCertificateAssociationsCommandInput;
      output: ListCertificateAssociationsCommandOutput;
    };
  };
}
