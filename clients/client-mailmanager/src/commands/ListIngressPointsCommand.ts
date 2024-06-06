// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { ListIngressPointsRequest, ListIngressPointsResponse } from "../models/models_0";
import { de_ListIngressPointsCommand, se_ListIngressPointsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIngressPointsCommand}.
 */
export interface ListIngressPointsCommandInput extends ListIngressPointsRequest {}
/**
 * @public
 *
 * The output of {@link ListIngressPointsCommand}.
 */
export interface ListIngressPointsCommandOutput extends ListIngressPointsResponse, __MetadataBearer {}

/**
 * <p>List all ingress endpoint resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, ListIngressPointsCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, ListIngressPointsCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * const client = new MailManagerClient(config);
 * const input = { // ListIngressPointsRequest
 *   PageSize: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListIngressPointsCommand(input);
 * const response = await client.send(command);
 * // { // ListIngressPointsResponse
 * //   IngressPoints: [ // IngressPointsList
 * //     { // IngressPoint
 * //       IngressPointName: "STRING_VALUE", // required
 * //       IngressPointId: "STRING_VALUE", // required
 * //       Status: "PROVISIONING" || "DEPROVISIONING" || "UPDATING" || "ACTIVE" || "CLOSED" || "FAILED", // required
 * //       Type: "OPEN" || "AUTH", // required
 * //       ARecord: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIngressPointsCommandInput - {@link ListIngressPointsCommandInput}
 * @returns {@link ListIngressPointsCommandOutput}
 * @see {@link ListIngressPointsCommandInput} for command's `input` shape.
 * @see {@link ListIngressPointsCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 * @public
 */
export class ListIngressPointsCommand extends $Command
  .classBuilder<
    ListIngressPointsCommandInput,
    ListIngressPointsCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "ListIngressPoints", {})
  .n("MailManagerClient", "ListIngressPointsCommand")
  .f(void 0, void 0)
  .ser(se_ListIngressPointsCommand)
  .de(de_ListIngressPointsCommand)
  .build() {}
