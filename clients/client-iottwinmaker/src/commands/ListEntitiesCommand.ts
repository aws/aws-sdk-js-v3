// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { ListEntitiesRequest, ListEntitiesResponse } from "../models/models_0";
import { ListEntities } from "../schemas/schemas_0";

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
 * <p>Lists all entities in a workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, ListEntitiesCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, ListEntitiesCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // ListEntitiesRequest
 *   workspaceId: "STRING_VALUE", // required
 *   filters: [ // ListEntitiesFilters
 *     { // ListEntitiesFilter Union: only one key present
 *       parentEntityId: "STRING_VALUE",
 *       componentTypeId: "STRING_VALUE",
 *       externalId: "STRING_VALUE",
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListEntitiesResponse
 * //   entitySummaries: [ // EntitySummaries
 * //     { // EntitySummary
 * //       entityId: "STRING_VALUE", // required
 * //       entityName: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       parentEntityId: "STRING_VALUE",
 * //       status: { // Status
 * //         state: "STRING_VALUE",
 * //         error: { // ErrorDetails
 * //           code: "STRING_VALUE",
 * //           message: "STRING_VALUE",
 * //         },
 * //       },
 * //       description: "STRING_VALUE",
 * //       hasChildEntities: true || false,
 * //       creationDateTime: new Date("TIMESTAMP"), // required
 * //       updateDateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEntitiesCommandInput - {@link ListEntitiesCommandInput}
 * @returns {@link ListEntitiesCommandOutput}
 * @see {@link ListEntitiesCommandInput} for command's `input` shape.
 * @see {@link ListEntitiesCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota was exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Failed</p>
 *
 * @throws {@link IoTTwinMakerServiceException}
 * <p>Base exception class for all service exceptions from IoTTwinMaker service.</p>
 *
 *
 * @public
 */
export class ListEntitiesCommand extends $Command
  .classBuilder<
    ListEntitiesCommandInput,
    ListEntitiesCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTTwinMaker", "ListEntities", {})
  .n("IoTTwinMakerClient", "ListEntitiesCommand")
  .sc(ListEntities)
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
