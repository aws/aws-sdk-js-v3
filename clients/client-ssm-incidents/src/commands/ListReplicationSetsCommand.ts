// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListReplicationSetsInput, ListReplicationSetsOutput } from "../models/models_0";
import { de_ListReplicationSetsCommand, se_ListReplicationSetsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReplicationSetsCommand}.
 */
export interface ListReplicationSetsCommandInput extends ListReplicationSetsInput {}
/**
 * @public
 *
 * The output of {@link ListReplicationSetsCommand}.
 */
export interface ListReplicationSetsCommandOutput extends ListReplicationSetsOutput, __MetadataBearer {}

/**
 * <p>Lists details about the replication set configured in your account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, ListReplicationSetsCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, ListReplicationSetsCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const input = { // ListReplicationSetsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListReplicationSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListReplicationSetsOutput
 * //   replicationSetArns: [ // ReplicationSetArnList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReplicationSetsCommandInput - {@link ListReplicationSetsCommandInput}
 * @returns {@link ListReplicationSetsCommandOutput}
 * @see {@link ListReplicationSetsCommandInput} for command's `input` shape.
 * @see {@link ListReplicationSetsCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
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
 * @public
 */
export class ListReplicationSetsCommand extends $Command
  .classBuilder<
    ListReplicationSetsCommandInput,
    ListReplicationSetsCommandOutput,
    SSMIncidentsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSMIncidentsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMIncidents", "ListReplicationSets", {})
  .n("SSMIncidentsClient", "ListReplicationSetsCommand")
  .f(void 0, void 0)
  .ser(se_ListReplicationSetsCommand)
  .de(de_ListReplicationSetsCommand)
  .build() {}
