// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportModelRequest, ImportModelResponse } from "../models/models_0";
import { ImportModel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ImportModelCommand}.
 */
export interface ImportModelCommandInput extends ImportModelRequest {}
/**
 * @public
 *
 * The output of {@link ImportModelCommand}.
 */
export interface ImportModelCommandOutput extends ImportModelResponse, __MetadataBearer {}

/**
 * Creates a new custom model that replicates a source custom model that you import. The source model can be in your Amazon Web Services account or another one.
 *
 * If the source model is in another Amazon Web Services account, then it must have a resource-based policy that authorizes you to import it.
 *
 * The source model must be in the same Amazon Web Services Region that you're using when you import. You can't import a model that's in a different Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ImportModelCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ImportModelCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // ImportModelRequest
 *   SourceModelArn: "STRING_VALUE", // required
 *   ModelName: "STRING_VALUE",
 *   VersionName: "STRING_VALUE",
 *   ModelKmsKeyId: "STRING_VALUE",
 *   DataAccessRoleArn: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ImportModelCommand(input);
 * const response = await client.send(command);
 * // { // ImportModelResponse
 * //   ModelArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ImportModelCommandInput - {@link ImportModelCommandInput}
 * @returns {@link ImportModelCommandOutput}
 * @see {@link ImportModelCommandInput} for command's `input` shape.
 * @see {@link ImportModelCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid.
 *
 * @throws {@link KmsKeyValidationException} (client fault)
 *
 * The KMS customer managed key (CMK) entered cannot be validated. Verify the key and re-enter it.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource name is already in use. Use a different name and try your request again.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * The maximum number of resources per account has been exceeded. Review the resources, and then try your request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource ARN was not found. Check the ARN and try your request again.
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *
 * The specified resource is not available. Check the resource and try your request again.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * The request contains more tags than can be associated with a resource (50 tags per resource). The maximum number of tags includes both existing tags and those included in your current request.
 *
 * @throws {@link ComprehendServiceException}
 *
 * Base exception class for all service exceptions from Comprehend service.
 *
 * @public
 */
export class ImportModelCommand extends command<ImportModelCommandInput, ImportModelCommandOutput>(
  _ep0,
  _mw0,
  "ImportModel",
  ImportModel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportModelRequest;
      output: ImportModelResponse;
    };
    sdk: {
      input: ImportModelCommandInput;
      output: ImportModelCommandOutput;
    };
  };
}
