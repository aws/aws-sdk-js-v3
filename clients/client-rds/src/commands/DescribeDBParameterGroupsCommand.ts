// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBParameterGroupsMessage, DescribeDBParameterGroupsMessage } from "../models/models_1";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBParameterGroups } from "../schemas/schemas_66_DBParameter";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBParameterGroupsCommand}.
 */
export interface DescribeDBParameterGroupsCommandInput extends DescribeDBParameterGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBParameterGroupsCommand}.
 */
export interface DescribeDBParameterGroupsCommandOutput extends DBParameterGroupsMessage, __MetadataBearer {}

/**
 * <p>Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified,
 *             the list will contain only the description of the specified DB parameter group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBParameterGroupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBParameterGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeDBParameterGroupsMessage
 *   DBParameterGroupName: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeDBParameterGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DBParameterGroupsMessage
 * //   Marker: "STRING_VALUE",
 * //   DBParameterGroups: [ // DBParameterGroupList
 * //     { // DBParameterGroup
 * //       DBParameterGroupName: "STRING_VALUE",
 * //       DBParameterGroupFamily: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DBParameterGroupArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBParameterGroupsCommandInput - {@link DescribeDBParameterGroupsCommandInput}
 * @returns {@link DescribeDBParameterGroupsCommandOutput}
 * @see {@link DescribeDBParameterGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBParameterGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an
 *         existing DB parameter group.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To describe your DB parameter groups
 * ```javascript
 * // The following example retrieves details about your DB parameter groups.
 * const input = { /* empty *\/ };
 * const command = new DescribeDBParameterGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBParameterGroups: [
 *     {
 *       DBParameterGroupArn: "arn:aws:rds:us-east-1:123456789012:pg:default.aurora-mysql5.7",
 *       DBParameterGroupFamily: "aurora-mysql5.7",
 *       DBParameterGroupName: "default.aurora-mysql5.7",
 *       Description: "Default parameter group for aurora-mysql5.7"
 *     },
 *     {
 *       DBParameterGroupArn: "arn:aws:rds:us-east-1:123456789012:pg:default.aurora-postgresql9.6",
 *       DBParameterGroupFamily: "aurora-postgresql9.6",
 *       DBParameterGroupName: "default.aurora-postgresql9.6",
 *       Description: "Default parameter group for aurora-postgresql9.6"
 *     },
 *     {
 *       DBParameterGroupArn: "arn:aws:rds:us-east-1:123456789012:pg:default.aurora5.6",
 *       DBParameterGroupFamily: "aurora5.6",
 *       DBParameterGroupName: "default.aurora5.6",
 *       Description: "Default parameter group for aurora5.6"
 *     },
 *     {
 *       DBParameterGroupArn: "arn:aws:rds:us-east-1:123456789012:pg:default.mariadb10.1",
 *       DBParameterGroupFamily: "mariadb10.1",
 *       DBParameterGroupName: "default.mariadb10.1",
 *       Description: "Default parameter group for mariadb10.1"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeDBParameterGroupsCommand extends $Command
  .classBuilder<
    DescribeDBParameterGroupsCommandInput,
    DescribeDBParameterGroupsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBParameterGroups", {})
  .n("RDSClient", "DescribeDBParameterGroupsCommand")
  .sc(DescribeDBParameterGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBParameterGroupsMessage;
      output: DBParameterGroupsMessage;
    };
    sdk: {
      input: DescribeDBParameterGroupsCommandInput;
      output: DescribeDBParameterGroupsCommandOutput;
    };
  };
}
