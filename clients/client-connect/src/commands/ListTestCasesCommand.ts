// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTestCasesRequest, ListTestCasesResponse } from "../models/models_2";
import { ListTestCases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTestCasesCommand}.
 */
export interface ListTestCasesCommandInput extends ListTestCasesRequest {}
/**
 * @public
 *
 * The output of {@link ListTestCasesCommand}.
 */
export interface ListTestCasesCommandOutput extends ListTestCasesResponse, __MetadataBearer {}

/**
 * <p>Lists the test cases present in the specific Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListTestCasesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListTestCasesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListTestCasesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListTestCasesCommand(input);
 * const response = await client.send(command);
 * // { // ListTestCasesResponse
 * //   TestCaseSummaryList: [ // TestCaseSummaryList
 * //     { // TestCaseSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Status: "PUBLISHED" || "SAVED",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestCasesCommandInput - {@link ListTestCasesCommandInput}
 * @returns {@link ListTestCasesCommandOutput}
 * @see {@link ListTestCasesCommandInput} for command's `input` shape.
 * @see {@link ListTestCasesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ListTestCasesCommand extends command<ListTestCasesCommandInput, ListTestCasesCommandOutput>(
  _ep0,
  _mw0,
  "ListTestCases",
  ListTestCases$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTestCasesRequest;
      output: ListTestCasesResponse;
    };
    sdk: {
      input: ListTestCasesCommandInput;
      output: ListTestCasesCommandOutput;
    };
  };
}
