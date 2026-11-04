// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutAlertManagerDefinitionRequest, PutAlertManagerDefinitionResponse } from "../models/models_0";
import { PutAlertManagerDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutAlertManagerDefinitionCommand}.
 */
export interface PutAlertManagerDefinitionCommandInput extends PutAlertManagerDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link PutAlertManagerDefinitionCommand}.
 */
export interface PutAlertManagerDefinitionCommandOutput extends PutAlertManagerDefinitionResponse, __MetadataBearer {}

/**
 * Updates an existing alert manager definition in a workspace. If the workspace does not already have an alert manager definition, don't use this operation to create it. Instead, use `CreateAlertManagerDefinition`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, PutAlertManagerDefinitionCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, PutAlertManagerDefinitionCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // PutAlertManagerDefinitionRequest
 *   workspaceId: "STRING_VALUE", // required
 *   data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new PutAlertManagerDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // PutAlertManagerDefinitionResponse
 * //   status: { // AlertManagerDefinitionStatus
 * //     statusCode: "STRING_VALUE", // required
 * //     statusReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutAlertManagerDefinitionCommandInput - {@link PutAlertManagerDefinitionCommandInput}
 * @returns {@link PutAlertManagerDefinitionCommandOutput}
 * @see {@link PutAlertManagerDefinitionCommandInput} for command's `input` shape.
 * @see {@link PutAlertManagerDefinitionCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request would cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resources that doesn't exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Completing the request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link AmpServiceException}
 *
 * Base exception class for all service exceptions from Amp service.
 *
 * @public
 */
export class PutAlertManagerDefinitionCommand extends command<PutAlertManagerDefinitionCommandInput, PutAlertManagerDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "PutAlertManagerDefinition",
  PutAlertManagerDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAlertManagerDefinitionRequest;
      output: PutAlertManagerDefinitionResponse;
    };
    sdk: {
      input: PutAlertManagerDefinitionCommandInput;
      output: PutAlertManagerDefinitionCommandOutput;
    };
  };
}
