// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KeyspacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesClient";
import { UpdateKeyspaceRequest, UpdateKeyspaceResponse } from "../models/models_0";
import { de_UpdateKeyspaceCommand, se_UpdateKeyspaceCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateKeyspaceCommand}.
 */
export interface UpdateKeyspaceCommandInput extends UpdateKeyspaceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKeyspaceCommand}.
 */
export interface UpdateKeyspaceCommandOutput extends UpdateKeyspaceResponse, __MetadataBearer {}

/**
 * <p>
 *          Adds a new Amazon Web Services Region to the keyspace.  You can add a new Region to a keyspace that is either a single or a multi-Region keyspace.
 *          The new replica Region is applied to all tables in the keyspace. For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/keyspaces-multi-region-add-replica.html">Add an Amazon Web Services Region to a keyspace in Amazon Keyspaces</a> in the <i>Amazon Keyspaces Developer
 *                Guide</i>.
 *       </p>
 *          <p>To change a single-Region to a multi-Region keyspace, you have to enable client-side timestamps
 *          for all tables in the keyspace. For more information, see
 *          <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/client-side-timestamps.html">Client-side timestamps in Amazon Keyspaces</a> in the <i>Amazon Keyspaces Developer
 *                Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, UpdateKeyspaceCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, UpdateKeyspaceCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * const client = new KeyspacesClient(config);
 * const input = { // UpdateKeyspaceRequest
 *   keyspaceName: "STRING_VALUE", // required
 *   replicationSpecification: { // ReplicationSpecification
 *     replicationStrategy: "STRING_VALUE", // required
 *     regionList: [ // RegionList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   clientSideTimestamps: { // ClientSideTimestamps
 *     status: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateKeyspaceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKeyspaceResponse
 * //   resourceArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateKeyspaceCommandInput - {@link UpdateKeyspaceCommandInput}
 * @returns {@link UpdateKeyspaceCommandOutput}
 * @see {@link UpdateKeyspaceCommandInput} for command's `input` shape.
 * @see {@link UpdateKeyspaceCommandOutput} for command's `response` shape.
 * @see {@link KeyspacesClientResolvedConfig | config} for KeyspacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Amazon Keyspaces couldn't complete the requested action. This error may occur if you try to
 *          perform an action and the same or a different action is already
 *          in progress, or if you try to create a resource that already exists. </p>
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
export class UpdateKeyspaceCommand extends $Command
  .classBuilder<
    UpdateKeyspaceCommandInput,
    UpdateKeyspaceCommandOutput,
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
  .s("KeyspacesService", "UpdateKeyspace", {})
  .n("KeyspacesClient", "UpdateKeyspaceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateKeyspaceCommand)
  .de(de_UpdateKeyspaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateKeyspaceRequest;
      output: UpdateKeyspaceResponse;
    };
    sdk: {
      input: UpdateKeyspaceCommandInput;
      output: UpdateKeyspaceCommandOutput;
    };
  };
}
