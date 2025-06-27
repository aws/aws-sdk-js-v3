// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KeyspacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesClient";
import { CreateKeyspaceRequest, CreateKeyspaceResponse } from "../models/models_0";
import { de_CreateKeyspaceCommand, se_CreateKeyspaceCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateKeyspaceCommand}.
 */
export interface CreateKeyspaceCommandInput extends CreateKeyspaceRequest {}
/**
 * @public
 *
 * The output of {@link CreateKeyspaceCommand}.
 */
export interface CreateKeyspaceCommandOutput extends CreateKeyspaceResponse, __MetadataBearer {}

/**
 * <p>The <code>CreateKeyspace</code> operation adds a new keyspace to your account. In an Amazon Web Services account, keyspace names must be unique within each Region.</p> <p> <code>CreateKeyspace</code> is an asynchronous operation. You can monitor the creation status of the new keyspace by using the <code>GetKeyspace</code> operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/getting-started.keyspaces.html">Create a keyspace</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, CreateKeyspaceCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, CreateKeyspaceCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * const client = new KeyspacesClient(config);
 * const input = { // CreateKeyspaceRequest
 *   keyspaceName: "STRING_VALUE", // required
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   replicationSpecification: { // ReplicationSpecification
 *     replicationStrategy: "STRING_VALUE", // required
 *     regionList: [ // RegionList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new CreateKeyspaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateKeyspaceResponse
 * //   resourceArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateKeyspaceCommandInput - {@link CreateKeyspaceCommandInput}
 * @returns {@link CreateKeyspaceCommandOutput}
 * @see {@link CreateKeyspaceCommandInput} for command's `input` shape.
 * @see {@link CreateKeyspaceCommandOutput} for command's `response` shape.
 * @see {@link KeyspacesClientResolvedConfig | config} for KeyspacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Amazon Keyspaces couldn't complete the requested action. This error may occur if you try to perform an action and the same or a different action is already in progress, or if you try to create a resource that already exists. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Keyspaces was unable to fully process this request because of an internal server error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The operation exceeded the service quota for this resource. For more information on service quotas, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/quotas.html">Quotas</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation failed due to an invalid or malformed request.</p>
 *
 * @throws {@link KeyspacesServiceException}
 * <p>Base exception class for all service exceptions from Keyspaces service.</p>
 *
 *
 * @public
 */
export class CreateKeyspaceCommand extends $Command
  .classBuilder<
    CreateKeyspaceCommandInput,
    CreateKeyspaceCommandOutput,
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
  .s("KeyspacesService", "CreateKeyspace", {})
  .n("KeyspacesClient", "CreateKeyspaceCommand")
  .f(void 0, void 0)
  .ser(se_CreateKeyspaceCommand)
  .de(de_CreateKeyspaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateKeyspaceRequest;
      output: CreateKeyspaceResponse;
    };
    sdk: {
      input: CreateKeyspaceCommandInput;
      output: CreateKeyspaceCommandOutput;
    };
  };
}
