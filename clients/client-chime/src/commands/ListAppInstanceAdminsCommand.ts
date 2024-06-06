// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListAppInstanceAdminsRequest,
  ListAppInstanceAdminsRequestFilterSensitiveLog,
  ListAppInstanceAdminsResponse,
  ListAppInstanceAdminsResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_ListAppInstanceAdminsCommand, se_ListAppInstanceAdminsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAppInstanceAdminsCommand}.
 */
export interface ListAppInstanceAdminsCommandInput extends ListAppInstanceAdminsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppInstanceAdminsCommand}.
 */
export interface ListAppInstanceAdminsCommandOutput extends ListAppInstanceAdminsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the administrators in the <code>AppInstance</code>.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_ListAppInstanceAdmins.html">ListAppInstanceAdmins</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *                 <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *                 <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 *
 * @deprecated Replaced by ListAppInstanceAdmins in the Amazon Chime SDK Identity Namespace
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListAppInstanceAdminsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListAppInstanceAdminsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // ListAppInstanceAdminsRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAppInstanceAdminsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppInstanceAdminsResponse
 * //   AppInstanceArn: "STRING_VALUE",
 * //   AppInstanceAdmins: [ // AppInstanceAdminList
 * //     { // AppInstanceAdminSummary
 * //       Admin: { // Identity
 * //         Arn: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppInstanceAdminsCommandInput - {@link ListAppInstanceAdminsCommandInput}
 * @returns {@link ListAppInstanceAdminsCommandOutput}
 * @see {@link ListAppInstanceAdminsCommandInput} for command's `input` shape.
 * @see {@link ListAppInstanceAdminsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 * @public
 */
export class ListAppInstanceAdminsCommand extends $Command
  .classBuilder<
    ListAppInstanceAdminsCommandInput,
    ListAppInstanceAdminsCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "ListAppInstanceAdmins", {})
  .n("ChimeClient", "ListAppInstanceAdminsCommand")
  .f(ListAppInstanceAdminsRequestFilterSensitiveLog, ListAppInstanceAdminsResponseFilterSensitiveLog)
  .ser(se_ListAppInstanceAdminsCommand)
  .de(de_ListAppInstanceAdminsCommand)
  .build() {}
