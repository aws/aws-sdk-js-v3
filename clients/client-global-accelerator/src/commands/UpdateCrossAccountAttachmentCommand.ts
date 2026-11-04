// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCrossAccountAttachmentRequest, UpdateCrossAccountAttachmentResponse } from "../models/models_0";
import { UpdateCrossAccountAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateCrossAccountAttachmentCommandOutput extends UpdateCrossAccountAttachmentResponse, __MetadataBearer {}

/**
 * Update a cross-account attachment to add or remove principals or resources. When you update an attachment to remove a principal (account ID or accelerator) or a resource, Global Accelerator revokes the permission for specific resources.
 *
 * For more information, see [Working with cross-account attachments and resources in Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/cross-account-resources.html) in the *Global Accelerator Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateCrossAccountAttachmentCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateCrossAccountAttachmentCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
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
 *       EndpointId: "STRING_VALUE",
 *       Cidr: "STRING_VALUE",
 *       Region: "STRING_VALUE",
 *     },
 *   ],
 *   RemoveResources: [
 *     {
 *       EndpointId: "STRING_VALUE",
 *       Cidr: "STRING_VALUE",
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
 * //         EndpointId: "STRING_VALUE",
 * //         Cidr: "STRING_VALUE",
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
 *
 * You don't have access permission.
 *
 * @throws {@link AttachmentNotFoundException} (client fault)
 *
 * No cross-account attachment was found.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * There was an internal error for Global Accelerator.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * An argument that you specified is invalid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * Processing your request would cause you to exceed an Global Accelerator limit.
 *
 * @throws {@link TransactionInProgressException} (client fault)
 *
 * There's already a transaction in progress. Another transaction can't be processed.
 *
 * @throws {@link GlobalAcceleratorServiceException}
 *
 * Base exception class for all service exceptions from GlobalAccelerator service.
 *
 * @public
 */
export class UpdateCrossAccountAttachmentCommand extends command<UpdateCrossAccountAttachmentCommandInput, UpdateCrossAccountAttachmentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCrossAccountAttachment",
  UpdateCrossAccountAttachment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCrossAccountAttachmentRequest;
      output: UpdateCrossAccountAttachmentResponse;
    };
    sdk: {
      input: UpdateCrossAccountAttachmentCommandInput;
      output: UpdateCrossAccountAttachmentCommandOutput;
    };
  };
}
