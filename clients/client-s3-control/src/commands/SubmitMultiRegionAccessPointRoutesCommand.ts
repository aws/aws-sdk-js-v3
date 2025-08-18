// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  SubmitMultiRegionAccessPointRoutesRequest,
  SubmitMultiRegionAccessPointRoutesResult,
} from "../models/models_1";
import {
  de_SubmitMultiRegionAccessPointRoutesCommand,
  se_SubmitMultiRegionAccessPointRoutesCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SubmitMultiRegionAccessPointRoutesCommand}.
 */
export interface SubmitMultiRegionAccessPointRoutesCommandInput extends SubmitMultiRegionAccessPointRoutesRequest {}
/**
 * @public
 *
 * The output of {@link SubmitMultiRegionAccessPointRoutesCommand}.
 */
export interface SubmitMultiRegionAccessPointRoutesCommandOutput
  extends SubmitMultiRegionAccessPointRoutesResult,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Submits an updated route configuration for a Multi-Region Access Point. This API operation updates the
 *          routing status for the specified Regions from active to passive, or from passive to active.
 *          A value of <code>0</code> indicates a passive status, which means that traffic won't be
 *          routed to the specified Region. A value of <code>100</code> indicates an active status,
 *          which means that traffic will be routed to the specified Region. At least one Region must
 *          be active at all times.</p>
 *          <p>When the routing configuration is changed, any in-progress operations (uploads, copies,
 *          deletes, and so on) to formerly active Regions will continue to run to their final
 *          completion state (success or failure). The routing configurations of any Regions that
 *          aren’t specified remain unchanged.</p>
 *          <note>
 *             <p>Updated routing configurations might not be immediately applied. It can take up to 2
 *             minutes for your changes to take effect.</p>
 *          </note>
 *          <p>To submit routing control changes and failover requests, use the Amazon S3 failover control
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
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, SubmitMultiRegionAccessPointRoutesCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, SubmitMultiRegionAccessPointRoutesCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // SubmitMultiRegionAccessPointRoutesRequest
 *   AccountId: "STRING_VALUE",
 *   Mrap: "STRING_VALUE", // required
 *   RouteUpdates: [ // RouteList // required
 *     { // MultiRegionAccessPointRoute
 *       Bucket: "STRING_VALUE",
 *       Region: "STRING_VALUE",
 *       TrafficDialPercentage: Number("int"), // required
 *     },
 *   ],
 * };
 * const command = new SubmitMultiRegionAccessPointRoutesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SubmitMultiRegionAccessPointRoutesCommandInput - {@link SubmitMultiRegionAccessPointRoutesCommandInput}
 * @returns {@link SubmitMultiRegionAccessPointRoutesCommandOutput}
 * @see {@link SubmitMultiRegionAccessPointRoutesCommandInput} for command's `input` shape.
 * @see {@link SubmitMultiRegionAccessPointRoutesCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class SubmitMultiRegionAccessPointRoutesCommand extends $Command
  .classBuilder<
    SubmitMultiRegionAccessPointRoutesCommandInput,
    SubmitMultiRegionAccessPointRoutesCommandOutput,
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
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
      getApplyMd5BodyChecksumPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "SubmitMultiRegionAccessPointRoutes", {})
  .n("S3ControlClient", "SubmitMultiRegionAccessPointRoutesCommand")
  .f(void 0, void 0)
  .ser(se_SubmitMultiRegionAccessPointRoutesCommand)
  .de(de_SubmitMultiRegionAccessPointRoutesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SubmitMultiRegionAccessPointRoutesRequest;
      output: {};
    };
    sdk: {
      input: SubmitMultiRegionAccessPointRoutesCommandInput;
      output: SubmitMultiRegionAccessPointRoutesCommandOutput;
    };
  };
}
