// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KeyspacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesClient";
import { GetKeyspaceRequest, GetKeyspaceResponse } from "../models/models_0";
import { de_GetKeyspaceCommand, se_GetKeyspaceCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetKeyspaceCommand}.
 */
export interface GetKeyspaceCommandInput extends GetKeyspaceRequest {}
/**
 * @public
 *
 * The output of {@link GetKeyspaceCommand}.
 */
export interface GetKeyspaceCommandOutput extends GetKeyspaceResponse, __MetadataBearer {}

/**
 * <p>Returns the name of the specified keyspace, the Amazon Resource Name (ARN), the replication strategy, the Amazon Web Services Regions of
 *          a multi-Region keyspace, and the status of newly added Regions after an <code>UpdateKeyspace</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, GetKeyspaceCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, GetKeyspaceCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * const client = new KeyspacesClient(config);
 * const input = { // GetKeyspaceRequest
 *   keyspaceName: "STRING_VALUE", // required
 * };
 * const command = new GetKeyspaceCommand(input);
 * const response = await client.send(command);
 * // { // GetKeyspaceResponse
 * //   keyspaceName: "STRING_VALUE", // required
 * //   resourceArn: "STRING_VALUE", // required
 * //   replicationStrategy: "STRING_VALUE", // required
 * //   replicationRegions: [ // RegionList
 * //     "STRING_VALUE",
 * //   ],
 * //   replicationGroupStatuses: [ // ReplicationGroupStatusList
 * //     { // ReplicationGroupStatus
 * //       region: "STRING_VALUE", // required
 * //       keyspaceStatus: "STRING_VALUE", // required
 * //       tablesReplicationProgress: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetKeyspaceCommandInput - {@link GetKeyspaceCommandInput}
 * @returns {@link GetKeyspaceCommandOutput}
 * @see {@link GetKeyspaceCommandInput} for command's `input` shape.
 * @see {@link GetKeyspaceCommandOutput} for command's `response` shape.
 * @see {@link KeyspacesClientResolvedConfig | config} for KeyspacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access permissions to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Keyspaces was unable to fully process this request because of an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a keyspace, table, or type that doesn't exist. The resource might not be specified correctly,
 *          or its status might not be <code>ACTIVE</code>.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The operation exceeded the service quota for this resource.  For more information on service quotas, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/quotas.html">Quotas</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation failed due to an invalid or malformed request.</p>
 *
 * @throws {@link KeyspacesServiceException}
 * <p>Base exception class for all service exceptions from Keyspaces service.</p>
 *
 * @public
 */
export class GetKeyspaceCommand extends $Command
  .classBuilder<
    GetKeyspaceCommandInput,
    GetKeyspaceCommandOutput,
    KeyspacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KeyspacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("KeyspacesService", "GetKeyspace", {})
  .n("KeyspacesClient", "GetKeyspaceCommand")
  .f(void 0, void 0)
  .ser(se_GetKeyspaceCommand)
  .de(de_GetKeyspaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetKeyspaceRequest;
      output: GetKeyspaceResponse;
    };
    sdk: {
      input: GetKeyspaceCommandInput;
      output: GetKeyspaceCommandOutput;
    };
  };
}
