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

import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { ListChangesetsRequest, ListChangesetsResponse } from "../models/models_0";
import { de_ListChangesetsCommand, se_ListChangesetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListChangesetsCommand}.
 */
export interface ListChangesetsCommandInput extends ListChangesetsRequest {}
/**
 * @public
 *
 * The output of {@link ListChangesetsCommand}.
 */
export interface ListChangesetsCommandOutput extends ListChangesetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the FinSpace Changesets for a Dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, ListChangesetsCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, ListChangesetsCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const input = { // ListChangesetsRequest
 *   datasetId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListChangesetsCommand(input);
 * const response = await client.send(command);
 * // { // ListChangesetsResponse
 * //   changesets: [ // ChangesetList
 * //     { // ChangesetSummary
 * //       changesetId: "STRING_VALUE",
 * //       changesetArn: "STRING_VALUE",
 * //       datasetId: "STRING_VALUE",
 * //       changeType: "STRING_VALUE",
 * //       sourceParams: { // SourceParams
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       formatParams: { // FormatParams
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       createTime: Number("long"),
 * //       status: "STRING_VALUE",
 * //       errorInfo: { // ChangesetErrorInfo
 * //         errorMessage: "STRING_VALUE",
 * //         errorCategory: "STRING_VALUE",
 * //       },
 * //       activeUntilTimestamp: Number("long"),
 * //       activeFromTimestamp: Number("long"),
 * //       updatesChangesetId: "STRING_VALUE",
 * //       updatedByChangesetId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChangesetsCommandInput - {@link ListChangesetsCommandInput}
 * @returns {@link ListChangesetsCommandOutput}
 * @see {@link ListChangesetsCommandInput} for command's `input` shape.
 * @see {@link ListChangesetsCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with an existing resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceDataServiceException}
 * <p>Base exception class for all service exceptions from FinspaceData service.</p>
 *
 */
export class ListChangesetsCommand extends $Command<
  ListChangesetsCommandInput,
  ListChangesetsCommandOutput,
  FinspaceDataClientResolvedConfig
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
  constructor(readonly input: ListChangesetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListChangesetsCommandInput, ListChangesetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListChangesetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "ListChangesetsCommand";
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
  private serialize(input: ListChangesetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListChangesetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListChangesetsCommandOutput> {
    return de_ListChangesetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
