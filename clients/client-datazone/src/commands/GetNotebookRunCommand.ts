// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetNotebookRunInput, GetNotebookRunOutput } from "../models/models_1";
import { GetNotebookRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNotebookRunCommand}.
 */
export interface GetNotebookRunCommandInput extends GetNotebookRunInput {}
/**
 * @public
 *
 * The output of {@link GetNotebookRunCommand}.
 */
export interface GetNotebookRunCommandOutput extends GetNotebookRunOutput, __MetadataBearer {}

/**
 * <p>Gets the details of a notebook run in an Amazon DataZone domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetNotebookRunCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetNotebookRunCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetNotebookRunInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetNotebookRunCommand(input);
 * const response = await client.send(command);
 * // { // GetNotebookRunOutput
 * //   id: "STRING_VALUE", // required
 * //   domainId: "STRING_VALUE", // required
 * //   owningProjectId: "STRING_VALUE", // required
 * //   notebookId: "STRING_VALUE", // required
 * //   scheduleId: "STRING_VALUE",
 * //   status: "QUEUED" || "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED", // required
 * //   cellOrder: [ // CellOrder
 * //     {},
 * //   ],
 * //   metadata: { // Metadata
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   parameters: { // Parameters
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   computeConfiguration: { // ComputeConfig
 * //     instanceType: "STRING_VALUE",
 * //     environmentVersion: "STRING_VALUE",
 * //   },
 * //   networkConfiguration: { // NetworkConfig
 * //     networkAccessType: "PUBLIC_INTERNET_ONLY" || "VPC_ONLY", // required
 * //     vpcId: "STRING_VALUE",
 * //     subnetIds: [ // SubnetIds
 * //       "STRING_VALUE",
 * //     ],
 * //     securityGroupIds: [ // SecurityGroupIds
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   timeoutConfiguration: { // TimeoutConfig
 * //     runTimeoutInMinutes: Number("int"),
 * //   },
 * //   environmentConfiguration: { // EnvironmentConfig
 * //     imageVersion: "STRING_VALUE",
 * //     packageConfig: { // PackageConfig
 * //       packageManager: "UV", // required
 * //       packageSpecification: "STRING_VALUE",
 * //     },
 * //   },
 * //   storageConfiguration: { // StorageConfig
 * //     projectS3Path: "STRING_VALUE",
 * //     kmsKeyArn: "STRING_VALUE",
 * //   },
 * //   triggerSource: { // TriggerSource
 * //     type: "MANUAL" || "SCHEDULED" || "WORKFLOW",
 * //     name: "STRING_VALUE",
 * //   },
 * //   error: { // NotebookRunError
 * //     message: "STRING_VALUE", // required
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * //   startedAt: new Date("TIMESTAMP"),
 * //   completedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetNotebookRunCommandInput - {@link GetNotebookRunCommandInput}
 * @returns {@link GetNotebookRunCommandOutput}
 * @see {@link GetNotebookRunCommandInput} for command's `input` shape.
 * @see {@link GetNotebookRunCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class GetNotebookRunCommand extends $Command
  .classBuilder<
    GetNotebookRunCommandInput,
    GetNotebookRunCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "GetNotebookRun", {})
  .n("DataZoneClient", "GetNotebookRunCommand")
  .sc(GetNotebookRun$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNotebookRunInput;
      output: GetNotebookRunOutput;
    };
    sdk: {
      input: GetNotebookRunCommandInput;
      output: GetNotebookRunCommandOutput;
    };
  };
}
