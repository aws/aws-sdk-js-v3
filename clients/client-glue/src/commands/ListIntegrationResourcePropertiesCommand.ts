// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type {
  ListIntegrationResourcePropertiesRequest,
  ListIntegrationResourcePropertiesResponse,
} from "../models/models_2";
import { ListIntegrationResourceProperties$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIntegrationResourcePropertiesCommand}.
 */
export interface ListIntegrationResourcePropertiesCommandInput extends ListIntegrationResourcePropertiesRequest {}
/**
 * @public
 *
 * The output of {@link ListIntegrationResourcePropertiesCommand}.
 */
export interface ListIntegrationResourcePropertiesCommandOutput extends ListIntegrationResourcePropertiesResponse, __MetadataBearer {}

/**
 * <p>List integration resource properties for a single customer. It supports the filters, maxRecords and markers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListIntegrationResourcePropertiesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListIntegrationResourcePropertiesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListIntegrationResourcePropertiesRequest
 *   Marker: "STRING_VALUE",
 *   Filters: [ // IntegrationResourcePropertyFilterList
 *     { // IntegrationResourcePropertyFilter
 *       Name: "STRING_VALUE",
 *       Values: [ // IntegrationResourcePropertyFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 * };
 * const command = new ListIntegrationResourcePropertiesCommand(input);
 * const response = await client.send(command);
 * // { // ListIntegrationResourcePropertiesResponse
 * //   IntegrationResourcePropertyList: [ // IntegrationResourcePropertyList
 * //     { // IntegrationResourceProperty
 * //       ResourceArn: "STRING_VALUE", // required
 * //       ResourcePropertyArn: "STRING_VALUE",
 * //       SourceProcessingProperties: { // SourceProcessingProperties
 * //         RoleArn: "STRING_VALUE",
 * //       },
 * //       TargetProcessingProperties: { // TargetProcessingProperties
 * //         RoleArn: "STRING_VALUE",
 * //         KmsArn: "STRING_VALUE",
 * //         ConnectionName: "STRING_VALUE",
 * //         EventBusArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIntegrationResourcePropertiesCommandInput - {@link ListIntegrationResourcePropertiesCommandInput}
 * @returns {@link ListIntegrationResourcePropertiesCommandOutput}
 * @see {@link ListIntegrationResourcePropertiesCommandInput} for command's `input` shape.
 * @see {@link ListIntegrationResourcePropertiesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A value could not be validated.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class ListIntegrationResourcePropertiesCommand extends $Command
  .classBuilder<
    ListIntegrationResourcePropertiesCommandInput,
    ListIntegrationResourcePropertiesCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "ListIntegrationResourceProperties", {})
  .n("GlueClient", "ListIntegrationResourcePropertiesCommand")
  .sc(ListIntegrationResourceProperties$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIntegrationResourcePropertiesRequest;
      output: ListIntegrationResourcePropertiesResponse;
    };
    sdk: {
      input: ListIntegrationResourcePropertiesCommandInput;
      output: ListIntegrationResourcePropertiesCommandOutput;
    };
  };
}
