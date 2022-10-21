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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  CreateCloudFormationStackRequest,
  CreateCloudFormationStackRequestFilterSensitiveLog,
  CreateCloudFormationStackResult,
  CreateCloudFormationStackResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateCloudFormationStackCommand,
  serializeAws_json1_1CreateCloudFormationStackCommand,
} from "../protocols/Aws_json1_1";

export interface CreateCloudFormationStackCommandInput extends CreateCloudFormationStackRequest {}
export interface CreateCloudFormationStackCommandOutput extends CreateCloudFormationStackResult, __MetadataBearer {}

/**
 * <p>Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported
 *       Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be
 *       used to track the AWS CloudFormation stack created. Use the <code>get cloud formation stack
 *         records</code> operation to get a list of the CloudFormation stacks created.</p>
 *          <important>
 *             <p>Wait until after your new Amazon EC2 instance is created before running the <code>create
 *           cloud formation stack</code> operation again with the same export snapshot record.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateCloudFormationStackCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateCloudFormationStackCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateCloudFormationStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCloudFormationStackCommandInput} for command's `input` shape.
 * @see {@link CreateCloudFormationStackCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class CreateCloudFormationStackCommand extends $Command<
  CreateCloudFormationStackCommandInput,
  CreateCloudFormationStackCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: CreateCloudFormationStackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCloudFormationStackCommandInput, CreateCloudFormationStackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCloudFormationStackCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateCloudFormationStackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCloudFormationStackRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCloudFormationStackResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCloudFormationStackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCloudFormationStackCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCloudFormationStackCommandOutput> {
    return deserializeAws_json1_1CreateCloudFormationStackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
