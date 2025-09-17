// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { ListDataSetsRequest, ListDataSetsResponse } from "../models/models_0";
import { de_ListDataSetsCommand, se_ListDataSetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataSetsCommand}.
 */
export interface ListDataSetsCommandInput extends ListDataSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataSetsCommand}.
 */
export interface ListDataSetsCommandOutput extends ListDataSetsResponse, __MetadataBearer {}

/**
 * <p>Lists the data sets imported for a specific application. In Amazon Web Services Mainframe Modernization, data sets are
 *          associated with applications deployed on runtime environments. This is known as importing
 *          data sets. Currently, Amazon Web Services Mainframe Modernization can import data sets into catalogs using <a href="https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateDataSetImportTask.html">CreateDataSetImportTask</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, ListDataSetsCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, ListDataSetsCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // ListDataSetsRequest
 *   applicationId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   prefix: "STRING_VALUE",
 *   nameFilter: "STRING_VALUE",
 * };
 * const command = new ListDataSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataSetsResponse
 * //   dataSets: [ // DataSetsSummaryList // required
 * //     { // DataSetSummary
 * //       dataSetName: "STRING_VALUE", // required
 * //       dataSetOrg: "STRING_VALUE",
 * //       format: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //       lastReferencedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataSetsCommandInput - {@link ListDataSetsCommandInput}
 * @returns {@link ListDataSetsCommandOutput}
 * @see {@link ListDataSetsCommandInput} for command's `input` shape.
 * @see {@link ListDataSetsCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The parameters provided in the request conflict with existing resources.</p>
 *
 * @throws {@link ExecutionTimeoutException} (server fault)
 *  <p> Failed to connect to server, or didn’t receive response within expected time period.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Server cannot process the request at the moment.</p>
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
export class ListDataSetsCommand extends $Command
  .classBuilder<
    ListDataSetsCommandInput,
    ListDataSetsCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsSupernovaControlPlaneService", "ListDataSets", {})
  .n("M2Client", "ListDataSetsCommand")
  .f(void 0, void 0)
  .ser(se_ListDataSetsCommand)
  .de(de_ListDataSetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataSetsRequest;
      output: ListDataSetsResponse;
    };
    sdk: {
      input: ListDataSetsCommandInput;
      output: ListDataSetsCommandOutput;
    };
  };
}
