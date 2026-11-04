// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutDefaultApplicationSettingRequest, PutDefaultApplicationSettingResponse } from "../models/models_1";
import { PutDefaultApplicationSetting$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutDefaultApplicationSettingCommand}.
 */
export interface PutDefaultApplicationSettingCommandInput extends PutDefaultApplicationSettingRequest {}
/**
 * @public
 *
 * The output of {@link PutDefaultApplicationSettingCommand}.
 */
export interface PutDefaultApplicationSettingCommandOutput extends PutDefaultApplicationSettingResponse, __MetadataBearer {}

/**
 * Sets the default application to the application with the specified ARN.
 *
 * To remove the default application, use the `GetDefaultApplicationSetting` operation to get the current default and then call the `PutDefaultApplicationSetting` with the current applications ARN and the `setAsDefault` parameter set to `false`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, PutDefaultApplicationSettingCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, PutDefaultApplicationSettingCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // PutDefaultApplicationSettingRequest
 *   applicationArn: "STRING_VALUE", // required
 *   setAsDefault: true || false, // required
 * };
 * const command = new PutDefaultApplicationSettingCommand(input);
 * const response = await client.send(command);
 * // { // PutDefaultApplicationSettingResponse
 * //   applicationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutDefaultApplicationSettingCommandInput - {@link PutDefaultApplicationSettingCommandInput}
 * @returns {@link PutDefaultApplicationSettingCommandOutput}
 * @see {@link PutDefaultApplicationSettingCommandInput} for command's `input` shape.
 * @see {@link PutDefaultApplicationSettingCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * An error occurred because you don't have permissions to access the resource.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Request processing failed because of an unknown error, exception, or internal failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An exception for accessing or deleting a resource that doesn't exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception for accessing or deleting a resource that doesn't exist.
 *
 * @throws {@link OpenSearchServiceException}
 *
 * Base exception class for all service exceptions from OpenSearch service.
 *
 * @public
 */
export class PutDefaultApplicationSettingCommand extends command<PutDefaultApplicationSettingCommandInput, PutDefaultApplicationSettingCommandOutput>(
  _ep0,
  _mw0,
  "PutDefaultApplicationSetting",
  PutDefaultApplicationSetting$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDefaultApplicationSettingRequest;
      output: PutDefaultApplicationSettingResponse;
    };
    sdk: {
      input: PutDefaultApplicationSettingCommandInput;
      output: PutDefaultApplicationSettingCommandOutput;
    };
  };
}
