// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { DeleteRepositoryRequest, DeleteRepositoryResponse } from "../models/models_0";
import { de_DeleteRepositoryCommand, se_DeleteRepositoryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Deletes a repository. If the repository contains images, you must either delete all
 *             images in the repository or use the <code>force</code> option to delete the
 *             repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DeleteRepositoryCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DeleteRepositoryCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
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
 * //     imageTagMutability: "STRING_VALUE",
 * //     imageScanningConfiguration: { // ImageScanningConfiguration
 * //       scanOnPush: true || false,
 * //     },
 * //     encryptionConfiguration: { // EncryptionConfiguration
 * //       encryptionType: "STRING_VALUE", // required
 * //       kmsKey: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteRepositoryCommandInput - {@link DeleteRepositoryCommandInput}
 * @returns {@link DeleteRepositoryCommandOutput}
 * @see {@link DeleteRepositoryCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link KmsException} (client fault)
 *  <p>The operation failed due to a KMS exception.</p>
 *
 * @throws {@link RepositoryNotEmptyException} (client fault)
 *  <p>The specified repository contains images. To delete a repository that contains images,
 *             you must force the deletion with the <code>force</code> parameter.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 * @example To force delete a repository
 * ```javascript
 * // This example force deletes a repository named ubuntu in the default registry for an account. The force parameter is required if the repository contains images.
 * const input = {
 *   "force": true,
 *   "repositoryName": "ubuntu"
 * };
 * const command = new DeleteRepositoryCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "repository": {
 *     "registryId": "012345678901",
 *     "repositoryArn": "arn:aws:ecr:us-west-2:012345678901:repository/ubuntu",
 *     "repositoryName": "ubuntu"
 *   }
 * }
 * *\/
 * // example id: deleterepository-example-1470863805703
 * ```
 *
 */
export class DeleteRepositoryCommand extends $Command<
  DeleteRepositoryCommandInput,
  DeleteRepositoryCommandOutput,
  ECRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DeleteRepositoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteRepositoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "DeleteRepositoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteRepositoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteRepositoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRepositoryCommandOutput> {
    return de_DeleteRepositoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
