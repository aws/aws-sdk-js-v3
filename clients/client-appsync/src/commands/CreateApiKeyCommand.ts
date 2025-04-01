// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateApiKeyRequest, CreateApiKeyResponse } from "../models/models_0";
import { de_CreateApiKeyCommand, se_CreateApiKeyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateApiKeyCommand}.
 */
export interface CreateApiKeyCommandInput extends CreateApiKeyRequest {}
/**
 * @public
 *
 * The output of {@link CreateApiKeyCommand}.
 */
export interface CreateApiKeyCommandOutput extends CreateApiKeyResponse, __MetadataBearer {}

/**
 * <p>Creates a unique key that you can distribute to clients who invoke your API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, CreateApiKeyCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, CreateApiKeyCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // CreateApiKeyRequest
 *   apiId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   expires: Number("long"),
 * };
 * const command = new CreateApiKeyCommand(input);
 * const response = await client.send(command);
 * // { // CreateApiKeyResponse
 * //   apiKey: { // ApiKey
 * //     id: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     expires: Number("long"),
 * //     deletes: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateApiKeyCommandInput - {@link CreateApiKeyCommandInput}
 * @returns {@link CreateApiKeyCommandOutput}
 * @see {@link CreateApiKeyCommandInput} for command's `input` shape.
 * @see {@link CreateApiKeyCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link ApiKeyLimitExceededException} (client fault)
 *  <p>The API key exceeded a limit. Try your request again.</p>
 *
 * @throws {@link ApiKeyValidityOutOfBoundsException} (client fault)
 *  <p>The API key expiration must be set to a value between 1 and 365 days from creation (for
 *             <code>CreateApiKey</code>) or from update (for <code>UpdateApiKey</code>).</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 *
 * @public
 */
export class CreateApiKeyCommand extends $Command
  .classBuilder<
    CreateApiKeyCommandInput,
    CreateApiKeyCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepdishControlPlaneService", "CreateApiKey", {})
  .n("AppSyncClient", "CreateApiKeyCommand")
  .f(void 0, void 0)
  .ser(se_CreateApiKeyCommand)
  .de(de_CreateApiKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApiKeyRequest;
      output: CreateApiKeyResponse;
    };
    sdk: {
      input: CreateApiKeyCommandInput;
      output: CreateApiKeyCommandOutput;
    };
  };
}
