// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ConnectCampaignsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectCampaignsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteCampaignRequest } from "../models/models_0";
import { DeleteCampaign } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCampaignCommand}.
 */
export interface DeleteCampaignCommandInput extends DeleteCampaignRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCampaignCommand}.
 */
export interface DeleteCampaignCommandOutput extends __MetadataBearer {}

/**
 * Deletes a campaign from the specified Amazon Connect account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsClient, DeleteCampaignCommand } from "@aws-sdk/client-connectcampaigns"; // ES Modules import
 * // const { ConnectCampaignsClient, DeleteCampaignCommand } = require("@aws-sdk/client-connectcampaigns"); // CommonJS import
 * // import type { ConnectCampaignsClientConfig } from "@aws-sdk/client-connectcampaigns";
 * const config = {}; // type is ConnectCampaignsClientConfig
 * const client = new ConnectCampaignsClient(config);
 * const input = { // DeleteCampaignRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteCampaignCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCampaignCommandInput - {@link DeleteCampaignCommandInput}
 * @returns {@link DeleteCampaignCommandOutput}
 * @see {@link DeleteCampaignCommandInput} for command's `input` shape.
 * @see {@link DeleteCampaignCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsClientResolvedConfig | config} for ConnectCampaignsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Request processing failed because of an error or failure with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link ConnectCampaignsServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaigns service.</p>
 *
 *
 * @public
 */
export class DeleteCampaignCommand extends $Command
  .classBuilder<
    DeleteCampaignCommandInput,
    DeleteCampaignCommandOutput,
    ConnectCampaignsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCampaignService", "DeleteCampaign", {})
  .n("ConnectCampaignsClient", "DeleteCampaignCommand")
  .sc(DeleteCampaign)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCampaignRequest;
      output: {};
    };
    sdk: {
      input: DeleteCampaignCommandInput;
      output: DeleteCampaignCommandOutput;
    };
  };
}
