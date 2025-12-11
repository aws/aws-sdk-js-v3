// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import type {
  GetExternalDataViewAccessDetailsRequest,
  GetExternalDataViewAccessDetailsResponse,
} from "../models/models_0";
import { GetExternalDataViewAccessDetails } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExternalDataViewAccessDetailsCommand}.
 */
export interface GetExternalDataViewAccessDetailsCommandInput extends GetExternalDataViewAccessDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetExternalDataViewAccessDetailsCommand}.
 */
export interface GetExternalDataViewAccessDetailsCommandOutput
  extends GetExternalDataViewAccessDetailsResponse,
    __MetadataBearer {}

/**
 * <p>Returns the credentials to access the external Dataview from an S3 location. To call this API:</p>
 *          <ul>
 *             <li>
 *                <p>You must retrieve the programmatic credentials.</p>
 *             </li>
 *             <li>
 *                <p>You must be a member of a FinSpace user group, where the dataset that you want to access has <code>Read Dataset Data</code> permissions.</p>
 *             </li>
 *          </ul>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, GetExternalDataViewAccessDetailsCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, GetExternalDataViewAccessDetailsCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * // import type { FinspaceDataClientConfig } from "@aws-sdk/client-finspace-data";
 * const config = {}; // type is FinspaceDataClientConfig
 * const client = new FinspaceDataClient(config);
 * const input = { // GetExternalDataViewAccessDetailsRequest
 *   dataViewId: "STRING_VALUE", // required
 *   datasetId: "STRING_VALUE", // required
 * };
 * const command = new GetExternalDataViewAccessDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetExternalDataViewAccessDetailsResponse
 * //   credentials: { // AwsCredentials
 * //     accessKeyId: "STRING_VALUE",
 * //     secretAccessKey: "STRING_VALUE",
 * //     sessionToken: "STRING_VALUE",
 * //     expiration: Number("long"),
 * //   },
 * //   s3Location: { // S3Location
 * //     bucket: "STRING_VALUE", // required
 * //     key: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetExternalDataViewAccessDetailsCommandInput - {@link GetExternalDataViewAccessDetailsCommandInput}
 * @returns {@link GetExternalDataViewAccessDetailsCommandOutput}
 * @see {@link GetExternalDataViewAccessDetailsCommandInput} for command's `input` shape.
 * @see {@link GetExternalDataViewAccessDetailsCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceDataServiceException}
 * <p>Base exception class for all service exceptions from FinspaceData service.</p>
 *
 *
 * @public
 */
export class GetExternalDataViewAccessDetailsCommand extends $Command
  .classBuilder<
    GetExternalDataViewAccessDetailsCommandInput,
    GetExternalDataViewAccessDetailsCommandOutput,
    FinspaceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroPublicAPI", "GetExternalDataViewAccessDetails", {})
  .n("FinspaceDataClient", "GetExternalDataViewAccessDetailsCommand")
  .sc(GetExternalDataViewAccessDetails)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExternalDataViewAccessDetailsRequest;
      output: GetExternalDataViewAccessDetailsResponse;
    };
    sdk: {
      input: GetExternalDataViewAccessDetailsCommandInput;
      output: GetExternalDataViewAccessDetailsCommandOutput;
    };
  };
}
