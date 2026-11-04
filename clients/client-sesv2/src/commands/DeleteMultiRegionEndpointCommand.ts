// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMultiRegionEndpointRequest, DeleteMultiRegionEndpointResponse } from "../models/models_0";
import { DeleteMultiRegionEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMultiRegionEndpointCommand}.
 */
export interface DeleteMultiRegionEndpointCommandInput extends DeleteMultiRegionEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMultiRegionEndpointCommand}.
 */
export interface DeleteMultiRegionEndpointCommandOutput extends DeleteMultiRegionEndpointResponse, __MetadataBearer {}

/**
 * Deletes a multi-region endpoint (global-endpoint).
 *
 * Only multi-region endpoints (global-endpoints) whose primary region is the AWS-Region where operation is executed can be deleted.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, DeleteMultiRegionEndpointCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, DeleteMultiRegionEndpointCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // DeleteMultiRegionEndpointRequest
 *   EndpointName: "STRING_VALUE", // required
 * };
 * const command = new DeleteMultiRegionEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMultiRegionEndpointResponse
 * //   Status: "CREATING" || "READY" || "FAILED" || "DELETING",
 * // };
 *
 * ```
 *
 * @param DeleteMultiRegionEndpointCommandInput - {@link DeleteMultiRegionEndpointCommandInput}
 * @returns {@link DeleteMultiRegionEndpointCommandOutput}
 * @see {@link DeleteMultiRegionEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteMultiRegionEndpointCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *
 * The resource is being modified by another operation or thread.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource you attempted to access doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Too many requests have been made to the operation.
 *
 * @throws {@link SESv2ServiceException}
 *
 * Base exception class for all service exceptions from SESv2 service.
 *
 * @public
 */
export class DeleteMultiRegionEndpointCommand extends command<DeleteMultiRegionEndpointCommandInput, DeleteMultiRegionEndpointCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMultiRegionEndpoint",
  DeleteMultiRegionEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMultiRegionEndpointRequest;
      output: DeleteMultiRegionEndpointResponse;
    };
    sdk: {
      input: DeleteMultiRegionEndpointCommandInput;
      output: DeleteMultiRegionEndpointCommandOutput;
    };
  };
}
