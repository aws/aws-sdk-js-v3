// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { ListComponentTypesRequest, ListComponentTypesResponse } from "../models/models_0";
import { ListComponentTypes } from "../schemas/schemas_7_Component";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListComponentTypesCommand}.
 */
export interface ListComponentTypesCommandInput extends ListComponentTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListComponentTypesCommand}.
 */
export interface ListComponentTypesCommandOutput extends ListComponentTypesResponse, __MetadataBearer {}

/**
 * <p>Lists all component types in a workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, ListComponentTypesCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, ListComponentTypesCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // ListComponentTypesRequest
 *   workspaceId: "STRING_VALUE", // required
 *   filters: [ // ListComponentTypesFilters
 *     { // ListComponentTypesFilter Union: only one key present
 *       extendsFrom: "STRING_VALUE",
 *       namespace: "STRING_VALUE",
 *       isAbstract: true || false,
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListComponentTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListComponentTypesResponse
 * //   workspaceId: "STRING_VALUE", // required
 * //   componentTypeSummaries: [ // ComponentTypeSummaries // required
 * //     { // ComponentTypeSummary
 * //       arn: "STRING_VALUE", // required
 * //       componentTypeId: "STRING_VALUE", // required
 * //       creationDateTime: new Date("TIMESTAMP"), // required
 * //       updateDateTime: new Date("TIMESTAMP"), // required
 * //       description: "STRING_VALUE",
 * //       status: { // Status
 * //         state: "STRING_VALUE",
 * //         error: { // ErrorDetails
 * //           code: "STRING_VALUE",
 * //           message: "STRING_VALUE",
 * //         },
 * //       },
 * //       componentTypeName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   maxResults: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListComponentTypesCommandInput - {@link ListComponentTypesCommandInput}
 * @returns {@link ListComponentTypesCommandOutput}
 * @see {@link ListComponentTypesCommandInput} for command's `input` shape.
 * @see {@link ListComponentTypesCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
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
export class ListComponentTypesCommand extends $Command
  .classBuilder<
    ListComponentTypesCommandInput,
    ListComponentTypesCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTTwinMaker", "ListComponentTypes", {})
  .n("IoTTwinMakerClient", "ListComponentTypesCommand")
  .sc(ListComponentTypes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListComponentTypesRequest;
      output: ListComponentTypesResponse;
    };
    sdk: {
      input: ListComponentTypesCommandInput;
      output: ListComponentTypesCommandOutput;
    };
  };
}
