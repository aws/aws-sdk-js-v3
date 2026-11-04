// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAlertManagerDefinitionRequest, CreateAlertManagerDefinitionResponse } from "../models/models_0";
import { CreateAlertManagerDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAlertManagerDefinitionCommand}.
 */
export interface CreateAlertManagerDefinitionCommandInput extends CreateAlertManagerDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateAlertManagerDefinitionCommand}.
 */
export interface CreateAlertManagerDefinitionCommandOutput extends CreateAlertManagerDefinitionResponse, __MetadataBearer {}

/**
 * The `CreateAlertManagerDefinition` operation creates the alert manager definition in a workspace. If a workspace already has an alert manager definition, don't use this operation to update it. Instead, use `PutAlertManagerDefinition`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, CreateAlertManagerDefinitionCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, CreateAlertManagerDefinitionCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // CreateAlertManagerDefinitionRequest
 *   workspaceId: "STRING_VALUE", // required
 *   data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAlertManagerDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateAlertManagerDefinitionResponse
 * //   status: { // AlertManagerDefinitionStatus
 * //     statusCode: "STRING_VALUE", // required
 * //     statusReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAlertManagerDefinitionCommandInput - {@link CreateAlertManagerDefinitionCommandInput}
 * @returns {@link CreateAlertManagerDefinitionCommandOutput}
 * @see {@link CreateAlertManagerDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateAlertManagerDefinitionCommandOutput} for command's `response` shape.
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
export class CreateAlertManagerDefinitionCommand extends command<CreateAlertManagerDefinitionCommandInput, CreateAlertManagerDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "CreateAlertManagerDefinition",
  CreateAlertManagerDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAlertManagerDefinitionRequest;
      output: CreateAlertManagerDefinitionResponse;
    };
    sdk: {
      input: CreateAlertManagerDefinitionCommandInput;
      output: CreateAlertManagerDefinitionCommandOutput;
    };
  };
}
