// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeleteSnapshotCopyConfigurationRequest,
  DeleteSnapshotCopyConfigurationResponse,
} from "../models/models_0";
import type {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { DeleteSnapshotCopyConfiguration$ } from "../schemas/schemas_0";

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
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
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
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "DeleteSnapshotCopyConfiguration", {})
  .n("RedshiftServerlessClient", "DeleteSnapshotCopyConfigurationCommand")
  .sc(DeleteSnapshotCopyConfiguration$)
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
