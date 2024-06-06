// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { ListSyncResourcesRequest, ListSyncResourcesResponse } from "../models/models_0";
import { de_ListSyncResourcesCommand, se_ListSyncResourcesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSyncResourcesCommand}.
 */
export interface ListSyncResourcesCommandInput extends ListSyncResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListSyncResourcesCommand}.
 */
export interface ListSyncResourcesCommandOutput extends ListSyncResourcesResponse, __MetadataBearer {}

/**
 * <p>Lists the sync resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, ListSyncResourcesCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, ListSyncResourcesCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const input = { // ListSyncResourcesRequest
 *   workspaceId: "STRING_VALUE", // required
 *   syncSource: "STRING_VALUE", // required
 *   filters: [ // SyncResourceFilters
 *     { // SyncResourceFilter Union: only one key present
 *       state: "STRING_VALUE",
 *       resourceType: "STRING_VALUE",
 *       resourceId: "STRING_VALUE",
 *       externalId: "STRING_VALUE",
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSyncResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListSyncResourcesResponse
 * //   syncResources: [ // SyncResourceSummaries
 * //     { // SyncResourceSummary
 * //       resourceType: "STRING_VALUE",
 * //       externalId: "STRING_VALUE",
 * //       resourceId: "STRING_VALUE",
 * //       status: { // SyncResourceStatus
 * //         state: "STRING_VALUE",
 * //         error: { // ErrorDetails
 * //           code: "STRING_VALUE",
 * //           message: "STRING_VALUE",
 * //         },
 * //       },
 * //       updateDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSyncResourcesCommandInput - {@link ListSyncResourcesCommandInput}
 * @returns {@link ListSyncResourcesCommandOutput}
 * @see {@link ListSyncResourcesCommandInput} for command's `input` shape.
 * @see {@link ListSyncResourcesCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
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
 * @public
 */
export class ListSyncResourcesCommand extends $Command
  .classBuilder<
    ListSyncResourcesCommandInput,
    ListSyncResourcesCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTTwinMaker", "ListSyncResources", {})
  .n("IoTTwinMakerClient", "ListSyncResourcesCommand")
  .f(void 0, void 0)
  .ser(se_ListSyncResourcesCommand)
  .de(de_ListSyncResourcesCommand)
  .build() {}
