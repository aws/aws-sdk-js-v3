// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListEventActionsRequest, ListEventActionsResponse } from "../models/models_0";
import { ListEventActions } from "../schemas/schemas_0";

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
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataExchangeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataExchange", "ListEventActions", {})
  .n("DataExchangeClient", "ListEventActionsCommand")
  .sc(ListEventActions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventActionsRequest;
      output: ListEventActionsResponse;
    };
    sdk: {
      input: ListEventActionsCommandInput;
      output: ListEventActionsCommandOutput;
    };
  };
}
