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

import { ChangeCidrCollectionRequest, ChangeCidrCollectionResponse } from "../models/models_0";
import { de_ChangeCidrCollectionCommand, se_ChangeCidrCollectionCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ChangeCidrCollectionCommand}.
 */
export interface ChangeCidrCollectionCommandInput extends ChangeCidrCollectionRequest {}
/**
 * @public
 *
 * The output of {@link ChangeCidrCollectionCommand}.
 */
export interface ChangeCidrCollectionCommandOutput extends ChangeCidrCollectionResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // ChangeCidrCollectionRequest
 *   Id: "STRING_VALUE", // required
 *   CollectionVersion: Number("long"),
 *   Changes: [ // CidrCollectionChanges // required
 *     { // CidrCollectionChange
 *       LocationName: "STRING_VALUE", // required
 *       Action: "PUT" || "DELETE_IF_EXISTS", // required
 *       CidrList: [ // CidrList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ChangeCidrCollectionCommand(input);
 * const response = await client.send(command);
 * // { // ChangeCidrCollectionResponse
 * //   Id: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ChangeCidrCollectionCommandInput - {@link ChangeCidrCollectionCommandInput}
 * @returns {@link ChangeCidrCollectionCommandOutput}
 * @see {@link ChangeCidrCollectionCommandInput} for command's `input` shape.
 * @see {@link ChangeCidrCollectionCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link CidrBlockInUseException} (client fault)
 *  <p>This CIDR block is already in use.</p>
 *
 * @throws {@link CidrCollectionVersionMismatchException} (client fault)
 *  <p>The CIDR collection version you provided, doesn't match the one in the
 * 				<code>ListCidrCollections</code> operation.</p>
 *
 * @throws {@link ConcurrentModification} (client fault)
 *  <p>Another user submitted a request to create, update, or delete the object at the same
 * 			time that you did. Retry the request. </p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link LimitsExceeded} (client fault)
 *  <p>This operation can't be completed because the current account has reached the
 * 			limit on the resource you are trying to create. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the Amazon Web Services Support
 * 			Center.</p>
 *
 * @throws {@link NoSuchCidrCollectionException} (client fault)
 *  <p>The CIDR collection you specified, doesn't exist.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDnsV20130401",
        operation: "ChangeCidrCollection",
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
  private serialize(input: ChangeCidrCollectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ChangeCidrCollectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ChangeCidrCollectionCommandOutput> {
    return de_ChangeCidrCollectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
