// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateEventActionRequest, UpdateEventActionResponse } from "../models/models_0";
import { de_UpdateEventActionCommand, se_UpdateEventActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEventActionCommand}.
 */
export interface UpdateEventActionCommandInput extends UpdateEventActionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEventActionCommand}.
 */
export interface UpdateEventActionCommandOutput extends UpdateEventActionResponse, __MetadataBearer {}

/**
 * <p>This operation updates the event action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, UpdateEventActionCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, UpdateEventActionCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const input = { // UpdateEventActionRequest
 *   Action: { // Action
 *     ExportRevisionToS3: { // AutoExportRevisionToS3RequestDetails
 *       Encryption: { // ExportServerSideEncryption
 *         KmsKeyArn: "STRING_VALUE",
 *         Type: "STRING_VALUE", // required
 *       },
 *       RevisionDestination: { // AutoExportRevisionDestinationEntry
 *         Bucket: "STRING_VALUE", // required
 *         KeyPattern: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   EventActionId: "STRING_VALUE", // required
 * };
 * const command = new UpdateEventActionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEventActionResponse
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
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateEventActionCommandInput - {@link UpdateEventActionCommandInput}
 * @returns {@link UpdateEventActionCommandOutput}
 * @see {@link UpdateEventActionCommandInput} for command's `input` shape.
 * @see {@link UpdateEventActionCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the resource is denied.</p>
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
export class UpdateEventActionCommand extends $Command
  .classBuilder<
    UpdateEventActionCommandInput,
    UpdateEventActionCommandOutput,
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
  .s("DataExchange", "UpdateEventAction", {})
  .n("DataExchangeClient", "UpdateEventActionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEventActionCommand)
  .de(de_UpdateEventActionCommand)
  .build() {}
