// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLaunchConfigurationDefaultsRequest, GetLaunchConfigurationDefaultsResponse } from "../models/models_0";
import { GetLaunchConfigurationDefaults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLaunchConfigurationDefaultsCommand}.
 */
export interface GetLaunchConfigurationDefaultsCommandInput extends GetLaunchConfigurationDefaultsRequest {}
/**
 * @public
 *
 * The output of {@link GetLaunchConfigurationDefaultsCommand}.
 */
export interface GetLaunchConfigurationDefaultsCommandOutput extends GetLaunchConfigurationDefaultsResponse, __MetadataBearer {}

/**
 * <p>Gets the launch configuration defaults of a source server: the Amazon Elastic Block Store (Amazon EBS) volume configuration used for the disk mappings created later in the source server's Amazon Elastic Compute Cloud (Amazon EC2) launch template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, GetLaunchConfigurationDefaultsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, GetLaunchConfigurationDefaultsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // GetLaunchConfigurationDefaultsRequest
 *   sourceServerID: "STRING_VALUE", // required
 *   accountID: "STRING_VALUE",
 * };
 * const command = new GetLaunchConfigurationDefaultsCommand(input);
 * const response = await client.send(command);
 * // { // GetLaunchConfigurationDefaultsResponse
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
 * @param GetLaunchConfigurationDefaultsCommandInput - {@link GetLaunchConfigurationDefaultsCommandInput}
 * @returns {@link GetLaunchConfigurationDefaultsCommandOutput}
 * @see {@link GetLaunchConfigurationDefaultsCommandInput} for command's `input` shape.
 * @see {@link GetLaunchConfigurationDefaultsCommandOutput} for command's `response` shape.
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
export class GetLaunchConfigurationDefaultsCommand extends command<GetLaunchConfigurationDefaultsCommandInput, GetLaunchConfigurationDefaultsCommandOutput>(
  _ep0,
  _mw0,
  "GetLaunchConfigurationDefaults",
  GetLaunchConfigurationDefaults$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLaunchConfigurationDefaultsRequest;
      output: GetLaunchConfigurationDefaultsResponse;
    };
    sdk: {
      input: GetLaunchConfigurationDefaultsCommandInput;
      output: GetLaunchConfigurationDefaultsCommandOutput;
    };
  };
}
