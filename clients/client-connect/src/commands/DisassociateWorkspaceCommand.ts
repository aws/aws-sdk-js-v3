// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateWorkspaceRequest, DisassociateWorkspaceResponse } from "../models/models_1";
import { DisassociateWorkspace } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateWorkspaceCommand}.
 */
export interface DisassociateWorkspaceCommandInput extends DisassociateWorkspaceRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateWorkspaceCommand}.
 */
export interface DisassociateWorkspaceCommandOutput extends DisassociateWorkspaceResponse, __MetadataBearer {}

/**
 * <p>Removes the association between a workspace and one or more users or routing profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateWorkspaceCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateWorkspaceCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DisassociateWorkspaceRequest
 *   InstanceId: "STRING_VALUE", // required
 *   WorkspaceId: "STRING_VALUE", // required
 *   ResourceArns: [ // WorkspaceResourceArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateWorkspaceCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateWorkspaceResponse
 * //   SuccessfulList: [ // SuccessfulBatchAssociationSummaryList
 * //     { // SuccessfulBatchAssociationSummary
 * //       ResourceArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   FailedList: [ // FailedBatchAssociationSummaryList
 * //     { // FailedBatchAssociationSummary
 * //       ResourceArn: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DisassociateWorkspaceCommandInput - {@link DisassociateWorkspaceCommandInput}
 * @returns {@link DisassociateWorkspaceCommandOutput}
 * @see {@link DisassociateWorkspaceCommandInput} for command's `input` shape.
 * @see {@link DisassociateWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DisassociateWorkspaceCommand extends $Command
  .classBuilder<
    DisassociateWorkspaceCommandInput,
    DisassociateWorkspaceCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DisassociateWorkspace", {})
  .n("ConnectClient", "DisassociateWorkspaceCommand")
  .sc(DisassociateWorkspace)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateWorkspaceRequest;
      output: DisassociateWorkspaceResponse;
    };
    sdk: {
      input: DisassociateWorkspaceCommandInput;
      output: DisassociateWorkspaceCommandOutput;
    };
  };
}
