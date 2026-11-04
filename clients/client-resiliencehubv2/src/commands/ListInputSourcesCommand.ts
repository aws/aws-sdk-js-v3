// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListInputSourcesRequest, ListInputSourcesResponse } from "../models/models_0";
import { ListInputSources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListInputSourcesCommand}.
 */
export interface ListInputSourcesCommandInput extends ListInputSourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListInputSourcesCommand}.
 */
export interface ListInputSourcesCommandOutput extends ListInputSourcesResponse, __MetadataBearer {}

/**
 * Lists input sources for a service.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListInputSourcesCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListInputSourcesCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListInputSourcesRequest
 *   serviceArn: "STRING_VALUE", // required
 *   type: "CFN_STACK" || "TAGS" || "EKS" || "TERRAFORM" || "DESIGN_FILE" || "MONITORING",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListInputSourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListInputSourcesResponse
 * //   inputSourceSummaries: [ // InputSourceSummaryList // required
 * //     { // InputSourceSummary
 * //       inputSourceId: "STRING_VALUE", // required
 * //       type: "CFN_STACK" || "TAGS" || "EKS" || "TERRAFORM" || "DESIGN_FILE" || "MONITORING",
 * //       resourceTags: [ // ResourceTagList
 * //         { // ResourceTag
 * //           key: "STRING_VALUE", // required
 * //           values: [ // TagValueList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       cfnStackArn: "STRING_VALUE",
 * //       tfStateFileUrl: "STRING_VALUE",
 * //       eks: { // EksSource
 * //         clusterArn: "STRING_VALUE", // required
 * //         namespaces: [ // EksNamespaceList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         labelSelector: { // EksLabelSelector
 * //           matchLabels: { // EksLabelMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           matchExpressions: [ // EksLabelSelectorRequirementList
 * //             { // EksLabelSelectorRequirement
 * //               key: "STRING_VALUE", // required
 * //               operator: "IN" || "NOT_IN" || "EXISTS" || "DOES_NOT_EXIST", // required
 * //               values: [ // EksLabelValueList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       designFileS3Url: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInputSourcesCommandInput - {@link ListInputSourcesCommandInput}
 * @returns {@link ListInputSourcesCommandOutput}
 * @see {@link ListInputSourcesCommandInput} for command's `input` shape.
 * @see {@link ListInputSourcesCommandOutput} for command's `response` shape.
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
export class ListInputSourcesCommand extends command<ListInputSourcesCommandInput, ListInputSourcesCommandOutput>(
  _ep0,
  _mw0,
  "ListInputSources",
  ListInputSources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInputSourcesRequest;
      output: ListInputSourcesResponse;
    };
    sdk: {
      input: ListInputSourcesCommandInput;
      output: ListInputSourcesCommandOutput;
    };
  };
}
