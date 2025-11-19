// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListProductRestEndpointPagesRequest, ListProductRestEndpointPagesResponse } from "../models/models_0";
import { ListProductRestEndpointPages } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProductRestEndpointPagesCommand}.
 */
export interface ListProductRestEndpointPagesCommandInput extends ListProductRestEndpointPagesRequest {}
/**
 * @public
 *
 * The output of {@link ListProductRestEndpointPagesCommand}.
 */
export interface ListProductRestEndpointPagesCommandOutput
  extends ListProductRestEndpointPagesResponse,
    __MetadataBearer {}

/**
 * <p>Lists the product REST endpoint pages of a portal product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, ListProductRestEndpointPagesCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, ListProductRestEndpointPagesCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // ListProductRestEndpointPagesRequest
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   PortalProductId: "STRING_VALUE", // required
 *   ResourceOwnerAccountId: "STRING_VALUE",
 * };
 * const command = new ListProductRestEndpointPagesCommand(input);
 * const response = await client.send(command);
 * // { // ListProductRestEndpointPagesResponse
 * //   Items: [ // __listOfProductRestEndpointPageSummaryNoBody
 * //     { // ProductRestEndpointPageSummaryNoBody
 * //       Endpoint: "STRING_VALUE", // required
 * //       LastModified: new Date("TIMESTAMP"), // required
 * //       OperationName: "STRING_VALUE",
 * //       ProductRestEndpointPageArn: "STRING_VALUE", // required
 * //       ProductRestEndpointPageId: "STRING_VALUE", // required
 * //       RestEndpointIdentifier: { // RestEndpointIdentifier
 * //         IdentifierParts: { // IdentifierParts
 * //           Method: "STRING_VALUE", // required
 * //           Path: "STRING_VALUE", // required
 * //           RestApiId: "STRING_VALUE", // required
 * //           Stage: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       Status: "AVAILABLE" || "IN_PROGRESS" || "FAILED", // required
 * //       StatusException: { // StatusException
 * //         Exception: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       TryItState: "ENABLED" || "DISABLED", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProductRestEndpointPagesCommandInput - {@link ListProductRestEndpointPagesCommandInput}
 * @returns {@link ListProductRestEndpointPagesCommandOutput}
 * @see {@link ListProductRestEndpointPagesCommandInput} for command's `input` shape.
 * @see {@link ListProductRestEndpointPagesCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
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
export class ListProductRestEndpointPagesCommand extends $Command
  .classBuilder<
    ListProductRestEndpointPagesCommandInput,
    ListProductRestEndpointPagesCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "ListProductRestEndpointPages", {})
  .n("ApiGatewayV2Client", "ListProductRestEndpointPagesCommand")
  .sc(ListProductRestEndpointPages)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProductRestEndpointPagesRequest;
      output: ListProductRestEndpointPagesResponse;
    };
    sdk: {
      input: ListProductRestEndpointPagesCommandInput;
      output: ListProductRestEndpointPagesCommandOutput;
    };
  };
}
