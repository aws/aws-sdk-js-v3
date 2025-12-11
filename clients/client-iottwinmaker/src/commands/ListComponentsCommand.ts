// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import type { ListComponentsRequest, ListComponentsResponse } from "../models/models_0";
import { ListComponents } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListComponentsCommand}.
 */
export interface ListComponentsCommandInput extends ListComponentsRequest {}
/**
 * @public
 *
 * The output of {@link ListComponentsCommand}.
 */
export interface ListComponentsCommandOutput extends ListComponentsResponse, __MetadataBearer {}

/**
 * <p>This API lists the components of an entity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, ListComponentsCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, ListComponentsCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // ListComponentsRequest
 *   workspaceId: "STRING_VALUE", // required
 *   entityId: "STRING_VALUE", // required
 *   componentPath: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListComponentsCommand(input);
 * const response = await client.send(command);
 * // { // ListComponentsResponse
 * //   componentSummaries: [ // ComponentSummaries // required
 * //     { // ComponentSummary
 * //       componentName: "STRING_VALUE", // required
 * //       componentTypeId: "STRING_VALUE", // required
 * //       definedIn: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       propertyGroups: { // ComponentPropertyGroupResponses
 * //         "<keys>": { // ComponentPropertyGroupResponse
 * //           groupType: "STRING_VALUE", // required
 * //           propertyNames: [ // PropertyNames // required
 * //             "STRING_VALUE",
 * //           ],
 * //           isInherited: true || false, // required
 * //         },
 * //       },
 * //       status: { // Status
 * //         state: "STRING_VALUE",
 * //         error: { // ErrorDetails
 * //           code: "STRING_VALUE",
 * //           message: "STRING_VALUE",
 * //         },
 * //       },
 * //       syncSource: "STRING_VALUE",
 * //       componentPath: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListComponentsCommandInput - {@link ListComponentsCommandInput}
 * @returns {@link ListComponentsCommandOutput}
 * @see {@link ListComponentsCommandInput} for command's `input` shape.
 * @see {@link ListComponentsCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
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
export class ListComponentsCommand extends $Command
  .classBuilder<
    ListComponentsCommandInput,
    ListComponentsCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTTwinMaker", "ListComponents", {})
  .n("IoTTwinMakerClient", "ListComponentsCommand")
  .sc(ListComponents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListComponentsRequest;
      output: ListComponentsResponse;
    };
    sdk: {
      input: ListComponentsCommandInput;
      output: ListComponentsCommandOutput;
    };
  };
}
