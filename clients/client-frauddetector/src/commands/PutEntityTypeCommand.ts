// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { PutEntityTypeRequest, PutEntityTypeResult } from "../models/models_0";
import { de_PutEntityTypeCommand, se_PutEntityTypeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutEntityTypeCommand}.
 */
export interface PutEntityTypeCommandInput extends PutEntityTypeRequest {}
/**
 * @public
 *
 * The output of {@link PutEntityTypeCommand}.
 */
export interface PutEntityTypeCommandOutput extends PutEntityTypeResult, __MetadataBearer {}

/**
 * <p>Creates or updates an entity type. An entity represents who is performing the event. As part of a fraud prediction, you pass the entity ID to indicate the specific entity who performed the event. An entity type classifies the entity. Example classifications include customer, merchant, or account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, PutEntityTypeCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, PutEntityTypeCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // PutEntityTypeRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tags: [ // tagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutEntityTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutEntityTypeCommandInput - {@link PutEntityTypeCommandInput}
 * @returns {@link PutEntityTypeCommandOutput}
 * @see {@link PutEntityTypeCommandInput} for command's `input` shape.
 * @see {@link PutEntityTypeCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An exception indicating there was a conflict during a delete operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 *
 * @public
 */
export class PutEntityTypeCommand extends $Command
  .classBuilder<
    PutEntityTypeCommandInput,
    PutEntityTypeCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHawksNestServiceFacade", "PutEntityType", {})
  .n("FraudDetectorClient", "PutEntityTypeCommand")
  .f(void 0, void 0)
  .ser(se_PutEntityTypeCommand)
  .de(de_PutEntityTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEntityTypeRequest;
      output: {};
    };
    sdk: {
      input: PutEntityTypeCommandInput;
      output: PutEntityTypeCommandOutput;
    };
  };
}
