// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateOpsMetadataRequest, CreateOpsMetadataResult } from "../models/models_0";
import { CreateOpsMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateOpsMetadataCommand}.
 */
export interface CreateOpsMetadataCommandInput extends CreateOpsMetadataRequest {}
/**
 * @public
 *
 * The output of {@link CreateOpsMetadataCommand}.
 */
export interface CreateOpsMetadataCommandOutput extends CreateOpsMetadataResult, __MetadataBearer {}

/**
 * If you create a new application in Application Manager, Amazon Web Services Systems Manager calls this API operation to specify information about the new application, including the application type.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // CreateOpsMetadataRequest
 *   ResourceId: "STRING_VALUE", // required
 *   Metadata: { // MetadataMap
 *     "<keys>": { // MetadataValue
 *       Value: "STRING_VALUE",
 *     },
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateOpsMetadataCommand(input);
 * const response = await client.send(command);
 * // { // CreateOpsMetadataResult
 * //   OpsMetadataArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateOpsMetadataCommandInput - {@link CreateOpsMetadataCommandInput}
 * @returns {@link CreateOpsMetadataCommandOutput}
 * @see {@link CreateOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link CreateOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link OpsMetadataAlreadyExistsException} (client fault)
 *
 * An OpsMetadata object already exists for the selected resource.
 *
 * @throws {@link OpsMetadataInvalidArgumentException} (client fault)
 *
 * One of the arguments passed is invalid.
 *
 * @throws {@link OpsMetadataLimitExceededException} (client fault)
 *
 * Your account reached the maximum number of OpsMetadata objects allowed by Application Manager. The maximum is 200 OpsMetadata objects. Delete one or more OpsMetadata object and try again.
 *
 * @throws {@link OpsMetadataTooManyUpdatesException} (client fault)
 *
 * The system is processing too many concurrent updates. Wait a few moments and try again.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class CreateOpsMetadataCommand extends command<CreateOpsMetadataCommandInput, CreateOpsMetadataCommandOutput>(
  _ep0,
  _mw0,
  "CreateOpsMetadata",
  CreateOpsMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOpsMetadataRequest;
      output: CreateOpsMetadataResult;
    };
    sdk: {
      input: CreateOpsMetadataCommandInput;
      output: CreateOpsMetadataCommandOutput;
    };
  };
}
