// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateSnapshotCopyConfigurationRequest,
  CreateSnapshotCopyConfigurationResponse,
} from "../models/models_0";
import { CreateSnapshotCopyConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSnapshotCopyConfigurationCommand}.
 */
export interface CreateSnapshotCopyConfigurationCommandInput extends CreateSnapshotCopyConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateSnapshotCopyConfigurationCommand}.
 */
export interface CreateSnapshotCopyConfigurationCommandOutput extends CreateSnapshotCopyConfigurationResponse, __MetadataBearer {}

/**
 * Creates a snapshot copy configuration that lets you copy snapshots to another Amazon Web Services Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, CreateSnapshotCopyConfigurationCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, CreateSnapshotCopyConfigurationCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // CreateSnapshotCopyConfigurationRequest
 *   namespaceName: "STRING_VALUE", // required
 *   destinationRegion: "STRING_VALUE", // required
 *   snapshotRetentionPeriod: Number("int"),
 *   destinationKmsKeyId: "STRING_VALUE",
 * };
 * const command = new CreateSnapshotCopyConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateSnapshotCopyConfigurationResponse
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
 * @param CreateSnapshotCopyConfigurationCommandInput - {@link CreateSnapshotCopyConfigurationCommandInput}
 * @returns {@link CreateSnapshotCopyConfigurationCommandOutput}
 * @see {@link CreateSnapshotCopyConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotCopyConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service limit was exceeded.
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
export class CreateSnapshotCopyConfigurationCommand extends command<CreateSnapshotCopyConfigurationCommandInput, CreateSnapshotCopyConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateSnapshotCopyConfiguration",
  CreateSnapshotCopyConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSnapshotCopyConfigurationRequest;
      output: CreateSnapshotCopyConfigurationResponse;
    };
    sdk: {
      input: CreateSnapshotCopyConfigurationCommandInput;
      output: CreateSnapshotCopyConfigurationCommandOutput;
    };
  };
}
