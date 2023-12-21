// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { UpdateCrossAccountAttachmentRequest, UpdateCrossAccountAttachmentResponse } from "../models/models_0";
import {
  de_UpdateCrossAccountAttachmentCommand,
  se_UpdateCrossAccountAttachmentCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateCrossAccountAttachmentCommand}.
 */
export interface UpdateCrossAccountAttachmentCommandInput extends UpdateCrossAccountAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCrossAccountAttachmentCommand}.
 */
export interface UpdateCrossAccountAttachmentCommandOutput
  extends UpdateCrossAccountAttachmentResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Update a cross-account attachment to add or remove principals or resources. When you update
 * 			an attachment to remove a principal (account ID or accelerator) or a resource, Global Accelerator
 * 			revokes the permission for specific resources by doing the following:</p>
 *          <ul>
 *             <li>
 *                <p>If the principal is an account ID, Global Accelerator reviews every accelerator in the account
 * 				and removes cross-account endpoints from all accelerators.</p>
 *             </li>
 *             <li>
 *                <p>If the principal is an accelerator, Global Accelerator reviews just that accelerator
 * 				and removes cross-account endpoints from it.</p>
 *             </li>
 *          </ul>
 *          <p>If there are overlapping permissions provided by multiple cross-account attachments,
 * 			Global Accelerator only removes endpoints if there are no current cross-account attachments that provide
 * 			access permission. For example, if you delete a cross-account attachment that lists an
 * 			accelerator as a principal, but another cross-account attachment includes the account ID
 * 			that owns that accelerator, endpoints will not be removed from the accelerator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateCrossAccountAttachmentCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateCrossAccountAttachmentCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // UpdateCrossAccountAttachmentRequest
 *   AttachmentArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   AddPrincipals: [ // Principals
 *     "STRING_VALUE",
 *   ],
 *   RemovePrincipals: [
 *     "STRING_VALUE",
 *   ],
 *   AddResources: [ // Resources
 *     { // Resource
 *       EndpointId: "STRING_VALUE", // required
 *       Region: "STRING_VALUE",
 *     },
 *   ],
 *   RemoveResources: [
 *     {
 *       EndpointId: "STRING_VALUE", // required
 *       Region: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateCrossAccountAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCrossAccountAttachmentResponse
 * //   CrossAccountAttachment: { // Attachment
 * //     AttachmentArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Principals: [ // Principals
 * //       "STRING_VALUE",
 * //     ],
 * //     Resources: [ // Resources
 * //       { // Resource
 * //         EndpointId: "STRING_VALUE", // required
 * //         Region: "STRING_VALUE",
 * //       },
 * //     ],
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateCrossAccountAttachmentCommandInput - {@link UpdateCrossAccountAttachmentCommandInput}
 * @returns {@link UpdateCrossAccountAttachmentCommandOutput}
 * @see {@link UpdateCrossAccountAttachmentCommandInput} for command's `input` shape.
 * @see {@link UpdateCrossAccountAttachmentCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link AttachmentNotFoundException} (client fault)
 *  <p>No cross-account attachment was found.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Processing your request would cause you to exceed an Global Accelerator limit.</p>
 *
 * @throws {@link TransactionInProgressException} (client fault)
 *  <p>There's already a transaction in progress. Another transaction can't be processed.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 */
export class UpdateCrossAccountAttachmentCommand extends $Command
  .classBuilder<
    UpdateCrossAccountAttachmentCommandInput,
    UpdateCrossAccountAttachmentCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GlobalAccelerator_V20180706", "UpdateCrossAccountAttachment", {})
  .n("GlobalAcceleratorClient", "UpdateCrossAccountAttachmentCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCrossAccountAttachmentCommand)
  .de(de_UpdateCrossAccountAttachmentCommand)
  .build() {}
