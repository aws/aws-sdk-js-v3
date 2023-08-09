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

import { ListEulaAcceptancesRequest, ListEulaAcceptancesResponse } from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { de_ListEulaAcceptancesCommand, se_ListEulaAcceptancesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEulaAcceptancesCommand}.
 */
export interface ListEulaAcceptancesCommandInput extends ListEulaAcceptancesRequest {}
/**
 * @public
 *
 * The output of {@link ListEulaAcceptancesCommand}.
 */
export interface ListEulaAcceptancesCommandOutput extends ListEulaAcceptancesResponse, __MetadataBearer {}

/**
 * @public
 * <p>List EULA acceptances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListEulaAcceptancesCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListEulaAcceptancesCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // ListEulaAcceptancesRequest
 *   eulaIds: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   studioId: "STRING_VALUE", // required
 * };
 * const command = new ListEulaAcceptancesCommand(input);
 * const response = await client.send(command);
 * // { // ListEulaAcceptancesResponse
 * //   eulaAcceptances: [ // EulaAcceptanceList
 * //     { // EulaAcceptance
 * //       acceptedAt: new Date("TIMESTAMP"),
 * //       acceptedBy: "STRING_VALUE",
 * //       accepteeId: "STRING_VALUE",
 * //       eulaAcceptanceId: "STRING_VALUE",
 * //       eulaId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEulaAcceptancesCommandInput - {@link ListEulaAcceptancesCommandInput}
 * @returns {@link ListEulaAcceptancesCommandOutput}
 * @see {@link ListEulaAcceptancesCommandInput} for command's `input` shape.
 * @see {@link ListEulaAcceptancesCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation. Check your IAM
 *             policies, and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Another operation is in progress. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your current quota does not allow you to perform the request action. You can request
 *             increases for some quotas, and other quotas cannot be increased.</p>
 *         <p>Please use Amazon Web Services Service Quotas to request an increase. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link NimbleServiceException}
 * <p>Base exception class for all service exceptions from Nimble service.</p>
 *
 */
export class ListEulaAcceptancesCommand extends $Command<
  ListEulaAcceptancesCommandInput,
  ListEulaAcceptancesCommandOutput,
  NimbleClientResolvedConfig
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
  constructor(readonly input: ListEulaAcceptancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEulaAcceptancesCommandInput, ListEulaAcceptancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEulaAcceptancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "ListEulaAcceptancesCommand";
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
  private serialize(input: ListEulaAcceptancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEulaAcceptancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEulaAcceptancesCommandOutput> {
    return de_ListEulaAcceptancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
