// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateComponentRequest, CreateComponentResponse } from "../models/models_0";
import { CreateComponent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateComponentCommand}.
 */
export interface CreateComponentCommandInput extends CreateComponentRequest {}
/**
 * @public
 *
 * The output of {@link CreateComponentCommand}.
 */
export interface CreateComponentCommandOutput extends CreateComponentResponse, __MetadataBearer {}

/**
 * Creates a new component that can be used to build, validate, test, and assess your image. The component is based on a YAML document that you specify using exactly one of the following methods:
 *
 * - Inline, using the `data` property in the request body.
 * - A URL that points to a YAML document file stored in Amazon S3, using the `uri` property in the request body.
 *
 * Image Builder determines the component type from the document. If the document contains a single phase named `test`, the component type is `TEST`. Otherwise, the component type is `BUILD`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateComponentCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateComponentCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // CreateComponentRequest
 *   name: "STRING_VALUE", // required
 *   semanticVersion: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   changeDescription: "STRING_VALUE",
 *   platform: "Windows" || "Linux" || "macOS", // required
 *   supportedOsVersions: [ // OsVersionList
 *     "STRING_VALUE",
 *   ],
 *   data: "STRING_VALUE",
 *   uri: "STRING_VALUE",
 *   kmsKeyId: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE", // required
 *   dryRun: true || false,
 * };
 * const command = new CreateComponentCommand(input);
 * const response = await client.send(command);
 * // { // CreateComponentResponse
 * //   requestId: "STRING_VALUE",
 * //   clientToken: "STRING_VALUE",
 * //   componentBuildVersionArn: "STRING_VALUE",
 * //   latestVersionReferences: { // LatestVersionReferences
 * //     latestVersionArn: "STRING_VALUE",
 * //     latestMajorVersionArn: "STRING_VALUE",
 * //     latestMinorVersionArn: "STRING_VALUE",
 * //     latestPatchVersionArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateComponentCommandInput - {@link CreateComponentCommandInput}
 * @returns {@link CreateComponentCommandOutput}
 * @see {@link CreateComponentCommandInput} for command's `input` shape.
 * @see {@link CreateComponentCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *
 * You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder calls on your behalf. Retry with an increasing or variable delay between requests.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A generic client error. This error usually indicates that the request failed a validation check, such as when a downstream service rejects a configured value.
 *
 * @throws {@link DryRunOperationException} (client fault)
 *
 * The dry run operation of the resource was successful, and no resources or mutations were actually performed due to the dry run flag in the request.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You are not authorized to perform the requested operation.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *
 * You have specified a client token for an operation using parameter values that differ from a previous request that used the same client token.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * You have specified a combination of parameters that isn't valid. For example, two mutually exclusive parameters, or a parameter without its required companion parameter. Review the error message for details.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is malformed or otherwise invalid. Verify the request and try again.
 *
 * @throws {@link InvalidVersionNumberException} (client fault)
 *
 * Your version number is out of bounds or does not follow the required syntax.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The resource that you are trying to operate on is currently in use. Review the message details and retry later.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An internal server error occurred while Image Builder processed the request. Retrying the request may succeed.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have exceeded the number of permitted resources or operations for this service. For service quotas, see [EC2 Image Builder endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/imagebuilder.html#limits_imagebuilder).
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is unable to process your request at this time.
 *
 * @throws {@link ImagebuilderServiceException}
 *
 * Base exception class for all service exceptions from Imagebuilder service.
 *
 * @example Create a component from a document stored in Amazon S3
 * ```javascript
 * // The following example creates a component from a YAML definition document that's stored in an Amazon S3 bucket. The definition document for this component includes an AppVersion parameter that recipes can set when they include the component.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE10101",
 *   description: "Installs a configurable version of my application",
 *   name: "my-example-parameterized-component",
 *   platform: "Linux",
 *   semanticVersion: "1.0.0",
 *   uri: "s3://amzn-s3-demo-bucket/components/install-my-app.yaml"
 * };
 * const command = new CreateComponentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE10101",
 *   componentBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-parameterized-component/1.0.0/1",
 *   latestVersionReferences: {
 *     latestMajorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-parameterized-component/1.x.x",
 *     latestMinorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-parameterized-component/1.0.x",
 *     latestPatchVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-parameterized-component/1.0.0",
 *     latestVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-parameterized-component/x.x.x"
 *   },
 *   requestId: "0cec8e32-a5c6-4aeb-ac3a-6471c8a2a8a9"
 * }
 * *\/
 * ```
 *
 * @example Create a component from an inline document
 * ```javascript
 * // The following example creates a build component from a YAML document provided inline in the request.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   data: "name: InstallMyApp
 * description: Installs my application
 * schemaVersion: 1.0
 * phases:
 *   - name: build
 *     steps:
 *       - name: InstallApp
 *         action: ExecuteBash
 *         inputs:
 *           commands:
 *             - sudo yum -y install my-app
 * ",
 *   description: "Installs the latest version of my application",
 *   name: "my-example-component",
 *   platform: "Linux",
 *   semanticVersion: "1.0.0"
 * };
 * const command = new CreateComponentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   componentBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-component/1.0.0/1",
 *   latestVersionReferences: {
 *     latestMajorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-component/1.x.x",
 *     latestMinorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-component/1.0.x",
 *     latestPatchVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-component/1.0.0",
 *     latestVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-component/x.x.x"
 *   },
 *   requestId: "e769f240-fb6a-4253-88d1-20a80cbe787d"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateComponentCommand extends command<CreateComponentCommandInput, CreateComponentCommandOutput>(
  _ep0,
  _mw0,
  "CreateComponent",
  CreateComponent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateComponentRequest;
      output: CreateComponentResponse;
    };
    sdk: {
      input: CreateComponentCommandInput;
      output: CreateComponentCommandOutput;
    };
  };
}
