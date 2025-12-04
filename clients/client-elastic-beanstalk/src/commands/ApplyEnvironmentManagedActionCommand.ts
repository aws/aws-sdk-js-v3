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
import type { ApplyEnvironmentManagedActionRequest, ApplyEnvironmentManagedActionResult } from "../models/models_0";
import { ApplyEnvironmentManagedAction } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ApplyEnvironmentManagedActionCommand}.
 */
export interface ApplyEnvironmentManagedActionCommandInput extends ApplyEnvironmentManagedActionRequest {}
/**
 * @public
 *
 * The output of {@link ApplyEnvironmentManagedActionCommand}.
 */
export interface ApplyEnvironmentManagedActionCommandOutput
  extends ApplyEnvironmentManagedActionResult,
    __MetadataBearer {}

/**
 * <p>Applies a scheduled managed action immediately. A managed action can be applied only if
 *       its status is <code>Scheduled</code>. Get the status and action ID of a managed action with
 *         <a>DescribeEnvironmentManagedActions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ApplyEnvironmentManagedActionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ApplyEnvironmentManagedActionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // ApplyEnvironmentManagedActionRequest
 *   EnvironmentName: "STRING_VALUE",
 *   EnvironmentId: "STRING_VALUE",
 *   ActionId: "STRING_VALUE", // required
 * };
 * const command = new ApplyEnvironmentManagedActionCommand(input);
 * const response = await client.send(command);
 * // { // ApplyEnvironmentManagedActionResult
 * //   ActionId: "STRING_VALUE",
 * //   ActionDescription: "STRING_VALUE",
 * //   ActionType: "InstanceRefresh" || "PlatformUpdate" || "Unknown",
 * //   Status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ApplyEnvironmentManagedActionCommandInput - {@link ApplyEnvironmentManagedActionCommandInput}
 * @returns {@link ApplyEnvironmentManagedActionCommandOutput}
 * @see {@link ApplyEnvironmentManagedActionCommandInput} for command's `input` shape.
 * @see {@link ApplyEnvironmentManagedActionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException} (client fault)
 *  <p>A generic service exception has occurred.</p>
 *
 * @throws {@link ManagedActionInvalidStateException} (client fault)
 *  <p>Cannot modify the managed action in its current state.</p>
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @public
 */
export class ApplyEnvironmentManagedActionCommand extends $Command
  .classBuilder<
    ApplyEnvironmentManagedActionCommandInput,
    ApplyEnvironmentManagedActionCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSElasticBeanstalkService", "ApplyEnvironmentManagedAction", {})
  .n("ElasticBeanstalkClient", "ApplyEnvironmentManagedActionCommand")
  .sc(ApplyEnvironmentManagedAction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ApplyEnvironmentManagedActionRequest;
      output: ApplyEnvironmentManagedActionResult;
    };
    sdk: {
      input: ApplyEnvironmentManagedActionCommandInput;
      output: ApplyEnvironmentManagedActionCommandOutput;
    };
  };
}
