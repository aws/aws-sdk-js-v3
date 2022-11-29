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
  GetSequenceStoreRequest,
  GetSequenceStoreRequestFilterSensitiveLog,
  GetSequenceStoreResponse,
  GetSequenceStoreResponseFilterSensitiveLog,
} from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import {
  deserializeAws_restJson1GetSequenceStoreCommand,
  serializeAws_restJson1GetSequenceStoreCommand,
} from "../protocols/Aws_restJson1";

export interface GetSequenceStoreCommandInput extends GetSequenceStoreRequest {}
export interface GetSequenceStoreCommandOutput extends GetSequenceStoreResponse, __MetadataBearer {}

/**
 * <p>Gets information about a sequence store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetSequenceStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetSequenceStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const command = new GetSequenceStoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSequenceStoreCommandInput} for command's `input` shape.
 * @see {@link GetSequenceStoreCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 */
export class GetSequenceStoreCommand extends $Command<
  GetSequenceStoreCommandInput,
  GetSequenceStoreCommandOutput,
  OmicsClientResolvedConfig
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

  constructor(readonly input: GetSequenceStoreCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OmicsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSequenceStoreCommandInput, GetSequenceStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSequenceStoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "GetSequenceStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSequenceStoreRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSequenceStoreResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSequenceStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSequenceStoreCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSequenceStoreCommandOutput> {
    return deserializeAws_restJson1GetSequenceStoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
