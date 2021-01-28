import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { DescribeNodeAssociationStatusRequest, DescribeNodeAssociationStatusResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeNodeAssociationStatusCommand,
  serializeAws_json1_1DescribeNodeAssociationStatusCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DescribeNodeAssociationStatusCommandInput = DescribeNodeAssociationStatusRequest;
export type DescribeNodeAssociationStatusCommandOutput = DescribeNodeAssociationStatusResponse & __MetadataBearer;

/**
 * <p>
 *       Returns the current status of an existing association or disassociation request.
 *     </p>
 *          <p>
 *       A <code>ResourceNotFoundException</code> is thrown when no recent association or disassociation request with the specified token is found,
 *       or when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 */
export class DescribeNodeAssociationStatusCommand extends $Command<
  DescribeNodeAssociationStatusCommandInput,
  DescribeNodeAssociationStatusCommandOutput,
  OpsWorksCMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeNodeAssociationStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksCMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeNodeAssociationStatusCommandInput, DescribeNodeAssociationStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksCMClient";
    const commandName = "DescribeNodeAssociationStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeNodeAssociationStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeNodeAssociationStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeNodeAssociationStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeNodeAssociationStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNodeAssociationStatusCommandOutput> {
    return deserializeAws_json1_1DescribeNodeAssociationStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
