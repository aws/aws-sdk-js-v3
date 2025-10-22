// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateInboundExternalLinkRequest, CreateInboundExternalLinkResponse } from "../models/models_0";
import { de_CreateInboundExternalLinkCommand, se_CreateInboundExternalLinkCommand } from "../protocols/Aws_restJson1";
import { RTBFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RTBFabricClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInboundExternalLinkCommand}.
 */
export interface CreateInboundExternalLinkCommandInput extends CreateInboundExternalLinkRequest {}
/**
 * @public
 *
 * The output of {@link CreateInboundExternalLinkCommand}.
 */
export interface CreateInboundExternalLinkCommandOutput extends CreateInboundExternalLinkResponse, __MetadataBearer {}

/**
 * <p>Creates an inbound external link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, CreateInboundExternalLinkCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, CreateInboundExternalLinkCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // CreateInboundExternalLinkRequest
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
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateInboundExternalLinkCommand(input);
 * const response = await client.send(command);
 * // { // CreateInboundExternalLinkResponse
 * //   gatewayId: "STRING_VALUE", // required
 * //   linkId: "STRING_VALUE", // required
 * //   status: "PENDING_CREATION" || "PENDING_REQUEST" || "REQUESTED" || "ACCEPTED" || "ACTIVE" || "REJECTED" || "FAILED" || "PENDING_DELETION" || "DELETED" || "PENDING_UPDATE" || "PENDING_ISOLATION" || "ISOLATED" || "PENDING_RESTORATION", // required
 * //   domainName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateInboundExternalLinkCommandInput - {@link CreateInboundExternalLinkCommandInput}
 * @returns {@link CreateInboundExternalLinkCommandOutput}
 * @see {@link CreateInboundExternalLinkCommandInput} for command's `input` shape.
 * @see {@link CreateInboundExternalLinkCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed because of a conflict in the current state of the resource.</p>
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
 * @example Create an inbound external link
 * ```javascript
 * // Create an inbound external link for a responder gateway
 * const input = {
 *   clientToken: "randomClientToken",
 *   gatewayId: "rtb-gw-12345678"
 * };
 * const command = new CreateInboundExternalLinkCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   domainName: "rtb-gw-12345678.example.com",
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321",
 *   status: "ACTIVE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateInboundExternalLinkCommand extends $Command
  .classBuilder<
    CreateInboundExternalLinkCommandInput,
    CreateInboundExternalLinkCommandOutput,
    RTBFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RTBFabricClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RTBFabric", "CreateInboundExternalLink", {})
  .n("RTBFabricClient", "CreateInboundExternalLinkCommand")
  .f(void 0, void 0)
  .ser(se_CreateInboundExternalLinkCommand)
  .de(de_CreateInboundExternalLinkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInboundExternalLinkRequest;
      output: CreateInboundExternalLinkResponse;
    };
    sdk: {
      input: CreateInboundExternalLinkCommandInput;
      output: CreateInboundExternalLinkCommandOutput;
    };
  };
}
