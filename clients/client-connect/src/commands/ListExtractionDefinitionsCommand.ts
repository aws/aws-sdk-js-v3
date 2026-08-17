// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListExtractionDefinitionsRequest, ListExtractionDefinitionsResponse } from "../models/models_2";
import { ListExtractionDefinitions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListExtractionDefinitionsCommand}.
 */
export interface ListExtractionDefinitionsCommandInput extends ListExtractionDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListExtractionDefinitionsCommand}.
 */
export interface ListExtractionDefinitionsCommandOutput extends ListExtractionDefinitionsResponse, __MetadataBearer {}

/**
 * <p>Lists extraction definitions in the specified Connect Customer instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListExtractionDefinitionsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListExtractionDefinitionsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListExtractionDefinitionsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListExtractionDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListExtractionDefinitionsResponse
 * //   ExtractionDefinitionSummaryList: [ // ExtractionDefinitionSummaryList // required
 * //     { // ExtractionDefinitionSummary
 * //       Name: "STRING_VALUE", // required
 * //       ExtractionDefinitionId: "STRING_VALUE", // required
 * //       ExtractionDefinitionArn: "STRING_VALUE", // required
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //       LastUpdatedTime: new Date("TIMESTAMP"), // required
 * //       LastUpdatedBy: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExtractionDefinitionsCommandInput - {@link ListExtractionDefinitionsCommandInput}
 * @returns {@link ListExtractionDefinitionsCommandOutput}
 * @see {@link ListExtractionDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListExtractionDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
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
export class ListExtractionDefinitionsCommand extends command<ListExtractionDefinitionsCommandInput, ListExtractionDefinitionsCommandOutput>(
  _ep0,
  _mw0,
  "ListExtractionDefinitions",
  ListExtractionDefinitions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExtractionDefinitionsRequest;
      output: ListExtractionDefinitionsResponse;
    };
    sdk: {
      input: ListExtractionDefinitionsCommandInput;
      output: ListExtractionDefinitionsCommandOutput;
    };
  };
}
