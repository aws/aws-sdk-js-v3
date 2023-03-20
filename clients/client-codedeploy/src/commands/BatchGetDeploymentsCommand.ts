// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { BatchGetDeploymentsInput, BatchGetDeploymentsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetDeploymentsCommand,
  serializeAws_json1_1BatchGetDeploymentsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link BatchGetDeploymentsCommand}.
 */
export interface BatchGetDeploymentsCommandInput extends BatchGetDeploymentsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetDeploymentsCommand}.
 */
export interface BatchGetDeploymentsCommandOutput extends BatchGetDeploymentsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about one or more deployments. The maximum number of deployments that
 *             can be returned is 25.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, BatchGetDeploymentsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, BatchGetDeploymentsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new BatchGetDeploymentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param BatchGetDeploymentsCommandInput - {@link BatchGetDeploymentsCommandInput}
 * @returns {@link BatchGetDeploymentsCommandOutput}
 * @see {@link BatchGetDeploymentsCommandInput} for command's `input` shape.
 * @see {@link BatchGetDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link BatchLimitExceededException} (client fault)
 *  <p>The maximum number of names or IDs allowed for this request (100) was exceeded.</p>
 *
 * @throws {@link DeploymentIdRequiredException} (client fault)
 *  <p>At least one deployment ID must be specified.</p>
 *
 * @throws {@link InvalidDeploymentIdException} (client fault)
 *  <p>At least one of the deployment IDs was specified in an invalid format.</p>
 *
 *
 */
export class BatchGetDeploymentsCommand extends $Command<
  BatchGetDeploymentsCommandInput,
  BatchGetDeploymentsCommandOutput,
  CodeDeployClientResolvedConfig
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
  constructor(readonly input: BatchGetDeploymentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetDeploymentsCommandInput, BatchGetDeploymentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetDeploymentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "BatchGetDeploymentsCommand";
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
  private serialize(input: BatchGetDeploymentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetDeploymentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetDeploymentsCommandOutput> {
    return deserializeAws_json1_1BatchGetDeploymentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
