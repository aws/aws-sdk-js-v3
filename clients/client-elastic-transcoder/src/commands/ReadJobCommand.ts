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
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { ReadJobRequest, ReadJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ReadJobCommand,
  serializeAws_restJson1ReadJobCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ReadJobCommand}.
 */
export interface ReadJobCommandInput extends ReadJobRequest {}
/**
 * @public
 *
 * The output of {@link ReadJobCommand}.
 */
export interface ReadJobCommandOutput extends ReadJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>The ReadJob operation returns detailed information about a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ReadJobCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ReadJobCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new ReadJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ReadJobCommandInput - {@link ReadJobCommandInput}
 * @returns {@link ReadJobCommandOutput}
 * @see {@link ReadJobCommandInput} for command's `input` shape.
 * @see {@link ReadJobCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for ElasticTranscoderClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>General authentication failure. The request was not signed correctly.</p>
 *
 * @throws {@link IncompatibleVersionException} (client fault)
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist or is not available. For example, the pipeline
 *             to which you're trying to add a job doesn't exist or is still being created.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more required parameter values were not provided in the request.</p>
 *
 *
 */
export class ReadJobCommand extends $Command<
  ReadJobCommandInput,
  ReadJobCommandOutput,
  ElasticTranscoderClientResolvedConfig
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
  constructor(readonly input: ReadJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticTranscoderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ReadJobCommandInput, ReadJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ReadJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "ReadJobCommand";
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
  private serialize(input: ReadJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ReadJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReadJobCommandOutput> {
    return deserializeAws_restJson1ReadJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
