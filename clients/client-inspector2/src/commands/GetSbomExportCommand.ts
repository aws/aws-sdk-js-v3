// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import type { GetSbomExportRequest, GetSbomExportResponse } from "../models/models_0";
import { GetSbomExport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSbomExportCommand}.
 */
export interface GetSbomExportCommandInput extends GetSbomExportRequest {}
/**
 * @public
 *
 * The output of {@link GetSbomExportCommand}.
 */
export interface GetSbomExportCommandOutput extends GetSbomExportResponse, __MetadataBearer {}

/**
 * <p>Gets details of a software bill of materials (SBOM) report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, GetSbomExportCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, GetSbomExportCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // GetSbomExportRequest
 *   reportId: "STRING_VALUE", // required
 * };
 * const command = new GetSbomExportCommand(input);
 * const response = await client.send(command);
 * // { // GetSbomExportResponse
 * //   reportId: "STRING_VALUE",
 * //   format: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   errorCode: "STRING_VALUE",
 * //   errorMessage: "STRING_VALUE",
 * //   s3Destination: { // Destination
 * //     bucketName: "STRING_VALUE", // required
 * //     keyPrefix: "STRING_VALUE",
 * //     kmsKeyArn: "STRING_VALUE", // required
 * //   },
 * //   filterCriteria: { // ResourceFilterCriteria
 * //     accountId: [ // ResourceStringFilterList
 * //       { // ResourceStringFilter
 * //         comparison: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     resourceId: [
 * //       {
 * //         comparison: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     resourceType: [
 * //       {
 * //         comparison: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     ecrRepositoryName: [
 * //       {
 * //         comparison: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     lambdaFunctionName: [
 * //       {
 * //         comparison: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     ecrImageTags: "<ResourceStringFilterList>",
 * //     ec2InstanceTags: [ // ResourceMapFilterList
 * //       { // ResourceMapFilter
 * //         comparison: "STRING_VALUE", // required
 * //         key: "STRING_VALUE", // required
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     lambdaFunctionTags: [
 * //       {
 * //         comparison: "STRING_VALUE", // required
 * //         key: "STRING_VALUE", // required
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSbomExportCommandInput - {@link GetSbomExportCommandInput}
 * @returns {@link GetSbomExportCommandOutput}
 * @see {@link GetSbomExportCommandInput} for command's `input` shape.
 * @see {@link GetSbomExportCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified
 *          correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @public
 */
export class GetSbomExportCommand extends $Command
  .classBuilder<
    GetSbomExportCommandInput,
    GetSbomExportCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Inspector2", "GetSbomExport", {})
  .n("Inspector2Client", "GetSbomExportCommand")
  .sc(GetSbomExport$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSbomExportRequest;
      output: GetSbomExportResponse;
    };
    sdk: {
      input: GetSbomExportCommandInput;
      output: GetSbomExportCommandOutput;
    };
  };
}
