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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  ModifyVerifiedAccessTrustProviderRequest,
  ModifyVerifiedAccessTrustProviderRequestFilterSensitiveLog,
  ModifyVerifiedAccessTrustProviderResult,
  ModifyVerifiedAccessTrustProviderResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2ModifyVerifiedAccessTrustProviderCommand,
  serializeAws_ec2ModifyVerifiedAccessTrustProviderCommand,
} from "../protocols/Aws_ec2";

export interface ModifyVerifiedAccessTrustProviderCommandInput extends ModifyVerifiedAccessTrustProviderRequest {}
export interface ModifyVerifiedAccessTrustProviderCommandOutput
  extends ModifyVerifiedAccessTrustProviderResult,
    __MetadataBearer {}

export class ModifyVerifiedAccessTrustProviderCommand extends $Command<
  ModifyVerifiedAccessTrustProviderCommandInput,
  ModifyVerifiedAccessTrustProviderCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: ModifyVerifiedAccessTrustProviderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyVerifiedAccessTrustProviderCommandInput, ModifyVerifiedAccessTrustProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyVerifiedAccessTrustProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVerifiedAccessTrustProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyVerifiedAccessTrustProviderRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyVerifiedAccessTrustProviderResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyVerifiedAccessTrustProviderCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVerifiedAccessTrustProviderCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVerifiedAccessTrustProviderCommandOutput> {
    return deserializeAws_ec2ModifyVerifiedAccessTrustProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
