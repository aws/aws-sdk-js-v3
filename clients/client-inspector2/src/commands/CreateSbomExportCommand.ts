// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSbomExportRequest, CreateSbomExportResponse } from "../models/models_0";
import { CreateSbomExport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSbomExportCommand}.
 */
export interface CreateSbomExportCommandInput extends CreateSbomExportRequest {}
/**
 * @public
 *
 * The output of {@link CreateSbomExportCommand}.
 */
export interface CreateSbomExportCommandOutput extends CreateSbomExportResponse, __MetadataBearer {}

/**
 * Creates a software bill of materials (SBOM) report.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, CreateSbomExportCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, CreateSbomExportCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // CreateSbomExportRequest
 *   resourceFilterCriteria: { // ResourceFilterCriteria
 *     accountId: [ // ResourceStringFilterList
 *       { // ResourceStringFilter
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     resourceId: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     resourceType: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     ecrRepositoryName: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     lambdaFunctionName: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     ecrImageTags: "<ResourceStringFilterList>",
 *     ec2InstanceTags: [ // ResourceMapFilterList
 *       { // ResourceMapFilter
 *         comparison: "STRING_VALUE", // required
 *         key: "STRING_VALUE", // required
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *     lambdaFunctionTags: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         key: "STRING_VALUE", // required
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *     cloudProvider: "<ResourceStringFilterList>",
 *     cloudProviderAccountId: "<ResourceStringFilterList>",
 *     cloudProviderOrgId: "<ResourceStringFilterList>",
 *     cloudProviderRegion: "<ResourceStringFilterList>",
 *     cloudVmInstanceTags: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         key: "STRING_VALUE", // required
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *     cloudContainerImageTags: "<ResourceStringFilterList>",
 *     cloudContainerRepositoryName: "<ResourceStringFilterList>",
 *     cloudContainerRegistryName: "<ResourceStringFilterList>",
 *     cloudServerlessFunctionName: "<ResourceStringFilterList>",
 *     cloudServerlessFunctionRuntime: "<ResourceStringFilterList>",
 *     cloudServerlessFunctionTags: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         key: "STRING_VALUE", // required
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   reportFormat: "STRING_VALUE", // required
 *   s3Destination: { // Destination
 *     bucketName: "STRING_VALUE", // required
 *     keyPrefix: "STRING_VALUE",
 *     kmsKeyArn: "STRING_VALUE", // required
 *     expectedBucketOwner: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSbomExportCommand(input);
 * const response = await client.send(command);
 * // { // CreateSbomExportResponse
 * //   reportId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSbomExportCommandInput - {@link CreateSbomExportCommandInput}
 * @returns {@link CreateSbomExportCommandOutput}
 * @see {@link CreateSbomExportCommandInput} for command's `input` shape.
 * @see {@link CreateSbomExportCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * For `Enable`, you receive this error if you attempt to use a feature in an unsupported Amazon Web Services Region.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the Amazon Inspector service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access an invalid resource. Make sure the resource is specified correctly.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation due to missing required fields or having invalid inputs.
 *
 * @throws {@link Inspector2ServiceException}
 *
 * Base exception class for all service exceptions from Inspector2 service.
 *
 * @public
 */
export class CreateSbomExportCommand extends command<CreateSbomExportCommandInput, CreateSbomExportCommandOutput>(
  _ep0,
  _mw0,
  "CreateSbomExport",
  CreateSbomExport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSbomExportRequest;
      output: CreateSbomExportResponse;
    };
    sdk: {
      input: CreateSbomExportCommandInput;
      output: CreateSbomExportCommandOutput;
    };
  };
}
