// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteSnapshotCopyConfigurationRequest,
  DeleteSnapshotCopyConfigurationResponse,
} from "../models/models_0";
import { DeleteSnapshotCopyConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DeleteSnapshotCopyConfigurationCommandOutput extends DeleteSnapshotCopyConfigurationResponse, __MetadataBearer {}

/**
 * Deletes a snapshot copy configuration
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The submitted action has conflicts.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link RedshiftServerlessServiceException}
 *
 * Base exception class for all service exceptions from RedshiftServerless service.
 *
 * @public
 */
export class DeleteSnapshotCopyConfigurationCommand extends command<DeleteSnapshotCopyConfigurationCommandInput, DeleteSnapshotCopyConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSnapshotCopyConfiguration",
  DeleteSnapshotCopyConfiguration$
) {
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
