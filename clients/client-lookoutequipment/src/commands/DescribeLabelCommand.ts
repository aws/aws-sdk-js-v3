// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeLabelRequest, DescribeLabelResponse } from "../models/models_0";
import { DescribeLabel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeLabelCommand}.
 */
export interface DescribeLabelCommandInput extends DescribeLabelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLabelCommand}.
 */
export interface DescribeLabelCommandOutput extends DescribeLabelResponse, __MetadataBearer {}

/**
 * Returns the name of the label.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DescribeLabelCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DescribeLabelCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // DescribeLabelRequest
 *   LabelGroupName: "STRING_VALUE", // required
 *   LabelId: "STRING_VALUE", // required
 * };
 * const command = new DescribeLabelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLabelResponse
 * //   LabelGroupName: "STRING_VALUE",
 * //   LabelGroupArn: "STRING_VALUE",
 * //   LabelId: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * //   Rating: "ANOMALY" || "NO_ANOMALY" || "NEUTRAL",
 * //   FaultCode: "STRING_VALUE",
 * //   Notes: "STRING_VALUE",
 * //   Equipment: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeLabelCommandInput - {@link DescribeLabelCommandInput}
 * @returns {@link DescribeLabelCommandOutput}
 * @see {@link DescribeLabelCommandInput} for command's `input` shape.
 * @see {@link DescribeLabelCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request could not be completed because you do not have access to the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Processing of the request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource requested could not be found. Verify the resource ID and retry your request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services service that's being utilized.
 *
 * @throws {@link LookoutEquipmentServiceException}
 *
 * Base exception class for all service exceptions from LookoutEquipment service.
 *
 * @public
 */
export class DescribeLabelCommand extends command<DescribeLabelCommandInput, DescribeLabelCommandOutput>(
  _ep0,
  _mw0,
  "DescribeLabel",
  DescribeLabel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLabelRequest;
      output: DescribeLabelResponse;
    };
    sdk: {
      input: DescribeLabelCommandInput;
      output: DescribeLabelCommandOutput;
    };
  };
}
