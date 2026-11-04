// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetGlueIdentityCenterConfigurationRequest,
  GetGlueIdentityCenterConfigurationResponse,
} from "../models/models_2";
import { GetGlueIdentityCenterConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetGlueIdentityCenterConfigurationCommand}.
 */
export interface GetGlueIdentityCenterConfigurationCommandInput extends GetGlueIdentityCenterConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetGlueIdentityCenterConfigurationCommand}.
 */
export interface GetGlueIdentityCenterConfigurationCommandOutput extends GetGlueIdentityCenterConfigurationResponse, __MetadataBearer {}

/**
 * Retrieves the current Glue Identity Center configuration details, including the associated Identity Center instance and application information.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetGlueIdentityCenterConfigurationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetGlueIdentityCenterConfigurationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = {};
 * const command = new GetGlueIdentityCenterConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetGlueIdentityCenterConfigurationResponse
 * //   ApplicationArn: "STRING_VALUE",
 * //   InstanceArn: "STRING_VALUE",
 * //   Scopes: [ // OrchestrationStringList
 * //     "STRING_VALUE",
 * //   ],
 * //   UserBackgroundSessionsEnabled: true || false,
 * // };
 *
 * ```
 *
 * @param GetGlueIdentityCenterConfigurationCommandInput - {@link GetGlueIdentityCenterConfigurationCommandInput}
 * @returns {@link GetGlueIdentityCenterConfigurationCommandOutput}
 * @see {@link GetGlueIdentityCenterConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetGlueIdentityCenterConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Two processes are trying to modify a resource simultaneously.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class GetGlueIdentityCenterConfigurationCommand extends command<GetGlueIdentityCenterConfigurationCommandInput, GetGlueIdentityCenterConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetGlueIdentityCenterConfiguration",
  GetGlueIdentityCenterConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetGlueIdentityCenterConfigurationResponse;
    };
    sdk: {
      input: GetGlueIdentityCenterConfigurationCommandInput;
      output: GetGlueIdentityCenterConfigurationCommandOutput;
    };
  };
}
