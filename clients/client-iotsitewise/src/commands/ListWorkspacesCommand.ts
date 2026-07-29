// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWorkspacesRequest, ListWorkspacesResponse } from "../models/models_1";
import { ListWorkspaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListWorkspacesCommand}.
 */
export interface ListWorkspacesCommandInput extends ListWorkspacesRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkspacesCommand}.
 */
export interface ListWorkspacesCommandOutput extends ListWorkspacesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of workspaces. Use the <code>nextToken</code> parameter to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListWorkspacesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListWorkspacesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListWorkspacesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListWorkspacesCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkspacesResponse
 * //   workspaceSummaries: [ // WorkspaceSummaries // required
 * //     { // WorkspaceSummary
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       status: { // WorkspaceStatus
 * //         state: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED", // required
 * //         error: { // WorkspaceErrorDetails
 * //           code: "VALIDATION_ERROR" || "INTERNAL_FAILURE", // required
 * //           message: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkspacesCommandInput - {@link ListWorkspacesCommandInput}
 * @returns {@link ListWorkspacesCommandOutput}
 * @see {@link ListWorkspacesCommandInput} for command's `input` shape.
 * @see {@link ListWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 *
 * @public
 */
export class ListWorkspacesCommand extends command<ListWorkspacesCommandInput, ListWorkspacesCommandOutput>(
  _ep0,
  _mw0,
  "ListWorkspaces",
  ListWorkspaces$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkspacesRequest;
      output: ListWorkspacesResponse;
    };
    sdk: {
      input: ListWorkspacesCommandInput;
      output: ListWorkspacesCommandOutput;
    };
  };
}
