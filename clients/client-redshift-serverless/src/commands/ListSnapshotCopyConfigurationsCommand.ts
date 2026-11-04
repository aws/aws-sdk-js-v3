// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSnapshotCopyConfigurationsRequest, ListSnapshotCopyConfigurationsResponse } from "../models/models_0";
import { ListSnapshotCopyConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSnapshotCopyConfigurationsCommand}.
 */
export interface ListSnapshotCopyConfigurationsCommandInput extends ListSnapshotCopyConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSnapshotCopyConfigurationsCommand}.
 */
export interface ListSnapshotCopyConfigurationsCommandOutput extends ListSnapshotCopyConfigurationsResponse, __MetadataBearer {}

/**
 * Returns a list of snapshot copy configurations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ListSnapshotCopyConfigurationsCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ListSnapshotCopyConfigurationsCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // ListSnapshotCopyConfigurationsRequest
 *   namespaceName: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSnapshotCopyConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSnapshotCopyConfigurationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   snapshotCopyConfigurations: [ // SnapshotCopyConfigurations // required
 * //     { // SnapshotCopyConfiguration
 * //       snapshotCopyConfigurationId: "STRING_VALUE",
 * //       snapshotCopyConfigurationArn: "STRING_VALUE",
 * //       namespaceName: "STRING_VALUE",
 * //       destinationRegion: "STRING_VALUE",
 * //       snapshotRetentionPeriod: Number("int"),
 * //       destinationKmsKeyId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSnapshotCopyConfigurationsCommandInput - {@link ListSnapshotCopyConfigurationsCommandInput}
 * @returns {@link ListSnapshotCopyConfigurationsCommandOutput}
 * @see {@link ListSnapshotCopyConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListSnapshotCopyConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The submitted action has conflicts.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link InvalidPaginationException} (client fault)
 *
 * The provided pagination token is invalid.
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
export class ListSnapshotCopyConfigurationsCommand extends command<ListSnapshotCopyConfigurationsCommandInput, ListSnapshotCopyConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListSnapshotCopyConfigurations",
  ListSnapshotCopyConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSnapshotCopyConfigurationsRequest;
      output: ListSnapshotCopyConfigurationsResponse;
    };
    sdk: {
      input: ListSnapshotCopyConfigurationsCommandInput;
      output: ListSnapshotCopyConfigurationsCommandOutput;
    };
  };
}
