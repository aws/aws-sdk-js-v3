// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartApplicationRequest, StartApplicationResponse } from "../models/models_0";
import { StartApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartApplicationCommand}.
 */
export interface StartApplicationCommandInput extends StartApplicationRequest {}
/**
 * @public
 *
 * The output of {@link StartApplicationCommand}.
 */
export interface StartApplicationCommandOutput extends StartApplicationResponse, __MetadataBearer {}

/**
 * Starts a specified application and initializes initial capacity if configured.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, StartApplicationCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, StartApplicationCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * // import type { EMRServerlessClientConfig } from "@aws-sdk/client-emr-serverless";
 * const config = {}; // type is EMRServerlessClientConfig
 * const client = new EMRServerlessClient(config);
 * const input = { // StartApplicationRequest
 *   applicationId: "STRING_VALUE", // required
 * };
 * const command = new StartApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartApplicationCommandInput - {@link StartApplicationCommandInput}
 * @returns {@link StartApplicationCommandOutput}
 * @see {@link StartApplicationCommandInput} for command's `input` shape.
 * @see {@link StartApplicationCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The maximum number of resources per account has been reached.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link EMRServerlessServiceException}
 *
 * Base exception class for all service exceptions from EMRServerless service.
 *
 * @public
 */
export class StartApplicationCommand extends command<StartApplicationCommandInput, StartApplicationCommandOutput>(
  _ep0,
  _mw0,
  "StartApplication",
  StartApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartApplicationRequest;
      output: {};
    };
    sdk: {
      input: StartApplicationCommandInput;
      output: StartApplicationCommandOutput;
    };
  };
}
