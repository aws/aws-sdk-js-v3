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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { ListCollaborationAnalysisTemplatesInput, ListCollaborationAnalysisTemplatesOutput } from "../models/models_0";
import {
  de_ListCollaborationAnalysisTemplatesCommand,
  se_ListCollaborationAnalysisTemplatesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCollaborationAnalysisTemplatesCommand}.
 */
export interface ListCollaborationAnalysisTemplatesCommandInput extends ListCollaborationAnalysisTemplatesInput {}
/**
 * @public
 *
 * The output of {@link ListCollaborationAnalysisTemplatesCommand}.
 */
export interface ListCollaborationAnalysisTemplatesCommandOutput
  extends ListCollaborationAnalysisTemplatesOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists analysis templates within a collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListCollaborationAnalysisTemplatesCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListCollaborationAnalysisTemplatesCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // ListCollaborationAnalysisTemplatesInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCollaborationAnalysisTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListCollaborationAnalysisTemplatesOutput
 * //   nextToken: "STRING_VALUE",
 * //   collaborationAnalysisTemplateSummaries: [ // CollaborationAnalysisTemplateSummaryList // required
 * //     { // CollaborationAnalysisTemplateSummary
 * //       arn: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       collaborationArn: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE", // required
 * //       creatorAccountId: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCollaborationAnalysisTemplatesCommandInput - {@link ListCollaborationAnalysisTemplatesCommandInput}
 * @returns {@link ListCollaborationAnalysisTemplatesCommandOutput}
 * @see {@link ListCollaborationAnalysisTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListCollaborationAnalysisTemplatesCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 */
export class ListCollaborationAnalysisTemplatesCommand extends $Command<
  ListCollaborationAnalysisTemplatesCommandInput,
  ListCollaborationAnalysisTemplatesCommandOutput,
  CleanRoomsClientResolvedConfig
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
  constructor(readonly input: ListCollaborationAnalysisTemplatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCollaborationAnalysisTemplatesCommandInput, ListCollaborationAnalysisTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCollaborationAnalysisTemplatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "ListCollaborationAnalysisTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBastionControlPlaneServiceLambda",
        operation: "ListCollaborationAnalysisTemplates",
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
    input: ListCollaborationAnalysisTemplatesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListCollaborationAnalysisTemplatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCollaborationAnalysisTemplatesCommandOutput> {
    return de_ListCollaborationAnalysisTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
