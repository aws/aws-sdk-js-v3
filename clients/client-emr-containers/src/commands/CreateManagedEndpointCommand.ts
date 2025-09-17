// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateManagedEndpointRequest,
  CreateManagedEndpointRequestFilterSensitiveLog,
  CreateManagedEndpointResponse,
} from "../models/models_0";
import { de_CreateManagedEndpointCommand, se_CreateManagedEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateManagedEndpointCommand}.
 */
export interface CreateManagedEndpointCommandInput extends CreateManagedEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateManagedEndpointCommand}.
 */
export interface CreateManagedEndpointCommandOutput extends CreateManagedEndpointResponse, __MetadataBearer {}

/**
 * <p>Creates a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can
 *          communicate with your virtual cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, CreateManagedEndpointCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, CreateManagedEndpointCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * // import type { EMRContainersClientConfig } from "@aws-sdk/client-emr-containers";
 * const config = {}; // type is EMRContainersClientConfig
 * const client = new EMRContainersClient(config);
 * const input = { // CreateManagedEndpointRequest
 *   name: "STRING_VALUE", // required
 *   virtualClusterId: "STRING_VALUE", // required
 *   type: "STRING_VALUE", // required
 *   releaseLabel: "STRING_VALUE", // required
 *   executionRoleArn: "STRING_VALUE", // required
 *   certificateArn: "STRING_VALUE",
 *   configurationOverrides: { // ConfigurationOverrides
 *     applicationConfiguration: [ // ConfigurationList
 *       { // Configuration
 *         classification: "STRING_VALUE", // required
 *         properties: { // SensitivePropertiesMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         configurations: [
 *           {
 *             classification: "STRING_VALUE", // required
 *             properties: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *             configurations: "<ConfigurationList>",
 *           },
 *         ],
 *       },
 *     ],
 *     monitoringConfiguration: { // MonitoringConfiguration
 *       managedLogs: { // ManagedLogs
 *         allowAWSToRetainLogs: "ENABLED" || "DISABLED",
 *         encryptionKeyArn: "STRING_VALUE",
 *       },
 *       persistentAppUI: "ENABLED" || "DISABLED",
 *       cloudWatchMonitoringConfiguration: { // CloudWatchMonitoringConfiguration
 *         logGroupName: "STRING_VALUE", // required
 *         logStreamNamePrefix: "STRING_VALUE",
 *       },
 *       s3MonitoringConfiguration: { // S3MonitoringConfiguration
 *         logUri: "STRING_VALUE", // required
 *       },
 *       containerLogRotationConfiguration: { // ContainerLogRotationConfiguration
 *         rotationSize: "STRING_VALUE", // required
 *         maxFilesToKeep: Number("int"), // required
 *       },
 *     },
 *   },
 *   clientToken: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateManagedEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateManagedEndpointResponse
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   virtualClusterId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateManagedEndpointCommandInput - {@link CreateManagedEndpointCommandInput}
 * @returns {@link CreateManagedEndpointCommandOutput}
 * @see {@link CreateManagedEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateManagedEndpointCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 * @throws {@link EMRContainersServiceException}
 * <p>Base exception class for all service exceptions from EMRContainers service.</p>
 *
 *
 * @public
 */
export class CreateManagedEndpointCommand extends $Command
  .classBuilder<
    CreateManagedEndpointCommandInput,
    CreateManagedEndpointCommandOutput,
    EMRContainersClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRContainersClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsChicagoWebService", "CreateManagedEndpoint", {})
  .n("EMRContainersClient", "CreateManagedEndpointCommand")
  .f(CreateManagedEndpointRequestFilterSensitiveLog, void 0)
  .ser(se_CreateManagedEndpointCommand)
  .de(de_CreateManagedEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateManagedEndpointRequest;
      output: CreateManagedEndpointResponse;
    };
    sdk: {
      input: CreateManagedEndpointCommandInput;
      output: CreateManagedEndpointCommandOutput;
    };
  };
}
