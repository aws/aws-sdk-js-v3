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

import { CreateCodeRepositoryInput, CreateCodeRepositoryOutput } from "../models/models_0";
import { de_CreateCodeRepositoryCommand, se_CreateCodeRepositoryCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCodeRepositoryCommand}.
 */
export interface CreateCodeRepositoryCommandInput extends CreateCodeRepositoryInput {}
/**
 * @public
 *
 * The output of {@link CreateCodeRepositoryCommand}.
 */
export interface CreateCodeRepositoryCommandOutput extends CreateCodeRepositoryOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a Git repository as a resource in your SageMaker account. You can associate the
 *             repository with notebook instances so that you can use Git source control for the
 *             notebooks you create. The Git repository is a resource in your SageMaker account, so it can
 *             be associated with more than one notebook instance, and it persists independently from
 *             the lifecycle of any notebook instances it is associated with.</p>
 *          <p>The repository can be hosted either in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
 *             or in any other Git repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateCodeRepositoryCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateCodeRepositoryCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateCodeRepositoryInput
 *   CodeRepositoryName: "STRING_VALUE", // required
 *   GitConfig: { // GitConfig
 *     RepositoryUrl: "STRING_VALUE", // required
 *     Branch: "STRING_VALUE",
 *     SecretArn: "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateCodeRepositoryCommand(input);
 * const response = await client.send(command);
 * // { // CreateCodeRepositoryOutput
 * //   CodeRepositoryArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateCodeRepositoryCommandInput - {@link CreateCodeRepositoryCommandInput}
 * @returns {@link CreateCodeRepositoryCommandOutput}
 * @see {@link CreateCodeRepositoryCommandInput} for command's `input` shape.
 * @see {@link CreateCodeRepositoryCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class CreateCodeRepositoryCommand extends $Command<
  CreateCodeRepositoryCommandInput,
  CreateCodeRepositoryCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: CreateCodeRepositoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCodeRepositoryCommandInput, CreateCodeRepositoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCodeRepositoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateCodeRepositoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "CreateCodeRepository",
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
  private serialize(input: CreateCodeRepositoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCodeRepositoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCodeRepositoryCommandOutput> {
    return de_CreateCodeRepositoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
