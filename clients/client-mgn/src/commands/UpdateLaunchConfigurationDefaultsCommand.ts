// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateLaunchConfigurationDefaultsRequest,
  UpdateLaunchConfigurationDefaultsResponse,
} from "../models/models_0";
import { UpdateLaunchConfigurationDefaults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateLaunchConfigurationDefaultsCommand}.
 */
export interface UpdateLaunchConfigurationDefaultsCommandInput extends UpdateLaunchConfigurationDefaultsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLaunchConfigurationDefaultsCommand}.
 */
export interface UpdateLaunchConfigurationDefaultsCommandOutput extends UpdateLaunchConfigurationDefaultsResponse, __MetadataBearer {}

/**
 * <p>Updates the launch configuration defaults of a source server. They apply only to disk mappings created later in the source server's Amazon Elastic Compute Cloud (Amazon EC2) launch template, and members you omit keep their current values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, UpdateLaunchConfigurationDefaultsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, UpdateLaunchConfigurationDefaultsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // UpdateLaunchConfigurationDefaultsRequest
 *   sourceServerID: "STRING_VALUE", // required
 *   accountID: "STRING_VALUE",
 *   smallVolumeMaxSize: Number("long"),
 *   smallVolumeConfiguration: { // SourceServerVolumeConfiguration
 *     volumeType: "STRING_VALUE",
 *     iops: Number("long"),
 *     throughput: Number("long"),
 *     volumeInitializationRate: Number("long"),
 *     deleteOnTermination: "STRING_VALUE",
 *   },
 *   largeVolumeConfiguration: {
 *     volumeType: "STRING_VALUE",
 *     iops: Number("long"),
 *     throughput: Number("long"),
 *     volumeInitializationRate: Number("long"),
 *     deleteOnTermination: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateLaunchConfigurationDefaultsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLaunchConfigurationDefaultsResponse
 * //   sourceServerID: "STRING_VALUE",
 * //   smallVolumeMaxSize: Number("long"),
 * //   smallVolumeConfiguration: { // SourceServerVolumeConfiguration
 * //     volumeType: "STRING_VALUE",
 * //     iops: Number("long"),
 * //     throughput: Number("long"),
 * //     volumeInitializationRate: Number("long"),
 * //     deleteOnTermination: "STRING_VALUE",
 * //   },
 * //   largeVolumeConfiguration: {
 * //     volumeType: "STRING_VALUE",
 * //     iops: Number("long"),
 * //     throughput: Number("long"),
 * //     volumeInitializationRate: Number("long"),
 * //     deleteOnTermination: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateLaunchConfigurationDefaultsCommandInput - {@link UpdateLaunchConfigurationDefaultsCommandInput}
 * @returns {@link UpdateLaunchConfigurationDefaultsCommandOutput}
 * @see {@link UpdateLaunchConfigurationDefaultsCommandInput} for command's `input` shape.
 * @see {@link UpdateLaunchConfigurationDefaultsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class UpdateLaunchConfigurationDefaultsCommand extends command<UpdateLaunchConfigurationDefaultsCommandInput, UpdateLaunchConfigurationDefaultsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateLaunchConfigurationDefaults",
  UpdateLaunchConfigurationDefaults$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLaunchConfigurationDefaultsRequest;
      output: UpdateLaunchConfigurationDefaultsResponse;
    };
    sdk: {
      input: UpdateLaunchConfigurationDefaultsCommandInput;
      output: UpdateLaunchConfigurationDefaultsCommandOutput;
    };
  };
}
