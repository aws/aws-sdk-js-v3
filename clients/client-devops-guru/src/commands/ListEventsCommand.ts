// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEventsRequest, ListEventsResponse } from "../models/models_0";
import { de_ListEventsCommand, se_ListEventsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventsCommand}.
 */
export interface ListEventsCommandInput extends ListEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListEventsCommand}.
 */
export interface ListEventsCommandOutput extends ListEventsResponse, __MetadataBearer {}

/**
 * <p> Returns a list of the events emitted by the resources that are evaluated by DevOps Guru.
 * 			You can use filters to specify which events are returned. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, ListEventsCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, ListEventsCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const input = { // ListEventsRequest
 *   Filters: { // ListEventsFilters
 *     InsightId: "STRING_VALUE",
 *     EventTimeRange: { // EventTimeRange
 *       FromTime: new Date("TIMESTAMP"), // required
 *       ToTime: new Date("TIMESTAMP"), // required
 *     },
 *     EventClass: "INFRASTRUCTURE" || "DEPLOYMENT" || "SECURITY_CHANGE" || "CONFIG_CHANGE" || "SCHEMA_CHANGE",
 *     EventSource: "STRING_VALUE",
 *     DataSource: "AWS_CLOUD_TRAIL" || "AWS_CODE_DEPLOY",
 *     ResourceCollection: { // ResourceCollection
 *       CloudFormation: { // CloudFormationCollection
 *         StackNames: [ // StackNames
 *           "STRING_VALUE",
 *         ],
 *       },
 *       Tags: [ // TagCollections
 *         { // TagCollection
 *           AppBoundaryKey: "STRING_VALUE", // required
 *           TagValues: [ // TagValues // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *     },
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new ListEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventsResponse
 * //   Events: [ // Events // required
 * //     { // Event
 * //       ResourceCollection: { // ResourceCollection
 * //         CloudFormation: { // CloudFormationCollection
 * //           StackNames: [ // StackNames
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Tags: [ // TagCollections
 * //           { // TagCollection
 * //             AppBoundaryKey: "STRING_VALUE", // required
 * //             TagValues: [ // TagValues // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       Id: "STRING_VALUE",
 * //       Time: new Date("TIMESTAMP"),
 * //       EventSource: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       DataSource: "AWS_CLOUD_TRAIL" || "AWS_CODE_DEPLOY",
 * //       EventClass: "INFRASTRUCTURE" || "DEPLOYMENT" || "SECURITY_CHANGE" || "CONFIG_CHANGE" || "SCHEMA_CHANGE",
 * //       Resources: [ // EventResources
 * //         { // EventResource
 * //           Type: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventsCommandInput - {@link ListEventsCommandInput}
 * @returns {@link ListEventsCommandOutput}
 * @see {@link ListEventsCommandInput} for command's `input` shape.
 * @see {@link ListEventsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource could not be found</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 * @public
 */
export class ListEventsCommand extends $Command
  .classBuilder<
    ListEventsCommandInput,
    ListEventsCommandOutput,
    DevOpsGuruClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DevOpsGuruClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CapstoneControlPlaneService", "ListEvents", {})
  .n("DevOpsGuruClient", "ListEventsCommand")
  .f(void 0, void 0)
  .ser(se_ListEventsCommand)
  .de(de_ListEventsCommand)
  .build() {}
