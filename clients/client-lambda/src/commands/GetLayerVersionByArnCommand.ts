// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLayerVersionByArnRequest, GetLayerVersionResponse } from "../models/models_0";
import { GetLayerVersionByArn$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLayerVersionByArnCommand}.
 */
export interface GetLayerVersionByArnCommandInput extends GetLayerVersionByArnRequest {}
/**
 * @public
 *
 * The output of {@link GetLayerVersionByArnCommand}.
 */
export interface GetLayerVersionByArnCommandOutput extends GetLayerVersionResponse, __MetadataBearer {}

/**
 * <p>Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetLayerVersionByArnCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetLayerVersionByArnCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // GetLayerVersionByArnRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new GetLayerVersionByArnCommand(input);
 * const response = await client.send(command);
 * // { // GetLayerVersionResponse
 * //   Content: { // LayerVersionContentOutput
 * //     Location: "STRING_VALUE",
 * //     CodeSha256: "STRING_VALUE",
 * //     CodeSize: Number("long"),
 * //     SigningProfileVersionArn: "STRING_VALUE",
 * //     SigningJobArn: "STRING_VALUE",
 * //     ResolvedS3Object: { // ResolvedS3Object
 * //       S3Bucket: "STRING_VALUE",
 * //       S3Key: "STRING_VALUE",
 * //       S3ObjectVersion: "STRING_VALUE",
 * //     },
 * //   },
 * //   LayerArn: "STRING_VALUE",
 * //   LayerVersionArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   CreatedDate: "STRING_VALUE",
 * //   Version: Number("long"),
 * //   CompatibleArchitectures: [ // CompatibleArchitectures
 * //     "x86_64" || "arm64",
 * //   ],
 * //   CompatibleRuntimes: [ // CompatibleRuntimes
 * //     "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "nodejs18.x" || "nodejs20.x" || "nodejs22.x" || "nodejs24.x" || "java8" || "java8.al2" || "java11" || "java17" || "java21" || "java25" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "python3.10" || "python3.11" || "python3.12" || "python3.13" || "python3.14" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "dotnet8" || "dotnet10" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "ruby3.2" || "ruby3.3" || "ruby3.4" || "ruby4.0" || "provided" || "provided.al2" || "provided.al2023",
 * //   ],
 * //   LicenseInfo: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLayerVersionByArnCommandInput - {@link GetLayerVersionByArnCommandInput}
 * @returns {@link GetLayerVersionByArnCommandOutput}
 * @see {@link GetLayerVersionByArnCommandInput} for command's `input` shape.
 * @see {@link GetLayerVersionByArnCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 *
 * @example To get information about a Lambda layer version
 * ```javascript
 * // The following example returns information about the layer version with the specified Amazon Resource Name (ARN).
 * const input = {
 *   Arn: "arn:aws:lambda:ca-central-1:123456789012:layer:blank-python-lib:3"
 * };
 * const command = new GetLayerVersionByArnCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CompatibleRuntimes: [
 *     "python3.8"
 *   ],
 *   Content: {
 *     CodeSha256: "6x+xmpl/M3BnQUk7gS9sGmfeFsR/npojXoA3fZUv4eU=",
 *     CodeSize: 9529009,
 *     Location: "https://awslambda-us-east-2-layers.s3.us-east-2.amazonaws.com/snapshots/123456789012/blank-python-lib-e5212378-xmpl-44ee-8398-9d8ec5113949?versionId=WbZnvf..."
 *   },
 *   CreatedDate: "2020-03-31T00:35:18.949+0000",
 *   Description: "Dependencies for the blank-python sample app.",
 *   LayerArn: "arn:aws:lambda:us-east-2:123456789012:layer:blank-python-lib",
 *   LayerVersionArn: "arn:aws:lambda:us-east-2:123456789012:layer:blank-python-lib:3",
 *   Version: 3
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetLayerVersionByArnCommand extends command<GetLayerVersionByArnCommandInput, GetLayerVersionByArnCommandOutput>(
  _ep0,
  _mw0,
  "GetLayerVersionByArn",
  GetLayerVersionByArn$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLayerVersionByArnRequest;
      output: GetLayerVersionResponse;
    };
    sdk: {
      input: GetLayerVersionByArnCommandInput;
      output: GetLayerVersionByArnCommandOutput;
    };
  };
}
