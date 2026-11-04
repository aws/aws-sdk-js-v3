// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListBatchJobDefinitionsRequest, ListBatchJobDefinitionsResponse } from "../models/models_0";
import { ListBatchJobDefinitions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBatchJobDefinitionsCommand}.
 */
export interface ListBatchJobDefinitionsCommandInput extends ListBatchJobDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListBatchJobDefinitionsCommand}.
 */
export interface ListBatchJobDefinitionsCommandOutput extends ListBatchJobDefinitionsResponse, __MetadataBearer {}

/**
 * Lists all the available batch job definitions based on the batch job resources uploaded during the application creation. You can use the batch job definitions in the list to start a batch job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, ListBatchJobDefinitionsCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, ListBatchJobDefinitionsCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // ListBatchJobDefinitionsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   applicationId: "STRING_VALUE", // required
 *   prefix: "STRING_VALUE",
 * };
 * const command = new ListBatchJobDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListBatchJobDefinitionsResponse
 * //   batchJobDefinitions: [ // BatchJobDefinitions // required
 * //     { // BatchJobDefinition Union: only one key present
 * //       fileBatchJobDefinition: { // FileBatchJobDefinition
 * //         fileName: "STRING_VALUE", // required
 * //         folderPath: "STRING_VALUE",
 * //       },
 * //       scriptBatchJobDefinition: { // ScriptBatchJobDefinition
 * //         scriptName: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBatchJobDefinitionsCommandInput - {@link ListBatchJobDefinitionsCommandInput}
 * @returns {@link ListBatchJobDefinitionsCommandOutput}
 * @see {@link ListBatchJobDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListBatchJobDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The account or role doesn't have the right permissions to make the request.
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
export class ListBatchJobDefinitionsCommand extends command<ListBatchJobDefinitionsCommandInput, ListBatchJobDefinitionsCommandOutput>(
  _ep0,
  _mw0,
  "ListBatchJobDefinitions",
  ListBatchJobDefinitions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBatchJobDefinitionsRequest;
      output: ListBatchJobDefinitionsResponse;
    };
    sdk: {
      input: ListBatchJobDefinitionsCommandInput;
      output: ListBatchJobDefinitionsCommandOutput;
    };
  };
}
