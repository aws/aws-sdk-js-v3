// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListResolvedTestRunTargetResourcesRequest,
  ListResolvedTestRunTargetResourcesResponse,
} from "../models/models_0";
import { ListResolvedTestRunTargetResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResolvedTestRunTargetResourcesCommand}.
 */
export interface ListResolvedTestRunTargetResourcesCommandInput extends ListResolvedTestRunTargetResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListResolvedTestRunTargetResourcesCommand}.
 */
export interface ListResolvedTestRunTargetResourcesCommandOutput extends ListResolvedTestRunTargetResourcesResponse, __MetadataBearer {}

/**
 * Lists the AWS resources that AWS Fault Injection Service (AWS FIS) resolved as targets for a test run.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListResolvedTestRunTargetResourcesCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListResolvedTestRunTargetResourcesCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListResolvedTestRunTargetResourcesRequest
 *   testRunId: "STRING_VALUE", // required
 *   serviceArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListResolvedTestRunTargetResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListResolvedTestRunTargetResourcesResponse
 * //   resolvedTargetResources: [ // ResolvedTargetResourceList // required
 * //     { // ResolvedTargetResource
 * //       resourceType: "STRING_VALUE", // required
 * //       targetName: "STRING_VALUE", // required
 * //       targetInformation: { // ResolvedTargetInformation // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResolvedTestRunTargetResourcesCommandInput - {@link ListResolvedTestRunTargetResourcesCommandInput}
 * @returns {@link ListResolvedTestRunTargetResourcesCommandOutput}
 * @see {@link ListResolvedTestRunTargetResourcesCommandInput} for command's `input` shape.
 * @see {@link ListResolvedTestRunTargetResourcesCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied — caller lacks required permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal service error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validation error — invalid input parameters.
 *
 * @throws {@link Resiliencehubv2ServiceException}
 *
 * Base exception class for all service exceptions from Resiliencehubv2 service.
 *
 * @public
 */
export class ListResolvedTestRunTargetResourcesCommand extends command<ListResolvedTestRunTargetResourcesCommandInput, ListResolvedTestRunTargetResourcesCommandOutput>(
  _ep0,
  _mw0,
  "ListResolvedTestRunTargetResources",
  ListResolvedTestRunTargetResources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResolvedTestRunTargetResourcesRequest;
      output: ListResolvedTestRunTargetResourcesResponse;
    };
    sdk: {
      input: ListResolvedTestRunTargetResourcesCommandInput;
      output: ListResolvedTestRunTargetResourcesCommandOutput;
    };
  };
}
