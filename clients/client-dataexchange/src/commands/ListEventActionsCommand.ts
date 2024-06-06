// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEventActionsRequest, ListEventActionsResponse } from "../models/models_0";
import { de_ListEventActionsCommand, se_ListEventActionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventActionsCommand}.
 */
export interface ListEventActionsCommandInput extends ListEventActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListEventActionsCommand}.
 */
export interface ListEventActionsCommandOutput extends ListEventActionsResponse, __MetadataBearer {}

/**
 * <p>This operation lists your event actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, ListEventActionsCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, ListEventActionsCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const input = { // ListEventActionsRequest
 *   EventSourceId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListEventActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventActionsResponse
 * //   EventActions: [ // ListOfEventActionEntry
 * //     { // EventActionEntry
 * //       Action: { // Action
 * //         ExportRevisionToS3: { // AutoExportRevisionToS3RequestDetails
 * //           Encryption: { // ExportServerSideEncryption
 * //             KmsKeyArn: "STRING_VALUE",
 * //             Type: "STRING_VALUE", // required
 * //           },
 * //           RevisionDestination: { // AutoExportRevisionDestinationEntry
 * //             Bucket: "STRING_VALUE", // required
 * //             KeyPattern: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       Arn: "STRING_VALUE", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       Event: { // Event
 * //         RevisionPublished: { // RevisionPublished
 * //           DataSetId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       Id: "STRING_VALUE", // required
 * //       UpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventActionsCommandInput - {@link ListEventActionsCommandInput}
 * @returns {@link ListEventActionsCommandOutput}
 * @see {@link ListEventActionsCommandInput} for command's `input` shape.
 * @see {@link ListEventActionsCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link DataExchangeServiceException}
 * <p>Base exception class for all service exceptions from DataExchange service.</p>
 *
 * @public
 */
export class ListEventActionsCommand extends $Command
  .classBuilder<
    ListEventActionsCommandInput,
    ListEventActionsCommandOutput,
    DataExchangeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataExchangeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataExchange", "ListEventActions", {})
  .n("DataExchangeClient", "ListEventActionsCommand")
  .f(void 0, void 0)
  .ser(se_ListEventActionsCommand)
  .de(de_ListEventActionsCommand)
  .build() {}
