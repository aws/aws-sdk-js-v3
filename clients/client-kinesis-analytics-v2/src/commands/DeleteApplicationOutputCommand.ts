// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteApplicationOutputRequest, DeleteApplicationOutputResponse } from "../models/models_0";
import { DeleteApplicationOutput$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteApplicationOutputCommand}.
 */
export interface DeleteApplicationOutputCommandInput extends DeleteApplicationOutputRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApplicationOutputCommand}.
 */
export interface DeleteApplicationOutputCommandOutput extends DeleteApplicationOutputResponse, __MetadataBearer {}

/**
 * Deletes the output destination configuration from your SQL-based Kinesis Data Analytics application's configuration. Kinesis Data Analytics will no longer write data from the corresponding in-application stream to the external output destination.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DeleteApplicationOutputCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DeleteApplicationOutputCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // DeleteApplicationOutputRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"), // required
 *   OutputId: "STRING_VALUE", // required
 * };
 * const command = new DeleteApplicationOutputCommand(input);
 * const response = await client.send(command);
 * // { // DeleteApplicationOutputResponse
 * //   ApplicationARN: "STRING_VALUE",
 * //   ApplicationVersionId: Number("long"),
 * // };
 *
 * ```
 *
 * @param DeleteApplicationOutputCommandInput - {@link DeleteApplicationOutputCommandInput}
 * @returns {@link DeleteApplicationOutputCommandOutput}
 * @see {@link DeleteApplicationOutputCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationOutputCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Exception thrown as a result of concurrent modifications to an application. This error can be the result of attempting to modify an application without using the current application ID.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * The specified input parameter value is not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request JSON is not valid for the operation.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The application is not available for this operation.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Specified application can't be found.
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 *
 * Base exception class for all service exceptions from KinesisAnalyticsV2 service.
 *
 * @public
 */
export class DeleteApplicationOutputCommand extends command<DeleteApplicationOutputCommandInput, DeleteApplicationOutputCommandOutput>(
  _ep0,
  _mw0,
  "DeleteApplicationOutput",
  DeleteApplicationOutput$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApplicationOutputRequest;
      output: DeleteApplicationOutputResponse;
    };
    sdk: {
      input: DeleteApplicationOutputCommandInput;
      output: DeleteApplicationOutputCommandOutput;
    };
  };
}
