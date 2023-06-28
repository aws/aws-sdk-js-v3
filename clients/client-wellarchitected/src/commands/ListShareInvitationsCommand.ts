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

import { ListShareInvitationsInput, ListShareInvitationsOutput } from "../models/models_0";
import { de_ListShareInvitationsCommand, se_ListShareInvitationsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListShareInvitationsCommand}.
 */
export interface ListShareInvitationsCommandInput extends ListShareInvitationsInput {}
/**
 * @public
 *
 * The output of {@link ListShareInvitationsCommand}.
 */
export interface ListShareInvitationsCommandOutput extends ListShareInvitationsOutput, __MetadataBearer {}

/**
 * @public
 * <p>List  the workload invitations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListShareInvitationsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListShareInvitationsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // ListShareInvitationsInput
 *   WorkloadNamePrefix: "STRING_VALUE",
 *   LensNamePrefix: "STRING_VALUE",
 *   ShareResourceType: "WORKLOAD" || "LENS" || "PROFILE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ProfileNamePrefix: "STRING_VALUE",
 * };
 * const command = new ListShareInvitationsCommand(input);
 * const response = await client.send(command);
 * // { // ListShareInvitationsOutput
 * //   ShareInvitationSummaries: [ // ShareInvitationSummaries
 * //     { // ShareInvitationSummary
 * //       ShareInvitationId: "STRING_VALUE",
 * //       SharedBy: "STRING_VALUE",
 * //       SharedWith: "STRING_VALUE",
 * //       PermissionType: "READONLY" || "CONTRIBUTOR",
 * //       ShareResourceType: "WORKLOAD" || "LENS" || "PROFILE",
 * //       WorkloadName: "STRING_VALUE",
 * //       WorkloadId: "STRING_VALUE",
 * //       LensName: "STRING_VALUE",
 * //       LensArn: "STRING_VALUE",
 * //       ProfileName: "STRING_VALUE",
 * //       ProfileArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListShareInvitationsCommandInput - {@link ListShareInvitationsCommandInput}
 * @returns {@link ListShareInvitationsCommandOutput}
 * @see {@link ListShareInvitationsCommandInput} for command's `input` shape.
 * @see {@link ListShareInvitationsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 */
export class ListShareInvitationsCommand extends $Command<
  ListShareInvitationsCommandInput,
  ListShareInvitationsCommandOutput,
  WellArchitectedClientResolvedConfig
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
  constructor(readonly input: ListShareInvitationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListShareInvitationsCommandInput, ListShareInvitationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListShareInvitationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "ListShareInvitationsCommand";
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
  private serialize(input: ListShareInvitationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListShareInvitationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListShareInvitationsCommandOutput> {
    return de_ListShareInvitationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
