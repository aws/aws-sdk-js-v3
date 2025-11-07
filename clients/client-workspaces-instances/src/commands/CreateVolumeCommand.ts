// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVolumeRequest, CreateVolumeResponse } from "../models/models_0";
import { CreateVolume } from "../schemas/schemas_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkspacesInstancesClientResolvedConfig,
} from "../WorkspacesInstancesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVolumeCommand}.
 */
export interface CreateVolumeCommandInput extends CreateVolumeRequest {}
/**
 * @public
 *
 * The output of {@link CreateVolumeCommand}.
 */
export interface CreateVolumeCommandOutput extends CreateVolumeResponse, __MetadataBearer {}

/**
 * <p>Creates a new volume for WorkSpace Instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkspacesInstancesClient, CreateVolumeCommand } from "@aws-sdk/client-workspaces-instances"; // ES Modules import
 * // const { WorkspacesInstancesClient, CreateVolumeCommand } = require("@aws-sdk/client-workspaces-instances"); // CommonJS import
 * // import type { WorkspacesInstancesClientConfig } from "@aws-sdk/client-workspaces-instances";
 * const config = {}; // type is WorkspacesInstancesClientConfig
 * const client = new WorkspacesInstancesClient(config);
 * const input = { // CreateVolumeRequest
 *   AvailabilityZone: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   Encrypted: true || false,
 *   Iops: Number("int"),
 *   KmsKeyId: "STRING_VALUE",
 *   SizeInGB: Number("int"),
 *   SnapshotId: "STRING_VALUE",
 *   TagSpecifications: [ // TagSpecifications
 *     { // TagSpecification
 *       ResourceType: "instance" || "volume" || "spot-instances-request" || "network-interface",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   Throughput: Number("int"),
 *   VolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 * };
 * const command = new CreateVolumeCommand(input);
 * const response = await client.send(command);
 * // { // CreateVolumeResponse
 * //   VolumeId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateVolumeCommandInput - {@link CreateVolumeCommandInput}
 * @returns {@link CreateVolumeCommandOutput}
 * @see {@link CreateVolumeCommandInput} for command's `input` shape.
 * @see {@link CreateVolumeCommandOutput} for command's `response` shape.
 * @see {@link WorkspacesInstancesClientResolvedConfig | config} for WorkspacesInstancesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Indicates insufficient permissions to perform the requested action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Signals a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates an unexpected server-side error occurred.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Indicates that a service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates the request rate has exceeded limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates invalid input parameters in the request.</p>
 *
 * @throws {@link WorkspacesInstancesServiceException}
 * <p>Base exception class for all service exceptions from WorkspacesInstances service.</p>
 *
 *
 * @public
 */
export class CreateVolumeCommand extends $Command
  .classBuilder<
    CreateVolumeCommandInput,
    CreateVolumeCommandOutput,
    WorkspacesInstancesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkspacesInstancesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EUCMIFrontendAPIService", "CreateVolume", {})
  .n("WorkspacesInstancesClient", "CreateVolumeCommand")
  .sc(CreateVolume)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVolumeRequest;
      output: CreateVolumeResponse;
    };
    sdk: {
      input: CreateVolumeCommandInput;
      output: CreateVolumeCommandOutput;
    };
  };
}
