// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SendDataSetNotificationRequest, SendDataSetNotificationResponse } from "../models/models_0";
import { SendDataSetNotification } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendDataSetNotificationCommand}.
 */
export interface SendDataSetNotificationCommandInput extends SendDataSetNotificationRequest {}
/**
 * @public
 *
 * The output of {@link SendDataSetNotificationCommand}.
 */
export interface SendDataSetNotificationCommandOutput extends SendDataSetNotificationResponse, __MetadataBearer {}

/**
 * <p>The type of event associated with the data set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, SendDataSetNotificationCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, SendDataSetNotificationCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
 * const client = new DataExchangeClient(config);
 * const input = { // SendDataSetNotificationRequest
 *   Scope: { // ScopeDetails
 *     LakeFormationTagPolicies: [ // ListOfLakeFormationTagPolicies
 *       { // LakeFormationTagPolicyDetails
 *         Database: "STRING_VALUE",
 *         Table: "STRING_VALUE",
 *       },
 *     ],
 *     RedshiftDataShares: [ // ListOfRedshiftDataShares
 *       { // RedshiftDataShareDetails
 *         Arn: "STRING_VALUE", // required
 *         Database: "STRING_VALUE", // required
 *         Function: "STRING_VALUE",
 *         Table: "STRING_VALUE",
 *         Schema: "STRING_VALUE",
 *         View: "STRING_VALUE",
 *       },
 *     ],
 *     S3DataAccesses: [ // ListOfS3DataAccesses
 *       { // S3DataAccessDetails
 *         KeyPrefixes: [ // ListOf__string
 *           "STRING_VALUE",
 *         ],
 *         Keys: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   ClientToken: "STRING_VALUE",
 *   Comment: "STRING_VALUE",
 *   DataSetId: "STRING_VALUE", // required
 *   Details: { // NotificationDetails
 *     DataUpdate: { // DataUpdateRequestDetails
 *       DataUpdatedAt: new Date("TIMESTAMP"),
 *     },
 *     Deprecation: { // DeprecationRequestDetails
 *       DeprecationAt: new Date("TIMESTAMP"), // required
 *     },
 *     SchemaChange: { // SchemaChangeRequestDetails
 *       Changes: [ // ListOfSchemaChangeDetails
 *         { // SchemaChangeDetails
 *           Name: "STRING_VALUE", // required
 *           Type: "STRING_VALUE", // required
 *           Description: "STRING_VALUE",
 *         },
 *       ],
 *       SchemaChangeAt: new Date("TIMESTAMP"), // required
 *     },
 *   },
 *   Type: "STRING_VALUE", // required
 * };
 * const command = new SendDataSetNotificationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendDataSetNotificationCommandInput - {@link SendDataSetNotificationCommandInput}
 * @returns {@link SendDataSetNotificationCommandOutput}
 * @see {@link SendDataSetNotificationCommandInput} for command's `input` shape.
 * @see {@link SendDataSetNotificationCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the resource is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request couldn't be completed because it conflicted with the current state of the
 *          resource.</p>
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
export class SendDataSetNotificationCommand extends $Command
  .classBuilder<
    SendDataSetNotificationCommandInput,
    SendDataSetNotificationCommandOutput,
    DataExchangeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataExchangeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataExchange", "SendDataSetNotification", {})
  .n("DataExchangeClient", "SendDataSetNotificationCommand")
  .sc(SendDataSetNotification)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendDataSetNotificationRequest;
      output: {};
    };
    sdk: {
      input: SendDataSetNotificationCommandInput;
      output: SendDataSetNotificationCommandOutput;
    };
  };
}
