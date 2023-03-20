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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeLocationS3Request, DescribeLocationS3Response } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeLocationS3Command,
  serializeAws_json1_1DescribeLocationS3Command,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeLocationS3Command}.
 */
export interface DescribeLocationS3CommandInput extends DescribeLocationS3Request {}
/**
 * @public
 *
 * The output of {@link DescribeLocationS3Command}.
 */
export interface DescribeLocationS3CommandOutput extends DescribeLocationS3Response, __MetadataBearer {}

/**
 * @public
 * <p>Returns metadata, such as bucket name, about an Amazon S3 bucket location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationS3Command } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationS3Command } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DescribeLocationS3Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeLocationS3CommandInput - {@link DescribeLocationS3CommandInput}
 * @returns {@link DescribeLocationS3CommandOutput}
 * @see {@link DescribeLocationS3CommandInput} for command's `input` shape.
 * @see {@link DescribeLocationS3CommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 *
 */
export class DescribeLocationS3Command extends $Command<
  DescribeLocationS3CommandInput,
  DescribeLocationS3CommandOutput,
  DataSyncClientResolvedConfig
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
  constructor(readonly input: DescribeLocationS3CommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLocationS3CommandInput, DescribeLocationS3CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLocationS3Command.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "DescribeLocationS3Command";
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
  private serialize(input: DescribeLocationS3CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeLocationS3Command(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLocationS3CommandOutput> {
    return deserializeAws_json1_1DescribeLocationS3Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
