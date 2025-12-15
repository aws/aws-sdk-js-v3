// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  UpdateSnapshotCopyConfigurationRequest,
  UpdateSnapshotCopyConfigurationResponse,
} from "../models/models_0";
import type {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { UpdateSnapshotCopyConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSnapshotCopyConfigurationCommand}.
 */
export interface UpdateSnapshotCopyConfigurationCommandInput extends UpdateSnapshotCopyConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSnapshotCopyConfigurationCommand}.
 */
export interface UpdateSnapshotCopyConfigurationCommandOutput
  extends UpdateSnapshotCopyConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates a snapshot copy configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, UpdateSnapshotCopyConfigurationCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, UpdateSnapshotCopyConfigurationCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // UpdateSnapshotCopyConfigurationRequest
 *   snapshotCopyConfigurationId: "STRING_VALUE", // required
 *   snapshotRetentionPeriod: Number("int"),
 * };
 * const command = new UpdateSnapshotCopyConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSnapshotCopyConfigurationResponse
 * //   snapshotCopyConfiguration: { // SnapshotCopyConfiguration
 * //     snapshotCopyConfigurationId: "STRING_VALUE",
 * //     snapshotCopyConfigurationArn: "STRING_VALUE",
 * //     namespaceName: "STRING_VALUE",
 * //     destinationRegion: "STRING_VALUE",
 * //     snapshotRetentionPeriod: Number("int"),
 * //     destinationKmsKeyId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSnapshotCopyConfigurationCommandInput - {@link UpdateSnapshotCopyConfigurationCommandInput}
 * @returns {@link UpdateSnapshotCopyConfigurationCommandOutput}
 * @see {@link UpdateSnapshotCopyConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateSnapshotCopyConfigurationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class UpdateSnapshotCopyConfigurationCommand extends $Command
  .classBuilder<
    UpdateSnapshotCopyConfigurationCommandInput,
    UpdateSnapshotCopyConfigurationCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "UpdateSnapshotCopyConfiguration", {})
  .n("RedshiftServerlessClient", "UpdateSnapshotCopyConfigurationCommand")
  .sc(UpdateSnapshotCopyConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSnapshotCopyConfigurationRequest;
      output: UpdateSnapshotCopyConfigurationResponse;
    };
    sdk: {
      input: UpdateSnapshotCopyConfigurationCommandInput;
      output: UpdateSnapshotCopyConfigurationCommandOutput;
    };
  };
}
