// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteMultiRegionEndpointRequest, DeleteMultiRegionEndpointResponse } from "../models/models_0";
import { DeleteMultiRegionEndpoint } from "../schemas/schemas_40_MultiRegion";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a multi-region endpoint (global-endpoint).</p>
 *          <p>Only multi-region endpoints (global-endpoints) whose primary region is the AWS-Region
 *             where operation is executed can be deleted.</p>
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
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>The resource is being modified by another operation or thread.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 *
 * @public
 */
export class DeleteMultiRegionEndpointCommand extends $Command
  .classBuilder<
    DeleteMultiRegionEndpointCommandInput,
    DeleteMultiRegionEndpointCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService_v2", "DeleteMultiRegionEndpoint", {})
  .n("SESv2Client", "DeleteMultiRegionEndpointCommand")
  .sc(DeleteMultiRegionEndpoint)
  .build() {
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
