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

import { GetResourceShareInvitationsRequest, GetResourceShareInvitationsResponse } from "../models/models_0";
import {
  de_GetResourceShareInvitationsCommand,
  se_GetResourceShareInvitationsCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetResourceShareInvitationsCommand}.
 */
export interface GetResourceShareInvitationsCommandInput extends GetResourceShareInvitationsRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceShareInvitationsCommand}.
 */
export interface GetResourceShareInvitationsCommandOutput
  extends GetResourceShareInvitationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves details about invitations that you have received for resource shares.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, GetResourceShareInvitationsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, GetResourceShareInvitationsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // GetResourceShareInvitationsRequest
 *   resourceShareInvitationArns: [ // ResourceShareInvitationArnList
 *     "STRING_VALUE",
 *   ],
 *   resourceShareArns: [ // ResourceShareArnList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetResourceShareInvitationsCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceShareInvitationsResponse
 * //   resourceShareInvitations: [ // ResourceShareInvitationList
 * //     { // ResourceShareInvitation
 * //       resourceShareInvitationArn: "STRING_VALUE",
 * //       resourceShareName: "STRING_VALUE",
 * //       resourceShareArn: "STRING_VALUE",
 * //       senderAccountId: "STRING_VALUE",
 * //       receiverAccountId: "STRING_VALUE",
 * //       invitationTimestamp: new Date("TIMESTAMP"),
 * //       status: "PENDING" || "ACCEPTED" || "REJECTED" || "EXPIRED",
 * //       resourceShareAssociations: [ // ResourceShareAssociationList
 * //         { // ResourceShareAssociation
 * //           resourceShareArn: "STRING_VALUE",
 * //           resourceShareName: "STRING_VALUE",
 * //           associatedEntity: "STRING_VALUE",
 * //           associationType: "PRINCIPAL" || "RESOURCE",
 * //           status: "ASSOCIATING" || "ASSOCIATED" || "FAILED" || "DISASSOCIATING" || "DISASSOCIATED",
 * //           statusMessage: "STRING_VALUE",
 * //           creationTime: new Date("TIMESTAMP"),
 * //           lastUpdatedTime: new Date("TIMESTAMP"),
 * //           external: true || false,
 * //         },
 * //       ],
 * //       receiverArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourceShareInvitationsCommandInput - {@link GetResourceShareInvitationsCommandInput}
 * @returns {@link GetResourceShareInvitationsCommandOutput}
 * @see {@link GetResourceShareInvitationsCommandInput} for command's `input` shape.
 * @see {@link GetResourceShareInvitationsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *  <p>The operation failed because the specified value for <code>MaxResults</code> isn't
 *             valid.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The operation failed because the specified value for <code>NextToken</code> isn't
 *             valid. You must specify a value you received in the <code>NextToken</code> response of a
 *             previous call to this operation.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link ResourceShareInvitationArnNotFoundException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> for an invitation was not
 *             found.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The operation failed because a specified resource couldn't be found.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 */
export class GetResourceShareInvitationsCommand extends $Command<
  GetResourceShareInvitationsCommandInput,
  GetResourceShareInvitationsCommandOutput,
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
  constructor(readonly input: GetResourceShareInvitationsCommandInput) {
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
  ): Handler<GetResourceShareInvitationsCommandInput, GetResourceShareInvitationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResourceShareInvitationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "GetResourceShareInvitationsCommand";
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
  private serialize(input: GetResourceShareInvitationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetResourceShareInvitationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetResourceShareInvitationsCommandOutput> {
    return de_GetResourceShareInvitationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
