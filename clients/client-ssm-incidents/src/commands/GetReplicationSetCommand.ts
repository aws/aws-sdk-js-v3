// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetReplicationSetInput, GetReplicationSetOutput } from "../models/models_0";
import { de_GetReplicationSetCommand, se_GetReplicationSetCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReplicationSetCommand}.
 */
export interface GetReplicationSetCommandInput extends GetReplicationSetInput {}
/**
 * @public
 *
 * The output of {@link GetReplicationSetCommand}.
 */
export interface GetReplicationSetCommandOutput extends GetReplicationSetOutput, __MetadataBearer {}

/**
 * <p>Retrieve your Incident Manager replication set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, GetReplicationSetCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, GetReplicationSetCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const input = { // GetReplicationSetInput
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetReplicationSetCommand(input);
 * const response = await client.send(command);
 * // { // GetReplicationSetOutput
 * //   replicationSet: { // ReplicationSet
 * //     arn: "STRING_VALUE",
 * //     regionMap: { // RegionInfoMap // required
 * //       "<keys>": { // RegionInfo
 * //         sseKmsKeyId: "STRING_VALUE",
 * //         status: "STRING_VALUE", // required
 * //         statusMessage: "STRING_VALUE",
 * //         statusUpdateDateTime: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //     status: "STRING_VALUE", // required
 * //     deletionProtected: true || false, // required
 * //     createdTime: new Date("TIMESTAMP"), // required
 * //     createdBy: "STRING_VALUE", // required
 * //     lastModifiedTime: new Date("TIMESTAMP"), // required
 * //     lastModifiedBy: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetReplicationSetCommandInput - {@link GetReplicationSetCommandInput}
 * @returns {@link GetReplicationSetCommandOutput}
 * @see {@link GetReplicationSetCommandInput} for command's `input` shape.
 * @see {@link GetReplicationSetCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which doesn't exist. </p>
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
export class GetReplicationSetCommand extends $Command
  .classBuilder<
    GetReplicationSetCommandInput,
    GetReplicationSetCommandOutput,
    SSMIncidentsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMIncidentsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMIncidents", "GetReplicationSet", {})
  .n("SSMIncidentsClient", "GetReplicationSetCommand")
  .f(void 0, void 0)
  .ser(se_GetReplicationSetCommand)
  .de(de_GetReplicationSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReplicationSetInput;
      output: GetReplicationSetOutput;
    };
    sdk: {
      input: GetReplicationSetCommandInput;
      output: GetReplicationSetCommandOutput;
    };
  };
}
