// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  IoTThingsGraphClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTThingsGraphClient";
import type { GetSystemInstanceRequest, GetSystemInstanceResponse } from "../models/models_0";
import { GetSystemInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSystemInstanceCommand}.
 */
export interface GetSystemInstanceCommandInput extends GetSystemInstanceRequest {}
/**
 * @public
 *
 * The output of {@link GetSystemInstanceCommand}.
 */
export interface GetSystemInstanceCommandOutput extends GetSystemInstanceResponse, __MetadataBearer {}

/**
 * <p>Gets a system instance.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetSystemInstanceCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetSystemInstanceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * // import type { IoTThingsGraphClientConfig } from "@aws-sdk/client-iotthingsgraph";
 * const config = {}; // type is IoTThingsGraphClientConfig
 * const client = new IoTThingsGraphClient(config);
 * const input = { // GetSystemInstanceRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetSystemInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetSystemInstanceResponse
 * //   description: { // SystemInstanceDescription
 * //     summary: { // SystemInstanceSummary
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       status: "NOT_DEPLOYED" || "BOOTSTRAP" || "DEPLOY_IN_PROGRESS" || "DEPLOYED_IN_TARGET" || "UNDEPLOY_IN_PROGRESS" || "FAILED" || "PENDING_DELETE" || "DELETED_IN_TARGET",
 * //       target: "GREENGRASS" || "CLOUD",
 * //       greengrassGroupName: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       greengrassGroupId: "STRING_VALUE",
 * //       greengrassGroupVersionId: "STRING_VALUE",
 * //     },
 * //     definition: { // DefinitionDocument
 * //       language: "GRAPHQL", // required
 * //       text: "STRING_VALUE", // required
 * //     },
 * //     s3BucketName: "STRING_VALUE",
 * //     metricsConfiguration: { // MetricsConfiguration
 * //       cloudMetricEnabled: true || false,
 * //       metricRuleRoleArn: "STRING_VALUE",
 * //     },
 * //     validatedNamespaceVersion: Number("long"),
 * //     validatedDependencyRevisions: [ // DependencyRevisions
 * //       { // DependencyRevision
 * //         id: "STRING_VALUE",
 * //         revisionNumber: Number("long"),
 * //       },
 * //     ],
 * //     flowActionsRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSystemInstanceCommandInput - {@link GetSystemInstanceCommandInput}
 * @returns {@link GetSystemInstanceCommandOutput}
 * @see {@link GetSystemInstanceCommandInput} for command's `input` shape.
 * @see {@link GetSystemInstanceCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 *
 * @public
 */
export class GetSystemInstanceCommand extends $Command
  .classBuilder<
    GetSystemInstanceCommandInput,
    GetSystemInstanceCommandOutput,
    IoTThingsGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTThingsGraphClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotThingsGraphFrontEndService", "GetSystemInstance", {})
  .n("IoTThingsGraphClient", "GetSystemInstanceCommand")
  .sc(GetSystemInstance$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSystemInstanceRequest;
      output: GetSystemInstanceResponse;
    };
    sdk: {
      input: GetSystemInstanceCommandInput;
      output: GetSystemInstanceCommandOutput;
    };
  };
}
