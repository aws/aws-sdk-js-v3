import {
  ServiceInputTypes,
  ServiceOutputTypes,
  ShieldClientResolvedConfig
} from "../ShieldClient";
import {
  DisassociateDRTRoleRequest,
  DisassociateDRTRoleResponse
} from "../models/index";
import {
  deserializeAws_json1_1DisassociateDRTRoleCommand,
  serializeAws_json1_1DisassociateDRTRoleCommand
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

export type DisassociateDRTRoleCommandInput = DisassociateDRTRoleRequest;
export type DisassociateDRTRoleCommandOutput = DisassociateDRTRoleResponse &
  __MetadataBearer;

export class DisassociateDRTRoleCommand extends $Command<
  DisassociateDRTRoleCommandInput,
  DisassociateDRTRoleCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateDRTRoleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisassociateDRTRoleCommandInput,
    DisassociateDRTRoleCommandOutput
  > {
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
    input: DisassociateDRTRoleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateDRTRoleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateDRTRoleCommandOutput> {
    return deserializeAws_json1_1DisassociateDRTRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
