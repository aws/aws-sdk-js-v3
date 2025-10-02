// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDBParameterGroupMessage, CreateDBParameterGroupResult } from "../models/models_0";
import { de_CreateDBParameterGroupCommand, se_CreateDBParameterGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDBParameterGroupCommand}.
 */
export interface CreateDBParameterGroupCommandInput extends CreateDBParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateDBParameterGroupCommand}.
 */
export interface CreateDBParameterGroupCommandOutput extends CreateDBParameterGroupResult, __MetadataBearer {}

/**
 * <p>Creates a new DB parameter group.</p>
 *          <p>A DB parameter group is initially created with the default parameters for the
 *             database engine used by the DB instance. To provide custom values for any of the
 *             parameters, you must modify the group after creating it using
 *             <code>ModifyDBParameterGroup</code>. Once you've created a DB parameter group, you need to
 *             associate it with your DB instance using <code>ModifyDBInstance</code>. When you associate
 *             a new DB parameter group with a running DB instance, you need to reboot the DB
 *             instance without failover for the new DB parameter group and associated settings to take effect.</p>
 *          <p>This command doesn't apply to RDS Custom.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // CreateDBParameterGroupMessage
 *   DBParameterGroupName: "STRING_VALUE", // required
 *   DBParameterGroupFamily: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateDBParameterGroupResult
 * //   DBParameterGroup: { // DBParameterGroup
 * //     DBParameterGroupName: "STRING_VALUE",
 * //     DBParameterGroupFamily: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     DBParameterGroupArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDBParameterGroupCommandInput - {@link CreateDBParameterGroupCommandInput}
 * @returns {@link CreateDBParameterGroupCommandOutput}
 * @see {@link CreateDBParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBParameterGroupAlreadyExistsFault} (client fault)
 *  <p>A DB parameter group with the same name exists.</p>
 *
 * @throws {@link DBParameterGroupQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of DB parameter
 *             groups.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To create a DB parameter group
 * ```javascript
 * // The following example creates a DB parameter group.
 * const input = {
 *   DBParameterGroupFamily: "MySQL8.0",
 *   DBParameterGroupName: "mydbparametergroup",
 *   Description: "My new parameter group"
 * };
 * const command = new CreateDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBParameterGroup: {
 *     DBParameterGroupArn: "arn:aws:rds:us-east-1:123456789012:pg:mydbparametergroup",
 *     DBParameterGroupFamily: "mysql8.0",
 *     DBParameterGroupName: "mydbparametergroup",
 *     Description: "My new parameter group"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateDBParameterGroupCommand extends $Command
  .classBuilder<
    CreateDBParameterGroupCommandInput,
    CreateDBParameterGroupCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "CreateDBParameterGroup", {})
  .n("RDSClient", "CreateDBParameterGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateDBParameterGroupCommand)
  .de(de_CreateDBParameterGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDBParameterGroupMessage;
      output: CreateDBParameterGroupResult;
    };
    sdk: {
      input: CreateDBParameterGroupCommandInput;
      output: CreateDBParameterGroupCommandOutput;
    };
  };
}
