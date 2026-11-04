// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendDataSetNotificationRequest, SendDataSetNotificationResponse } from "../models/models_0";
import { SendDataSetNotification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * The type of event associated with the data set.
 *
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
 *
 * Access to the resource is denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request couldn't be completed because it conflicted with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An exception occurred with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request was invalid.
 *
 * @throws {@link DataExchangeServiceException}
 *
 * Base exception class for all service exceptions from DataExchange service.
 *
 * @public
 */
export class SendDataSetNotificationCommand extends command<SendDataSetNotificationCommandInput, SendDataSetNotificationCommandOutput>(
  _ep0,
  _mw0,
  "SendDataSetNotification",
  SendDataSetNotification$
) {
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
