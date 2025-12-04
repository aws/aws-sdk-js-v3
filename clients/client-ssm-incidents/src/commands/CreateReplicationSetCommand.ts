// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateReplicationSetInput, CreateReplicationSetOutput } from "../models/models_0";
import { CreateReplicationSet } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateReplicationSetCommand}.
 */
export interface CreateReplicationSetCommandInput extends CreateReplicationSetInput {}
/**
 * @public
 *
 * The output of {@link CreateReplicationSetCommand}.
 */
export interface CreateReplicationSetCommandOutput extends CreateReplicationSetOutput, __MetadataBearer {}

/**
 * <p>A replication set replicates and encrypts your data to the provided Regions with the
 *       provided KMS key. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, CreateReplicationSetCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, CreateReplicationSetCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // CreateReplicationSetInput
 *   regions: { // RegionMapInput // required
 *     "<keys>": { // RegionMapInputValue
 *       sseKmsKeyId: "STRING_VALUE",
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateReplicationSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateReplicationSetOutput
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateReplicationSetCommandInput - {@link CreateReplicationSetCommandInput}
 * @returns {@link CreateReplicationSetCommandOutput}
 * @see {@link CreateReplicationSetCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationSetCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource causes an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link SSMIncidentsServiceException}
 * <p>Base exception class for all service exceptions from SSMIncidents service.</p>
 *
 *
 * @public
 */
export class CreateReplicationSetCommand extends $Command
  .classBuilder<
    CreateReplicationSetCommandInput,
    CreateReplicationSetCommandOutput,
    SSMIncidentsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMIncidentsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMIncidents", "CreateReplicationSet", {})
  .n("SSMIncidentsClient", "CreateReplicationSetCommand")
  .sc(CreateReplicationSet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReplicationSetInput;
      output: CreateReplicationSetOutput;
    };
    sdk: {
      input: CreateReplicationSetCommandInput;
      output: CreateReplicationSetCommandOutput;
    };
  };
}
