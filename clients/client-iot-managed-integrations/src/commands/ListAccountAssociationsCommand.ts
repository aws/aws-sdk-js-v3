// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import { ListAccountAssociationsRequest, ListAccountAssociationsResponse } from "../models/models_0";
import { de_ListAccountAssociationsCommand, se_ListAccountAssociationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccountAssociationsCommand}.
 */
export interface ListAccountAssociationsCommandInput extends ListAccountAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAccountAssociationsCommand}.
 */
export interface ListAccountAssociationsCommandOutput extends ListAccountAssociationsResponse, __MetadataBearer {}

/**
 * <p>Lists all account associations, with optional filtering by connector destination ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListAccountAssociationsCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListAccountAssociationsCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // ListAccountAssociationsRequest
 *   ConnectorDestinationId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAccountAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountAssociationsResponse
 * //   Items: [ // AccountAssociationListDefinition
 * //     { // AccountAssociationItem
 * //       AccountAssociationId: "STRING_VALUE", // required
 * //       AssociationState: "ASSOCIATION_IN_PROGRESS" || "ASSOCIATION_FAILED" || "ASSOCIATION_SUCCEEDED" || "ASSOCIATION_DELETING" || "REFRESH_TOKEN_EXPIRED", // required
 * //       ErrorMessage: "STRING_VALUE",
 * //       ConnectorDestinationId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountAssociationsCommandInput - {@link ListAccountAssociationsCommandInput}
 * @returns {@link ListAccountAssociationsCommandOutput}
 * @see {@link ListAccountAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListAccountAssociationsCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
 *
 * @public
 */
export class ListAccountAssociationsCommand extends $Command
  .classBuilder<
    ListAccountAssociationsCommandInput,
    ListAccountAssociationsCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotManagedIntegrations", "ListAccountAssociations", {})
  .n("IoTManagedIntegrationsClient", "ListAccountAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListAccountAssociationsCommand)
  .de(de_ListAccountAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountAssociationsRequest;
      output: ListAccountAssociationsResponse;
    };
    sdk: {
      input: ListAccountAssociationsCommandInput;
      output: ListAccountAssociationsCommandOutput;
    };
  };
}
