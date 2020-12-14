import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { AssociateTargetsWithJobRequest, AssociateTargetsWithJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AssociateTargetsWithJobCommand,
  serializeAws_restJson1AssociateTargetsWithJobCommand,
} from "../protocols/Aws_restJson1";
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

export type AssociateTargetsWithJobCommandInput = AssociateTargetsWithJobRequest;
export type AssociateTargetsWithJobCommandOutput = AssociateTargetsWithJobResponse & __MetadataBearer;

/**
 * <p>Associates a group with a continuous job. The following criteria must be met: </p>
 *         <ul>
 *             <li>
 *                 <p>The job must have been created with the <code>targetSelection</code> field set to
 *                     "CONTINUOUS".</p>
 *             </li>
 *             <li>
 *                 <p>The job status must currently be "IN_PROGRESS".</p>
 *             </li>
 *             <li>
 *                 <p>The total number of targets associated with a job must not exceed 100.</p>
 *             </li>
 *          </ul>
 */
export class AssociateTargetsWithJobCommand extends $Command<
  AssociateTargetsWithJobCommandInput,
  AssociateTargetsWithJobCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateTargetsWithJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateTargetsWithJobCommandInput, AssociateTargetsWithJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "AssociateTargetsWithJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateTargetsWithJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateTargetsWithJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateTargetsWithJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateTargetsWithJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateTargetsWithJobCommandOutput> {
    return deserializeAws_restJson1AssociateTargetsWithJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
