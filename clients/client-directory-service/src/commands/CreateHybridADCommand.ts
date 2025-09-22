// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateHybridADRequest, CreateHybridADResult } from "../models/models_0";
import { CreateHybridAD } from "../schemas/schemas_11_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateHybridADCommand}.
 */
export interface CreateHybridADCommandInput extends CreateHybridADRequest {}
/**
 * @public
 *
 * The output of {@link CreateHybridADCommand}.
 */
export interface CreateHybridADCommandOutput extends CreateHybridADResult, __MetadataBearer {}

/**
 * <p>Creates a hybrid directory that connects your self-managed Active Directory (AD)
 *             infrastructure and Amazon Web Services.</p>
 *          <p>You must have a successful directory assessment using <a>StartADAssessment</a> to validate your environment compatibility before you
 *             use this operation.</p>
 *          <p>Updates are applied asynchronously. Use <a>DescribeDirectories</a> to
 *             monitor the progress of directory creation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateHybridADCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateHybridADCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // CreateHybridADRequest
 *   SecretArn: "STRING_VALUE", // required
 *   AssessmentId: "STRING_VALUE", // required
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateHybridADCommand(input);
 * const response = await client.send(command);
 * // { // CreateHybridADResult
 * //   DirectoryId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateHybridADCommandInput - {@link CreateHybridADCommandInput}
 * @returns {@link CreateHybridADCommandOutput}
 * @see {@link CreateHybridADCommandInput} for command's `input` shape.
 * @see {@link CreateHybridADCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ADAssessmentLimitExceededException} (client fault)
 *  <p>A directory assessment is automatically created when you create a hybrid directory.
 *             There are two types of assessments: <code>CUSTOMER</code> and <code>SYSTEM</code>. Your
 *             Amazon Web Services account has a limit of 100 <code>CUSTOMER</code> directory assessments.</p>
 *          <p>If you attempt to create a hybrid directory; and you already have 100
 *                 <code>CUSTOMER</code> directory assessments;, you will encounter an error. Delete
 *             assessments to free up capacity before trying again.</p>
 *          <p>You can request an increase to your <code>CUSTOMER</code> directory assessment quota
 *             by contacting customer support or delete existing CUSTOMER directory assessments; to
 *             free up capacity.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryLimitExceededException} (client fault)
 *  <p>The maximum number of directories in the region has been reached. You can use the
 *                 <a>GetDirectoryLimits</a> operation to determine your directory limits in
 *             the region.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @public
 */
export class CreateHybridADCommand extends $Command
  .classBuilder<
    CreateHybridADCommandInput,
    CreateHybridADCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "CreateHybridAD", {})
  .n("DirectoryServiceClient", "CreateHybridADCommand")
  .sc(CreateHybridAD)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHybridADRequest;
      output: CreateHybridADResult;
    };
    sdk: {
      input: CreateHybridADCommandInput;
      output: CreateHybridADCommandOutput;
    };
  };
}
