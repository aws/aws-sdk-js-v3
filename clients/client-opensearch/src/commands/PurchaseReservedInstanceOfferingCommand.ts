// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PurchaseReservedInstanceOfferingRequest, PurchaseReservedInstanceOfferingResponse } from "../models/models_1";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import {
  de_PurchaseReservedInstanceOfferingCommand,
  se_PurchaseReservedInstanceOfferingCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PurchaseReservedInstanceOfferingCommand}.
 */
export interface PurchaseReservedInstanceOfferingCommandInput extends PurchaseReservedInstanceOfferingRequest {}
/**
 * @public
 *
 * The output of {@link PurchaseReservedInstanceOfferingCommand}.
 */
export interface PurchaseReservedInstanceOfferingCommandOutput
  extends PurchaseReservedInstanceOfferingResponse,
    __MetadataBearer {}

/**
 * <p>Allows you to purchase Amazon OpenSearch Service Reserved Instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, PurchaseReservedInstanceOfferingCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, PurchaseReservedInstanceOfferingCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // PurchaseReservedInstanceOfferingRequest
 *   ReservedInstanceOfferingId: "STRING_VALUE", // required
 *   ReservationName: "STRING_VALUE", // required
 *   InstanceCount: Number("int"),
 * };
 * const command = new PurchaseReservedInstanceOfferingCommand(input);
 * const response = await client.send(command);
 * // { // PurchaseReservedInstanceOfferingResponse
 * //   ReservedInstanceId: "STRING_VALUE",
 * //   ReservationName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PurchaseReservedInstanceOfferingCommandInput - {@link PurchaseReservedInstanceOfferingCommandInput}
 * @returns {@link PurchaseReservedInstanceOfferingCommandOutput}
 * @see {@link PurchaseReservedInstanceOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedInstanceOfferingCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>An exception for creating a resource that already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class PurchaseReservedInstanceOfferingCommand extends $Command
  .classBuilder<
    PurchaseReservedInstanceOfferingCommandInput,
    PurchaseReservedInstanceOfferingCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchService", "PurchaseReservedInstanceOffering", {})
  .n("OpenSearchClient", "PurchaseReservedInstanceOfferingCommand")
  .f(void 0, void 0)
  .ser(se_PurchaseReservedInstanceOfferingCommand)
  .de(de_PurchaseReservedInstanceOfferingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PurchaseReservedInstanceOfferingRequest;
      output: PurchaseReservedInstanceOfferingResponse;
    };
    sdk: {
      input: PurchaseReservedInstanceOfferingCommandInput;
      output: PurchaseReservedInstanceOfferingCommandOutput;
    };
  };
}
