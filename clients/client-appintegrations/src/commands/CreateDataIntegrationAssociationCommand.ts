// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateDataIntegrationAssociationRequest,
  CreateDataIntegrationAssociationResponse,
} from "../models/models_0";
import { CreateDataIntegrationAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDataIntegrationAssociationCommand}.
 */
export interface CreateDataIntegrationAssociationCommandInput extends CreateDataIntegrationAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataIntegrationAssociationCommand}.
 */
export interface CreateDataIntegrationAssociationCommandOutput extends CreateDataIntegrationAssociationResponse, __MetadataBearer {}

/**
 * Creates and persists a DataIntegrationAssociation resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, CreateDataIntegrationAssociationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, CreateDataIntegrationAssociationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * // import type { AppIntegrationsClientConfig } from "@aws-sdk/client-appintegrations";
 * const config = {}; // type is AppIntegrationsClientConfig
 * const client = new AppIntegrationsClient(config);
 * const input = { // CreateDataIntegrationAssociationRequest
 *   DataIntegrationIdentifier: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE",
 *   ObjectConfiguration: { // ObjectConfiguration
 *     "<keys>": { // FieldsMap
 *       "<keys>": [ // FieldsList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   DestinationURI: "STRING_VALUE",
 *   ClientAssociationMetadata: { // ClientAssociationMetadata
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
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
 * const command = new CreateDataIntegrationAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataIntegrationAssociationResponse
 * //   DataIntegrationAssociationId: "STRING_VALUE",
 * //   DataIntegrationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDataIntegrationAssociationCommandInput - {@link CreateDataIntegrationAssociationCommandInput}
 * @returns {@link CreateDataIntegrationAssociationCommandOutput}
 * @see {@link CreateDataIntegrationAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateDataIntegrationAssociationCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceQuotaExceededException} (client fault)
 *
 * The allowed quota for the resource has been exceeded.
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
export class CreateDataIntegrationAssociationCommand extends command<CreateDataIntegrationAssociationCommandInput, CreateDataIntegrationAssociationCommandOutput>(
  _ep0,
  _mw0,
  "CreateDataIntegrationAssociation",
  CreateDataIntegrationAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataIntegrationAssociationRequest;
      output: CreateDataIntegrationAssociationResponse;
    };
    sdk: {
      input: CreateDataIntegrationAssociationCommandInput;
      output: CreateDataIntegrationAssociationCommandOutput;
    };
  };
}
