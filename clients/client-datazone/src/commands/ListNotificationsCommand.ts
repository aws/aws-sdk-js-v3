// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListNotificationsInput,
  ListNotificationsOutput,
  ListNotificationsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListNotificationsCommand, se_ListNotificationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNotificationsCommand}.
 */
export interface ListNotificationsCommandInput extends ListNotificationsInput {}
/**
 * @public
 *
 * The output of {@link ListNotificationsCommand}.
 */
export interface ListNotificationsCommandOutput extends ListNotificationsOutput, __MetadataBearer {}

/**
 * <p>Lists all Amazon DataZone notifications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListNotificationsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListNotificationsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // ListNotificationsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   type: "TASK" || "EVENT", // required
 *   afterTimestamp: new Date("TIMESTAMP"),
 *   beforeTimestamp: new Date("TIMESTAMP"),
 *   subjects: [ // NotificationSubjects
 *     "STRING_VALUE",
 *   ],
 *   taskStatus: "ACTIVE" || "INACTIVE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListNotificationsCommand(input);
 * const response = await client.send(command);
 * // { // ListNotificationsOutput
 * //   notifications: [ // NotificationsList
 * //     { // NotificationOutput
 * //       identifier: "STRING_VALUE", // required
 * //       domainIdentifier: "STRING_VALUE", // required
 * //       type: "TASK" || "EVENT", // required
 * //       topic: { // Topic
 * //         subject: "STRING_VALUE", // required
 * //         resource: { // NotificationResource
 * //           type: "PROJECT", // required
 * //           id: "STRING_VALUE", // required
 * //           name: "STRING_VALUE",
 * //         },
 * //         role: "PROJECT_OWNER" || "PROJECT_CONTRIBUTOR" || "PROJECT_VIEWER" || "DOMAIN_OWNER" || "PROJECT_SUBSCRIBER", // required
 * //       },
 * //       title: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //       status: "ACTIVE" || "INACTIVE",
 * //       actionLink: "STRING_VALUE", // required
 * //       creationTimestamp: new Date("TIMESTAMP"), // required
 * //       lastUpdatedTimestamp: new Date("TIMESTAMP"), // required
 * //       metadata: { // MetadataMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNotificationsCommandInput - {@link ListNotificationsCommandInput}
 * @returns {@link ListNotificationsCommandOutput}
 * @see {@link ListNotificationsCommandInput} for command's `input` shape.
 * @see {@link ListNotificationsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 * @public
 */
export class ListNotificationsCommand extends $Command
  .classBuilder<
    ListNotificationsCommandInput,
    ListNotificationsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "ListNotifications", {})
  .n("DataZoneClient", "ListNotificationsCommand")
  .f(void 0, ListNotificationsOutputFilterSensitiveLog)
  .ser(se_ListNotificationsCommand)
  .de(de_ListNotificationsCommand)
  .build() {}
