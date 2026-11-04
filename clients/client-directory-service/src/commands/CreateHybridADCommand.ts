// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateHybridADRequest, CreateHybridADResult } from "../models/models_0";
import { CreateHybridAD$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a hybrid directory that connects your self-managed Active Directory (AD) infrastructure and Amazon Web Services.
 *
 * You must have a successful directory assessment using StartADAssessment to validate your environment compatibility before you use this operation.
 *
 * Updates are applied asynchronously. Use DescribeDirectories to monitor the progress of directory creation.
 *
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
 *
 * A directory assessment is automatically created when you create a hybrid directory. There are two types of assessments: `CUSTOMER` and `SYSTEM`. Your Amazon Web Services account has a limit of 100 `CUSTOMER` directory assessments.
 *
 * If you attempt to create a hybrid directory; and you already have 100 `CUSTOMER` directory assessments;, you will encounter an error. Delete assessments to free up capacity before trying again.
 *
 * You can request an increase to your `CUSTOMER` directory assessment quota by contacting customer support or delete existing CUSTOMER directory assessments; to free up capacity.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryLimitExceededException} (client fault)
 *
 * The maximum number of directories in the region has been reached. You can use the GetDirectoryLimits operation to determine your directory limits in the region.
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *
 * The specified entity could not be found.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation is not supported.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
 *
 * @public
 */
export class CreateHybridADCommand extends command<CreateHybridADCommandInput, CreateHybridADCommandOutput>(
  _ep0,
  _mw0,
  "CreateHybridAD",
  CreateHybridAD$
) {
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
