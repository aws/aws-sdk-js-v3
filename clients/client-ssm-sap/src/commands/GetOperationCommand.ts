// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetOperationInput, GetOperationOutput } from "../models/models_0";
import { GetOperation } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOperationCommand}.
 */
export interface GetOperationCommandInput extends GetOperationInput {}
/**
 * @public
 *
 * The output of {@link GetOperationCommand}.
 */
export interface GetOperationCommandOutput extends GetOperationOutput, __MetadataBearer {}

/**
 * <p>Gets the details of an operation by specifying the operation ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, GetOperationCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, GetOperationCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * // import type { SsmSapClientConfig } from "@aws-sdk/client-ssm-sap";
 * const config = {}; // type is SsmSapClientConfig
 * const client = new SsmSapClient(config);
 * const input = { // GetOperationInput
 *   OperationId: "STRING_VALUE", // required
 * };
 * const command = new GetOperationCommand(input);
 * const response = await client.send(command);
 * // { // GetOperationOutput
 * //   Operation: { // Operation
 * //     Id: "STRING_VALUE",
 * //     Type: "STRING_VALUE",
 * //     Status: "INPROGRESS" || "SUCCESS" || "ERROR",
 * //     StatusMessage: "STRING_VALUE",
 * //     Properties: { // OperationProperties
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     ResourceType: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     ResourceArn: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOperationCommandInput - {@link GetOperationCommandInput}
 * @returns {@link GetOperationCommandOutput}
 * @see {@link GetOperationCommandInput} for command's `input` shape.
 * @see {@link GetOperationCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 * @throws {@link SsmSapServiceException}
 * <p>Base exception class for all service exceptions from SsmSap service.</p>
 *
 *
 * @public
 */
export class GetOperationCommand extends $Command
  .classBuilder<
    GetOperationCommandInput,
    GetOperationCommandOutput,
    SsmSapClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SsmSapClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SsmSap", "GetOperation", {})
  .n("SsmSapClient", "GetOperationCommand")
  .sc(GetOperation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOperationInput;
      output: GetOperationOutput;
    };
    sdk: {
      input: GetOperationCommandInput;
      output: GetOperationCommandOutput;
    };
  };
}
