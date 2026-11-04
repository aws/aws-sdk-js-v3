// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListBatchJobRestartPointsRequest, ListBatchJobRestartPointsResponse } from "../models/models_0";
import { ListBatchJobRestartPoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBatchJobRestartPointsCommand}.
 */
export interface ListBatchJobRestartPointsCommandInput extends ListBatchJobRestartPointsRequest {}
/**
 * @public
 *
 * The output of {@link ListBatchJobRestartPointsCommand}.
 */
export interface ListBatchJobRestartPointsCommandOutput extends ListBatchJobRestartPointsResponse, __MetadataBearer {}

/**
 * Lists all the job steps for a JCL file to restart a batch job. This is only applicable for Micro Focus engine with versions 8.0.6 and above.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, ListBatchJobRestartPointsCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, ListBatchJobRestartPointsCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // ListBatchJobRestartPointsRequest
 *   applicationId: "STRING_VALUE", // required
 *   executionId: "STRING_VALUE", // required
 *   authSecretsManagerArn: "STRING_VALUE",
 * };
 * const command = new ListBatchJobRestartPointsCommand(input);
 * const response = await client.send(command);
 * // { // ListBatchJobRestartPointsResponse
 * //   batchJobSteps: [ // BatchJobStepList
 * //     { // JobStep
 * //       stepNumber: Number("int"),
 * //       stepName: "STRING_VALUE",
 * //       procStepNumber: Number("int"),
 * //       procStepName: "STRING_VALUE",
 * //       stepCondCode: "STRING_VALUE",
 * //       stepRestartable: true || false,
 * //       stepCheckpoint: Number("int"),
 * //       stepCheckpointStatus: "STRING_VALUE",
 * //       stepCheckpointTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListBatchJobRestartPointsCommandInput - {@link ListBatchJobRestartPointsCommandInput}
 * @returns {@link ListBatchJobRestartPointsCommandOutput}
 * @see {@link ListBatchJobRestartPointsCommandInput} for command's `input` shape.
 * @see {@link ListBatchJobRestartPointsCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The account or role doesn't have the right permissions to make the request.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The parameters provided in the request conflict with existing resources.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests made exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One or more parameters provided in the request is not valid.
 *
 * @throws {@link M2ServiceException}
 *
 * Base exception class for all service exceptions from M2 service.
 *
 * @public
 */
export class ListBatchJobRestartPointsCommand extends command<ListBatchJobRestartPointsCommandInput, ListBatchJobRestartPointsCommandOutput>(
  _ep0,
  _mw0,
  "ListBatchJobRestartPoints",
  ListBatchJobRestartPoints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBatchJobRestartPointsRequest;
      output: ListBatchJobRestartPointsResponse;
    };
    sdk: {
      input: ListBatchJobRestartPointsCommandInput;
      output: ListBatchJobRestartPointsCommandOutput;
    };
  };
}
