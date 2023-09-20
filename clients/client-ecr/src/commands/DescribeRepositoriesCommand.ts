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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { DescribeRepositoriesRequest, DescribeRepositoriesResponse } from "../models/models_0";
import { de_DescribeRepositoriesCommand, se_DescribeRepositoriesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRepositoriesCommand}.
 */
export interface DescribeRepositoriesCommandInput extends DescribeRepositoriesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRepositoriesCommand}.
 */
export interface DescribeRepositoriesCommandOutput extends DescribeRepositoriesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes image repositories in a registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribeRepositoriesCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribeRepositoriesCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // DescribeRepositoriesRequest
 *   registryId: "STRING_VALUE",
 *   repositoryNames: [ // RepositoryNameList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeRepositoriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRepositoriesResponse
 * //   repositories: [ // RepositoryList
 * //     { // Repository
 * //       repositoryArn: "STRING_VALUE",
 * //       registryId: "STRING_VALUE",
 * //       repositoryName: "STRING_VALUE",
 * //       repositoryUri: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       imageTagMutability: "MUTABLE" || "IMMUTABLE",
 * //       imageScanningConfiguration: { // ImageScanningConfiguration
 * //         scanOnPush: true || false,
 * //       },
 * //       encryptionConfiguration: { // EncryptionConfiguration
 * //         encryptionType: "AES256" || "KMS", // required
 * //         kmsKey: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRepositoriesCommandInput - {@link DescribeRepositoriesCommandInput}
 * @returns {@link DescribeRepositoriesCommandOutput}
 * @see {@link DescribeRepositoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
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
 * @example To describe all repositories in the current account
 * ```javascript
 * // The following example obtains a list and description of all repositories in the default registry to which the current user has access.
 * const input = {};
 * const command = new DescribeRepositoriesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "repositories": [
 *     {
 *       "registryId": "012345678910",
 *       "repositoryArn": "arn:aws:ecr:us-west-2:012345678910:repository/ubuntu",
 *       "repositoryName": "ubuntu"
 *     },
 *     {
 *       "registryId": "012345678910",
 *       "repositoryArn": "arn:aws:ecr:us-west-2:012345678910:repository/test",
 *       "repositoryName": "test"
 *     }
 *   ]
 * }
 * *\/
 * // example id: describe-repositories-1470856017467
 * ```
 *
 */
export class DescribeRepositoriesCommand extends $Command<
  DescribeRepositoriesCommandInput,
  DescribeRepositoriesCommandOutput,
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
  constructor(readonly input: DescribeRepositoriesCommandInput) {
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
  ): Handler<DescribeRepositoriesCommandInput, DescribeRepositoriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRepositoriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "DescribeRepositoriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerRegistry_V20150921",
        operation: "DescribeRepositories",
      },
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
  private serialize(input: DescribeRepositoriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRepositoriesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRepositoriesCommandOutput> {
    return de_DescribeRepositoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
