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
  PutImageTagMutabilityRequest,
  PutImageTagMutabilityRequestFilterSensitiveLog,
  PutImageTagMutabilityResponse,
  PutImageTagMutabilityResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutImageTagMutabilityCommand,
  serializeAws_json1_1PutImageTagMutabilityCommand,
} from "../protocols/Aws_json1_1";

export interface PutImageTagMutabilityCommandInput extends PutImageTagMutabilityRequest {}
export interface PutImageTagMutabilityCommandOutput extends PutImageTagMutabilityResponse, __MetadataBearer {}

/**
 * <p>Updates the image tag mutability settings for the specified repository. For more
 *             information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image tag
 *                 mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutImageTagMutabilityCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutImageTagMutabilityCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new PutImageTagMutabilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutImageTagMutabilityCommandInput} for command's `input` shape.
 * @see {@link PutImageTagMutabilityCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 */
export class PutImageTagMutabilityCommand extends $Command<
  PutImageTagMutabilityCommandInput,
  PutImageTagMutabilityCommandOutput,
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

  constructor(readonly input: PutImageTagMutabilityCommandInput) {
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
  ): Handler<PutImageTagMutabilityCommandInput, PutImageTagMutabilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutImageTagMutabilityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "PutImageTagMutabilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutImageTagMutabilityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutImageTagMutabilityResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutImageTagMutabilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutImageTagMutabilityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutImageTagMutabilityCommandOutput> {
    return deserializeAws_json1_1PutImageTagMutabilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
