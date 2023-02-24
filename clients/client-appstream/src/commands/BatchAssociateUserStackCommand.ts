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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import {
  BatchAssociateUserStackRequest,
  BatchAssociateUserStackRequestFilterSensitiveLog,
  BatchAssociateUserStackResult,
  BatchAssociateUserStackResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchAssociateUserStackCommand,
  serializeAws_json1_1BatchAssociateUserStackCommand,
} from "../protocols/Aws_json1_1";

export interface BatchAssociateUserStackCommandInput extends BatchAssociateUserStackRequest {}
export interface BatchAssociateUserStackCommandOutput extends BatchAssociateUserStackResult, __MetadataBearer {}

/**
 * <p>Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, BatchAssociateUserStackCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, BatchAssociateUserStackCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new BatchAssociateUserStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchAssociateUserStackCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateUserStackCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 */
export class BatchAssociateUserStackCommand extends $Command<
  BatchAssociateUserStackCommandInput,
  BatchAssociateUserStackCommandOutput,
  AppStreamClientResolvedConfig
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

  constructor(readonly input: BatchAssociateUserStackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchAssociateUserStackCommandInput, BatchAssociateUserStackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchAssociateUserStackCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "BatchAssociateUserStackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchAssociateUserStackRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchAssociateUserStackResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchAssociateUserStackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchAssociateUserStackCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchAssociateUserStackCommandOutput> {
    return deserializeAws_json1_1BatchAssociateUserStackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
