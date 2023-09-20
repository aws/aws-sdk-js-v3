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
  CreateVPCAssociationAuthorizationRequest,
  CreateVPCAssociationAuthorizationResponse,
} from "../models/models_0";
import {
  de_CreateVPCAssociationAuthorizationCommand,
  se_CreateVPCAssociationAuthorizationCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateVPCAssociationAuthorizationCommand}.
 */
export interface CreateVPCAssociationAuthorizationCommandInput extends CreateVPCAssociationAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link CreateVPCAssociationAuthorizationCommand}.
 */
export interface CreateVPCAssociationAuthorizationCommandOutput
  extends CreateVPCAssociationAuthorizationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Authorizes the Amazon Web Services account that created a specified VPC to submit an
 * 				<code>AssociateVPCWithHostedZone</code> request to associate the VPC with a
 * 			specified hosted zone that was created by a different account. To submit a
 * 				<code>CreateVPCAssociationAuthorization</code> request, you must use the account
 * 			that created the hosted zone. After you authorize the association, use the account that
 * 			created the VPC to submit an <code>AssociateVPCWithHostedZone</code> request.</p>
 *          <note>
 *             <p>If you want to associate multiple VPCs that you created by using one account with
 * 				a hosted zone that you created by using a different account, you must submit one
 * 				authorization request for each VPC.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateVPCAssociationAuthorizationCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateVPCAssociationAuthorizationCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // CreateVPCAssociationAuthorizationRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   VPC: { // VPC
 *     VPCRegion: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-central-2" || "ap-east-1" || "me-south-1" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "me-central-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-south-1" || "ap-south-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "ca-central-1" || "cn-north-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "ap-southeast-4" || "il-central-1",
 *     VPCId: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateVPCAssociationAuthorizationCommand(input);
 * const response = await client.send(command);
 * // { // CreateVPCAssociationAuthorizationResponse
 * //   HostedZoneId: "STRING_VALUE", // required
 * //   VPC: { // VPC
 * //     VPCRegion: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-central-2" || "ap-east-1" || "me-south-1" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "me-central-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-south-1" || "ap-south-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "ca-central-1" || "cn-north-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "ap-southeast-4" || "il-central-1",
 * //     VPCId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateVPCAssociationAuthorizationCommandInput - {@link CreateVPCAssociationAuthorizationCommandInput}
 * @returns {@link CreateVPCAssociationAuthorizationCommandOutput}
 * @see {@link CreateVPCAssociationAuthorizationCommandInput} for command's `input` shape.
 * @see {@link CreateVPCAssociationAuthorizationCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyVPCAssociationAuthorizations} (client fault)
 *  <p>You've created the maximum number of authorizations that can be created for the
 * 			specified hosted zone. To authorize another VPC to be associated with the hosted zone,
 * 			submit a <code>DeleteVPCAssociationAuthorization</code> request to remove an existing
 * 			authorization. To get a list of existing authorizations, submit a
 * 				<code>ListVPCAssociationAuthorizations</code> request.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class CreateVPCAssociationAuthorizationCommand extends $Command<
  CreateVPCAssociationAuthorizationCommandInput,
  CreateVPCAssociationAuthorizationCommandOutput,
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
  constructor(readonly input: CreateVPCAssociationAuthorizationCommandInput) {
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
  ): Handler<CreateVPCAssociationAuthorizationCommandInput, CreateVPCAssociationAuthorizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVPCAssociationAuthorizationCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "CreateVPCAssociationAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDnsV20130401",
        operation: "CreateVPCAssociationAuthorization",
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
    input: CreateVPCAssociationAuthorizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateVPCAssociationAuthorizationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateVPCAssociationAuthorizationCommandOutput> {
    return de_CreateVPCAssociationAuthorizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
