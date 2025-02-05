// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeGroupsRequest,
  DescribeGroupsRequestFilterSensitiveLog,
  DescribeGroupsResponse,
} from "../models/models_0";
import { de_DescribeGroupsCommand, se_DescribeGroupsCommand } from "../protocols/Aws_restJson1";
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGorillaBoyService", "DescribeGroups", {})
  .n("WorkDocsClient", "DescribeGroupsCommand")
  .f(DescribeGroupsRequestFilterSensitiveLog, void 0)
  .ser(se_DescribeGroupsCommand)
  .de(de_DescribeGroupsCommand)
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
