import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RevokeDBSecurityGroupIngressMessage, RevokeDBSecurityGroupIngressResult } from "../models/models_1";
import {
  deserializeAws_queryRevokeDBSecurityGroupIngressCommand,
  serializeAws_queryRevokeDBSecurityGroupIngressCommand,
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

export type RevokeDBSecurityGroupIngressCommandInput = RevokeDBSecurityGroupIngressMessage;
export type RevokeDBSecurityGroupIngressCommandOutput = RevokeDBSecurityGroupIngressResult & __MetadataBearer;

/**
 * <p>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC Security Groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).</p>
 */
export class RevokeDBSecurityGroupIngressCommand extends $Command<
  RevokeDBSecurityGroupIngressCommandInput,
  RevokeDBSecurityGroupIngressCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RevokeDBSecurityGroupIngressCommandInput) {
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
  ): Handler<RevokeDBSecurityGroupIngressCommandInput, RevokeDBSecurityGroupIngressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RevokeDBSecurityGroupIngressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeDBSecurityGroupIngressMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RevokeDBSecurityGroupIngressResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RevokeDBSecurityGroupIngressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRevokeDBSecurityGroupIngressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RevokeDBSecurityGroupIngressCommandOutput> {
    return deserializeAws_queryRevokeDBSecurityGroupIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
