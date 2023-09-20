// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DeleteCidrCollectionRequest, DeleteCidrCollectionResponse } from "../models/models_0";
import { de_DeleteCidrCollectionCommand, se_DeleteCidrCollectionCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteCidrCollectionCommand}.
 */
export interface DeleteCidrCollectionCommandInput extends DeleteCidrCollectionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCidrCollectionCommand}.
 */
export interface DeleteCidrCollectionCommandOutput extends DeleteCidrCollectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a CIDR collection in the current Amazon Web Services account. The collection
 * 			must be empty before it can be deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteCidrCollectionCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteCidrCollectionCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // DeleteCidrCollectionRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteCidrCollectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCidrCollectionCommandInput - {@link DeleteCidrCollectionCommandInput}
 * @returns {@link DeleteCidrCollectionCommandOutput}
 * @see {@link DeleteCidrCollectionCommandInput} for command's `input` shape.
 * @see {@link DeleteCidrCollectionCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link CidrCollectionInUseException} (client fault)
 *  <p>This CIDR collection is in use, and isn't empty.</p>
 *
 * @throws {@link ConcurrentModification} (client fault)
 *  <p>Another user submitted a request to create, update, or delete the object at the same
 * 			time that you did. Retry the request. </p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchCidrCollectionException} (client fault)
 *  <p>The CIDR collection you specified, doesn't exist.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class DeleteCidrCollectionCommand extends $Command<
  DeleteCidrCollectionCommandInput,
  DeleteCidrCollectionCommandOutput,
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
  constructor(readonly input: DeleteCidrCollectionCommandInput) {
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
  ): Handler<DeleteCidrCollectionCommandInput, DeleteCidrCollectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCidrCollectionCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "DeleteCidrCollectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDnsV20130401",
        operation: "DeleteCidrCollection",
      },
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
  private serialize(input: DeleteCidrCollectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteCidrCollectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCidrCollectionCommandOutput> {
    return de_DeleteCidrCollectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
