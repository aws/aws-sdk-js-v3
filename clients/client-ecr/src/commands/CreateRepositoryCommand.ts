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
import { CreateRepositoryRequest, CreateRepositoryResponse } from "../models/models_0";
import { de_CreateRepositoryCommand, se_CreateRepositoryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateRepositoryCommand}.
 */
export interface CreateRepositoryCommandInput extends CreateRepositoryRequest {}
/**
 * @public
 *
 * The output of {@link CreateRepositoryCommand}.
 */
export interface CreateRepositoryCommandOutput extends CreateRepositoryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the
 *                 <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, CreateRepositoryCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, CreateRepositoryCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // CreateRepositoryRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   imageTagMutability: "STRING_VALUE",
 *   imageScanningConfiguration: { // ImageScanningConfiguration
 *     scanOnPush: true || false,
 *   },
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     encryptionType: "STRING_VALUE", // required
 *     kmsKey: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRepositoryCommand(input);
 * const response = await client.send(command);
 * // { // CreateRepositoryResponse
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
 * @param CreateRepositoryCommandInput - {@link CreateRepositoryCommandInput}
 * @returns {@link CreateRepositoryCommandOutput}
 * @see {@link CreateRepositoryCommandInput} for command's `input` shape.
 * @see {@link CreateRepositoryCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link InvalidTagParameterException} (client fault)
 *  <p>An invalid parameter has been specified. Tag keys can have a maximum character length of 128 characters, and tag values can have
 *             a maximum length of 256 characters.</p>
 *
 * @throws {@link KmsException} (client fault)
 *  <p>The operation failed due to a KMS exception.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation did not succeed because it would have exceeded a service limit for your
 *             account. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html">Amazon ECR service quotas</a> in
 *             the Amazon Elastic Container Registry User Guide.</p>
 *
 * @throws {@link RepositoryAlreadyExistsException} (client fault)
 *  <p>The specified repository already exists in the specified registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The list of tags on the repository is over the limit. The maximum number of tags that
 *             can be applied to a repository is 50.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 * @example To create a new repository
 * ```javascript
 * // This example creates a repository called nginx-web-app inside the project-a namespace in the default registry for an account.
 * const input = {
 *   "repositoryName": "project-a/nginx-web-app"
 * };
 * const command = new CreateRepositoryCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "repository": {
 *     "registryId": "012345678901",
 *     "repositoryArn": "arn:aws:ecr:us-west-2:012345678901:repository/project-a/nginx-web-app",
 *     "repositoryName": "project-a/nginx-web-app"
 *   }
 * }
 * *\/
 * // example id: createrepository-example-1470863688724
 * ```
 *
 */
export class CreateRepositoryCommand extends $Command<
  CreateRepositoryCommandInput,
  CreateRepositoryCommandOutput,
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
  constructor(readonly input: CreateRepositoryCommandInput) {
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
  ): Handler<CreateRepositoryCommandInput, CreateRepositoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRepositoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "CreateRepositoryCommand";
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
  private serialize(input: CreateRepositoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateRepositoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRepositoryCommandOutput> {
    return de_CreateRepositoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
