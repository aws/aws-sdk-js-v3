// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppIntegrationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppIntegrationsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDataIntegrationsRequest, ListDataIntegrationsResponse } from "../models/models_0";
import { de_ListDataIntegrationsCommand, se_ListDataIntegrationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataIntegrationsCommand}.
 */
export interface ListDataIntegrationsCommandInput extends ListDataIntegrationsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataIntegrationsCommand}.
 */
export interface ListDataIntegrationsCommandOutput extends ListDataIntegrationsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of DataIntegrations in the account.</p>
 *          <note>
 *             <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated.
 * Use a different DataIntegration, or recreate the DataIntegration using the
 * <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, ListDataIntegrationsCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, ListDataIntegrationsCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * const client = new AppIntegrationsClient(config);
 * const input = { // ListDataIntegrationsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDataIntegrationsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataIntegrationsResponse
 * //   DataIntegrations: [ // DataIntegrationsList
 * //     { // DataIntegrationSummary
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       SourceURI: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataIntegrationsCommandInput - {@link ListDataIntegrationsCommandInput}
 * @returns {@link ListDataIntegrationsCommandOutput}
 * @see {@link ListDataIntegrationsCommandInput} for command's `input` shape.
 * @see {@link ListDataIntegrationsCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link AppIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from AppIntegrations service.</p>
 *
 *
 * @public
 */
export class ListDataIntegrationsCommand extends $Command
  .classBuilder<
    ListDataIntegrationsCommandInput,
    ListDataIntegrationsCommandOutput,
    AppIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppIntegrationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAppIntegrationService", "ListDataIntegrations", {})
  .n("AppIntegrationsClient", "ListDataIntegrationsCommand")
  .f(void 0, void 0)
  .ser(se_ListDataIntegrationsCommand)
  .de(de_ListDataIntegrationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataIntegrationsRequest;
      output: ListDataIntegrationsResponse;
    };
    sdk: {
      input: ListDataIntegrationsCommandInput;
      output: ListDataIntegrationsCommandOutput;
    };
  };
}
