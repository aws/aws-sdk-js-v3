// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateOutboundExternalLinkRequest, CreateOutboundExternalLinkResponse } from "../models/models_0";
import type { RTBFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RTBFabricClient";
import { CreateOutboundExternalLink } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateOutboundExternalLinkCommand}.
 */
export interface CreateOutboundExternalLinkCommandInput extends CreateOutboundExternalLinkRequest {}
/**
 * @public
 *
 * The output of {@link CreateOutboundExternalLinkCommand}.
 */
export interface CreateOutboundExternalLinkCommandOutput extends CreateOutboundExternalLinkResponse, __MetadataBearer {}

/**
 * <p>Creates an outbound external link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, CreateOutboundExternalLinkCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, CreateOutboundExternalLinkCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // CreateOutboundExternalLinkRequest
 *   clientToken: "STRING_VALUE", // required
 *   gatewayId: "STRING_VALUE", // required
 *   attributes: { // LinkAttributes
 *     responderErrorMasking: [ // ResponderErrorMasking
 *       { // ResponderErrorMaskingForHttpCode
 *         httpCode: "STRING_VALUE", // required
 *         action: "NO_BID" || "PASSTHROUGH", // required
 *         loggingTypes: [ // ResponderErrorMaskingLoggingTypes // required
 *           "NONE" || "METRIC" || "RESPONSE",
 *         ],
 *         responseLoggingPercentage: Number("float"),
 *       },
 *     ],
 *     customerProvidedId: "STRING_VALUE",
 *   },
 *   publicEndpoint: "STRING_VALUE", // required
 *   logSettings: { // LinkLogSettings
 *     applicationLogs: { // LinkApplicationLogConfiguration
 *       sampling: { // LinkApplicationLogSampling
 *         errorLog: Number("double"), // required
 *         filterLog: Number("double"), // required
 *       },
 *     },
 *   },
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateOutboundExternalLinkCommand(input);
 * const response = await client.send(command);
 * // { // CreateOutboundExternalLinkResponse
 * //   gatewayId: "STRING_VALUE", // required
 * //   linkId: "STRING_VALUE", // required
 * //   status: "PENDING_CREATION" || "PENDING_REQUEST" || "REQUESTED" || "ACCEPTED" || "ACTIVE" || "REJECTED" || "FAILED" || "PENDING_DELETION" || "DELETED" || "PENDING_UPDATE" || "PENDING_ISOLATION" || "ISOLATED" || "PENDING_RESTORATION", // required
 * // };
 *
 * ```
 *
 * @param CreateOutboundExternalLinkCommandInput - {@link CreateOutboundExternalLinkCommandInput}
 * @returns {@link CreateOutboundExternalLinkCommandOutput}
 * @see {@link CreateOutboundExternalLinkCommandInput} for command's `input` shape.
 * @see {@link CreateOutboundExternalLinkCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because you exceeded a service quota.</p>
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
 * @example Create an outbound external link
 * ```javascript
 * // Create an outbound external link for a requester gateway to connect to external public responder endpoints
 * const input = {
 *   clientToken: "12345678-1234-1234-1234-123456789012",
 *   gatewayId: "rtb-gw-12345678",
 *   logSettings: {
 *     applicationLogs: {
 *       sampling: {
 *         errorLog: 100.0,
 *         filterLog: 0.0
 *       }
 *     }
 *   },
 *   publicEndpoint: "https://external-responder.example.com"
 * };
 * const command = new CreateOutboundExternalLinkCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321",
 *   status: "ACTIVE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateOutboundExternalLinkCommand extends $Command
  .classBuilder<
    CreateOutboundExternalLinkCommandInput,
    CreateOutboundExternalLinkCommandOutput,
    RTBFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RTBFabricClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RTBFabric", "CreateOutboundExternalLink", {})
  .n("RTBFabricClient", "CreateOutboundExternalLinkCommand")
  .sc(CreateOutboundExternalLink)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOutboundExternalLinkRequest;
      output: CreateOutboundExternalLinkResponse;
    };
    sdk: {
      input: CreateOutboundExternalLinkCommandInput;
      output: CreateOutboundExternalLinkCommandOutput;
    };
  };
}
