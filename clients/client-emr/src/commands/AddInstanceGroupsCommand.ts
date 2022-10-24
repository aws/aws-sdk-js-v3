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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import {
  AddInstanceGroupsInput,
  AddInstanceGroupsInputFilterSensitiveLog,
  AddInstanceGroupsOutput,
  AddInstanceGroupsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AddInstanceGroupsCommand,
  serializeAws_json1_1AddInstanceGroupsCommand,
} from "../protocols/Aws_json1_1";

export interface AddInstanceGroupsCommandInput extends AddInstanceGroupsInput {}
export interface AddInstanceGroupsCommandOutput extends AddInstanceGroupsOutput, __MetadataBearer {}

/**
 * <p>Adds one or more instance groups to a running cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, AddInstanceGroupsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, AddInstanceGroupsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new AddInstanceGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddInstanceGroupsCommandInput} for command's `input` shape.
 * @see {@link AddInstanceGroupsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 */
export class AddInstanceGroupsCommand extends $Command<
  AddInstanceGroupsCommandInput,
  AddInstanceGroupsCommandOutput,
  EMRClientResolvedConfig
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

  constructor(readonly input: AddInstanceGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddInstanceGroupsCommandInput, AddInstanceGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddInstanceGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "AddInstanceGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddInstanceGroupsInputFilterSensitiveLog,
      outputFilterSensitiveLog: AddInstanceGroupsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddInstanceGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddInstanceGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddInstanceGroupsCommandOutput> {
    return deserializeAws_json1_1AddInstanceGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
