// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { PublishPortalRequest, PublishPortalResponse } from "../models/models_0";
import { PublishPortal } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PublishPortalCommand}.
 */
export interface PublishPortalCommandInput extends PublishPortalRequest {}
/**
 * @public
 *
 * The output of {@link PublishPortalCommand}.
 */
export interface PublishPortalCommandOutput extends PublishPortalResponse, __MetadataBearer {}

/**
 * <p>Publishes a portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, PublishPortalCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, PublishPortalCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // PublishPortalRequest
 *   Description: "STRING_VALUE",
 *   PortalId: "STRING_VALUE", // required
 * };
 * const command = new PublishPortalCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PublishPortalCommandInput - {@link PublishPortalCommandInput}
 * @returns {@link PublishPortalCommandOutput}
 * @see {@link PublishPortalCommandInput} for command's `input` shape.
 * @see {@link PublishPortalCommandOutput} for command's `response` shape.
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
export class PublishPortalCommand extends $Command
  .classBuilder<
    PublishPortalCommandInput,
    PublishPortalCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "PublishPortal", {})
  .n("ApiGatewayV2Client", "PublishPortalCommand")
  .sc(PublishPortal)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PublishPortalRequest;
      output: {};
    };
    sdk: {
      input: PublishPortalCommandInput;
      output: PublishPortalCommandOutput;
    };
  };
}
