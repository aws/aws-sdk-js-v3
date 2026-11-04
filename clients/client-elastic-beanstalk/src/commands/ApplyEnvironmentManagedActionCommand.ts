// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ApplyEnvironmentManagedActionRequest, ApplyEnvironmentManagedActionResult } from "../models/models_0";
import { ApplyEnvironmentManagedAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ApplyEnvironmentManagedActionCommandOutput extends ApplyEnvironmentManagedActionResult, __MetadataBearer {}

/**
 * Applies a scheduled managed action immediately. A managed action can be applied only if its status is `Scheduled`. Get the status and action ID of a managed action with DescribeEnvironmentManagedActions.
 *
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
 *
 * A generic service exception has occurred.
 *
 * @throws {@link ManagedActionInvalidStateException} (client fault)
 *
 * Cannot modify the managed action in its current state.
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 *
 * Base exception class for all service exceptions from ElasticBeanstalk service.
 *
 * @public
 */
export class ApplyEnvironmentManagedActionCommand extends command<ApplyEnvironmentManagedActionCommandInput, ApplyEnvironmentManagedActionCommandOutput>(
  _ep0,
  _mw0,
  "ApplyEnvironmentManagedAction",
  ApplyEnvironmentManagedAction$
) {
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
