// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetEngineStatusOutput } from "../models/models_0";
import type { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { GetEngineStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEngineStatusCommand}.
 */
export interface GetEngineStatusCommandInput {}
/**
 * @public
 *
 * The output of {@link GetEngineStatusCommand}.
 */
export interface GetEngineStatusCommandOutput extends GetEngineStatusOutput, __MetadataBearer {}

/**
 * <p>Retrieves the status of the graph database on the host.</p> <p>When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getenginestatus">neptune-db:GetEngineStatus</a> IAM action in that cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, GetEngineStatusCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, GetEngineStatusCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
 * const client = new NeptunedataClient(config);
 * const input = {};
 * const command = new GetEngineStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetEngineStatusOutput
 * //   status: "STRING_VALUE",
 * //   startTime: "STRING_VALUE",
 * //   dbEngineVersion: "STRING_VALUE",
 * //   role: "STRING_VALUE",
 * //   dfeQueryEngine: "STRING_VALUE",
 * //   gremlin: { // QueryLanguageVersion
 * //     version: "STRING_VALUE", // required
 * //   },
 * //   sparql: {
 * //     version: "STRING_VALUE", // required
 * //   },
 * //   opencypher: {
 * //     version: "STRING_VALUE", // required
 * //   },
 * //   labMode: { // StringValuedMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   rollingBackTrxCount: Number("int"),
 * //   rollingBackTrxEarliestStartTime: "STRING_VALUE",
 * //   features: { // DocumentValuedMap
 * //     "<keys>": "DOCUMENT_VALUE",
 * //   },
 * //   settings: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEngineStatusCommandInput - {@link GetEngineStatusCommandInput}
 * @returns {@link GetEngineStatusCommandOutput}
 * @see {@link GetEngineStatusCommandInput} for command's `input` shape.
 * @see {@link GetEngineStatusCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *  <p>Raised when a request timed out in the client.</p>
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>Raised when a value in a request field did not satisfy required constraints.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Raised when an argument in a request is not supported.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>Raised when the processing of the request failed unexpectedly.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Raised when an argument in a request has an invalid value.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Raised when the number of requests being processed exceeds the limit.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>Raised when a request attempts to initiate an operation that is not supported.</p>
 *
 * @throws {@link NeptunedataServiceException}
 * <p>Base exception class for all service exceptions from Neptunedata service.</p>
 *
 *
 * @public
 */
export class GetEngineStatusCommand extends $Command
  .classBuilder<
    GetEngineStatusCommandInput,
    GetEngineStatusCommandOutput,
    NeptunedataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptunedataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNeptuneDataplane", "GetEngineStatus", {})
  .n("NeptunedataClient", "GetEngineStatusCommand")
  .sc(GetEngineStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetEngineStatusOutput;
    };
    sdk: {
      input: GetEngineStatusCommandInput;
      output: GetEngineStatusCommandOutput;
    };
  };
}
