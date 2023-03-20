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
import { RegisterApplicationRevisionInput } from "../models/models_0";
import {
  deserializeAws_json1_1RegisterApplicationRevisionCommand,
  serializeAws_json1_1RegisterApplicationRevisionCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link RegisterApplicationRevisionCommand}.
 */
export interface RegisterApplicationRevisionCommandInput extends RegisterApplicationRevisionInput {}
/**
 * @public
 *
 * The output of {@link RegisterApplicationRevisionCommand}.
 */
export interface RegisterApplicationRevisionCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Registers with CodeDeploy a revision for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, RegisterApplicationRevisionCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, RegisterApplicationRevisionCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new RegisterApplicationRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RegisterApplicationRevisionCommandInput - {@link RegisterApplicationRevisionCommandInput}
 * @returns {@link RegisterApplicationRevisionCommandOutput}
 * @see {@link RegisterApplicationRevisionCommandInput} for command's `input` shape.
 * @see {@link RegisterApplicationRevisionCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link ApplicationDoesNotExistException} (client fault)
 *  <p>The application does not exist with the IAM user or Amazon Web Services account.</p>
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *  <p>The minimum number of required application names was not specified.</p>
 *
 * @throws {@link DescriptionTooLongException} (client fault)
 *  <p>The description is too long.</p>
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *  <p>The application name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidRevisionException} (client fault)
 *  <p>The revision was specified in an invalid format.</p>
 *
 * @throws {@link RevisionRequiredException} (client fault)
 *  <p>The revision ID was not specified.</p>
 *
 *
 */
export class RegisterApplicationRevisionCommand extends $Command<
  RegisterApplicationRevisionCommandInput,
  RegisterApplicationRevisionCommandOutput,
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
  constructor(readonly input: RegisterApplicationRevisionCommandInput) {
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
  ): Handler<RegisterApplicationRevisionCommandInput, RegisterApplicationRevisionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterApplicationRevisionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "RegisterApplicationRevisionCommand";
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
  private serialize(input: RegisterApplicationRevisionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterApplicationRevisionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterApplicationRevisionCommandOutput> {
    return deserializeAws_json1_1RegisterApplicationRevisionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
