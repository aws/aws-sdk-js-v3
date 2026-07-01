// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPortalProductsRequest, ListPortalProductsResponse } from "../models/models_0";
import { ListPortalProducts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPortalProductsCommand}.
 */
export interface ListPortalProductsCommandInput extends ListPortalProductsRequest {}
/**
 * @public
 *
 * The output of {@link ListPortalProductsCommand}.
 */
export interface ListPortalProductsCommandOutput extends ListPortalProductsResponse, __MetadataBearer {}

/**
 * <p>Lists portal products.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, ListPortalProductsCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, ListPortalProductsCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // ListPortalProductsRequest
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   ResourceOwner: "STRING_VALUE",
 * };
 * const command = new ListPortalProductsCommand(input);
 * const response = await client.send(command);
 * // { // ListPortalProductsResponse
 * //   Items: [ // __listOfPortalProductSummary
 * //     { // PortalProductSummary
 * //       Description: "STRING_VALUE", // required
 * //       DisplayName: "STRING_VALUE", // required
 * //       LastModified: new Date("TIMESTAMP"), // required
 * //       PortalProductArn: "STRING_VALUE", // required
 * //       PortalProductId: "STRING_VALUE", // required
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPortalProductsCommandInput - {@link ListPortalProductsCommandInput}
 * @returns {@link ListPortalProductsCommandOutput}
 * @see {@link ListPortalProductsCommandInput} for command's `input` shape.
 * @see {@link ListPortalProductsCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
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
export class ListPortalProductsCommand extends command<ListPortalProductsCommandInput, ListPortalProductsCommandOutput>(
  _ep0,
  _mw0,
  "ListPortalProducts",
  ListPortalProducts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPortalProductsRequest;
      output: ListPortalProductsResponse;
    };
    sdk: {
      input: ListPortalProductsCommandInput;
      output: ListPortalProductsCommandOutput;
    };
  };
}
