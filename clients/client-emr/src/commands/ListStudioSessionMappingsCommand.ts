// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListStudioSessionMappingsInput, ListStudioSessionMappingsOutput } from "../models/models_0";
import { de_ListStudioSessionMappingsCommand, se_ListStudioSessionMappingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStudioSessionMappingsCommand}.
 */
export interface ListStudioSessionMappingsCommandInput extends ListStudioSessionMappingsInput {}
/**
 * @public
 *
 * The output of {@link ListStudioSessionMappingsCommand}.
 */
export interface ListStudioSessionMappingsCommandOutput extends ListStudioSessionMappingsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of all user or group session mappings for the Amazon EMR Studio
 *          specified by <code>StudioId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListStudioSessionMappingsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListStudioSessionMappingsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // ListStudioSessionMappingsInput
 *   StudioId: "STRING_VALUE",
 *   IdentityType: "USER" || "GROUP",
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListStudioSessionMappingsCommand(input);
 * const response = await client.send(command);
 * // { // ListStudioSessionMappingsOutput
 * //   SessionMappings: [ // SessionMappingSummaryList
 * //     { // SessionMappingSummary
 * //       StudioId: "STRING_VALUE",
 * //       IdentityId: "STRING_VALUE",
 * //       IdentityName: "STRING_VALUE",
 * //       IdentityType: "USER" || "GROUP",
 * //       SessionPolicyArn: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStudioSessionMappingsCommandInput - {@link ListStudioSessionMappingsCommandInput}
 * @returns {@link ListStudioSessionMappingsCommandOutput}
 * @see {@link ListStudioSessionMappingsCommandInput} for command's `input` shape.
 * @see {@link ListStudioSessionMappingsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 * @public
 */
export class ListStudioSessionMappingsCommand extends $Command
  .classBuilder<
    ListStudioSessionMappingsCommandInput,
    ListStudioSessionMappingsCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "ListStudioSessionMappings", {})
  .n("EMRClient", "ListStudioSessionMappingsCommand")
  .f(void 0, void 0)
  .ser(se_ListStudioSessionMappingsCommand)
  .de(de_ListStudioSessionMappingsCommand)
  .build() {}
