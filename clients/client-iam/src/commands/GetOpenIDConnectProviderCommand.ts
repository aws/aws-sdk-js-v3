// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetOpenIDConnectProviderRequest, GetOpenIDConnectProviderResponse } from "../models/models_0";
import { de_GetOpenIDConnectProviderCommand, se_GetOpenIDConnectProviderCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOpenIDConnectProviderCommand}.
 */
export interface GetOpenIDConnectProviderCommandInput extends GetOpenIDConnectProviderRequest {}
/**
 * @public
 *
 * The output of {@link GetOpenIDConnectProviderCommand}.
 */
export interface GetOpenIDConnectProviderCommandOutput extends GetOpenIDConnectProviderResponse, __MetadataBearer {}

/**
 * <p>Returns information about the specified OpenID Connect (OIDC) provider resource object
 *             in IAM.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetOpenIDConnectProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetOpenIDConnectProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetOpenIDConnectProviderRequest
 *   OpenIDConnectProviderArn: "STRING_VALUE", // required
 * };
 * const command = new GetOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * // { // GetOpenIDConnectProviderResponse
 * //   Url: "STRING_VALUE",
 * //   ClientIDList: [ // clientIDListType
 * //     "STRING_VALUE",
 * //   ],
 * //   ThumbprintList: [ // thumbprintListType
 * //     "STRING_VALUE",
 * //   ],
 * //   CreateDate: new Date("TIMESTAMP"),
 * //   Tags: [ // tagListType
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetOpenIDConnectProviderCommandInput - {@link GetOpenIDConnectProviderCommandInput}
 * @returns {@link GetOpenIDConnectProviderCommandOutput}
 * @see {@link GetOpenIDConnectProviderCommandInput} for command's `input` shape.
 * @see {@link GetOpenIDConnectProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 */
export class GetOpenIDConnectProviderCommand extends $Command
  .classBuilder<
    GetOpenIDConnectProviderCommandInput,
    GetOpenIDConnectProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "GetOpenIDConnectProvider", {})
  .n("IAMClient", "GetOpenIDConnectProviderCommand")
  .f(void 0, void 0)
  .ser(se_GetOpenIDConnectProviderCommand)
  .de(de_GetOpenIDConnectProviderCommand)
  .build() {}
