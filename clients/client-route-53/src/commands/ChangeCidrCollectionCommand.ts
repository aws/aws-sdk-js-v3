// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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
  ChangeCidrCollectionRequest,
  ChangeCidrCollectionRequestFilterSensitiveLog,
  ChangeCidrCollectionResponse,
  ChangeCidrCollectionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlChangeCidrCollectionCommand,
  serializeAws_restXmlChangeCidrCollectionCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface ChangeCidrCollectionCommandInput extends ChangeCidrCollectionRequest {}
export interface ChangeCidrCollectionCommandOutput extends ChangeCidrCollectionResponse, __MetadataBearer {}

/**
 * <p>Creates, changes, or deletes CIDR blocks within a collection. Contains authoritative
 * 			IP information mapping blocks to one or multiple locations.</p>
 *          <p>A change request can update multiple locations in a collection at a time, which is
 * 			helpful if you want to move one or more CIDR blocks from one location to another in one
 * 			transaction, without downtime. </p>
 *          <p>
 *             <b>Limits</b>
 *          </p>
 *          <p>The max number of CIDR blocks included in the request is 1000. As a result, big updates
 * 			require multiple API calls.</p>
 *          <p>
 *             <b> PUT and DELETE_IF_EXISTS</b>
 *          </p>
 *          <p>Use <code>ChangeCidrCollection</code> to perform the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>PUT</code>: Create a CIDR block within the specified collection.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code> DELETE_IF_EXISTS</code>: Delete an existing CIDR block from the
 * 					collection.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ChangeCidrCollectionCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ChangeCidrCollectionCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ChangeCidrCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ChangeCidrCollectionCommandInput} for command's `input` shape.
 * @see {@link ChangeCidrCollectionCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class ChangeCidrCollectionCommand extends $Command<
  ChangeCidrCollectionCommandInput,
  ChangeCidrCollectionCommandOutput,
  Route53ClientResolvedConfig
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

  constructor(readonly input: ChangeCidrCollectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ChangeCidrCollectionCommandInput, ChangeCidrCollectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ChangeCidrCollectionCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ChangeCidrCollectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ChangeCidrCollectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ChangeCidrCollectionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ChangeCidrCollectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlChangeCidrCollectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ChangeCidrCollectionCommandOutput> {
    return deserializeAws_restXmlChangeCidrCollectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
