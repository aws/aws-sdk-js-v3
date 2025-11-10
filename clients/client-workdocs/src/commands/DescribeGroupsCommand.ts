// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeGroupsRequest, DescribeGroupsResponse } from "../models/models_0";
import { DescribeGroups } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeGroupsCommand}.
 */
export interface DescribeGroupsCommandInput extends DescribeGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeGroupsCommand}.
 */
export interface DescribeGroupsCommandOutput extends DescribeGroupsResponse, __MetadataBearer {}

/**
 * <p>Describes the groups specified by the query. Groups are defined by the underlying
 *             Active Directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeGroupsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeGroupsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // DescribeGroupsRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   SearchQuery: "STRING_VALUE", // required
 *   OrganizationId: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGroupsResponse
 * //   Groups: [ // GroupMetadataList
 * //     { // GroupMetadata
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeGroupsCommandInput - {@link DescribeGroupsCommandInput}
 * @returns {@link DescribeGroupsCommandOutput}
 * @see {@link DescribeGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeGroupsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>One or more of the dependencies is unavailable.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>The operation is not permitted.</p>
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *  <p>The caller does not have access to perform the action on the resource.</p>
 *
 * @throws {@link WorkDocsServiceException}
 * <p>Base exception class for all service exceptions from WorkDocs service.</p>
 *
 *
 * @public
 */
export class DescribeGroupsCommand extends $Command
  .classBuilder<
    DescribeGroupsCommandInput,
    DescribeGroupsCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGorillaBoyService", "DescribeGroups", {})
  .n("WorkDocsClient", "DescribeGroupsCommand")
  .sc(DescribeGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGroupsRequest;
      output: DescribeGroupsResponse;
    };
    sdk: {
      input: DescribeGroupsCommandInput;
      output: DescribeGroupsCommandOutput;
    };
  };
}
