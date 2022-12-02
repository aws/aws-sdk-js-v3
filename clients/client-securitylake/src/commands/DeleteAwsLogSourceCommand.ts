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

import {
  DeleteAwsLogSourceRequest,
  DeleteAwsLogSourceRequestFilterSensitiveLog,
  DeleteAwsLogSourceResponse,
  DeleteAwsLogSourceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAwsLogSourceCommand,
  serializeAws_restJson1DeleteAwsLogSourceCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

export interface DeleteAwsLogSourceCommandInput extends DeleteAwsLogSourceRequest {}
export interface DeleteAwsLogSourceCommandOutput extends DeleteAwsLogSourceResponse, __MetadataBearer {}

/**
 * <p>Removes a natively-supported Amazon Web Services service as a Amazon Security Lake source. When you remove the
 *          source, Security Lake stops collecting data from that source, and subscribers can no
 *          longer consume new data from the source. Subscribers can still consume data that Amazon
 *          Security Lake collected from the source before disablement.</p>
 *          <p>You can choose any source type in any Region for accounts that are either part of a
 *          trusted organization or standalone accounts. At least one of the three dimensions is a
 *          mandatory input to this API. However, any combination of the three dimensions can be
 *          supplied to this API. </p>
 *          <p>By default, dimension refers to the entire set. This is overridden when you supply any
 *          one of the inputs. For instance, when members is not specified, the API disables all
 *          Security Lake member accounts for sources. Similarly, when Regions are not specified, Security Lake
 *          is disabled for all the Regions where Security Lake is available as a service.</p>
 *          <p>You can use this API to remove a natively-supported Amazon Web Services service as a source. Use
 *             <code>DeregisterCustomData</code> to remove a custom source.</p>
 *          <p>When you don't provide a dimension, Security Lake  assumes that the missing dimension refers
 *          to the entire set. For example, if you don't provide specific accounts, the API applies to
 *          the entire set of accounts in your organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, DeleteAwsLogSourceCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, DeleteAwsLogSourceCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const command = new DeleteAwsLogSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAwsLogSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteAwsLogSourceCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 */
export class DeleteAwsLogSourceCommand extends $Command<
  DeleteAwsLogSourceCommandInput,
  DeleteAwsLogSourceCommandOutput,
  SecurityLakeClientResolvedConfig
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

  constructor(readonly input: DeleteAwsLogSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAwsLogSourceCommandInput, DeleteAwsLogSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAwsLogSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "DeleteAwsLogSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAwsLogSourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteAwsLogSourceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAwsLogSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAwsLogSourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAwsLogSourceCommandOutput> {
    return deserializeAws_restJson1DeleteAwsLogSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
