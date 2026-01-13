// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListStudioSessionMappingsInput, ListStudioSessionMappingsOutput } from "../models/models_0";
import { ListStudioSessionMappings$ } from "../schemas/schemas_0";

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
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "ListStudioSessionMappings", {})
  .n("EMRClient", "ListStudioSessionMappingsCommand")
  .sc(ListStudioSessionMappings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStudioSessionMappingsInput;
      output: ListStudioSessionMappingsOutput;
    };
    sdk: {
      input: ListStudioSessionMappingsCommandInput;
      output: ListStudioSessionMappingsCommandOutput;
    };
  };
}
