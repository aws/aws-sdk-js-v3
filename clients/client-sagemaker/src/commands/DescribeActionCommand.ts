// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeActionRequest, DescribeActionResponse } from "../models/models_2";
import { DescribeAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeActionCommand}.
 */
export interface DescribeActionCommandInput extends DescribeActionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeActionCommand}.
 */
export interface DescribeActionCommandOutput extends DescribeActionResponse, __MetadataBearer {}

/**
 * <p>Describes an action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeActionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeActionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeActionRequest
 *   ActionName: "STRING_VALUE", // required
 * };
 * const command = new DescribeActionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeActionResponse
 * //   ActionName: "STRING_VALUE",
 * //   ActionArn: "STRING_VALUE",
 * //   Source: { // ActionSource
 * //     SourceUri: "STRING_VALUE", // required
 * //     SourceType: "STRING_VALUE",
 * //     SourceId: "STRING_VALUE",
 * //   },
 * //   ActionType: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Status: "Unknown" || "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 * //   Properties: { // LineageEntityParameters
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   CreatedBy: { // UserContext
 * //     UserProfileArn: "STRING_VALUE",
 * //     UserProfileName: "STRING_VALUE",
 * //     DomainId: "STRING_VALUE",
 * //     IamIdentity: { // IamIdentity
 * //       Arn: "STRING_VALUE",
 * //       PrincipalId: "STRING_VALUE",
 * //       SourceIdentity: "STRING_VALUE",
 * //     },
 * //   },
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastModifiedBy: {
 * //     UserProfileArn: "STRING_VALUE",
 * //     UserProfileName: "STRING_VALUE",
 * //     DomainId: "STRING_VALUE",
 * //     IamIdentity: {
 * //       Arn: "STRING_VALUE",
 * //       PrincipalId: "STRING_VALUE",
 * //       SourceIdentity: "STRING_VALUE",
 * //     },
 * //   },
 * //   MetadataProperties: { // MetadataProperties
 * //     CommitId: "STRING_VALUE",
 * //     Repository: "STRING_VALUE",
 * //     GeneratedBy: "STRING_VALUE",
 * //     ProjectId: "STRING_VALUE",
 * //   },
 * //   LineageGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeActionCommandInput - {@link DescribeActionCommandInput}
 * @returns {@link DescribeActionCommandOutput}
 * @see {@link DescribeActionCommandInput} for command's `input` shape.
 * @see {@link DescribeActionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DescribeActionCommand extends command<DescribeActionCommandInput, DescribeActionCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAction",
  DescribeAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeActionRequest;
      output: DescribeActionResponse;
    };
    sdk: {
      input: DescribeActionCommandInput;
      output: DescribeActionCommandOutput;
    };
  };
}
