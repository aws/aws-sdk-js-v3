// smithy-typescript generated code
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
} from "@smithy/types";

import { RejectResourceShareInvitationRequest, RejectResourceShareInvitationResponse } from "../models/models_0";
import {
  de_RejectResourceShareInvitationCommand,
  se_RejectResourceShareInvitationCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RejectResourceShareInvitationCommand}.
 */
export interface RejectResourceShareInvitationCommandInput extends RejectResourceShareInvitationRequest {}
/**
 * @public
 *
 * The output of {@link RejectResourceShareInvitationCommand}.
 */
export interface RejectResourceShareInvitationCommandOutput
  extends RejectResourceShareInvitationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Rejects an invitation to a resource share from another Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, RejectResourceShareInvitationCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, RejectResourceShareInvitationCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // RejectResourceShareInvitationRequest
 *   resourceShareInvitationArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new RejectResourceShareInvitationCommand(input);
 * const response = await client.send(command);
 * // { // RejectResourceShareInvitationResponse
 * //   resourceShareInvitation: { // ResourceShareInvitation
 * //     resourceShareInvitationArn: "STRING_VALUE",
 * //     resourceShareName: "STRING_VALUE",
 * //     resourceShareArn: "STRING_VALUE",
 * //     senderAccountId: "STRING_VALUE",
 * //     receiverAccountId: "STRING_VALUE",
 * //     invitationTimestamp: new Date("TIMESTAMP"),
 * //     status: "PENDING" || "ACCEPTED" || "REJECTED" || "EXPIRED",
 * //     resourceShareAssociations: [ // ResourceShareAssociationList
 * //       { // ResourceShareAssociation
 * //         resourceShareArn: "STRING_VALUE",
 * //         resourceShareName: "STRING_VALUE",
 * //         associatedEntity: "STRING_VALUE",
 * //         associationType: "PRINCIPAL" || "RESOURCE",
 * //         status: "ASSOCIATING" || "ASSOCIATED" || "FAILED" || "DISASSOCIATING" || "DISASSOCIATED",
 * //         statusMessage: "STRING_VALUE",
 * //         creationTime: new Date("TIMESTAMP"),
 * //         lastUpdatedTime: new Date("TIMESTAMP"),
 * //         external: true || false,
 * //       },
 * //     ],
 * //     receiverArn: "STRING_VALUE",
 * //   },
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RejectResourceShareInvitationCommandInput - {@link RejectResourceShareInvitationCommandInput}
 * @returns {@link RejectResourceShareInvitationCommandOutput}
 * @see {@link RejectResourceShareInvitationCommandInput} for command's `input` shape.
 * @see {@link RejectResourceShareInvitationCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The operation failed because the client token input parameter matched one that was
 *             used with a previous call to the operation, but at least one of the other input
 *             parameters is different from the previous call.</p>
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *  <p>The operation failed because the specified client token isn't valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The operation failed because the requested operation isn't permitted.</p>
 *
 * @throws {@link ResourceShareInvitationAlreadyAcceptedException} (client fault)
 *  <p>The operation failed because the specified invitation was already accepted.</p>
 *
 * @throws {@link ResourceShareInvitationAlreadyRejectedException} (client fault)
 *  <p>The operation failed because the specified invitation was already rejected.</p>
 *
 * @throws {@link ResourceShareInvitationArnNotFoundException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> for an invitation was not
 *             found.</p>
 *
 * @throws {@link ResourceShareInvitationExpiredException} (client fault)
 *  <p>The operation failed because the specified invitation is past its expiration date and
 *             time.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 */
export class RejectResourceShareInvitationCommand extends $Command<
  RejectResourceShareInvitationCommandInput,
  RejectResourceShareInvitationCommandOutput,
  RAMClientResolvedConfig
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
  constructor(readonly input: RejectResourceShareInvitationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RejectResourceShareInvitationCommandInput, RejectResourceShareInvitationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RejectResourceShareInvitationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "RejectResourceShareInvitationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: RejectResourceShareInvitationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RejectResourceShareInvitationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectResourceShareInvitationCommandOutput> {
    return de_RejectResourceShareInvitationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
