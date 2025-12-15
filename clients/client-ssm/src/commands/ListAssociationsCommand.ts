// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAssociationsRequest, ListAssociationsResult } from "../models/models_1";
import { ListAssociations$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssociationsCommand}.
 */
export interface ListAssociationsCommandInput extends ListAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssociationsCommand}.
 */
export interface ListAssociationsCommandOutput extends ListAssociationsResult, __MetadataBearer {}

/**
 * <p>Returns all State Manager associations in the current Amazon Web Services account and Amazon Web Services Region. You
 *    can limit the results to a specific State Manager association document or managed node by
 *    specifying a filter. State Manager is a tool in Amazon Web Services Systems Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListAssociationsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListAssociationsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // ListAssociationsRequest
 *   AssociationFilterList: [ // AssociationFilterList
 *     { // AssociationFilter
 *       key: "InstanceId" || "Name" || "AssociationId" || "AssociationStatusName" || "LastExecutedBefore" || "LastExecutedAfter" || "AssociationName" || "ResourceGroupName", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociationsResult
 * //   Associations: [ // AssociationList
 * //     { // Association
 * //       Name: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       AssociationId: "STRING_VALUE",
 * //       AssociationVersion: "STRING_VALUE",
 * //       DocumentVersion: "STRING_VALUE",
 * //       Targets: [ // Targets
 * //         { // Target
 * //           Key: "STRING_VALUE",
 * //           Values: [ // TargetValues
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       LastExecutionDate: new Date("TIMESTAMP"),
 * //       Overview: { // AssociationOverview
 * //         Status: "STRING_VALUE",
 * //         DetailedStatus: "STRING_VALUE",
 * //         AssociationStatusAggregatedCount: { // AssociationStatusAggregatedCount
 * //           "<keys>": Number("int"),
 * //         },
 * //       },
 * //       ScheduleExpression: "STRING_VALUE",
 * //       AssociationName: "STRING_VALUE",
 * //       ScheduleOffset: Number("int"),
 * //       Duration: Number("int"),
 * //       TargetMaps: [ // TargetMaps
 * //         { // TargetMap
 * //           "<keys>": [ // TargetMapValueList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociationsCommandInput - {@link ListAssociationsCommandInput}
 * @returns {@link ListAssociationsCommandOutput}
 * @see {@link ListAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListAssociationsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class ListAssociationsCommand extends $Command
  .classBuilder<
    ListAssociationsCommandInput,
    ListAssociationsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "ListAssociations", {})
  .n("SSMClient", "ListAssociationsCommand")
  .sc(ListAssociations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssociationsRequest;
      output: ListAssociationsResult;
    };
    sdk: {
      input: ListAssociationsCommandInput;
      output: ListAssociationsCommandOutput;
    };
  };
}
