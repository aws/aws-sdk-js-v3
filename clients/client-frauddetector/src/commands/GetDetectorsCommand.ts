// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDetectorsRequest, GetDetectorsResult } from "../models/models_0";
import { GetDetectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDetectorsCommand}.
 */
export interface GetDetectorsCommandInput extends GetDetectorsRequest {}
/**
 * @public
 *
 * The output of {@link GetDetectorsCommand}.
 */
export interface GetDetectorsCommandOutput extends GetDetectorsResult, __MetadataBearer {}

/**
 * Gets all detectors or a single detector if a `detectorId` is specified. This is a paginated API. If you provide a null `maxResults`, this action retrieves a maximum of 10 records per page. If you provide a `maxResults`, the value must be between 5 and 10. To get the next page results, provide the pagination token from the `GetDetectorsResponse` as part of your request. A null pagination token fetches the records from the beginning.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetDetectorsCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetDetectorsCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // GetDetectorsRequest
 *   detectorId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetDetectorsCommand(input);
 * const response = await client.send(command);
 * // { // GetDetectorsResult
 * //   detectors: [ // DetectorList
 * //     { // Detector
 * //       detectorId: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       eventTypeName: "STRING_VALUE",
 * //       lastUpdatedTime: "STRING_VALUE",
 * //       createdTime: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDetectorsCommandInput - {@link GetDetectorsCommandInput}
 * @returns {@link GetDetectorsCommandOutput}
 * @see {@link GetDetectorsCommandInput} for command's `input` shape.
 * @see {@link GetDetectorsCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as `PutExternalModel`, that specifies a role that is not in your account.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An exception indicating an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An exception indicating the specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * An exception indicating a throttling error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception indicating a specified value is not allowed.
 *
 * @throws {@link FraudDetectorServiceException}
 *
 * Base exception class for all service exceptions from FraudDetector service.
 *
 * @public
 */
export class GetDetectorsCommand extends command<GetDetectorsCommandInput, GetDetectorsCommandOutput>(
  _ep0,
  _mw0,
  "GetDetectors",
  GetDetectors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDetectorsRequest;
      output: GetDetectorsResult;
    };
    sdk: {
      input: GetDetectorsCommandInput;
      output: GetDetectorsCommandOutput;
    };
  };
}
