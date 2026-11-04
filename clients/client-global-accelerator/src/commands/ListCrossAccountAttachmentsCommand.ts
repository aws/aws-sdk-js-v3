// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCrossAccountAttachmentsRequest, ListCrossAccountAttachmentsResponse } from "../models/models_0";
import { ListCrossAccountAttachments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListCrossAccountAttachmentsCommandOutput extends ListCrossAccountAttachmentsResponse, __MetadataBearer {}

/**
 * List the cross-account attachments that have been created in Global Accelerator.
 *
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
 *
 * You don't have access permission.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * There was an internal error for Global Accelerator.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * An argument that you specified is invalid.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * There isn't another item to return.
 *
 * @throws {@link GlobalAcceleratorServiceException}
 *
 * Base exception class for all service exceptions from GlobalAccelerator service.
 *
 * @public
 */
export class ListCrossAccountAttachmentsCommand extends command<ListCrossAccountAttachmentsCommandInput, ListCrossAccountAttachmentsCommandOutput>(
  _ep0,
  _mw0,
  "ListCrossAccountAttachments",
  ListCrossAccountAttachments$
) {
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
