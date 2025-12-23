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
  ListEventIntegrationAssociationsRequest,
  ListEventIntegrationAssociationsResponse,
} from "../models/models_0";
import { ListEventIntegrationAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventIntegrationAssociationsCommand}.
 */
export interface ListEventIntegrationAssociationsCommandInput extends ListEventIntegrationAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListEventIntegrationAssociationsCommand}.
 */
export interface ListEventIntegrationAssociationsCommandOutput extends ListEventIntegrationAssociationsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of event integration associations in the account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, ListEventIntegrationAssociationsCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, ListEventIntegrationAssociationsCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * // import type { AppIntegrationsClientConfig } from "@aws-sdk/client-appintegrations";
 * const config = {}; // type is AppIntegrationsClientConfig
 * const client = new AppIntegrationsClient(config);
 * const input = { // ListEventIntegrationAssociationsRequest
 *   EventIntegrationName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEventIntegrationAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventIntegrationAssociationsResponse
 * //   EventIntegrationAssociations: [ // EventIntegrationAssociationsList
 * //     { // EventIntegrationAssociation
 * //       EventIntegrationAssociationArn: "STRING_VALUE",
 * //       EventIntegrationAssociationId: "STRING_VALUE",
 * //       EventIntegrationName: "STRING_VALUE",
 * //       ClientId: "STRING_VALUE",
 * //       EventBridgeRuleName: "STRING_VALUE",
 * //       ClientAssociationMetadata: { // ClientAssociationMetadata
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventIntegrationAssociationsCommandInput - {@link ListEventIntegrationAssociationsCommandInput}
 * @returns {@link ListEventIntegrationAssociationsCommandOutput}
 * @see {@link ListEventIntegrationAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListEventIntegrationAssociationsCommandOutput} for command's `response` shape.
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
export class ListEventIntegrationAssociationsCommand extends $Command
  .classBuilder<
    ListEventIntegrationAssociationsCommandInput,
    ListEventIntegrationAssociationsCommandOutput,
    AppIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppIntegrationService", "ListEventIntegrationAssociations", {})
  .n("AppIntegrationsClient", "ListEventIntegrationAssociationsCommand")
  .sc(ListEventIntegrationAssociations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventIntegrationAssociationsRequest;
      output: ListEventIntegrationAssociationsResponse;
    };
    sdk: {
      input: ListEventIntegrationAssociationsCommandInput;
      output: ListEventIntegrationAssociationsCommandOutput;
    };
  };
}
