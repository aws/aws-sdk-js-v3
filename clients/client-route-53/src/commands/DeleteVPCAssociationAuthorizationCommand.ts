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

import {
  DeleteVPCAssociationAuthorizationRequest,
  DeleteVPCAssociationAuthorizationResponse,
} from "../models/models_0";
import {
  de_DeleteVPCAssociationAuthorizationCommand,
  se_DeleteVPCAssociationAuthorizationCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteVPCAssociationAuthorizationCommand}.
 */
export interface DeleteVPCAssociationAuthorizationCommandInput extends DeleteVPCAssociationAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVPCAssociationAuthorizationCommand}.
 */
export interface DeleteVPCAssociationAuthorizationCommandOutput
  extends DeleteVPCAssociationAuthorizationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Removes authorization to submit an <code>AssociateVPCWithHostedZone</code> request to
 * 			associate a specified VPC with a hosted zone that was created by a different account.
 * 			You must use the account that created the hosted zone to submit a
 * 				<code>DeleteVPCAssociationAuthorization</code> request.</p>
 *          <important>
 *             <p>Sending this request only prevents the Amazon Web Services account that created the
 * 				VPC from associating the VPC with the Amazon Route 53 hosted zone in the future. If
 * 				the VPC is already associated with the hosted zone,
 * 					<code>DeleteVPCAssociationAuthorization</code> won't disassociate the VPC from
 * 				the hosted zone. If you want to delete an existing association, use
 * 					<code>DisassociateVPCFromHostedZone</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteVPCAssociationAuthorizationCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteVPCAssociationAuthorizationCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // DeleteVPCAssociationAuthorizationRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   VPC: { // VPC
 *     VPCRegion: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-central-2" || "ap-east-1" || "me-south-1" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "me-central-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-south-1" || "ap-south-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "ca-central-1" || "cn-north-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "ap-southeast-4" || "il-central-1",
 *     VPCId: "STRING_VALUE",
 *   },
 * };
 * const command = new DeleteVPCAssociationAuthorizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVPCAssociationAuthorizationCommandInput - {@link DeleteVPCAssociationAuthorizationCommandInput}
 * @returns {@link DeleteVPCAssociationAuthorizationCommandOutput}
 * @see {@link DeleteVPCAssociationAuthorizationCommandInput} for command's `input` shape.
 * @see {@link DeleteVPCAssociationAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link ConcurrentModification} (client fault)
 *  <p>Another user submitted a request to create, update, or delete the object at the same
 * 			time that you did. Retry the request. </p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link InvalidVPCId} (client fault)
 *  <p>The VPC ID that you specified either isn't a valid ID or the current account is not
 * 			authorized to access this VPC.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link VPCAssociationAuthorizationNotFound} (client fault)
 *  <p>The VPC that you specified is not authorized to be associated with the hosted
 * 			zone.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class DeleteVPCAssociationAuthorizationCommand extends $Command<
  DeleteVPCAssociationAuthorizationCommandInput,
  DeleteVPCAssociationAuthorizationCommandOutput,
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
  constructor(readonly input: DeleteVPCAssociationAuthorizationCommandInput) {
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
  ): Handler<DeleteVPCAssociationAuthorizationCommandInput, DeleteVPCAssociationAuthorizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteVPCAssociationAuthorizationCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "DeleteVPCAssociationAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDnsV20130401",
        operation: "DeleteVPCAssociationAuthorization",
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
  private serialize(
    input: DeleteVPCAssociationAuthorizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteVPCAssociationAuthorizationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteVPCAssociationAuthorizationCommandOutput> {
    return de_DeleteVPCAssociationAuthorizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
