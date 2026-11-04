// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRepositoryRequest, DeleteRepositoryResponse } from "../models/models_0";
import { DeleteRepository$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRepositoryCommand}.
 */
export interface DeleteRepositoryCommandInput extends DeleteRepositoryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRepositoryCommand}.
 */
export interface DeleteRepositoryCommandOutput extends DeleteRepositoryResponse, __MetadataBearer {}

/**
 * Deletes a repository in a public registry. If the repository contains images, you must either manually delete all images in the repository or use the `force` option. This option deletes all images on your behalf before deleting the repository.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, DeleteRepositoryCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, DeleteRepositoryCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * // import type { ECRPUBLICClientConfig } from "@aws-sdk/client-ecr-public";
 * const config = {}; // type is ECRPUBLICClientConfig
 * const client = new ECRPUBLICClient(config);
 * const input = { // DeleteRepositoryRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   force: true || false,
 * };
 * const command = new DeleteRepositoryCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRepositoryResponse
 * //   repository: { // Repository
 * //     repositoryArn: "STRING_VALUE",
 * //     registryId: "STRING_VALUE",
 * //     repositoryName: "STRING_VALUE",
 * //     repositoryUri: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteRepositoryCommandInput - {@link DeleteRepositoryCommandInput}
 * @returns {@link DeleteRepositoryCommandOutput}
 * @see {@link DeleteRepositoryCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link RepositoryNotEmptyException} (client fault)
 *
 * The specified repository contains images. To delete a repository that contains images, you must force the deletion with the `force` parameter.
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *
 * The specified repository can't be found. Check the spelling of the specified repository and ensure that you're performing operations on the correct registry.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link UnsupportedCommandException} (client fault)
 *
 * The action isn't supported in this Region.
 *
 * @throws {@link ECRPUBLICServiceException}
 *
 * Base exception class for all service exceptions from ECRPUBLIC service.
 *
 * @public
 */
export class DeleteRepositoryCommand extends command<DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRepository",
  DeleteRepository$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRepositoryRequest;
      output: DeleteRepositoryResponse;
    };
    sdk: {
      input: DeleteRepositoryCommandInput;
      output: DeleteRepositoryCommandOutput;
    };
  };
}
