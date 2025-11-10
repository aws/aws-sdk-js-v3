// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { ListBatchJobDefinitionsRequest, ListBatchJobDefinitionsResponse } from "../models/models_0";
import { ListBatchJobDefinitions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists all the available batch job definitions based on the batch job resources uploaded
 *          during the application creation. You can use the batch job definitions in the list to start
 *          a batch job.</p>
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
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 *
 * @public
 */
export class ListBatchJobDefinitionsCommand extends $Command
  .classBuilder<
    ListBatchJobDefinitionsCommandInput,
    ListBatchJobDefinitionsCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsSupernovaControlPlaneService", "ListBatchJobDefinitions", {})
  .n("M2Client", "ListBatchJobDefinitionsCommand")
  .sc(ListBatchJobDefinitions)
  .build() {
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
