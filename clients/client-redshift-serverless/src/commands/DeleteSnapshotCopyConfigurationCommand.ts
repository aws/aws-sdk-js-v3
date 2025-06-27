// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSnapshotCopyConfigurationRequest, DeleteSnapshotCopyConfigurationResponse } from "../models/models_0";
import {
  de_DeleteSnapshotCopyConfigurationCommand,
  se_DeleteSnapshotCopyConfigurationCommand,
} from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSnapshotCopyConfigurationCommand}.
 */
export interface DeleteSnapshotCopyConfigurationCommandInput extends DeleteSnapshotCopyConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSnapshotCopyConfigurationCommand}.
 */
export interface DeleteSnapshotCopyConfigurationCommandOutput
  extends DeleteSnapshotCopyConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a snapshot copy configuration</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, DeleteSnapshotCopyConfigurationCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, DeleteSnapshotCopyConfigurationCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // DeleteSnapshotCopyConfigurationRequest
 *   snapshotCopyConfigurationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSnapshotCopyConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSnapshotCopyConfigurationResponse
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
 * @param DeleteSnapshotCopyConfigurationCommandInput - {@link DeleteSnapshotCopyConfigurationCommandInput}
 * @returns {@link DeleteSnapshotCopyConfigurationCommandOutput}
 * @see {@link DeleteSnapshotCopyConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteSnapshotCopyConfigurationCommandOutput} for command's `response` shape.
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
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class DeleteSnapshotCopyConfigurationCommand extends $Command
  .classBuilder<
    DeleteSnapshotCopyConfigurationCommandInput,
    DeleteSnapshotCopyConfigurationCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServerless", "DeleteSnapshotCopyConfiguration", {})
  .n("RedshiftServerlessClient", "DeleteSnapshotCopyConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSnapshotCopyConfigurationCommand)
  .de(de_DeleteSnapshotCopyConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSnapshotCopyConfigurationRequest;
      output: DeleteSnapshotCopyConfigurationResponse;
    };
    sdk: {
      input: DeleteSnapshotCopyConfigurationCommandInput;
      output: DeleteSnapshotCopyConfigurationCommandOutput;
    };
  };
}
