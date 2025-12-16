// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PreviewPortalRequest, PreviewPortalResponse } from "../models/models_0";
import { PreviewPortal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PreviewPortalCommand}.
 */
export interface PreviewPortalCommandInput extends PreviewPortalRequest {}
/**
 * @public
 *
 * The output of {@link PreviewPortalCommand}.
 */
export interface PreviewPortalCommandOutput extends PreviewPortalResponse, __MetadataBearer {}

/**
 * <p>Creates a portal preview.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, PreviewPortalCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, PreviewPortalCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // PreviewPortalRequest
 *   PortalId: "STRING_VALUE", // required
 * };
 * const command = new PreviewPortalCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PreviewPortalCommandInput - {@link PreviewPortalCommandInput}
 * @returns {@link PreviewPortalCommandOutput}
 * @see {@link PreviewPortalCommandInput} for command's `input` shape.
 * @see {@link PreviewPortalCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. See the message field for more information.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>A limit has been exceeded. See the accompanying error message for details.</p>
 *
 * @throws {@link ApiGatewayV2ServiceException}
 * <p>Base exception class for all service exceptions from ApiGatewayV2 service.</p>
 *
 *
 * @public
 */
export class PreviewPortalCommand extends $Command
  .classBuilder<
    PreviewPortalCommandInput,
    PreviewPortalCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "PreviewPortal", {})
  .n("ApiGatewayV2Client", "PreviewPortalCommand")
  .sc(PreviewPortal$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PreviewPortalRequest;
      output: {};
    };
    sdk: {
      input: PreviewPortalCommandInput;
      output: PreviewPortalCommandOutput;
    };
  };
}
