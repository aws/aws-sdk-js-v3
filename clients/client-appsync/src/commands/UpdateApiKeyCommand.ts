// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateApiKeyRequest, UpdateApiKeyResponse } from "../models/models_0";
import { UpdateApiKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApiKeyCommand}.
 */
export interface UpdateApiKeyCommandInput extends UpdateApiKeyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApiKeyCommand}.
 */
export interface UpdateApiKeyCommandOutput extends UpdateApiKeyResponse, __MetadataBearer {}

/**
 * <p>Updates an API key. You can update the key as long as it's not deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, UpdateApiKeyCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, UpdateApiKeyCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // UpdateApiKeyRequest
 *   apiId: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   expires: Number("long"),
 * };
 * const command = new UpdateApiKeyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApiKeyResponse
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
 * @param UpdateApiKeyCommandInput - {@link UpdateApiKeyCommandInput}
 * @returns {@link UpdateApiKeyCommandOutput}
 * @see {@link UpdateApiKeyCommandInput} for command's `input` shape.
 * @see {@link UpdateApiKeyCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
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
export class UpdateApiKeyCommand extends $Command
  .classBuilder<
    UpdateApiKeyCommandInput,
    UpdateApiKeyCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepdishControlPlaneService", "UpdateApiKey", {})
  .n("AppSyncClient", "UpdateApiKeyCommand")
  .sc(UpdateApiKey$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApiKeyRequest;
      output: UpdateApiKeyResponse;
    };
    sdk: {
      input: UpdateApiKeyCommandInput;
      output: UpdateApiKeyCommandOutput;
    };
  };
}
