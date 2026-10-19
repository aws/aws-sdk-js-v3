// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMarketplaceResourceRequest, GetMarketplaceResourceResponse } from "../models/models_0";
import { GetMarketplaceResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMarketplaceResourceCommand}.
 */
export interface GetMarketplaceResourceCommandInput extends GetMarketplaceResourceRequest {}
/**
 * @public
 *
 * The output of {@link GetMarketplaceResourceCommand}.
 */
export interface GetMarketplaceResourceCommandOutput extends GetMarketplaceResourceResponse, __MetadataBearer {}

/**
 * <p>Verifies the subscription and performs resource dependency checks on the
 * 			requested Amazon Web Services Marketplace resource. The caller must be entitled to the resource. For
 * 			Amazon Web Services Marketplace components, the response contains fields to download the components
 * 			and their artifacts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetMarketplaceResourceCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetMarketplaceResourceCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // GetMarketplaceResourceRequest
 *   resourceType: "COMPONENT_DATA" || "COMPONENT_ARTIFACT", // required
 *   resourceArn: "STRING_VALUE", // required
 *   resourceLocation: "STRING_VALUE",
 * };
 * const command = new GetMarketplaceResourceCommand(input);
 * const response = await client.send(command);
 * // { // GetMarketplaceResourceResponse
 * //   resourceArn: "STRING_VALUE",
 * //   url: "STRING_VALUE",
 * //   data: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMarketplaceResourceCommandInput - {@link GetMarketplaceResourceCommandInput}
 * @returns {@link GetMarketplaceResourceCommandOutput}
 * @see {@link GetMarketplaceResourceCommandInput} for command's `input` shape.
 * @see {@link GetMarketplaceResourceCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder
 * 			calls on your behalf. Retry with an increasing or variable delay between
 * 			requests.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A generic client error. This error usually indicates that the request
 * 			failed a validation check, such as when a downstream service rejects a
 * 			configured value.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @public
 */
export class GetMarketplaceResourceCommand extends command<GetMarketplaceResourceCommandInput, GetMarketplaceResourceCommandOutput>(
  _ep0,
  _mw0,
  "GetMarketplaceResource",
  GetMarketplaceResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMarketplaceResourceRequest;
      output: GetMarketplaceResourceResponse;
    };
    sdk: {
      input: GetMarketplaceResourceCommandInput;
      output: GetMarketplaceResourceCommandOutput;
    };
  };
}
