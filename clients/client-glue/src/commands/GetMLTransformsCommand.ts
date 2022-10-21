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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  GetMLTransformsRequest,
  GetMLTransformsRequestFilterSensitiveLog,
  GetMLTransformsResponse,
  GetMLTransformsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetMLTransformsCommand,
  serializeAws_json1_1GetMLTransformsCommand,
} from "../protocols/Aws_json1_1";

export interface GetMLTransformsCommandInput extends GetMLTransformsRequest {}
export interface GetMLTransformsCommandOutput extends GetMLTransformsResponse, __MetadataBearer {}

/**
 * <p>Gets a sortable, filterable list of existing Glue machine learning transforms. Machine
 *       learning transforms are a special type of transform that use machine learning to learn the
 *       details of the transformation to be performed by learning from examples provided by humans.
 *       These transformations are then saved by Glue, and you can retrieve their metadata by
 *       calling <code>GetMLTransforms</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetMLTransformsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetMLTransformsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetMLTransformsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMLTransformsCommandInput} for command's `input` shape.
 * @see {@link GetMLTransformsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class GetMLTransformsCommand extends $Command<
  GetMLTransformsCommandInput,
  GetMLTransformsCommandOutput,
  GlueClientResolvedConfig
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

  constructor(readonly input: GetMLTransformsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMLTransformsCommandInput, GetMLTransformsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMLTransformsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetMLTransformsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMLTransformsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetMLTransformsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMLTransformsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMLTransformsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMLTransformsCommandOutput> {
    return deserializeAws_json1_1GetMLTransformsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
