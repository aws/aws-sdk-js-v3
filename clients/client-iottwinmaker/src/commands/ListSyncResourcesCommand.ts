// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSyncResourcesRequest, ListSyncResourcesResponse } from "../models/models_0";
import { ListSyncResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the sync resources.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, ListSyncResourcesCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, ListSyncResourcesCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
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
 *
 * Access is denied.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota was exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Failed
 *
 * @throws {@link IoTTwinMakerServiceException}
 *
 * Base exception class for all service exceptions from IoTTwinMaker service.
 *
 * @public
 */
export class ListSyncResourcesCommand extends command<ListSyncResourcesCommandInput, ListSyncResourcesCommandOutput>(
  _ep0,
  _mw0,
  "ListSyncResources",
  ListSyncResources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSyncResourcesRequest;
      output: ListSyncResourcesResponse;
    };
    sdk: {
      input: ListSyncResourcesCommandInput;
      output: ListSyncResourcesCommandOutput;
    };
  };
}
