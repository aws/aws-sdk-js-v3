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
  ImportResourcesToDraftAppVersionRequest,
  ImportResourcesToDraftAppVersionRequestFilterSensitiveLog,
  ImportResourcesToDraftAppVersionResponse,
  ImportResourcesToDraftAppVersionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ImportResourcesToDraftAppVersionCommand,
  serializeAws_restJson1ImportResourcesToDraftAppVersionCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

export interface ImportResourcesToDraftAppVersionCommandInput extends ImportResourcesToDraftAppVersionRequest {}
export interface ImportResourcesToDraftAppVersionCommandOutput
  extends ImportResourcesToDraftAppVersionResponse,
    __MetadataBearer {}

/**
 * <p>Imports resources from sources such as a CloudFormation stack, resource-groups, or application
 *       registry app to a draft application version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ImportResourcesToDraftAppVersionCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ImportResourcesToDraftAppVersionCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const command = new ImportResourcesToDraftAppVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportResourcesToDraftAppVersionCommandInput} for command's `input` shape.
 * @see {@link ImportResourcesToDraftAppVersionCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 */
export class ImportResourcesToDraftAppVersionCommand extends $Command<
  ImportResourcesToDraftAppVersionCommandInput,
  ImportResourcesToDraftAppVersionCommandOutput,
  ResiliencehubClientResolvedConfig
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

  constructor(readonly input: ImportResourcesToDraftAppVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportResourcesToDraftAppVersionCommandInput, ImportResourcesToDraftAppVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportResourcesToDraftAppVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "ImportResourcesToDraftAppVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportResourcesToDraftAppVersionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ImportResourcesToDraftAppVersionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ImportResourcesToDraftAppVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ImportResourcesToDraftAppVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ImportResourcesToDraftAppVersionCommandOutput> {
    return deserializeAws_restJson1ImportResourcesToDraftAppVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
