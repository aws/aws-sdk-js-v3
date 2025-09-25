// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppIntegrationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppIntegrationsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDataIntegrationAssociationRequest, CreateDataIntegrationAssociationResponse } from "../models/models_0";
import { CreateDataIntegrationAssociation } from "../schemas/schemas_6_Integration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface CreateDataIntegrationAssociationCommandOutput
  extends CreateDataIntegrationAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Creates and persists a DataIntegrationAssociation resource.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>Request processing failed due to an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ResourceQuotaExceededException} (client fault)
 *  <p>The allowed quota for the resource has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link AppIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from AppIntegrations service.</p>
 *
 *
 * @public
 */
export class CreateDataIntegrationAssociationCommand extends $Command
  .classBuilder<
    CreateDataIntegrationAssociationCommandInput,
    CreateDataIntegrationAssociationCommandOutput,
    AppIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppIntegrationService", "CreateDataIntegrationAssociation", {})
  .n("AppIntegrationsClient", "CreateDataIntegrationAssociationCommand")
  .sc(CreateDataIntegrationAssociation)
  .build() {
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
