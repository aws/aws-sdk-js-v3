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
  DescribePackageImportJobRequest,
  DescribePackageImportJobRequestFilterSensitiveLog,
  DescribePackageImportJobResponse,
  DescribePackageImportJobResponseFilterSensitiveLog,
} from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import {
  deserializeAws_restJson1DescribePackageImportJobCommand,
  serializeAws_restJson1DescribePackageImportJobCommand,
} from "../protocols/Aws_restJson1";

export interface DescribePackageImportJobCommandInput extends DescribePackageImportJobRequest {}
export interface DescribePackageImportJobCommandOutput extends DescribePackageImportJobResponse, __MetadataBearer {}

/**
 * <p>Returns information about a package import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, DescribePackageImportJobCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, DescribePackageImportJobCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const command = new DescribePackageImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePackageImportJobCommandInput} for command's `input` shape.
 * @see {@link DescribePackageImportJobCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 */
export class DescribePackageImportJobCommand extends $Command<
  DescribePackageImportJobCommandInput,
  DescribePackageImportJobCommandOutput,
  PanoramaClientResolvedConfig
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

  constructor(readonly input: DescribePackageImportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PanoramaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePackageImportJobCommandInput, DescribePackageImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePackageImportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "DescribePackageImportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePackageImportJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribePackageImportJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePackageImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribePackageImportJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePackageImportJobCommandOutput> {
    return deserializeAws_restJson1DescribePackageImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
