// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetRecordRequest, GetRecordResponse } from "../models/models_0";
import { de_GetRecordCommand, se_GetRecordCommand } from "../protocols/Aws_restJson1";
import {
  SageMakerFeatureStoreRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerFeatureStoreRuntimeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRecordCommand}.
 */
export interface GetRecordCommandInput extends GetRecordRequest {}
/**
 * @public
 *
 * The output of {@link GetRecordCommand}.
 */
export interface GetRecordCommandOutput extends GetRecordResponse, __MetadataBearer {}

/**
 * <p>Use for <code>OnlineStore</code> serving from a <code>FeatureStore</code>. Only the
 *          latest records stored in the <code>OnlineStore</code> can be retrieved. If no Record with
 *             <code>RecordIdentifierValue</code> is found, then an empty result is returned. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerFeatureStoreRuntimeClient, GetRecordCommand } from "@aws-sdk/client-sagemaker-featurestore-runtime"; // ES Modules import
 * // const { SageMakerFeatureStoreRuntimeClient, GetRecordCommand } = require("@aws-sdk/client-sagemaker-featurestore-runtime"); // CommonJS import
 * const client = new SageMakerFeatureStoreRuntimeClient(config);
 * const input = { // GetRecordRequest
 *   FeatureGroupName: "STRING_VALUE", // required
 *   RecordIdentifierValueAsString: "STRING_VALUE", // required
 *   FeatureNames: [ // FeatureNames
 *     "STRING_VALUE",
 *   ],
 *   ExpirationTimeResponse: "Enabled" || "Disabled",
 * };
 * const command = new GetRecordCommand(input);
 * const response = await client.send(command);
 * // { // GetRecordResponse
 * //   Record: [ // Record
 * //     { // FeatureValue
 * //       FeatureName: "STRING_VALUE", // required
 * //       ValueAsString: "STRING_VALUE",
 * //       ValueAsStringList: [ // ValueAsStringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   ExpiresAt: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRecordCommandInput - {@link GetRecordCommandInput}
 * @returns {@link GetRecordCommandOutput}
 * @see {@link GetRecordCommandInput} for command's `input` shape.
 * @see {@link GetRecordCommandOutput} for command's `response` shape.
 * @see {@link SageMakerFeatureStoreRuntimeClientResolvedConfig | config} for SageMakerFeatureStoreRuntimeClient's `config` shape.
 *
 * @throws {@link AccessForbidden} (client fault)
 *  <p>You do not have permission to perform an action.</p>
 *
 * @throws {@link InternalFailure} (server fault)
 *  <p>An internal failure occurred. Try your request again. If the problem persists, contact
 *             Amazon Web Services customer support.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>A resource that is required to perform an action was not found.</p>
 *
 * @throws {@link ServiceUnavailable} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ValidationError} (client fault)
 *  <p>There was an error validating your request.</p>
 *
 * @throws {@link SageMakerFeatureStoreRuntimeServiceException}
 * <p>Base exception class for all service exceptions from SageMakerFeatureStoreRuntime service.</p>
 *
 * @public
 */
export class GetRecordCommand extends $Command
  .classBuilder<
    GetRecordCommandInput,
    GetRecordCommandOutput,
    SageMakerFeatureStoreRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerFeatureStoreRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSageMakerFeatureStoreRuntime", "GetRecord", {})
  .n("SageMakerFeatureStoreRuntimeClient", "GetRecordCommand")
  .f(void 0, void 0)
  .ser(se_GetRecordCommand)
  .de(de_GetRecordCommand)
  .build() {}
