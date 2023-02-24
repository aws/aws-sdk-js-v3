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

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import {
  ListSchedulingPoliciesRequest,
  ListSchedulingPoliciesRequestFilterSensitiveLog,
  ListSchedulingPoliciesResponse,
  ListSchedulingPoliciesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListSchedulingPoliciesCommand,
  serializeAws_restJson1ListSchedulingPoliciesCommand,
} from "../protocols/Aws_restJson1";

export interface ListSchedulingPoliciesCommandInput extends ListSchedulingPoliciesRequest {}
export interface ListSchedulingPoliciesCommandOutput extends ListSchedulingPoliciesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Batch scheduling policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, ListSchedulingPoliciesCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, ListSchedulingPoliciesCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new ListSchedulingPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSchedulingPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListSchedulingPoliciesCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 */
export class ListSchedulingPoliciesCommand extends $Command<
  ListSchedulingPoliciesCommandInput,
  ListSchedulingPoliciesCommandOutput,
  BatchClientResolvedConfig
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

  constructor(readonly input: ListSchedulingPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSchedulingPoliciesCommandInput, ListSchedulingPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSchedulingPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "ListSchedulingPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSchedulingPoliciesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSchedulingPoliciesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSchedulingPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSchedulingPoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSchedulingPoliciesCommandOutput> {
    return deserializeAws_restJson1ListSchedulingPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
