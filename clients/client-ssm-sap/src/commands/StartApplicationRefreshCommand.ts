// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartApplicationRefreshInput, StartApplicationRefreshOutput } from "../models/models_0";
import { StartApplicationRefresh$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartApplicationRefreshCommand}.
 */
export interface StartApplicationRefreshCommandInput extends StartApplicationRefreshInput {}
/**
 * @public
 *
 * The output of {@link StartApplicationRefreshCommand}.
 */
export interface StartApplicationRefreshCommandOutput extends StartApplicationRefreshOutput, __MetadataBearer {}

/**
 * <p>Refreshes a registered application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, StartApplicationRefreshCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, StartApplicationRefreshCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * // import type { SsmSapClientConfig } from "@aws-sdk/client-ssm-sap";
 * const config = {}; // type is SsmSapClientConfig
 * const client = new SsmSapClient(config);
 * const input = { // StartApplicationRefreshInput
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new StartApplicationRefreshCommand(input);
 * const response = await client.send(command);
 * // { // StartApplicationRefreshOutput
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartApplicationRefreshCommandInput - {@link StartApplicationRefreshCommandInput}
 * @returns {@link StartApplicationRefreshCommandOutput}
 * @see {@link StartApplicationRefreshCommandInput} for command's `input` shape.
 * @see {@link StartApplicationRefreshCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict has occurred.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource is not available.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is not authorized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 * @throws {@link SsmSapServiceException}
 * <p>Base exception class for all service exceptions from SsmSap service.</p>
 *
 *
 * @public
 */
export class StartApplicationRefreshCommand extends command<StartApplicationRefreshCommandInput, StartApplicationRefreshCommandOutput>(
  _ep0,
  _mw0,
  "StartApplicationRefresh",
  StartApplicationRefresh$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartApplicationRefreshInput;
      output: StartApplicationRefreshOutput;
    };
    sdk: {
      input: StartApplicationRefreshCommandInput;
      output: StartApplicationRefreshCommandOutput;
    };
  };
}
