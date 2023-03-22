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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import {
  CreateStackSetInput,
  CreateStackSetInputFilterSensitiveLog,
  CreateStackSetOutput,
  CreateStackSetOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateStackSetCommand,
  serializeAws_queryCreateStackSetCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link CreateStackSetCommand}.
 */
export interface CreateStackSetCommandInput extends CreateStackSetInput {}
/**
 * @public
 *
 * The output of {@link CreateStackSetCommand}.
 */
export interface CreateStackSetCommandOutput extends CreateStackSetOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a stack set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, CreateStackSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, CreateStackSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new CreateStackSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateStackSetCommandInput - {@link CreateStackSetCommandInput}
 * @returns {@link CreateStackSetCommandOutput}
 * @see {@link CreateStackSetCommandInput} for command's `input` shape.
 * @see {@link CreateStackSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CreatedButModifiedException} (client fault)
 *  <p>The specified resource exists, but has been changed.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The quota for the resource has already been reached.</p>
 *          <p>For information about resource and stack limitations, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation
 *             quotas</a> in the <i>CloudFormation User Guide</i>.</p>
 *
 * @throws {@link NameAlreadyExistsException} (client fault)
 *  <p>The specified name is already in use.</p>
 *
 *
 */
export class CreateStackSetCommand extends $Command<
  CreateStackSetCommandInput,
  CreateStackSetCommandOutput,
  CloudFormationClientResolvedConfig
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
  constructor(readonly input: CreateStackSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateStackSetCommandInput, CreateStackSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateStackSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "CreateStackSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStackSetInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateStackSetOutputFilterSensitiveLog,
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
  private serialize(input: CreateStackSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateStackSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateStackSetCommandOutput> {
    return deserializeAws_queryCreateStackSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
