import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateDBSecurityGroupMessage, CreateDBSecurityGroupResult } from "../models/models_0";
import {
  deserializeAws_queryCreateDBSecurityGroupCommand,
  serializeAws_queryCreateDBSecurityGroupCommand,
} from "../protocols/Aws_query";
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

export type CreateDBSecurityGroupCommandInput = CreateDBSecurityGroupMessage;
export type CreateDBSecurityGroupCommandOutput = CreateDBSecurityGroupResult & __MetadataBearer;

/**
 * <p>Creates a new DB security group. DB security groups control access to a DB instance.</p>
 *          <note>
 *             <p>A DB security group controls access to EC2-Classic DB instances that are not in a VPC.</p>
 *          </note>
 */
export class CreateDBSecurityGroupCommand extends $Command<
  CreateDBSecurityGroupCommandInput,
  CreateDBSecurityGroupCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDBSecurityGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDBSecurityGroupCommandInput, CreateDBSecurityGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateDBSecurityGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDBSecurityGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDBSecurityGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDBSecurityGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBSecurityGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBSecurityGroupCommandOutput> {
    return deserializeAws_queryCreateDBSecurityGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
