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

import {
  AssociateDelegateToResourceRequest,
  AssociateDelegateToResourceRequestFilterSensitiveLog,
  AssociateDelegateToResourceResponse,
  AssociateDelegateToResourceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssociateDelegateToResourceCommand,
  serializeAws_json1_1AssociateDelegateToResourceCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

export interface AssociateDelegateToResourceCommandInput extends AssociateDelegateToResourceRequest {}
export interface AssociateDelegateToResourceCommandOutput
  extends AssociateDelegateToResourceResponse,
    __MetadataBearer {}

/**
 * <p>Adds a member (user or group) to the resource's set of delegates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, AssociateDelegateToResourceCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, AssociateDelegateToResourceCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new AssociateDelegateToResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateDelegateToResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateDelegateToResourceCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 */
export class AssociateDelegateToResourceCommand extends $Command<
  AssociateDelegateToResourceCommandInput,
  AssociateDelegateToResourceCommandOutput,
  WorkMailClientResolvedConfig
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

  constructor(readonly input: AssociateDelegateToResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateDelegateToResourceCommandInput, AssociateDelegateToResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateDelegateToResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "AssociateDelegateToResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateDelegateToResourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateDelegateToResourceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateDelegateToResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateDelegateToResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateDelegateToResourceCommandOutput> {
    return deserializeAws_json1_1AssociateDelegateToResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
