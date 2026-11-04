// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDataIntegrationRequest, UpdateDataIntegrationResponse } from "../models/models_0";
import { UpdateDataIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDataIntegrationCommand}.
 */
export interface UpdateDataIntegrationCommandInput extends UpdateDataIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataIntegrationCommand}.
 */
export interface UpdateDataIntegrationCommandOutput extends UpdateDataIntegrationResponse, __MetadataBearer {}

/**
 * Updates the description of a DataIntegration.
 *
 * > **Note:** You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the [CreateDataIntegration](https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html) API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, UpdateDataIntegrationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, UpdateDataIntegrationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * // import type { AppIntegrationsClientConfig } from "@aws-sdk/client-appintegrations";
 * const config = {}; // type is AppIntegrationsClientConfig
 * const client = new AppIntegrationsClient(config);
 * const input = { // UpdateDataIntegrationRequest
 *   Identifier: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateDataIntegrationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDataIntegrationCommandInput - {@link UpdateDataIntegrationCommandInput}
 * @returns {@link UpdateDataIntegrationCommandOutput}
 * @see {@link UpdateDataIntegrationCommandInput} for command's `input` shape.
 * @see {@link UpdateDataIntegrationCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for AppIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServiceError} (server fault)
 *
 * Request processing failed due to an error or failure with the service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link AppIntegrationsServiceException}
 *
 * Base exception class for all service exceptions from AppIntegrations service.
 *
 * @public
 */
export class UpdateDataIntegrationCommand extends command<UpdateDataIntegrationCommandInput, UpdateDataIntegrationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDataIntegration",
  UpdateDataIntegration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataIntegrationRequest;
      output: {};
    };
    sdk: {
      input: UpdateDataIntegrationCommandInput;
      output: UpdateDataIntegrationCommandOutput;
    };
  };
}
