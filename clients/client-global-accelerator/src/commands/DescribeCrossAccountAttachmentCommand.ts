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
import type { DescribeCrossAccountAttachmentRequest, DescribeCrossAccountAttachmentResponse } from "../models/models_0";
import { DescribeCrossAccountAttachment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCrossAccountAttachmentCommand}.
 */
export interface DescribeCrossAccountAttachmentCommandInput extends DescribeCrossAccountAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCrossAccountAttachmentCommand}.
 */
export interface DescribeCrossAccountAttachmentCommandOutput
  extends DescribeCrossAccountAttachmentResponse,
    __MetadataBearer {}

/**
 * <p>Gets configuration information about a cross-account attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeCrossAccountAttachmentCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeCrossAccountAttachmentCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // DescribeCrossAccountAttachmentRequest
 *   AttachmentArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeCrossAccountAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCrossAccountAttachmentResponse
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
 * @param DescribeCrossAccountAttachmentCommandInput - {@link DescribeCrossAccountAttachmentCommandInput}
 * @returns {@link DescribeCrossAccountAttachmentCommandOutput}
 * @see {@link DescribeCrossAccountAttachmentCommandInput} for command's `input` shape.
 * @see {@link DescribeCrossAccountAttachmentCommandOutput} for command's `response` shape.
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
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 *
 * @public
 */
export class DescribeCrossAccountAttachmentCommand extends $Command
  .classBuilder<
    DescribeCrossAccountAttachmentCommandInput,
    DescribeCrossAccountAttachmentCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GlobalAccelerator_V20180706", "DescribeCrossAccountAttachment", {})
  .n("GlobalAcceleratorClient", "DescribeCrossAccountAttachmentCommand")
  .sc(DescribeCrossAccountAttachment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCrossAccountAttachmentRequest;
      output: DescribeCrossAccountAttachmentResponse;
    };
    sdk: {
      input: DescribeCrossAccountAttachmentCommandInput;
      output: DescribeCrossAccountAttachmentCommandOutput;
    };
  };
}
