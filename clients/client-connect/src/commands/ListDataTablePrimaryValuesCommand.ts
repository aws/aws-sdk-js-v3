// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDataTablePrimaryValuesRequest, ListDataTablePrimaryValuesResponse } from "../models/models_2";
import { ListDataTablePrimaryValues } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataTablePrimaryValuesCommand}.
 */
export interface ListDataTablePrimaryValuesCommandInput extends ListDataTablePrimaryValuesRequest {}
/**
 * @public
 *
 * The output of {@link ListDataTablePrimaryValuesCommand}.
 */
export interface ListDataTablePrimaryValuesCommandOutput extends ListDataTablePrimaryValuesResponse, __MetadataBearer {}

/**
 * <p>Lists all primary value combinations for a given data table. Returns the unique combinations of primary attribute values that identify records in the table. Up to 100 records are returned per request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListDataTablePrimaryValuesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListDataTablePrimaryValuesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListDataTablePrimaryValuesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataTableId: "STRING_VALUE", // required
 *   RecordIds: [ // RecordIds
 *     "STRING_VALUE",
 *   ],
 *   PrimaryAttributeValues: [ // PrimaryAttributeValueFilters
 *     { // PrimaryAttributeValueFilter
 *       AttributeName: "STRING_VALUE", // required
 *       Values: [ // ValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDataTablePrimaryValuesCommand(input);
 * const response = await client.send(command);
 * // { // ListDataTablePrimaryValuesResponse
 * //   NextToken: "STRING_VALUE",
 * //   PrimaryValuesList: [ // PrimaryValuesList // required
 * //     { // RecordPrimaryValue
 * //       RecordId: "STRING_VALUE",
 * //       PrimaryValues: [ // PrimaryValuesResponseSet
 * //         { // PrimaryValueResponse
 * //           AttributeName: "STRING_VALUE",
 * //           AttributeId: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDataTablePrimaryValuesCommandInput - {@link ListDataTablePrimaryValuesCommandInput}
 * @returns {@link ListDataTablePrimaryValuesCommandOutput}
 * @see {@link ListDataTablePrimaryValuesCommandInput} for command's `input` shape.
 * @see {@link ListDataTablePrimaryValuesCommandOutput} for command's `response` shape.
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
export class ListDataTablePrimaryValuesCommand extends $Command
  .classBuilder<
    ListDataTablePrimaryValuesCommandInput,
    ListDataTablePrimaryValuesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListDataTablePrimaryValues", {})
  .n("ConnectClient", "ListDataTablePrimaryValuesCommand")
  .sc(ListDataTablePrimaryValues)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataTablePrimaryValuesRequest;
      output: ListDataTablePrimaryValuesResponse;
    };
    sdk: {
      input: ListDataTablePrimaryValuesCommandInput;
      output: ListDataTablePrimaryValuesCommandOutput;
    };
  };
}
