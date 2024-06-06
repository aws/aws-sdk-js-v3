// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  DescribeVcenterClientsRequest,
  DescribeVcenterClientsResponse,
  DescribeVcenterClientsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeVcenterClientsCommand, se_DescribeVcenterClientsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVcenterClientsCommand}.
 */
export interface DescribeVcenterClientsCommandInput extends DescribeVcenterClientsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVcenterClientsCommand}.
 */
export interface DescribeVcenterClientsCommandOutput extends DescribeVcenterClientsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the installed vCenter clients.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DescribeVcenterClientsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DescribeVcenterClientsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // DescribeVcenterClientsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeVcenterClientsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVcenterClientsResponse
 * //   items: [ // VcenterClientList
 * //     { // VcenterClient
 * //       vcenterClientID: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       hostname: "STRING_VALUE",
 * //       vcenterUUID: "STRING_VALUE",
 * //       datacenterName: "STRING_VALUE",
 * //       lastSeenDatetime: "STRING_VALUE",
 * //       sourceServerTags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       tags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVcenterClientsCommandInput - {@link DescribeVcenterClientsCommandInput}
 * @returns {@link DescribeVcenterClientsCommandOutput}
 * @see {@link DescribeVcenterClientsCommandInput} for command's `input` shape.
 * @see {@link DescribeVcenterClientsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 * @public
 */
export class DescribeVcenterClientsCommand extends $Command
  .classBuilder<
    DescribeVcenterClientsCommandInput,
    DescribeVcenterClientsCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationMigrationService", "DescribeVcenterClients", {})
  .n("MgnClient", "DescribeVcenterClientsCommand")
  .f(void 0, DescribeVcenterClientsResponseFilterSensitiveLog)
  .ser(se_DescribeVcenterClientsCommand)
  .de(de_DescribeVcenterClientsCommand)
  .build() {}
