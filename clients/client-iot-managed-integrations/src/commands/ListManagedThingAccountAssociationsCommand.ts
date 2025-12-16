// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import type {
  ListManagedThingAccountAssociationsRequest,
  ListManagedThingAccountAssociationsResponse,
} from "../models/models_0";
import { ListManagedThingAccountAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListManagedThingAccountAssociationsCommand}.
 */
export interface ListManagedThingAccountAssociationsCommandInput extends ListManagedThingAccountAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedThingAccountAssociationsCommand}.
 */
export interface ListManagedThingAccountAssociationsCommandOutput
  extends ListManagedThingAccountAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Lists all account associations for a specific managed thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListManagedThingAccountAssociationsCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListManagedThingAccountAssociationsCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // ListManagedThingAccountAssociationsRequest
 *   ManagedThingId: "STRING_VALUE",
 *   AccountAssociationId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListManagedThingAccountAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedThingAccountAssociationsResponse
 * //   Items: [ // ManagedThingAssociationList
 * //     { // ManagedThingAssociation
 * //       ManagedThingId: "STRING_VALUE",
 * //       AccountAssociationId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListManagedThingAccountAssociationsCommandInput - {@link ListManagedThingAccountAssociationsCommandInput}
 * @returns {@link ListManagedThingAccountAssociationsCommandOutput}
 * @see {@link ListManagedThingAccountAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListManagedThingAccountAssociationsCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
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
export class ListManagedThingAccountAssociationsCommand extends $Command
  .classBuilder<
    ListManagedThingAccountAssociationsCommandInput,
    ListManagedThingAccountAssociationsCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "ListManagedThingAccountAssociations", {})
  .n("IoTManagedIntegrationsClient", "ListManagedThingAccountAssociationsCommand")
  .sc(ListManagedThingAccountAssociations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedThingAccountAssociationsRequest;
      output: ListManagedThingAccountAssociationsResponse;
    };
    sdk: {
      input: ListManagedThingAccountAssociationsCommandInput;
      output: ListManagedThingAccountAssociationsCommandOutput;
    };
  };
}
