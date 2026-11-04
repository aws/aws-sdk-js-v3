// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAppVersionResourceRequest, DescribeAppVersionResourceResponse } from "../models/models_0";
import { DescribeAppVersionResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAppVersionResourceCommand}.
 */
export interface DescribeAppVersionResourceCommandInput extends DescribeAppVersionResourceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppVersionResourceCommand}.
 */
export interface DescribeAppVersionResourceCommandOutput extends DescribeAppVersionResourceResponse, __MetadataBearer {}

/**
 * Describes a resource of the Resilience Hub application.
 *
 * > **Note:**
 * >
 * > This API accepts only one of the following parameters to describe the resource:
 * >
 * > - `resourceName`
 * > - `logicalResourceId`
 * > - `physicalResourceId` (Along with `physicalResourceId`, you can also provide `awsAccountId`, and `awsRegion`)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DescribeAppVersionResourceCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DescribeAppVersionResourceCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // DescribeAppVersionResourceRequest
 *   appArn: "STRING_VALUE", // required
 *   appVersion: "STRING_VALUE", // required
 *   resourceName: "STRING_VALUE",
 *   logicalResourceId: { // LogicalResourceId
 *     identifier: "STRING_VALUE", // required
 *     logicalStackName: "STRING_VALUE",
 *     resourceGroupName: "STRING_VALUE",
 *     terraformSourceName: "STRING_VALUE",
 *     eksSourceName: "STRING_VALUE",
 *   },
 *   physicalResourceId: "STRING_VALUE",
 *   awsRegion: "STRING_VALUE",
 *   awsAccountId: "STRING_VALUE",
 * };
 * const command = new DescribeAppVersionResourceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppVersionResourceResponse
 * //   appArn: "STRING_VALUE", // required
 * //   appVersion: "STRING_VALUE", // required
 * //   physicalResource: { // PhysicalResource
 * //     resourceName: "STRING_VALUE",
 * //     logicalResourceId: { // LogicalResourceId
 * //       identifier: "STRING_VALUE", // required
 * //       logicalStackName: "STRING_VALUE",
 * //       resourceGroupName: "STRING_VALUE",
 * //       terraformSourceName: "STRING_VALUE",
 * //       eksSourceName: "STRING_VALUE",
 * //     },
 * //     physicalResourceId: { // PhysicalResourceId
 * //       identifier: "STRING_VALUE", // required
 * //       type: "Arn" || "Native", // required
 * //       awsRegion: "STRING_VALUE",
 * //       awsAccountId: "STRING_VALUE",
 * //     },
 * //     resourceType: "STRING_VALUE", // required
 * //     appComponents: [ // AppComponentList
 * //       { // AppComponent
 * //         name: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         id: "STRING_VALUE",
 * //         additionalInfo: { // AdditionalInfoMap
 * //           "<keys>": [ // AdditionalInfoValueList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     additionalInfo: {
 * //       "<keys>": [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     excluded: true || false,
 * //     sourceType: "AppTemplate" || "Discovered",
 * //     parentResourceName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAppVersionResourceCommandInput - {@link DescribeAppVersionResourceCommandInput}
 * @returns {@link DescribeAppVersionResourceCommandOutput}
 * @see {@link DescribeAppVersionResourceCommandInput} for command's `input` shape.
 * @see {@link DescribeAppVersionResourceCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This exception occurs when a conflict with a previous successful write is detected. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Resilience Hub service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception occurs when the specified resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * This exception occurs when you have exceeded the limit on the number of requests per second.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * This exception occurs when a request is not valid.
 *
 * @throws {@link ResiliencehubServiceException}
 *
 * Base exception class for all service exceptions from Resiliencehub service.
 *
 * @public
 */
export class DescribeAppVersionResourceCommand extends command<DescribeAppVersionResourceCommandInput, DescribeAppVersionResourceCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAppVersionResource",
  DescribeAppVersionResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAppVersionResourceRequest;
      output: DescribeAppVersionResourceResponse;
    };
    sdk: {
      input: DescribeAppVersionResourceCommandInput;
      output: DescribeAppVersionResourceCommandOutput;
    };
  };
}
