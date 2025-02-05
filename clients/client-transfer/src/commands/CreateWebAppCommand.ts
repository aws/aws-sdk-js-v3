// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateWebAppRequest, CreateWebAppResponse } from "../models/models_0";
import { de_CreateWebAppCommand, se_CreateWebAppCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWebAppCommand}.
 */
export interface CreateWebAppCommandInput extends CreateWebAppRequest {}
/**
 * @public
 *
 * The output of {@link CreateWebAppCommand}.
 */
export interface CreateWebAppCommandOutput extends CreateWebAppResponse, __MetadataBearer {}

/**
 * <p>Creates a web app based on specified parameters, and returns the ID for the new web app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, CreateWebAppCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, CreateWebAppCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new TransferClient(config);
 * const input = { // CreateWebAppRequest
 *   IdentityProviderDetails: { // WebAppIdentityProviderDetails Union: only one key present
 *     IdentityCenterConfig: { // IdentityCenterConfig
 *       InstanceArn: "STRING_VALUE",
 *       Role: "STRING_VALUE",
 *     },
 *   },
 *   AccessEndpoint: "STRING_VALUE",
 *   WebAppUnits: { // WebAppUnits Union: only one key present
 *     Provisioned: Number("int"),
 *   },
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateWebAppCommand(input);
 * const response = await client.send(command);
 * // { // CreateWebAppResponse
 * //   WebAppId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateWebAppCommandInput - {@link CreateWebAppCommandInput}
 * @returns {@link CreateWebAppCommandOutput}
 * @see {@link CreateWebAppCommandInput} for command's `input` shape.
 * @see {@link CreateWebAppCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 * @public
 */
export class CreateWebAppCommand extends $Command
  .classBuilder<
    CreateWebAppCommandInput,
    CreateWebAppCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TransferService", "CreateWebApp", {})
  .n("TransferClient", "CreateWebAppCommand")
  .f(void 0, void 0)
  .ser(se_CreateWebAppCommand)
  .de(de_CreateWebAppCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWebAppRequest;
      output: CreateWebAppResponse;
    };
    sdk: {
      input: CreateWebAppCommandInput;
      output: CreateWebAppCommandOutput;
    };
  };
}
