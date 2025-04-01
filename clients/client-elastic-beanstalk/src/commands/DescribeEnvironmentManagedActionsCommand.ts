// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEnvironmentManagedActionsRequest, DescribeEnvironmentManagedActionsResult } from "../models/models_0";
import {
  de_DescribeEnvironmentManagedActionsCommand,
  se_DescribeEnvironmentManagedActionsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEnvironmentManagedActionsCommand}.
 */
export interface DescribeEnvironmentManagedActionsCommandInput extends DescribeEnvironmentManagedActionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEnvironmentManagedActionsCommand}.
 */
export interface DescribeEnvironmentManagedActionsCommandOutput
  extends DescribeEnvironmentManagedActionsResult,
    __MetadataBearer {}

/**
 * <p>Lists an environment's upcoming and in-progress managed actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeEnvironmentManagedActionsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeEnvironmentManagedActionsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribeEnvironmentManagedActionsRequest
 *   EnvironmentName: "STRING_VALUE",
 *   EnvironmentId: "STRING_VALUE",
 *   Status: "Scheduled" || "Pending" || "Running" || "Unknown",
 * };
 * const command = new DescribeEnvironmentManagedActionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEnvironmentManagedActionsResult
 * //   ManagedActions: [ // ManagedActions
 * //     { // ManagedAction
 * //       ActionId: "STRING_VALUE",
 * //       ActionDescription: "STRING_VALUE",
 * //       ActionType: "InstanceRefresh" || "PlatformUpdate" || "Unknown",
 * //       Status: "Scheduled" || "Pending" || "Running" || "Unknown",
 * //       WindowStartTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEnvironmentManagedActionsCommandInput - {@link DescribeEnvironmentManagedActionsCommandInput}
 * @returns {@link DescribeEnvironmentManagedActionsCommandOutput}
 * @see {@link DescribeEnvironmentManagedActionsCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentManagedActionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException} (client fault)
 *  <p>A generic service exception has occurred.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @public
 */
export class DescribeEnvironmentManagedActionsCommand extends $Command
  .classBuilder<
    DescribeEnvironmentManagedActionsCommandInput,
    DescribeEnvironmentManagedActionsCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSElasticBeanstalkService", "DescribeEnvironmentManagedActions", {})
  .n("ElasticBeanstalkClient", "DescribeEnvironmentManagedActionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEnvironmentManagedActionsCommand)
  .de(de_DescribeEnvironmentManagedActionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEnvironmentManagedActionsRequest;
      output: DescribeEnvironmentManagedActionsResult;
    };
    sdk: {
      input: DescribeEnvironmentManagedActionsCommandInput;
      output: DescribeEnvironmentManagedActionsCommandOutput;
    };
  };
}
