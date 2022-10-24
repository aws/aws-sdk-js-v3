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
  GetUnfilteredTableMetadataRequest,
  GetUnfilteredTableMetadataRequestFilterSensitiveLog,
  GetUnfilteredTableMetadataResponse,
  GetUnfilteredTableMetadataResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetUnfilteredTableMetadataCommand,
  serializeAws_json1_1GetUnfilteredTableMetadataCommand,
} from "../protocols/Aws_json1_1";

export interface GetUnfilteredTableMetadataCommandInput extends GetUnfilteredTableMetadataRequest {}
export interface GetUnfilteredTableMetadataCommandOutput extends GetUnfilteredTableMetadataResponse, __MetadataBearer {}

export class GetUnfilteredTableMetadataCommand extends $Command<
  GetUnfilteredTableMetadataCommandInput,
  GetUnfilteredTableMetadataCommandOutput,
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

  constructor(readonly input: GetUnfilteredTableMetadataCommandInput) {
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
  ): Handler<GetUnfilteredTableMetadataCommandInput, GetUnfilteredTableMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUnfilteredTableMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetUnfilteredTableMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUnfilteredTableMetadataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetUnfilteredTableMetadataResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetUnfilteredTableMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetUnfilteredTableMetadataCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetUnfilteredTableMetadataCommandOutput> {
    return deserializeAws_json1_1GetUnfilteredTableMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
