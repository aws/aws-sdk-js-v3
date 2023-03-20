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
import { ListStackResourcesInput, ListStackResourcesOutput } from "../models/models_0";
import {
  deserializeAws_queryListStackResourcesCommand,
  serializeAws_queryListStackResourcesCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link ListStackResourcesCommand}.
 */
export interface ListStackResourcesCommandInput extends ListStackResourcesInput {}
/**
 * @public
 *
 * The output of {@link ListStackResourcesCommand}.
 */
export interface ListStackResourcesCommandOutput extends ListStackResourcesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns descriptions of all resources of the specified stack.</p>
 *          <p>For deleted stacks, ListStackResources returns resource information for up to 90 days
 *          after the stack has been deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackResourcesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackResourcesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListStackResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListStackResourcesCommandInput - {@link ListStackResourcesCommandInput}
 * @returns {@link ListStackResourcesCommandOutput}
 * @see {@link ListStackResourcesCommandInput} for command's `input` shape.
 * @see {@link ListStackResourcesCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 *
 */
export class ListStackResourcesCommand extends $Command<
  ListStackResourcesCommandInput,
  ListStackResourcesCommandOutput,
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
  constructor(readonly input: ListStackResourcesCommandInput) {
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
  ): Handler<ListStackResourcesCommandInput, ListStackResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListStackResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ListStackResourcesCommand";
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
  private serialize(input: ListStackResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListStackResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStackResourcesCommandOutput> {
    return deserializeAws_queryListStackResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
