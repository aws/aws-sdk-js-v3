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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import {
  ListAttributesRequest,
  ListAttributesRequestFilterSensitiveLog,
  ListAttributesResponse,
  ListAttributesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListAttributesCommand,
  serializeAws_json1_1ListAttributesCommand,
} from "../protocols/Aws_json1_1";

export interface ListAttributesCommandInput extends ListAttributesRequest {}
export interface ListAttributesCommandOutput extends ListAttributesResponse, __MetadataBearer {}

/**
 * <p>Lists the attributes for Amazon ECS resources within a specified target type and cluster.
 * 			When you specify a target type and cluster, <code>ListAttributes</code> returns a list
 * 			of attribute objects, one for each attribute on each resource. You can filter the list
 * 			of results to a single attribute name to only return results that have that name. You
 * 			can also filter the results by attribute name and value. You can do this, for example,
 * 			to see which container instances in a cluster are running a Linux AMI
 * 				(<code>ecs.os-type=linux</code>). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListAttributesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListAttributesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ListAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAttributesCommandInput} for command's `input` shape.
 * @see {@link ListAttributesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 */
export class ListAttributesCommand extends $Command<
  ListAttributesCommandInput,
  ListAttributesCommandOutput,
  ECSClientResolvedConfig
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

  constructor(readonly input: ListAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAttributesCommandInput, ListAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "ListAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAttributesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAttributesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAttributesCommandOutput> {
    return deserializeAws_json1_1ListAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
