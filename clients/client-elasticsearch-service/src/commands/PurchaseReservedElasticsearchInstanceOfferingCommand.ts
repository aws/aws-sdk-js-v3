// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  PurchaseReservedElasticsearchInstanceOfferingRequest,
  PurchaseReservedElasticsearchInstanceOfferingResponse,
} from "../models/models_0";
import {
  de_PurchaseReservedElasticsearchInstanceOfferingCommand,
  se_PurchaseReservedElasticsearchInstanceOfferingCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PurchaseReservedElasticsearchInstanceOfferingCommand}.
 */
export interface PurchaseReservedElasticsearchInstanceOfferingCommandInput
  extends PurchaseReservedElasticsearchInstanceOfferingRequest {}
/**
 * @public
 *
 * The output of {@link PurchaseReservedElasticsearchInstanceOfferingCommand}.
 */
export interface PurchaseReservedElasticsearchInstanceOfferingCommandOutput
  extends PurchaseReservedElasticsearchInstanceOfferingResponse,
    __MetadataBearer {}

/**
 * <p>Allows you to purchase reserved Elasticsearch instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, PurchaseReservedElasticsearchInstanceOfferingCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, PurchaseReservedElasticsearchInstanceOfferingCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // PurchaseReservedElasticsearchInstanceOfferingRequest
 *   ReservedElasticsearchInstanceOfferingId: "STRING_VALUE", // required
 *   ReservationName: "STRING_VALUE", // required
 *   InstanceCount: Number("int"),
 * };
 * const command = new PurchaseReservedElasticsearchInstanceOfferingCommand(input);
 * const response = await client.send(command);
 * // { // PurchaseReservedElasticsearchInstanceOfferingResponse
 * //   ReservedElasticsearchInstanceId: "STRING_VALUE",
 * //   ReservationName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PurchaseReservedElasticsearchInstanceOfferingCommandInput - {@link PurchaseReservedElasticsearchInstanceOfferingCommandInput}
 * @returns {@link PurchaseReservedElasticsearchInstanceOfferingCommandOutput}
 * @see {@link PurchaseReservedElasticsearchInstanceOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedElasticsearchInstanceOfferingCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>An exception for creating a resource that already exists. Gives http status code of 400.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 * @public
 */
export class PurchaseReservedElasticsearchInstanceOfferingCommand extends $Command
  .classBuilder<
    PurchaseReservedElasticsearchInstanceOfferingCommandInput,
    PurchaseReservedElasticsearchInstanceOfferingCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElasticsearchService2015", "PurchaseReservedElasticsearchInstanceOffering", {})
  .n("ElasticsearchServiceClient", "PurchaseReservedElasticsearchInstanceOfferingCommand")
  .f(void 0, void 0)
  .ser(se_PurchaseReservedElasticsearchInstanceOfferingCommand)
  .de(de_PurchaseReservedElasticsearchInstanceOfferingCommand)
  .build() {}
