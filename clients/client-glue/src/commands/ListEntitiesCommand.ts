// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListEntitiesRequest, ListEntitiesResponse } from "../models/models_2";
import { de_ListEntitiesCommand, se_ListEntitiesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEntitiesCommand}.
 */
export interface ListEntitiesCommandInput extends ListEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListEntitiesCommand}.
 */
export interface ListEntitiesCommandOutput extends ListEntitiesResponse, __MetadataBearer {}

/**
 * <p>Returns the available entities supported by the connection type. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListEntitiesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListEntitiesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // ListEntitiesRequest
 *   ConnectionName: "STRING_VALUE",
 *   CatalogId: "STRING_VALUE",
 *   ParentEntityName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   DataStoreApiVersion: "STRING_VALUE",
 * };
 * const command = new ListEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListEntitiesResponse
 * //   Entities: [ // EntityList
 * //     { // Entity
 * //       EntityName: "STRING_VALUE",
 * //       Label: "STRING_VALUE",
 * //       IsParentEntity: true || false,
 * //       Description: "STRING_VALUE",
 * //       Category: "STRING_VALUE",
 * //       CustomProperties: { // CustomProperties
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEntitiesCommandInput - {@link ListEntitiesCommandInput}
 * @returns {@link ListEntitiesCommandOutput}
 * @see {@link ListEntitiesCommandInput} for command's `input` shape.
 * @see {@link ListEntitiesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link FederationSourceException} (client fault)
 *  <p>A federation source failed.</p>
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *  <p>An encryption operation failed.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
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
export class ListEntitiesCommand extends $Command
  .classBuilder<
    ListEntitiesCommandInput,
    ListEntitiesCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "ListEntities", {})
  .n("GlueClient", "ListEntitiesCommand")
  .f(void 0, void 0)
  .ser(se_ListEntitiesCommand)
  .de(de_ListEntitiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEntitiesRequest;
      output: ListEntitiesResponse;
    };
    sdk: {
      input: ListEntitiesCommandInput;
      output: ListEntitiesCommandOutput;
    };
  };
}
