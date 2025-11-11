// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetOutboundExternalLinkRequest, GetOutboundExternalLinkResponse } from "../models/models_0";
import { RTBFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RTBFabricClient";
import { GetOutboundExternalLink } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOutboundExternalLinkCommand}.
 */
export interface GetOutboundExternalLinkCommandInput extends GetOutboundExternalLinkRequest {}
/**
 * @public
 *
 * The output of {@link GetOutboundExternalLinkCommand}.
 */
export interface GetOutboundExternalLinkCommandOutput extends GetOutboundExternalLinkResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about an outbound external link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, GetOutboundExternalLinkCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, GetOutboundExternalLinkCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // GetOutboundExternalLinkRequest
 *   gatewayId: "STRING_VALUE", // required
 *   linkId: "STRING_VALUE", // required
 * };
 * const command = new GetOutboundExternalLinkCommand(input);
 * const response = await client.send(command);
 * // { // GetOutboundExternalLinkResponse
 * //   gatewayId: "STRING_VALUE", // required
 * //   linkId: "STRING_VALUE", // required
 * //   status: "PENDING_CREATION" || "PENDING_REQUEST" || "REQUESTED" || "ACCEPTED" || "ACTIVE" || "REJECTED" || "FAILED" || "PENDING_DELETION" || "DELETED" || "PENDING_UPDATE" || "PENDING_ISOLATION" || "ISOLATED" || "PENDING_RESTORATION", // required
 * //   publicEndpoint: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   logSettings: { // LinkLogSettings
 * //     applicationLogs: { // LinkApplicationLogConfiguration
 * //       sampling: { // LinkApplicationLogSampling
 * //         errorLog: Number("double"), // required
 * //         filterLog: Number("double"), // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOutboundExternalLinkCommandInput - {@link GetOutboundExternalLinkCommandInput}
 * @returns {@link GetOutboundExternalLinkCommandOutput}
 * @see {@link GetOutboundExternalLinkCommandInput} for command's `input` shape.
 * @see {@link GetOutboundExternalLinkCommandOutput} for command's `response` shape.
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
 * @example Get outbound external link details
 * ```javascript
 * // Get details of a specific outbound external link
 * const input = {
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321"
 * };
 * const command = new GetOutboundExternalLinkCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdAt: "2024-01-15T10:30:00Z",
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321",
 *   publicEndpoint: "https://external-responder.example.com",
 *   status: "ACTIVE",
 *   updatedAt: "2024-01-15T10:35:00Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetOutboundExternalLinkCommand extends $Command
  .classBuilder<
    GetOutboundExternalLinkCommandInput,
    GetOutboundExternalLinkCommandOutput,
    RTBFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RTBFabricClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RTBFabric", "GetOutboundExternalLink", {})
  .n("RTBFabricClient", "GetOutboundExternalLinkCommand")
  .sc(GetOutboundExternalLink)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOutboundExternalLinkRequest;
      output: GetOutboundExternalLinkResponse;
    };
    sdk: {
      input: GetOutboundExternalLinkCommandInput;
      output: GetOutboundExternalLinkCommandOutput;
    };
  };
}
