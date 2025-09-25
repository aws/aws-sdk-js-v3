// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { CreateDatasetRequest, CreateDatasetResponse } from "../models/models_0";
import { CreateDataset } from "../schemas/schemas_6_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDatasetCommand}.
 */
export interface CreateDatasetCommandInput extends CreateDatasetRequest {}
/**
 * @public
 *
 * The output of {@link CreateDatasetCommand}.
 */
export interface CreateDatasetCommandOutput extends CreateDatasetResponse, __MetadataBearer {}

/**
 * <p>Creates a dataset to connect an external datasource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateDatasetCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateDatasetCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // CreateDatasetRequest
 *   datasetId: "STRING_VALUE",
 *   datasetName: "STRING_VALUE", // required
 *   datasetDescription: "STRING_VALUE",
 *   datasetSource: { // DatasetSource
 *     sourceType: "KENDRA", // required
 *     sourceFormat: "KNOWLEDGE_BASE", // required
 *     sourceDetail: { // SourceDetail
 *       kendra: { // KendraSourceDetail
 *         knowledgeBaseArn: "STRING_VALUE", // required
 *         roleArn: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDatasetCommand(input);
 * const response = await client.send(command);
 * // { // CreateDatasetResponse
 * //   datasetId: "STRING_VALUE", // required
 * //   datasetArn: "STRING_VALUE", // required
 * //   datasetStatus: { // DatasetStatus
 * //     state: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED", // required
 * //     error: { // ErrorDetails
 * //       code: "VALIDATION_ERROR" || "INTERNAL_FAILURE", // required
 * //       message: "STRING_VALUE", // required
 * //       details: [ // DetailedErrors
 * //         { // DetailedError
 * //           code: "INCOMPATIBLE_COMPUTE_LOCATION" || "INCOMPATIBLE_FORWARDING_CONFIGURATION", // required
 * //           message: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDatasetCommandInput - {@link CreateDatasetCommandInput}
 * @returns {@link CreateDatasetCommandOutput}
 * @see {@link CreateDatasetCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've reached the quota for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 *
 * @public
 */
export class CreateDatasetCommand extends $Command
  .classBuilder<
    CreateDatasetCommandInput,
    CreateDatasetCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "CreateDataset", {})
  .n("IoTSiteWiseClient", "CreateDatasetCommand")
  .sc(CreateDataset)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDatasetRequest;
      output: CreateDatasetResponse;
    };
    sdk: {
      input: CreateDatasetCommandInput;
      output: CreateDatasetCommandOutput;
    };
  };
}
