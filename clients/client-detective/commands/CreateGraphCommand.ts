import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { CreateGraphResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateGraphCommand,
  serializeAws_restJson1CreateGraphCommand,
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

export type CreateGraphCommandInput = {};
export type CreateGraphCommandOutput = CreateGraphResponse & __MetadataBearer;

/**
 * <p>Creates a new behavior graph for the calling account, and sets that account as the
 *          master account. This operation is called by the account that is enabling Detective.</p>
 *          <p>Before you try to enable Detective, make sure that your account has been enrolled in
 *          Amazon GuardDuty for at least 48 hours. If you do not meet this requirement, you cannot enable
 *          Detective. If you do meet the GuardDuty prerequisite, then when you make the request to enable
 *          Detective, it checks whether your data volume is within the Detective quota. If it exceeds the
 *          quota, then you cannot enable Detective. </p>
 *          <p>The operation also enables Detective for the calling account in the currently selected
 *          Region. It returns the ARN of the new behavior graph.</p>
 *          <p>
 *             <code>CreateGraph</code> triggers a process to create the corresponding data tables for
 *          the new behavior graph.</p>
 *          <p>An account can only be the master account for one behavior graph within a Region. If the
 *          same account calls <code>CreateGraph</code> with the same master account, it always returns
 *          the same behavior graph ARN. It does not create a new behavior graph.</p>
 */
export class CreateGraphCommand extends $Command<
  CreateGraphCommandInput,
  CreateGraphCommandOutput,
  DetectiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateGraphCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateGraphCommandInput, CreateGraphCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "CreateGraphCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: CreateGraphResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateGraphCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateGraphCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGraphCommandOutput> {
    return deserializeAws_restJson1CreateGraphCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
