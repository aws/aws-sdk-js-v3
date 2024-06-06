// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSnapshotCopyConfigurationRequest, CreateSnapshotCopyConfigurationResponse } from "../models/models_0";
import {
  de_CreateSnapshotCopyConfigurationCommand,
  se_CreateSnapshotCopyConfigurationCommand,
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
 * The input for {@link CreateSnapshotCopyConfigurationCommand}.
 */
export interface CreateSnapshotCopyConfigurationCommandInput extends CreateSnapshotCopyConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateSnapshotCopyConfigurationCommand}.
 */
export interface CreateSnapshotCopyConfigurationCommandOutput
  extends CreateSnapshotCopyConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a snapshot copy configuration that lets you copy snapshots to another Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, CreateSnapshotCopyConfigurationCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, CreateSnapshotCopyConfigurationCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 * @public
 */
export class CreateSnapshotCopyConfigurationCommand extends $Command
  .classBuilder<
    CreateSnapshotCopyConfigurationCommandInput,
    CreateSnapshotCopyConfigurationCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServerless", "CreateSnapshotCopyConfiguration", {})
  .n("RedshiftServerlessClient", "CreateSnapshotCopyConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateSnapshotCopyConfigurationCommand)
  .de(de_CreateSnapshotCopyConfigurationCommand)
  .build() {}
