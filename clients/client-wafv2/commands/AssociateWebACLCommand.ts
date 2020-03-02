import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WAFV2ClientResolvedConfig
} from "../WAFV2Client";
import {
  AssociateWebACLRequest,
  AssociateWebACLResponse
} from "../models/index";
import {
  deserializeAws_json1_1AssociateWebACLCommand,
  serializeAws_json1_1AssociateWebACLCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type AssociateWebACLCommandInput = AssociateWebACLRequest;
export type AssociateWebACLCommandOutput = AssociateWebACLResponse &
  __MetadataBearer;

export class AssociateWebACLCommand extends $Command<
  AssociateWebACLCommandInput,
  AssociateWebACLCommandOutput,
  WAFV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateWebACLCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateWebACLCommandInput, AssociateWebACLCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateWebACLCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateWebACLCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateWebACLCommandOutput> {
    return deserializeAws_json1_1AssociateWebACLCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
