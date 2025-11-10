// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSnapshotCopyConfigurationsRequest, ListSnapshotCopyConfigurationsResponse } from "../models/models_0";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { ListSnapshotCopyConfigurations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListSnapshotCopyConfigurationsCommandOutput
  extends ListSnapshotCopyConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of snapshot copy configurations.</p>
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
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link InvalidPaginationException} (client fault)
 *  <p>The provided pagination token is invalid.</p>
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
export class ListSnapshotCopyConfigurationsCommand extends $Command
  .classBuilder<
    ListSnapshotCopyConfigurationsCommandInput,
    ListSnapshotCopyConfigurationsCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "ListSnapshotCopyConfigurations", {})
  .n("RedshiftServerlessClient", "ListSnapshotCopyConfigurationsCommand")
  .sc(ListSnapshotCopyConfigurations)
  .build() {
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
