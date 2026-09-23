// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetComponentRequest, GetComponentResponse } from "../models/models_0";
import { GetComponent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetComponentCommand}.
 */
export interface GetComponentCommandInput extends GetComponentRequest {}
/**
 * @public
 *
 * The output of {@link GetComponentCommand}.
 */
export interface GetComponentCommandOutput extends GetComponentResponse, __MetadataBearer {}

/**
 * <p>Retrieves a component object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetComponentCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetComponentCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // GetComponentRequest
 *   componentBuildVersionArn: "STRING_VALUE", // required
 * };
 * const command = new GetComponentCommand(input);
 * const response = await client.send(command);
 * // { // GetComponentResponse
 * //   requestId: "STRING_VALUE",
 * //   component: { // Component
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     version: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     changeDescription: "STRING_VALUE",
 * //     type: "BUILD" || "TEST",
 * //     platform: "Windows" || "Linux" || "macOS",
 * //     supportedOsVersions: [ // OsVersionList
 * //       "STRING_VALUE",
 * //     ],
 * //     state: { // ComponentState
 * //       status: "DEPRECATED" || "DISABLED" || "ACTIVE",
 * //       reason: "STRING_VALUE",
 * //     },
 * //     parameters: [ // ComponentParameterDetailList
 * //       { // ComponentParameterDetail
 * //         name: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         defaultValue: [ // ComponentParameterValueList
 * //           "STRING_VALUE",
 * //         ],
 * //         description: "STRING_VALUE",
 * //       },
 * //     ],
 * //     owner: "STRING_VALUE",
 * //     data: "STRING_VALUE",
 * //     kmsKeyId: "STRING_VALUE",
 * //     encrypted: true || false,
 * //     dateCreated: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     publisher: "STRING_VALUE",
 * //     obfuscate: true || false,
 * //     productCodes: [ // ProductCodeList
 * //       { // ProductCodeListItem
 * //         productCodeId: "STRING_VALUE", // required
 * //         productCodeType: "marketplace", // required
 * //       },
 * //     ],
 * //   },
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
 * @param GetComponentCommandInput - {@link GetComponentCommandInput}
 * @returns {@link GetComponentCommandOutput}
 * @see {@link GetComponentCommandInput} for command's `input` shape.
 * @see {@link GetComponentCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder
 * 			calls on your behalf. Retry with an increasing or variable delay between
 * 			requests.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A generic client error. This error usually indicates that the request
 * 			failed a validation check, such as when a downstream service rejects a
 * 			configured value.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example Get the details of a component build version
 * ```javascript
 * // The following example retrieves a component build version. The data field in the response contains the YAML document that defines the component.
 * const input = {
 *   componentBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-component/1.0.0/1"
 * };
 * const command = new GetComponentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   component: {
 *     arn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-component/1.0.0/1",
 *     changeDescription: "Initial version",
 *     data: "name: InstallMyApp
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
 *     dateCreated: "2026-09-09T18:31:30.404Z",
 *     description: "Installs the latest version of my application",
 *     encrypted: true,
 *     name: "my-example-component",
 *     owner: "111122223333",
 *     platform: "Linux",
 *     state: {
 *       status: "ACTIVE"
 *     },
 *     type: "BUILD",
 *     version: "1.0.0"
 *   },
 *   latestVersionReferences: {
 *     latestMajorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-component/1.x.x",
 *     latestMinorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-component/1.0.x",
 *     latestPatchVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-component/1.0.0",
 *     latestVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-component/x.x.x"
 *   },
 *   requestId: "f5401098-035f-4be2-9eee-784c388ed04b"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetComponentCommand extends command<GetComponentCommandInput, GetComponentCommandOutput>(
  _ep0,
  _mw0,
  "GetComponent",
  GetComponent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetComponentRequest;
      output: GetComponentResponse;
    };
    sdk: {
      input: GetComponentCommandInput;
      output: GetComponentCommandOutput;
    };
  };
}
