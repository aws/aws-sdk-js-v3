// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRelatedItemsInput, UpdateRelatedItemsOutput } from "../models/models_0";
import { UpdateRelatedItems$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Add or remove related items from the related items tab of an incident record.
 *
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
 *
 * You don't have sufficient access to perform this operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource causes an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SSMIncidentsServiceException}
 *
 * Base exception class for all service exceptions from SSMIncidents service.
 *
 * @public
 */
export class UpdateRelatedItemsCommand extends command<UpdateRelatedItemsCommandInput, UpdateRelatedItemsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRelatedItems",
  UpdateRelatedItems$
) {
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
