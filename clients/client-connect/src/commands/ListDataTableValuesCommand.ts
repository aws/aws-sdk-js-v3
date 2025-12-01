// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDataTableValuesRequest, ListDataTableValuesResponse } from "../models/models_2";
import { ListDataTableValues } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataTableValuesCommand}.
 */
export interface ListDataTableValuesCommandInput extends ListDataTableValuesRequest {}
/**
 * @public
 *
 * The output of {@link ListDataTableValuesCommand}.
 */
export interface ListDataTableValuesCommandOutput extends ListDataTableValuesResponse, __MetadataBearer {}

/**
 * <p>Lists values stored in a data table with optional filtering by record IDs or primary attribute values. Returns the raw stored values along with metadata such as lock versions and modification timestamps.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListDataTableValuesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListDataTableValuesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListDataTableValuesRequest
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
 * const command = new ListDataTableValuesCommand(input);
 * const response = await client.send(command);
 * // { // ListDataTableValuesResponse
 * //   NextToken: "STRING_VALUE",
 * //   Values: [ // DataTableValueSummaryList // required
 * //     { // DataTableValueSummary
 * //       RecordId: "STRING_VALUE",
 * //       AttributeId: "STRING_VALUE",
 * //       PrimaryValues: [ // PrimaryValuesResponseSet // required
 * //         { // PrimaryValueResponse
 * //           AttributeName: "STRING_VALUE",
 * //           AttributeId: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AttributeName: "STRING_VALUE", // required
 * //       ValueType: "TEXT" || "NUMBER" || "BOOLEAN" || "TEXT_LIST" || "NUMBER_LIST", // required
 * //       Value: "STRING_VALUE", // required
 * //       LockVersion: { // DataTableLockVersion
 * //         DataTable: "STRING_VALUE",
 * //         Attribute: "STRING_VALUE",
 * //         PrimaryValues: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDataTableValuesCommandInput - {@link ListDataTableValuesCommandInput}
 * @returns {@link ListDataTableValuesCommandOutput}
 * @see {@link ListDataTableValuesCommandInput} for command's `input` shape.
 * @see {@link ListDataTableValuesCommandOutput} for command's `response` shape.
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
export class ListDataTableValuesCommand extends $Command
  .classBuilder<
    ListDataTableValuesCommandInput,
    ListDataTableValuesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListDataTableValues", {})
  .n("ConnectClient", "ListDataTableValuesCommand")
  .sc(ListDataTableValues)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataTableValuesRequest;
      output: ListDataTableValuesResponse;
    };
    sdk: {
      input: ListDataTableValuesCommandInput;
      output: ListDataTableValuesCommandOutput;
    };
  };
}
