// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateApiKeyRequest, CreateApiKeyResponse } from "../models/models_0";
import { CreateApiKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a unique key that you can distribute to clients who invoke your API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, CreateApiKeyCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, CreateApiKeyCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
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
 *
 * The API key exceeded a limit. Try your request again.
 *
 * @throws {@link ApiKeyValidityOutOfBoundsException} (client fault)
 *
 * The API key expiration must be set to a value between 1 and 365 days from creation (for `CreateApiKey`) or from update (for `UpdateApiKey`).
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal AppSync error occurred. Try your request again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request exceeded a limit. Try your request again.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource specified in the request was not found. Check the resource, and then try again.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You aren't authorized to perform this operation.
 *
 * @throws {@link AppSyncServiceException}
 *
 * Base exception class for all service exceptions from AppSync service.
 *
 * @public
 */
export class CreateApiKeyCommand extends command<CreateApiKeyCommandInput, CreateApiKeyCommandOutput>(
  _ep0,
  _mw0,
  "CreateApiKey",
  CreateApiKey$
) {
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
