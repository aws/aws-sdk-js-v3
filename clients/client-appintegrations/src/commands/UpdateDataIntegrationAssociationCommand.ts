// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  AppIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../AppIntegrationsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  UpdateDataIntegrationAssociationRequest,
  UpdateDataIntegrationAssociationResponse,
} from "../models/models_0";
import { UpdateDataIntegrationAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates and persists a DataIntegrationAssociation resource.</p>
 *          <note>
 *             <p>
 *       Updating a DataIntegrationAssociation with ExecutionConfiguration will rerun the on-demand job.
 *       </p>
 *          </note>
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link AppIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from AppIntegrations service.</p>
 *
 *
 * @public
 */
export class UpdateDataIntegrationAssociationCommand extends $Command
  .classBuilder<
    UpdateDataIntegrationAssociationCommandInput,
    UpdateDataIntegrationAssociationCommandOutput,
    AppIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppIntegrationService", "UpdateDataIntegrationAssociation", {})
  .n("AppIntegrationsClient", "UpdateDataIntegrationAssociationCommand")
  .sc(UpdateDataIntegrationAssociation$)
  .build() {
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
