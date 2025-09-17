// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetIncidentFindingsInput, BatchGetIncidentFindingsOutput } from "../models/models_0";
import { de_BatchGetIncidentFindingsCommand, se_BatchGetIncidentFindingsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetIncidentFindingsCommand}.
 */
export interface BatchGetIncidentFindingsCommandInput extends BatchGetIncidentFindingsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetIncidentFindingsCommand}.
 */
export interface BatchGetIncidentFindingsCommandOutput extends BatchGetIncidentFindingsOutput, __MetadataBearer {}

/**
 * <p>Retrieves details about all specified findings for an incident, including descriptive details about each finding. A finding
 *       represents a recent application environment change made by an CodeDeploy
 *       deployment or an CloudFormation stack creation or update that can be investigated as a
 *       potential cause of the incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, BatchGetIncidentFindingsCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, BatchGetIncidentFindingsCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // BatchGetIncidentFindingsInput
 *   incidentRecordArn: "STRING_VALUE", // required
 *   findingIds: [ // FindingIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetIncidentFindingsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetIncidentFindingsOutput
 * //   findings: [ // FindingList // required
 * //     { // Finding
 * //       id: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       lastModifiedTime: new Date("TIMESTAMP"), // required
 * //       details: { // FindingDetails Union: only one key present
 * //         codeDeployDeployment: { // CodeDeployDeployment
 * //           startTime: new Date("TIMESTAMP"), // required
 * //           endTime: new Date("TIMESTAMP"),
 * //           deploymentGroupArn: "STRING_VALUE", // required
 * //           deploymentId: "STRING_VALUE", // required
 * //         },
 * //         cloudFormationStackUpdate: { // CloudFormationStackUpdate
 * //           startTime: new Date("TIMESTAMP"), // required
 * //           endTime: new Date("TIMESTAMP"),
 * //           stackArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   errors: [ // BatchGetIncidentFindingsErrorList // required
 * //     { // BatchGetIncidentFindingsError
 * //       findingId: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetIncidentFindingsCommandInput - {@link BatchGetIncidentFindingsCommandInput}
 * @returns {@link BatchGetIncidentFindingsCommandOutput}
 * @see {@link BatchGetIncidentFindingsCommandInput} for command's `input` shape.
 * @see {@link BatchGetIncidentFindingsCommandOutput} for command's `response` shape.
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
export class BatchGetIncidentFindingsCommand extends $Command
  .classBuilder<
    BatchGetIncidentFindingsCommandInput,
    BatchGetIncidentFindingsCommandOutput,
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
  .s("SSMIncidents", "BatchGetIncidentFindings", {})
  .n("SSMIncidentsClient", "BatchGetIncidentFindingsCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetIncidentFindingsCommand)
  .de(de_BatchGetIncidentFindingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetIncidentFindingsInput;
      output: BatchGetIncidentFindingsOutput;
    };
    sdk: {
      input: BatchGetIncidentFindingsCommandInput;
      output: BatchGetIncidentFindingsCommandOutput;
    };
  };
}
