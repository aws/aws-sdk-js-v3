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
  UpdateTrafficPolicyInstanceRequest,
  UpdateTrafficPolicyInstanceRequestFilterSensitiveLog,
  UpdateTrafficPolicyInstanceResponse,
  UpdateTrafficPolicyInstanceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlUpdateTrafficPolicyInstanceCommand,
  serializeAws_restXmlUpdateTrafficPolicyInstanceCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 *
 * The input for {@link UpdateTrafficPolicyInstanceCommand}.
 */
export interface UpdateTrafficPolicyInstanceCommandInput extends UpdateTrafficPolicyInstanceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTrafficPolicyInstanceCommand}.
 */
export interface UpdateTrafficPolicyInstanceCommandOutput
  extends UpdateTrafficPolicyInstanceResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates the resource record sets in a specified hosted zone that were created based on
 * 			the settings in a specified traffic policy version.</p>
 *          <p>When you update a traffic policy instance, Amazon Route 53 continues to respond to DNS
 * 			queries for the root resource record set name (such as example.com) while it replaces
 * 			one group of resource record sets with another. Route 53 performs the following
 * 			operations:</p>
 *          <ol>
 *             <li>
 *                <p>Route 53 creates a new group of resource record sets based on the specified
 * 					traffic policy. This is true regardless of how significant the differences are
 * 					between the existing resource record sets and the new resource record sets.
 * 				</p>
 *             </li>
 *             <li>
 *                <p>When all of the new resource record sets have been created, Route 53 starts to
 * 					respond to DNS queries for the root resource record set name (such as
 * 					example.com) by using the new resource record sets.</p>
 *             </li>
 *             <li>
 *                <p>Route 53 deletes the old group of resource record sets that are associated
 * 					with the root resource record set name.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, UpdateTrafficPolicyInstanceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, UpdateTrafficPolicyInstanceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new UpdateTrafficPolicyInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateTrafficPolicyInstanceCommandInput - {@link UpdateTrafficPolicyInstanceCommandInput}
 * @returns {@link UpdateTrafficPolicyInstanceCommandOutput}
 * @see {@link UpdateTrafficPolicyInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateTrafficPolicyInstanceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link ConflictingTypes} (client fault)
 *  <p>You tried to update a traffic policy instance by using a traffic policy version that
 * 			has a different DNS type than the current type for the instance. You specified the type
 * 			in the JSON document in the <code>CreateTrafficPolicy</code> or
 * 				<code>CreateTrafficPolicyVersion</code>request. </p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchTrafficPolicy} (client fault)
 *  <p>No traffic policy exists with the specified ID.</p>
 *
 * @throws {@link NoSuchTrafficPolicyInstance} (client fault)
 *  <p>No traffic policy instance exists with the specified ID.</p>
 *
 * @throws {@link PriorRequestNotComplete} (client fault)
 *  <p>If Amazon Route 53 can't process a request before the next request arrives, it will
 * 			reject subsequent requests for the same hosted zone and return an <code>HTTP 400
 * 				error</code> (<code>Bad request</code>). If Route 53 returns this error repeatedly
 * 			for the same request, we recommend that you wait, in intervals of increasing duration,
 * 			before you try the request again.</p>
 *
 *
 */
export class UpdateTrafficPolicyInstanceCommand extends $Command<
  UpdateTrafficPolicyInstanceCommandInput,
  UpdateTrafficPolicyInstanceCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: UpdateTrafficPolicyInstanceCommandInput) {
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
  ): Handler<UpdateTrafficPolicyInstanceCommandInput, UpdateTrafficPolicyInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateTrafficPolicyInstanceCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "UpdateTrafficPolicyInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTrafficPolicyInstanceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateTrafficPolicyInstanceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateTrafficPolicyInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateTrafficPolicyInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateTrafficPolicyInstanceCommandOutput> {
    return deserializeAws_restXmlUpdateTrafficPolicyInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
