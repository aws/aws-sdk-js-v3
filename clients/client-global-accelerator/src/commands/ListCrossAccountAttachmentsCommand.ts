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
import { ListCrossAccountAttachmentsRequest, ListCrossAccountAttachmentsResponse } from "../models/models_0";
import { de_ListCrossAccountAttachmentsCommand, se_ListCrossAccountAttachmentsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCrossAccountAttachmentsCommand}.
 */
export interface ListCrossAccountAttachmentsCommandInput extends ListCrossAccountAttachmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListCrossAccountAttachmentsCommand}.
 */
export interface ListCrossAccountAttachmentsCommandOutput
  extends ListCrossAccountAttachmentsResponse,
    __MetadataBearer {}

/**
 * <p>List the cross-account attachments that have been created in Global Accelerator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCrossAccountAttachmentsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCrossAccountAttachmentsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // ListCrossAccountAttachmentsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCrossAccountAttachmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListCrossAccountAttachmentsResponse
 * //   CrossAccountAttachments: [ // Attachments
 * //     { // Attachment
 * //       AttachmentArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Principals: [ // Principals
 * //         "STRING_VALUE",
 * //       ],
 * //       Resources: [ // Resources
 * //         { // Resource
 * //           EndpointId: "STRING_VALUE",
 * //           Cidr: "STRING_VALUE",
 * //           Region: "STRING_VALUE",
 * //         },
 * //       ],
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCrossAccountAttachmentsCommandInput - {@link ListCrossAccountAttachmentsCommandInput}
 * @returns {@link ListCrossAccountAttachmentsCommandOutput}
 * @see {@link ListCrossAccountAttachmentsCommandInput} for command's `input` shape.
 * @see {@link ListCrossAccountAttachmentsCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>There isn't another item to return.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 *
 * @public
 */
export class ListCrossAccountAttachmentsCommand extends $Command
  .classBuilder<
    ListCrossAccountAttachmentsCommandInput,
    ListCrossAccountAttachmentsCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GlobalAccelerator_V20180706", "ListCrossAccountAttachments", {})
  .n("GlobalAcceleratorClient", "ListCrossAccountAttachmentsCommand")
  .f(void 0, void 0)
  .ser(se_ListCrossAccountAttachmentsCommand)
  .de(de_ListCrossAccountAttachmentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCrossAccountAttachmentsRequest;
      output: ListCrossAccountAttachmentsResponse;
    };
    sdk: {
      input: ListCrossAccountAttachmentsCommandInput;
      output: ListCrossAccountAttachmentsCommandOutput;
    };
  };
}
