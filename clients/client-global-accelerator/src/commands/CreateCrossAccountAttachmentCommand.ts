// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import type { CreateCrossAccountAttachmentRequest, CreateCrossAccountAttachmentResponse } from "../models/models_0";
import { CreateCrossAccountAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCrossAccountAttachmentCommand}.
 */
export interface CreateCrossAccountAttachmentCommandInput extends CreateCrossAccountAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateCrossAccountAttachmentCommand}.
 */
export interface CreateCrossAccountAttachmentCommandOutput
  extends CreateCrossAccountAttachmentResponse,
    __MetadataBearer {}

/**
 * <p>Create a cross-account attachment in Global Accelerator. You create a cross-account attachment to
 * 			specify the <i>principals</i> who have permission to work with <i>resources</i>
 * 			in accelerators in their own account. You specify, in the same attachment, the resources that are shared.</p>
 *          <p>A principal can be an Amazon Web Services account number or the Amazon Resource Name (ARN) for an
 * 			accelerator. For account numbers that are listed as principals, to work with a resource listed in the attachment,
 * 			you must sign in to an account specified as a principal. Then, you can work with resources that are listed,
 * 			with any of your accelerators. If an accelerator ARN is listed in the cross-account attachment as a principal,
 * 			anyone with permission to make updates to the accelerator can work with resources that are listed in the
 * 			attachment. </p>
 *          <p>Specify each principal and resource separately. To specify two CIDR address pools, list
 * 			them individually under <code>Resources</code>, and so on. For a command line operation, for example,
 * 			you might use a statement like the following:</p>
 *          <p>
 *             <code> "Resources": [\{"Cidr": "169.254.60.0/24"\},\{"Cidr": "169.254.59.0/24"\}]</code>
 *          </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/cross-account-resources.html">
 * 			Working with cross-account attachments and resources in Global Accelerator</a> in the <i>
 * 				Global Accelerator Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, CreateCrossAccountAttachmentCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, CreateCrossAccountAttachmentCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // CreateCrossAccountAttachmentRequest
 *   Name: "STRING_VALUE", // required
 *   Principals: [ // Principals
 *     "STRING_VALUE",
 *   ],
 *   Resources: [ // Resources
 *     { // Resource
 *       EndpointId: "STRING_VALUE",
 *       Cidr: "STRING_VALUE",
 *       Region: "STRING_VALUE",
 *     },
 *   ],
 *   IdempotencyToken: "STRING_VALUE", // required
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateCrossAccountAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateCrossAccountAttachmentResponse
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
 * @param CreateCrossAccountAttachmentCommandInput - {@link CreateCrossAccountAttachmentCommandInput}
 * @returns {@link CreateCrossAccountAttachmentCommandOutput}
 * @see {@link CreateCrossAccountAttachmentCommandInput} for command's `input` shape.
 * @see {@link CreateCrossAccountAttachmentCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
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
 *
 * @public
 */
export class CreateCrossAccountAttachmentCommand extends $Command
  .classBuilder<
    CreateCrossAccountAttachmentCommandInput,
    CreateCrossAccountAttachmentCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GlobalAccelerator_V20180706", "CreateCrossAccountAttachment", {})
  .n("GlobalAcceleratorClient", "CreateCrossAccountAttachmentCommand")
  .sc(CreateCrossAccountAttachment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCrossAccountAttachmentRequest;
      output: CreateCrossAccountAttachmentResponse;
    };
    sdk: {
      input: CreateCrossAccountAttachmentCommandInput;
      output: CreateCrossAccountAttachmentCommandOutput;
    };
  };
}
