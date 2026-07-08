// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListServiceTopologyEdgesRequest, ListServiceTopologyEdgesResponse } from "../models/models_0";
import { ListServiceTopologyEdges$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListServiceTopologyEdgesCommand}.
 */
export interface ListServiceTopologyEdgesCommandInput extends ListServiceTopologyEdgesRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceTopologyEdgesCommand}.
 */
export interface ListServiceTopologyEdgesCommandOutput extends ListServiceTopologyEdgesResponse, __MetadataBearer {}

/**
 * <p>Lists topology edges for a service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListServiceTopologyEdgesCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListServiceTopologyEdgesCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListServiceTopologyEdgesRequest
 *   serviceArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListServiceTopologyEdgesCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceTopologyEdgesResponse
 * //   serviceTopologyEdgeSummaries: [ // ServiceTopologyEdgeSummaryList
 * //     { // ServiceTopologyEdgeSummary
 * //       sourceResourceIdentifier: "STRING_VALUE", // required
 * //       destinationResourceIdentifier: "STRING_VALUE", // required
 * //       sourceRegion: "STRING_VALUE",
 * //       destinationRegion: "STRING_VALUE",
 * //       sourceAccount: "STRING_VALUE",
 * //       destinationAccount: "STRING_VALUE",
 * //       properties: [ // EdgePropertyList
 * //         { // EdgePropertySummary
 * //           topologyType: "CONTAINMENT" || "DATA_FLOW" || "OBSERVABILITY" || "PERMISSIONS",
 * //           label: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceTopologyEdgesCommandInput - {@link ListServiceTopologyEdgesCommandInput}
 * @returns {@link ListServiceTopologyEdgesCommandOutput}
 * @see {@link ListServiceTopologyEdgesCommandInput} for command's `input` shape.
 * @see {@link ListServiceTopologyEdgesCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class ListServiceTopologyEdgesCommand extends command<ListServiceTopologyEdgesCommandInput, ListServiceTopologyEdgesCommandOutput>(
  _ep0,
  _mw0,
  "ListServiceTopologyEdges",
  ListServiceTopologyEdges$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceTopologyEdgesRequest;
      output: ListServiceTopologyEdgesResponse;
    };
    sdk: {
      input: ListServiceTopologyEdgesCommandInput;
      output: ListServiceTopologyEdgesCommandOutput;
    };
  };
}
