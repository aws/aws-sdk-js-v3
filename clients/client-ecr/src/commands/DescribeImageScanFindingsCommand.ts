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

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import {
  DescribeImageScanFindingsRequest,
  DescribeImageScanFindingsRequestFilterSensitiveLog,
  DescribeImageScanFindingsResponse,
  DescribeImageScanFindingsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeImageScanFindingsCommand,
  serializeAws_json1_1DescribeImageScanFindingsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeImageScanFindingsCommandInput extends DescribeImageScanFindingsRequest {}
export interface DescribeImageScanFindingsCommandOutput extends DescribeImageScanFindingsResponse, __MetadataBearer {}

/**
 * <p>Returns the scan findings for the specified image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribeImageScanFindingsCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribeImageScanFindingsCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new DescribeImageScanFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImageScanFindingsCommandInput} for command's `input` shape.
 * @see {@link DescribeImageScanFindingsCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 */
export class DescribeImageScanFindingsCommand extends $Command<
  DescribeImageScanFindingsCommandInput,
  DescribeImageScanFindingsCommandOutput,
  ECRClientResolvedConfig
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

  constructor(readonly input: DescribeImageScanFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeImageScanFindingsCommandInput, DescribeImageScanFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeImageScanFindingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "DescribeImageScanFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeImageScanFindingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeImageScanFindingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeImageScanFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeImageScanFindingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeImageScanFindingsCommandOutput> {
    return deserializeAws_json1_1DescribeImageScanFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
