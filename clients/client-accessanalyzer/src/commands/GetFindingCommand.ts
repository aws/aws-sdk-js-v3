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

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { GetFindingRequest, GetFindingResponse } from "../models/models_0";
import { de_GetFindingCommand, se_GetFindingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetFindingCommand}.
 */
export interface GetFindingCommandInput extends GetFindingRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingCommand}.
 */
export interface GetFindingCommandOutput extends GetFindingResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about the specified finding.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetFindingCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetFindingCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // GetFindingRequest
 *   analyzerArn: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetFindingCommand(input);
 * const response = await client.send(command);
 * // { // GetFindingResponse
 * //   finding: { // Finding
 * //     id: "STRING_VALUE", // required
 * //     principal: { // PrincipalMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     action: [ // ActionList
 * //       "STRING_VALUE",
 * //     ],
 * //     resource: "STRING_VALUE",
 * //     isPublic: true || false,
 * //     resourceType: "STRING_VALUE", // required
 * //     condition: { // ConditionKeyMap // required
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     analyzedAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     status: "STRING_VALUE", // required
 * //     resourceOwnerAccount: "STRING_VALUE", // required
 * //     error: "STRING_VALUE",
 * //     sources: [ // FindingSourceList
 * //       { // FindingSource
 * //         type: "STRING_VALUE", // required
 * //         detail: { // FindingSourceDetail
 * //           accessPointArn: "STRING_VALUE",
 * //           accessPointAccount: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFindingCommandInput - {@link GetFindingCommandInput}
 * @returns {@link GetFindingCommandOutput}
 * @see {@link GetFindingCommandInput} for command's `input` shape.
 * @see {@link GetFindingCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 */
export class GetFindingCommand extends $Command<
  GetFindingCommandInput,
  GetFindingCommandOutput,
  AccessAnalyzerClientResolvedConfig
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
  constructor(readonly input: GetFindingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFindingCommandInput, GetFindingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetFindingCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "GetFindingCommand";
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
  private serialize(input: GetFindingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetFindingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFindingCommandOutput> {
    return de_GetFindingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
