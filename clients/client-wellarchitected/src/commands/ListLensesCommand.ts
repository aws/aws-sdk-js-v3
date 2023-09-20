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

import { ListLensesInput, ListLensesOutput } from "../models/models_0";
import { de_ListLensesCommand, se_ListLensesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLensesCommand}.
 */
export interface ListLensesCommandInput extends ListLensesInput {}
/**
 * @public
 *
 * The output of {@link ListLensesCommand}.
 */
export interface ListLensesCommandOutput extends ListLensesOutput, __MetadataBearer {}

/**
 * @public
 * <p>List the available lenses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListLensesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListLensesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // ListLensesInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   LensType: "AWS_OFFICIAL" || "CUSTOM_SHARED" || "CUSTOM_SELF",
 *   LensStatus: "ALL" || "DRAFT" || "PUBLISHED",
 *   LensName: "STRING_VALUE",
 * };
 * const command = new ListLensesCommand(input);
 * const response = await client.send(command);
 * // { // ListLensesOutput
 * //   LensSummaries: [ // LensSummaries
 * //     { // LensSummary
 * //       LensArn: "STRING_VALUE",
 * //       LensAlias: "STRING_VALUE",
 * //       LensName: "STRING_VALUE",
 * //       LensType: "AWS_OFFICIAL" || "CUSTOM_SHARED" || "CUSTOM_SELF",
 * //       Description: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       LensVersion: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       LensStatus: "CURRENT" || "NOT_CURRENT" || "DEPRECATED" || "DELETED" || "UNSHARED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLensesCommandInput - {@link ListLensesCommandInput}
 * @returns {@link ListLensesCommandOutput}
 * @see {@link ListLensesCommandInput} for command's `input` shape.
 * @see {@link ListLensesCommandOutput} for command's `response` shape.
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
export class ListLensesCommand extends $Command<
  ListLensesCommandInput,
  ListLensesCommandOutput,
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
  constructor(readonly input: ListLensesCommandInput) {
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
  ): Handler<ListLensesCommandInput, ListLensesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListLensesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "ListLensesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WellArchitectedApiServiceLambda",
        operation: "ListLenses",
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
  private serialize(input: ListLensesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLensesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLensesCommandOutput> {
    return de_ListLensesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
