// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { ListParticipantReplicasRequest, ListParticipantReplicasResponse } from "../models/models_0";
import { de_ListParticipantReplicasCommand, se_ListParticipantReplicasCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListParticipantReplicasCommand}.
 */
export interface ListParticipantReplicasCommandInput extends ListParticipantReplicasRequest {}
/**
 * @public
 *
 * The output of {@link ListParticipantReplicasCommand}.
 */
export interface ListParticipantReplicasCommandOutput extends ListParticipantReplicasResponse, __MetadataBearer {}

/**
 * <p>Lists all the replicas for a participant from a source stage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, ListParticipantReplicasCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, ListParticipantReplicasCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * const client = new IVSRealTimeClient(config);
 * const input = { // ListParticipantReplicasRequest
 *   sourceStageArn: "STRING_VALUE", // required
 *   participantId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListParticipantReplicasCommand(input);
 * const response = await client.send(command);
 * // { // ListParticipantReplicasResponse
 * //   replicas: [ // ParticipantReplicaList // required
 * //     { // ParticipantReplica
 * //       sourceStageArn: "STRING_VALUE", // required
 * //       participantId: "STRING_VALUE", // required
 * //       sourceSessionId: "STRING_VALUE", // required
 * //       destinationStageArn: "STRING_VALUE", // required
 * //       destinationSessionId: "STRING_VALUE", // required
 * //       replicationState: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListParticipantReplicasCommandInput - {@link ListParticipantReplicasCommandInput}
 * @returns {@link ListParticipantReplicasCommandOutput}
 * @see {@link ListParticipantReplicasCommandInput} for command's `input` shape.
 * @see {@link ListParticipantReplicasCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 *
 * @public
 */
export class ListParticipantReplicasCommand extends $Command
  .classBuilder<
    ListParticipantReplicasCommandInput,
    ListParticipantReplicasCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "ListParticipantReplicas", {})
  .n("IVSRealTimeClient", "ListParticipantReplicasCommand")
  .f(void 0, void 0)
  .ser(se_ListParticipantReplicasCommand)
  .de(de_ListParticipantReplicasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListParticipantReplicasRequest;
      output: ListParticipantReplicasResponse;
    };
    sdk: {
      input: ListParticipantReplicasCommandInput;
      output: ListParticipantReplicasCommandOutput;
    };
  };
}
