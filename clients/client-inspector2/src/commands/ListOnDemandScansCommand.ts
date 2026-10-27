// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListOnDemandScansRequest, ListOnDemandScansResponse } from "../models/models_1";
import { ListOnDemandScans$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListOnDemandScansCommand}.
 */
export interface ListOnDemandScansCommandInput extends ListOnDemandScansRequest {}
/**
 * @public
 *
 * The output of {@link ListOnDemandScansCommand}.
 */
export interface ListOnDemandScansCommandOutput extends ListOnDemandScansResponse, __MetadataBearer {}

/**
 * <p>Lists the on-demand scans for a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListOnDemandScansCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListOnDemandScansCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // ListOnDemandScansRequest
 *   resourceId: "STRING_VALUE", // required
 *   resourceType: "AMI", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListOnDemandScansCommand(input);
 * const response = await client.send(command);
 * // { // ListOnDemandScansResponse
 * //   items: [ // OnDemandScanList // required
 * //     { // OnDemandScan
 * //       scanId: "STRING_VALUE", // required
 * //       resourceId: "STRING_VALUE", // required
 * //       resourceType: "AMI", // required
 * //       scanStatus: "IN_PROGRESS" || "SUCCESSFUL" || "FAILED", // required
 * //       scanStatusReason: "ACCESS_DENIED" || "INTERNAL_ERROR" || "STORAGE_LIMIT_EXCEEDED" || "EXTRACTION_COLLECTION_TIME_LIMIT_EXCEEDED" || "UNSUPPORTED_OS" || "RESOURCE_TERMINATED",
 * //       startedAt: new Date("TIMESTAMP"), // required
 * //       completedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOnDemandScansCommandInput - {@link ListOnDemandScansCommandInput}
 * @returns {@link ListOnDemandScansCommandOutput}
 * @see {@link ListOnDemandScansCommandInput} for command's `input` shape.
 * @see {@link ListOnDemandScansCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p> <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @public
 */
export class ListOnDemandScansCommand extends command<ListOnDemandScansCommandInput, ListOnDemandScansCommandOutput>(
  _ep0,
  _mw0,
  "ListOnDemandScans",
  ListOnDemandScans$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOnDemandScansRequest;
      output: ListOnDemandScansResponse;
    };
    sdk: {
      input: ListOnDemandScansCommandInput;
      output: ListOnDemandScansCommandOutput;
    };
  };
}
