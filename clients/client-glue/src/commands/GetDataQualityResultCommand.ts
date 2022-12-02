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
  GetDataQualityResultRequest,
  GetDataQualityResultRequestFilterSensitiveLog,
  GetDataQualityResultResponse,
  GetDataQualityResultResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetDataQualityResultCommand,
  serializeAws_json1_1GetDataQualityResultCommand,
} from "../protocols/Aws_json1_1";

export interface GetDataQualityResultCommandInput extends GetDataQualityResultRequest {}
export interface GetDataQualityResultCommandOutput extends GetDataQualityResultResponse, __MetadataBearer {}

/**
 * <p>Retrieves the result of a data quality rule evaluation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataQualityResultCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataQualityResultCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetDataQualityResultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataQualityResultCommandInput} for command's `input` shape.
 * @see {@link GetDataQualityResultCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class GetDataQualityResultCommand extends $Command<
  GetDataQualityResultCommandInput,
  GetDataQualityResultCommandOutput,
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

  constructor(readonly input: GetDataQualityResultCommandInput) {
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
  ): Handler<GetDataQualityResultCommandInput, GetDataQualityResultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDataQualityResultCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetDataQualityResultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDataQualityResultRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDataQualityResultResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDataQualityResultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDataQualityResultCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataQualityResultCommandOutput> {
    return deserializeAws_json1_1GetDataQualityResultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
