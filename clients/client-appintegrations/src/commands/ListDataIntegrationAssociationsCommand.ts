// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppIntegrationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppIntegrationsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDataIntegrationAssociationsRequest, ListDataIntegrationAssociationsResponse } from "../models/models_0";
import {
  de_ListDataIntegrationAssociationsCommand,
  se_ListDataIntegrationAssociationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataIntegrationAssociationsCommand}.
 */
export interface ListDataIntegrationAssociationsCommandInput extends ListDataIntegrationAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataIntegrationAssociationsCommand}.
 */
export interface ListDataIntegrationAssociationsCommandOutput
  extends ListDataIntegrationAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a paginated list of DataIntegration associations in the account.</p>
 *          <note>
 *             <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated.
 * Use a different DataIntegration, or recreate the DataIntegration using the
 * <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, ListDataIntegrationAssociationsCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, ListDataIntegrationAssociationsCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * const client = new AppIntegrationsClient(config);
 * const input = { // ListDataIntegrationAssociationsRequest
 *   DataIntegrationIdentifier: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDataIntegrationAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataIntegrationAssociationsResponse
 * //   DataIntegrationAssociations: [ // DataIntegrationAssociationsList
 * //     { // DataIntegrationAssociationSummary
 * //       DataIntegrationAssociationArn: "STRING_VALUE",
 * //       DataIntegrationArn: "STRING_VALUE",
 * //       ClientId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataIntegrationAssociationsCommandInput - {@link ListDataIntegrationAssociationsCommandInput}
 * @returns {@link ListDataIntegrationAssociationsCommandOutput}
 * @see {@link ListDataIntegrationAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListDataIntegrationAssociationsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListDataIntegrationAssociationsCommand extends $Command
  .classBuilder<
    ListDataIntegrationAssociationsCommandInput,
    ListDataIntegrationAssociationsCommandOutput,
    AppIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppIntegrationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAppIntegrationService", "ListDataIntegrationAssociations", {})
  .n("AppIntegrationsClient", "ListDataIntegrationAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListDataIntegrationAssociationsCommand)
  .de(de_ListDataIntegrationAssociationsCommand)
  .build() {}
