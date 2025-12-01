// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElasticBeanstalkClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeEnvironmentManagedActionHistoryRequest,
  DescribeEnvironmentManagedActionHistoryResult,
} from "../models/models_0";
import { DescribeEnvironmentManagedActionHistory } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEnvironmentManagedActionHistoryCommand}.
 */
export interface DescribeEnvironmentManagedActionHistoryCommandInput
  extends DescribeEnvironmentManagedActionHistoryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEnvironmentManagedActionHistoryCommand}.
 */
export interface DescribeEnvironmentManagedActionHistoryCommandOutput
  extends DescribeEnvironmentManagedActionHistoryResult,
    __MetadataBearer {}

/**
 * <p>Lists an environment's completed and failed managed actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeEnvironmentManagedActionHistoryCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeEnvironmentManagedActionHistoryCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribeEnvironmentManagedActionHistoryRequest
 *   EnvironmentId: "STRING_VALUE",
 *   EnvironmentName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new DescribeEnvironmentManagedActionHistoryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEnvironmentManagedActionHistoryResult
 * //   ManagedActionHistoryItems: [ // ManagedActionHistoryItems
 * //     { // ManagedActionHistoryItem
 * //       ActionId: "STRING_VALUE",
 * //       ActionType: "InstanceRefresh" || "PlatformUpdate" || "Unknown",
 * //       ActionDescription: "STRING_VALUE",
 * //       FailureType: "UpdateCancelled" || "CancellationFailed" || "RollbackFailed" || "RollbackSuccessful" || "InternalFailure" || "InvalidEnvironmentState" || "PermissionsError",
 * //       Status: "Completed" || "Failed" || "Unknown",
 * //       FailureDescription: "STRING_VALUE",
 * //       ExecutedTime: new Date("TIMESTAMP"),
 * //       FinishedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEnvironmentManagedActionHistoryCommandInput - {@link DescribeEnvironmentManagedActionHistoryCommandInput}
 * @returns {@link DescribeEnvironmentManagedActionHistoryCommandOutput}
 * @see {@link DescribeEnvironmentManagedActionHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentManagedActionHistoryCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException} (client fault)
 *  <p>A generic service exception has occurred.</p>
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @public
 */
export class DescribeEnvironmentManagedActionHistoryCommand extends $Command
  .classBuilder<
    DescribeEnvironmentManagedActionHistoryCommandInput,
    DescribeEnvironmentManagedActionHistoryCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSElasticBeanstalkService", "DescribeEnvironmentManagedActionHistory", {})
  .n("ElasticBeanstalkClient", "DescribeEnvironmentManagedActionHistoryCommand")
  .sc(DescribeEnvironmentManagedActionHistory)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEnvironmentManagedActionHistoryRequest;
      output: DescribeEnvironmentManagedActionHistoryResult;
    };
    sdk: {
      input: DescribeEnvironmentManagedActionHistoryCommandInput;
      output: DescribeEnvironmentManagedActionHistoryCommandOutput;
    };
  };
}
