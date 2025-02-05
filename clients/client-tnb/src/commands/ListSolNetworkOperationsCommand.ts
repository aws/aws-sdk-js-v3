// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSolNetworkOperationsInput, ListSolNetworkOperationsOutput } from "../models/models_0";
import { de_ListSolNetworkOperationsCommand, se_ListSolNetworkOperationsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSolNetworkOperationsCommand}.
 */
export interface ListSolNetworkOperationsCommandInput extends ListSolNetworkOperationsInput {}
/**
 * @public
 *
 * The output of {@link ListSolNetworkOperationsCommand}.
 */
export interface ListSolNetworkOperationsCommandOutput extends ListSolNetworkOperationsOutput, __MetadataBearer {}

/**
 * <p>Lists details for a network operation, including when the operation started and the
 *          status of the operation.</p>
 *          <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, ListSolNetworkOperationsCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, ListSolNetworkOperationsCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new TnbClient(config);
 * const input = { // ListSolNetworkOperationsInput
 *   nsInstanceId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSolNetworkOperationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSolNetworkOperationsOutput
 * //   nextToken: "STRING_VALUE",
 * //   networkOperations: [ // ListSolNetworkOperationsResources
 * //     { // ListSolNetworkOperationsInfo
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       operationState: "PROCESSING" || "COMPLETED" || "FAILED" || "CANCELLING" || "CANCELLED", // required
 * //       nsInstanceId: "STRING_VALUE", // required
 * //       lcmOperationType: "INSTANTIATE" || "UPDATE" || "TERMINATE", // required
 * //       updateType: "MODIFY_VNF_INFORMATION" || "UPDATE_NS",
 * //       error: { // ProblemDetails
 * //         detail: "STRING_VALUE", // required
 * //         title: "STRING_VALUE",
 * //       },
 * //       metadata: { // ListSolNetworkOperationsMetadata
 * //         nsdInfoId: "STRING_VALUE",
 * //         vnfInstanceId: "STRING_VALUE",
 * //         createdAt: new Date("TIMESTAMP"), // required
 * //         lastModified: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSolNetworkOperationsCommandInput - {@link ListSolNetworkOperationsCommandInput}
 * @returns {@link ListSolNetworkOperationsCommandOutput}
 * @see {@link ListSolNetworkOperationsCommandInput} for command's `input` shape.
 * @see {@link ListSolNetworkOperationsCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Insufficient permissions to make request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred. Problem on the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Exception caused by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Unable to process the request because the client provided input failed to satisfy
 *          request constraints.</p>
 *
 * @throws {@link TnbServiceException}
 * <p>Base exception class for all service exceptions from Tnb service.</p>
 *
 * @public
 */
export class ListSolNetworkOperationsCommand extends $Command
  .classBuilder<
    ListSolNetworkOperationsCommandInput,
    ListSolNetworkOperationsCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TNB", "ListSolNetworkOperations", {})
  .n("TnbClient", "ListSolNetworkOperationsCommand")
  .f(void 0, void 0)
  .ser(se_ListSolNetworkOperationsCommand)
  .de(de_ListSolNetworkOperationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSolNetworkOperationsInput;
      output: ListSolNetworkOperationsOutput;
    };
    sdk: {
      input: ListSolNetworkOperationsCommandInput;
      output: ListSolNetworkOperationsCommandOutput;
    };
  };
}
