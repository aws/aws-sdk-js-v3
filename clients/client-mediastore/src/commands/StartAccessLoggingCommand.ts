// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartAccessLoggingInput, StartAccessLoggingOutput } from "../models/models_0";
import { StartAccessLogging$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartAccessLoggingCommand}.
 */
export interface StartAccessLoggingCommandInput extends StartAccessLoggingInput {}
/**
 * @public
 *
 * The output of {@link StartAccessLoggingCommand}.
 */
export interface StartAccessLoggingCommandOutput extends StartAccessLoggingOutput, __MetadataBearer {}

/**
 * <p>Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, StartAccessLoggingCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, StartAccessLoggingCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * // import type { MediaStoreClientConfig } from "@aws-sdk/client-mediastore";
 * const config = {}; // type is MediaStoreClientConfig
 * const client = new MediaStoreClient(config);
 * const input = { // StartAccessLoggingInput
 *   ContainerName: "STRING_VALUE", // required
 * };
 * const command = new StartAccessLoggingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartAccessLoggingCommandInput - {@link StartAccessLoggingCommandInput}
 * @returns {@link StartAccessLoggingCommandOutput}
 * @see {@link StartAccessLoggingCommandInput} for command's `input` shape.
 * @see {@link StartAccessLoggingCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for MediaStoreClient's `config` shape.
 *
 * @throws {@link ContainerInUseException} (client fault)
 *  <p>The container that you specified in the request already exists or is being
 *          updated.</p>
 *
 * @throws {@link ContainerNotFoundException} (client fault)
 *  <p>The container that you specified in the request does not exist.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link MediaStoreServiceException}
 * <p>Base exception class for all service exceptions from MediaStore service.</p>
 *
 *
 * @public
 */
export class StartAccessLoggingCommand extends command<StartAccessLoggingCommandInput, StartAccessLoggingCommandOutput>(
  _ep0,
  _mw0,
  "StartAccessLogging",
  StartAccessLogging$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAccessLoggingInput;
      output: {};
    };
    sdk: {
      input: StartAccessLoggingCommandInput;
      output: StartAccessLoggingCommandOutput;
    };
  };
}
