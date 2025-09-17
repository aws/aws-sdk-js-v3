// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRelatedItemsInput, UpdateRelatedItemsOutput } from "../models/models_0";
import { de_UpdateRelatedItemsCommand, se_UpdateRelatedItemsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRelatedItemsCommand}.
 */
export interface UpdateRelatedItemsCommandInput extends UpdateRelatedItemsInput {}
/**
 * @public
 *
 * The output of {@link UpdateRelatedItemsCommand}.
 */
export interface UpdateRelatedItemsCommandOutput extends UpdateRelatedItemsOutput, __MetadataBearer {}

/**
 * <p>Add or remove related items from the related items tab of an incident record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, UpdateRelatedItemsCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, UpdateRelatedItemsCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // UpdateRelatedItemsInput
 *   clientToken: "STRING_VALUE",
 *   incidentRecordArn: "STRING_VALUE", // required
 *   relatedItemsUpdate: { // RelatedItemsUpdate Union: only one key present
 *     itemToAdd: { // RelatedItem
 *       identifier: { // ItemIdentifier
 *         value: { // ItemValue Union: only one key present
 *           arn: "STRING_VALUE",
 *           url: "STRING_VALUE",
 *           metricDefinition: "STRING_VALUE",
 *           pagerDutyIncidentDetail: { // PagerDutyIncidentDetail
 *             id: "STRING_VALUE", // required
 *             autoResolve: true || false,
 *             secretId: "STRING_VALUE",
 *           },
 *         },
 *         type: "STRING_VALUE", // required
 *       },
 *       title: "STRING_VALUE",
 *       generatedId: "STRING_VALUE",
 *     },
 *     itemToRemove: {
 *       value: {//  Union: only one key present
 *         arn: "STRING_VALUE",
 *         url: "STRING_VALUE",
 *         metricDefinition: "STRING_VALUE",
 *         pagerDutyIncidentDetail: {
 *           id: "STRING_VALUE", // required
 *           autoResolve: true || false,
 *           secretId: "STRING_VALUE",
 *         },
 *       },
 *       type: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new UpdateRelatedItemsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRelatedItemsCommandInput - {@link UpdateRelatedItemsCommandInput}
 * @returns {@link UpdateRelatedItemsCommandOutput}
 * @see {@link UpdateRelatedItemsCommandInput} for command's `input` shape.
 * @see {@link UpdateRelatedItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource causes an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which doesn't exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link SSMIncidentsServiceException}
 * <p>Base exception class for all service exceptions from SSMIncidents service.</p>
 *
 *
 * @public
 */
export class UpdateRelatedItemsCommand extends $Command
  .classBuilder<
    UpdateRelatedItemsCommandInput,
    UpdateRelatedItemsCommandOutput,
    SSMIncidentsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMIncidentsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMIncidents", "UpdateRelatedItems", {})
  .n("SSMIncidentsClient", "UpdateRelatedItemsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRelatedItemsCommand)
  .de(de_UpdateRelatedItemsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRelatedItemsInput;
      output: {};
    };
    sdk: {
      input: UpdateRelatedItemsCommandInput;
      output: UpdateRelatedItemsCommandOutput;
    };
  };
}
