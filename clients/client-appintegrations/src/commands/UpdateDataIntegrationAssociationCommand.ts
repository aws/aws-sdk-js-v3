// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateDataIntegrationAssociationRequest,
  UpdateDataIntegrationAssociationResponse,
} from "../models/models_0";
import { UpdateDataIntegrationAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDataIntegrationAssociationCommand}.
 */
export interface UpdateDataIntegrationAssociationCommandInput extends UpdateDataIntegrationAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataIntegrationAssociationCommand}.
 */
export interface UpdateDataIntegrationAssociationCommandOutput extends UpdateDataIntegrationAssociationResponse, __MetadataBearer {}

/**
 * Updates and persists a DataIntegrationAssociation resource.
 *
 * > **Note:** Updating a DataIntegrationAssociation with ExecutionConfiguration will rerun the on-demand job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, UpdateDataIntegrationAssociationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, UpdateDataIntegrationAssociationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * // import type { AppIntegrationsClientConfig } from "@aws-sdk/client-appintegrations";
 * const config = {}; // type is AppIntegrationsClientConfig
 * const client = new AppIntegrationsClient(config);
 * const input = { // UpdateDataIntegrationAssociationRequest
 *   DataIntegrationIdentifier: "STRING_VALUE", // required
 *   DataIntegrationAssociationIdentifier: "STRING_VALUE", // required
 *   ExecutionConfiguration: { // ExecutionConfiguration
 *     ExecutionMode: "ON_DEMAND" || "SCHEDULED", // required
 *     OnDemandConfiguration: { // OnDemandConfiguration
 *       StartTime: "STRING_VALUE", // required
 *       EndTime: "STRING_VALUE",
 *     },
 *     ScheduleConfiguration: { // ScheduleConfiguration
 *       FirstExecutionFrom: "STRING_VALUE",
 *       Object: "STRING_VALUE",
 *       ScheduleExpression: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new UpdateDataIntegrationAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDataIntegrationAssociationCommandInput - {@link UpdateDataIntegrationAssociationCommandInput}
 * @returns {@link UpdateDataIntegrationAssociationCommandOutput}
 * @see {@link UpdateDataIntegrationAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateDataIntegrationAssociationCommandOutput} for command's `response` shape.
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
export class UpdateDataIntegrationAssociationCommand extends command<UpdateDataIntegrationAssociationCommandInput, UpdateDataIntegrationAssociationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDataIntegrationAssociation",
  UpdateDataIntegrationAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataIntegrationAssociationRequest;
      output: {};
    };
    sdk: {
      input: UpdateDataIntegrationAssociationCommandInput;
      output: UpdateDataIntegrationAssociationCommandOutput;
    };
  };
}
