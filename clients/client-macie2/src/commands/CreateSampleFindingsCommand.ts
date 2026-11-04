// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSampleFindingsRequest, CreateSampleFindingsResponse } from "../models/models_0";
import { CreateSampleFindings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSampleFindingsCommand}.
 */
export interface CreateSampleFindingsCommandInput extends CreateSampleFindingsRequest {}
/**
 * @public
 *
 * The output of {@link CreateSampleFindingsCommand}.
 */
export interface CreateSampleFindingsCommandOutput extends CreateSampleFindingsResponse, __MetadataBearer {}

/**
 * Creates sample findings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, CreateSampleFindingsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, CreateSampleFindingsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // CreateSampleFindingsRequest
 *   findingTypes: [ // __listOfFindingType
 *     "SensitiveData:S3Object/Multiple" || "SensitiveData:S3Object/Financial" || "SensitiveData:S3Object/Personal" || "SensitiveData:S3Object/Credentials" || "SensitiveData:S3Object/CustomIdentifier" || "Policy:IAMUser/S3BucketPublic" || "Policy:IAMUser/S3BucketSharedExternally" || "Policy:IAMUser/S3BucketReplicatedExternally" || "Policy:IAMUser/S3BucketEncryptionDisabled" || "Policy:IAMUser/S3BlockPublicAccessDisabled" || "Policy:IAMUser/S3BucketSharedWithCloudFront",
 *   ],
 * };
 * const command = new CreateSampleFindingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateSampleFindingsCommandInput - {@link CreateSampleFindingsCommandInput}
 * @returns {@link CreateSampleFindingsCommandOutput}
 * @see {@link CreateSampleFindingsCommandInput} for command's `input` shape.
 * @see {@link CreateSampleFindingsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Provides information about an error that occurred due to insufficient access to a specified resource.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Provides information about an error that occurred due to a versioning conflict for a specified resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Provides information about an error that occurred due to an unknown internal server error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Provides information about an error that occurred because a specified resource wasn't found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Provides information about an error that occurred due to one or more service quotas for an account.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Provides information about an error that occurred because too many requests were sent during a certain amount of time.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Provides information about an error that occurred due to a syntax error in a request.
 *
 * @throws {@link Macie2ServiceException}
 *
 * Base exception class for all service exceptions from Macie2 service.
 *
 * @public
 */
export class CreateSampleFindingsCommand extends command<CreateSampleFindingsCommandInput, CreateSampleFindingsCommandOutput>(
  _ep0,
  _mw0,
  "CreateSampleFindings",
  CreateSampleFindings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSampleFindingsRequest;
      output: {};
    };
    sdk: {
      input: CreateSampleFindingsCommandInput;
      output: CreateSampleFindingsCommandOutput;
    };
  };
}
