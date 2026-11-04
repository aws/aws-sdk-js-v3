// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeContactFlowModuleRequest, DescribeContactFlowModuleResponse } from "../models/models_1";
import { DescribeContactFlowModule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeContactFlowModuleCommand}.
 */
export interface DescribeContactFlowModuleCommandInput extends DescribeContactFlowModuleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeContactFlowModuleCommand}.
 */
export interface DescribeContactFlowModuleCommandOutput extends DescribeContactFlowModuleResponse, __MetadataBearer {}

/**
 * Describes the specified flow module.
 *
 * Use the `$SAVED` alias in the request to describe the `SAVED` content of a Flow. For example, `arn:aws:.../contact-flow/\{id\}:$SAVED`. After a flow is published, `$SAVED` needs to be supplied to view saved content that has not been published.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeContactFlowModuleCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeContactFlowModuleCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeContactFlowModuleRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowModuleId: "STRING_VALUE", // required
 * };
 * const command = new DescribeContactFlowModuleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContactFlowModuleResponse
 * //   ContactFlowModule: { // ContactFlowModule
 * //     Arn: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Content: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     State: "ACTIVE" || "ARCHIVED",
 * //     Status: "PUBLISHED" || "SAVED",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     FlowModuleContentSha256: "STRING_VALUE",
 * //     Version: Number("long"),
 * //     VersionDescription: "STRING_VALUE",
 * //     Settings: "STRING_VALUE",
 * //     ExternalInvocationConfiguration: { // ExternalInvocationConfiguration
 * //       Enabled: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeContactFlowModuleCommandInput - {@link DescribeContactFlowModuleCommandInput}
 * @returns {@link DescribeContactFlowModuleCommandOutput}
 * @see {@link DescribeContactFlowModuleCommandInput} for command's `input` shape.
 * @see {@link DescribeContactFlowModuleCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class DescribeContactFlowModuleCommand extends command<DescribeContactFlowModuleCommandInput, DescribeContactFlowModuleCommandOutput>(
  _ep0,
  _mw0,
  "DescribeContactFlowModule",
  DescribeContactFlowModule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeContactFlowModuleRequest;
      output: DescribeContactFlowModuleResponse;
    };
    sdk: {
      input: DescribeContactFlowModuleCommandInput;
      output: DescribeContactFlowModuleCommandOutput;
    };
  };
}
