// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppIntegrationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppIntegrationsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListApplicationAssociationsRequest, ListApplicationAssociationsResponse } from "../models/models_0";
import {
  de_ListApplicationAssociationsCommand,
  se_ListApplicationAssociationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationAssociationsCommand}.
 */
export interface ListApplicationAssociationsCommandInput extends ListApplicationAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationAssociationsCommand}.
 */
export interface ListApplicationAssociationsCommandOutput
  extends ListApplicationAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a paginated list of application associations for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, ListApplicationAssociationsCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, ListApplicationAssociationsCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * const client = new AppIntegrationsClient(config);
 * const input = { // ListApplicationAssociationsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListApplicationAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationAssociationsResponse
 * //   ApplicationAssociations: [ // ApplicationAssociationsList
 * //     { // ApplicationAssociationSummary
 * //       ApplicationAssociationArn: "STRING_VALUE",
 * //       ApplicationArn: "STRING_VALUE",
 * //       ClientId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationAssociationsCommandInput - {@link ListApplicationAssociationsCommandInput}
 * @returns {@link ListApplicationAssociationsCommandOutput}
 * @see {@link ListApplicationAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationAssociationsCommandOutput} for command's `response` shape.
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
 * @example To list application associations of an application
 * ```javascript
 * // The following retrives application associations of an application
 * const input = {
 *   "ApplicationId": "98542c53-e8ac-4570-9c85-c6552c8d9c5e"
 * };
 * const command = new ListApplicationAssociationsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ApplicationAssociations": [
 *     {
 *       "ApplicationArn": "arn:aws:app-integrations:us-west-2:0123456789012:application/98542c53-e8ac-4570-9c85-c6552c8d9c5e",
 *       "ApplicationAssociationArn": "arn:aws:app-integrations:us-west-2:0123456789012:application-association/98542c53-e8ac-4570-9c85-c6552c8d9c5e/461dfb57-320a-454d-9bba-bb560845ff38",
 *       "ClientId": "connect.amazonaws.com"
 *     }
 *   ],
 *   "NextToken": "abc"
 * }
 * *\/
 * // example id: list-application-associations
 * ```
 *
 */
export class ListApplicationAssociationsCommand extends $Command
  .classBuilder<
    ListApplicationAssociationsCommandInput,
    ListApplicationAssociationsCommandOutput,
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
  .s("AmazonAppIntegrationService", "ListApplicationAssociations", {})
  .n("AppIntegrationsClient", "ListApplicationAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListApplicationAssociationsCommand)
  .de(de_ListApplicationAssociationsCommand)
  .build() {}
