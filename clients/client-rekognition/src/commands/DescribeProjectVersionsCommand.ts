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
  DescribeProjectVersionsRequest,
  DescribeProjectVersionsRequestFilterSensitiveLog,
  DescribeProjectVersionsResponse,
  DescribeProjectVersionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeProjectVersionsCommand,
  serializeAws_json1_1DescribeProjectVersionsCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface DescribeProjectVersionsCommandInput extends DescribeProjectVersionsRequest {}
export interface DescribeProjectVersionsCommandOutput extends DescribeProjectVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists and describes the versions of a model in an Amazon Rekognition Custom Labels project. You
 *          can specify up to 10 model versions in <code>ProjectVersionArns</code>. If
 *          you don't specify a value, descriptions for all model versions in the project are returned.</p>
 *          <p>This operation requires permissions to perform the <code>rekognition:DescribeProjectVersions</code>
 *             action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DescribeProjectVersionsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DescribeProjectVersionsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new DescribeProjectVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProjectVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeProjectVersionsCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class DescribeProjectVersionsCommand extends $Command<
  DescribeProjectVersionsCommandInput,
  DescribeProjectVersionsCommandOutput,
  RekognitionClientResolvedConfig
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

  constructor(readonly input: DescribeProjectVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeProjectVersionsCommandInput, DescribeProjectVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeProjectVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "DescribeProjectVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeProjectVersionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeProjectVersionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeProjectVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeProjectVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeProjectVersionsCommandOutput> {
    return deserializeAws_json1_1DescribeProjectVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
