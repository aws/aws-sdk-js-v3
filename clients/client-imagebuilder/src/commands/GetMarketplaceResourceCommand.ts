// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetMarketplaceResourceRequest, GetMarketplaceResourceResponse } from "../models/models_0";
import { GetMarketplaceResource } from "../schemas/schemas_24_GetMarketplaceResource";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Verify the subscription and perform resource dependency checks on the requested
 * 			Amazon Web Services Marketplace resource. For Amazon Web Services Marketplace components, the response contains fields to download the
 * 			components and their artifacts.</p>
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
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
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
export class GetMarketplaceResourceCommand extends $Command
  .classBuilder<
    GetMarketplaceResourceCommandInput,
    GetMarketplaceResourceCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("imagebuilder", "GetMarketplaceResource", {})
  .n("ImagebuilderClient", "GetMarketplaceResourceCommand")
  .sc(GetMarketplaceResource)
  .build() {
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
