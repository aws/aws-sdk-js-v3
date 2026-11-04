// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSystemInstanceRequest, CreateSystemInstanceResponse } from "../models/models_0";
import { CreateSystemInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSystemInstanceCommand}.
 */
export interface CreateSystemInstanceCommandInput extends CreateSystemInstanceRequest {}
/**
 * @public
 *
 * The output of {@link CreateSystemInstanceCommand}.
 */
export interface CreateSystemInstanceCommandOutput extends CreateSystemInstanceResponse, __MetadataBearer {}

/**
 * Creates a system instance.
 *
 * This action validates the system instance, prepares the deployment-related resources. For Greengrass deployments, it updates the Greengrass group that is specified by the `greengrassGroupName` parameter. It also adds a file to the S3 bucket specified by the `s3BucketName` parameter. You need to call `DeploySystemInstance` after running this action.
 *
 * For Greengrass deployments, since this action modifies and adds resources to a Greengrass group and an S3 bucket on the caller's behalf, the calling identity must have write permissions to both the specified Greengrass group and S3 bucket. Otherwise, the call will fail with an authorization error.
 *
 * For cloud deployments, this action requires a `flowActionsRoleArn` value. This is an IAM role that has permissions to access AWS services, such as AWS Lambda and AWS IoT, that the flow uses when it executes.
 *
 * If the definition document doesn't specify a version of the user's namespace, the latest version will be used by default.
 *
 * @deprecated since: 2022-08-30.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, CreateSystemInstanceCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, CreateSystemInstanceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * // import type { IoTThingsGraphClientConfig } from "@aws-sdk/client-iotthingsgraph";
 * const config = {}; // type is IoTThingsGraphClientConfig
 * const client = new IoTThingsGraphClient(config);
 * const input = { // CreateSystemInstanceRequest
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   definition: { // DefinitionDocument
 *     language: "GRAPHQL", // required
 *     text: "STRING_VALUE", // required
 *   },
 *   target: "GREENGRASS" || "CLOUD", // required
 *   greengrassGroupName: "STRING_VALUE",
 *   s3BucketName: "STRING_VALUE",
 *   metricsConfiguration: { // MetricsConfiguration
 *     cloudMetricEnabled: true || false,
 *     metricRuleRoleArn: "STRING_VALUE",
 *   },
 *   flowActionsRoleArn: "STRING_VALUE",
 * };
 * const command = new CreateSystemInstanceCommand(input);
 * const response = await client.send(command);
 * // { // CreateSystemInstanceResponse
 * //   summary: { // SystemInstanceSummary
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     status: "NOT_DEPLOYED" || "BOOTSTRAP" || "DEPLOY_IN_PROGRESS" || "DEPLOYED_IN_TARGET" || "UNDEPLOY_IN_PROGRESS" || "FAILED" || "PENDING_DELETE" || "DELETED_IN_TARGET",
 * //     target: "GREENGRASS" || "CLOUD",
 * //     greengrassGroupName: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     greengrassGroupId: "STRING_VALUE",
 * //     greengrassGroupVersionId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSystemInstanceCommandInput - {@link CreateSystemInstanceCommandInput}
 * @returns {@link CreateSystemInstanceCommandOutput}
 * @see {@link CreateSystemInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateSystemInstanceCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * @throws {@link IoTThingsGraphServiceException}
 *
 * Base exception class for all service exceptions from IoTThingsGraph service.
 *
 * @public
 */
export class CreateSystemInstanceCommand extends command<CreateSystemInstanceCommandInput, CreateSystemInstanceCommandOutput>(
  _ep0,
  _mw0,
  "CreateSystemInstance",
  CreateSystemInstance$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSystemInstanceRequest;
      output: CreateSystemInstanceResponse;
    };
    sdk: {
      input: CreateSystemInstanceCommandInput;
      output: CreateSystemInstanceCommandOutput;
    };
  };
}
