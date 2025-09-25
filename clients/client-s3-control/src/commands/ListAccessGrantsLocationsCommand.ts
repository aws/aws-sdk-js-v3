// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAccessGrantsLocationsRequest, ListAccessGrantsLocationsResult } from "../models/models_0";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { ListAccessGrantsLocations } from "../schemas/schemas_19_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccessGrantsLocationsCommand}.
 */
export interface ListAccessGrantsLocationsCommandInput extends ListAccessGrantsLocationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessGrantsLocationsCommand}.
 */
export interface ListAccessGrantsLocationsCommandOutput extends ListAccessGrantsLocationsResult, __MetadataBearer {}

/**
 * <p>Returns a list of the locations registered in your S3 Access Grants instance.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:ListAccessGrantsLocations</code> permission to use
 *                   this operation. </p>
 *             </dd>
 *          </dl>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListAccessGrantsLocationsCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListAccessGrantsLocationsCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // ListAccessGrantsLocationsRequest
 *   AccountId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   LocationScope: "STRING_VALUE",
 * };
 * const command = new ListAccessGrantsLocationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessGrantsLocationsResult
 * //   NextToken: "STRING_VALUE",
 * //   AccessGrantsLocationsList: [ // AccessGrantsLocationsList
 * //     { // ListAccessGrantsLocationsEntry
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       AccessGrantsLocationId: "STRING_VALUE",
 * //       AccessGrantsLocationArn: "STRING_VALUE",
 * //       LocationScope: "STRING_VALUE",
 * //       IAMRoleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAccessGrantsLocationsCommandInput - {@link ListAccessGrantsLocationsCommandInput}
 * @returns {@link ListAccessGrantsLocationsCommandOutput}
 * @see {@link ListAccessGrantsLocationsCommandInput} for command's `input` shape.
 * @see {@link ListAccessGrantsLocationsCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class ListAccessGrantsLocationsCommand extends $Command
  .classBuilder<
    ListAccessGrantsLocationsCommandInput,
    ListAccessGrantsLocationsCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "ListAccessGrantsLocations", {})
  .n("S3ControlClient", "ListAccessGrantsLocationsCommand")
  .sc(ListAccessGrantsLocations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccessGrantsLocationsRequest;
      output: ListAccessGrantsLocationsResult;
    };
    sdk: {
      input: ListAccessGrantsLocationsCommandInput;
      output: ListAccessGrantsLocationsCommandOutput;
    };
  };
}
