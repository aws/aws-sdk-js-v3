// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetMultiRegionAccessPointRoutesRequest, GetMultiRegionAccessPointRoutesResult } from "../models/models_0";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetMultiRegionAccessPointRoutes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMultiRegionAccessPointRoutesCommand}.
 */
export interface GetMultiRegionAccessPointRoutesCommandInput extends GetMultiRegionAccessPointRoutesRequest {}
/**
 * @public
 *
 * The output of {@link GetMultiRegionAccessPointRoutesCommand}.
 */
export interface GetMultiRegionAccessPointRoutesCommandOutput
  extends GetMultiRegionAccessPointRoutesResult,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Returns the routing configuration for a Multi-Region Access Point, indicating which Regions are active or
 *          passive.</p>
 *          <p>To obtain routing control changes and failover requests, use the Amazon S3 failover control
 *          infrastructure endpoints in these five Amazon Web Services Regions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>us-east-1</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>us-west-2</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ap-southeast-2</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ap-northeast-1</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>eu-west-1</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetMultiRegionAccessPointRoutesCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetMultiRegionAccessPointRoutesCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetMultiRegionAccessPointRoutesRequest
 *   AccountId: "STRING_VALUE",
 *   Mrap: "STRING_VALUE", // required
 * };
 * const command = new GetMultiRegionAccessPointRoutesCommand(input);
 * const response = await client.send(command);
 * // { // GetMultiRegionAccessPointRoutesResult
 * //   Mrap: "STRING_VALUE",
 * //   Routes: [ // RouteList
 * //     { // MultiRegionAccessPointRoute
 * //       Bucket: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       TrafficDialPercentage: Number("int"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMultiRegionAccessPointRoutesCommandInput - {@link GetMultiRegionAccessPointRoutesCommandInput}
 * @returns {@link GetMultiRegionAccessPointRoutesCommandOutput}
 * @see {@link GetMultiRegionAccessPointRoutesCommandInput} for command's `input` shape.
 * @see {@link GetMultiRegionAccessPointRoutesCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class GetMultiRegionAccessPointRoutesCommand extends $Command
  .classBuilder<
    GetMultiRegionAccessPointRoutesCommandInput,
    GetMultiRegionAccessPointRoutesCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
      getApplyMd5BodyChecksumPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "GetMultiRegionAccessPointRoutes", {})
  .n("S3ControlClient", "GetMultiRegionAccessPointRoutesCommand")
  .sc(GetMultiRegionAccessPointRoutes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMultiRegionAccessPointRoutesRequest;
      output: GetMultiRegionAccessPointRoutesResult;
    };
    sdk: {
      input: GetMultiRegionAccessPointRoutesCommandInput;
      output: GetMultiRegionAccessPointRoutesCommandOutput;
    };
  };
}
