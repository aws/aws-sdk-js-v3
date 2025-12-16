// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetEventActionRequest, GetEventActionResponse } from "../models/models_0";
import { GetEventAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEventActionCommand}.
 */
export interface GetEventActionCommandInput extends GetEventActionRequest {}
/**
 * @public
 *
 * The output of {@link GetEventActionCommand}.
 */
export interface GetEventActionCommandOutput extends GetEventActionResponse, __MetadataBearer {}

/**
 * <p>This operation retrieves information about an event action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, GetEventActionCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, GetEventActionCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
 * const client = new DataExchangeClient(config);
 * const input = { // GetEventActionRequest
 *   EventActionId: "STRING_VALUE", // required
 * };
 * const command = new GetEventActionCommand(input);
 * const response = await client.send(command);
 * // { // GetEventActionResponse
 * //   Action: { // Action
 * //     ExportRevisionToS3: { // AutoExportRevisionToS3RequestDetails
 * //       Encryption: { // ExportServerSideEncryption
 * //         KmsKeyArn: "STRING_VALUE",
 * //         Type: "STRING_VALUE", // required
 * //       },
 * //       RevisionDestination: { // AutoExportRevisionDestinationEntry
 * //         Bucket: "STRING_VALUE", // required
 * //         KeyPattern: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   Arn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   Event: { // Event
 * //     RevisionPublished: { // RevisionPublished
 * //       DataSetId: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   Id: "STRING_VALUE",
 * //   Tags: { // MapOf__string
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetEventActionCommandInput - {@link GetEventActionCommandInput}
 * @returns {@link GetEventActionCommandOutput}
 * @see {@link GetEventActionCommandInput} for command's `input` shape.
 * @see {@link GetEventActionCommandOutput} for command's `response` shape.
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
export class GetEventActionCommand extends $Command
  .classBuilder<
    GetEventActionCommandInput,
    GetEventActionCommandOutput,
    DataExchangeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataExchangeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataExchange", "GetEventAction", {})
  .n("DataExchangeClient", "GetEventActionCommand")
  .sc(GetEventAction$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventActionRequest;
      output: GetEventActionResponse;
    };
    sdk: {
      input: GetEventActionCommandInput;
      output: GetEventActionCommandOutput;
    };
  };
}
