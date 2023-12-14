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

import { ListPrivateGraphEndpointsInput, ListPrivateGraphEndpointsOutput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { de_ListPrivateGraphEndpointsCommand, se_ListPrivateGraphEndpointsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPrivateGraphEndpointsCommand}.
 */
export interface ListPrivateGraphEndpointsCommandInput extends ListPrivateGraphEndpointsInput {}
/**
 * @public
 *
 * The output of {@link ListPrivateGraphEndpointsCommand}.
 */
export interface ListPrivateGraphEndpointsCommandOutput extends ListPrivateGraphEndpointsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists private endpoints for a specified Neptune Analytics graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, ListPrivateGraphEndpointsCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, ListPrivateGraphEndpointsCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * const client = new NeptuneGraphClient(config);
 * const input = { // ListPrivateGraphEndpointsInput
 *   graphIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPrivateGraphEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListPrivateGraphEndpointsOutput
 * //   privateGraphEndpoints: [ // PrivateGraphEndpointSummaryList // required
 * //     { // PrivateGraphEndpointSummary
 * //       vpcId: "STRING_VALUE", // required
 * //       subnetIds: [ // SubnetIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       status: "CREATING" || "AVAILABLE" || "DELETING" || "FAILED", // required
 * //       vpcEndpointId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPrivateGraphEndpointsCommandInput - {@link ListPrivateGraphEndpointsCommandInput}
 * @returns {@link ListPrivateGraphEndpointsCommandOutput}
 * @see {@link ListPrivateGraphEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListPrivateGraphEndpointsCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>A failure occurred on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be located.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception was interrupted by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A resource could not be validated</p>
 *
 * @throws {@link NeptuneGraphServiceException}
 * <p>Base exception class for all service exceptions from NeptuneGraph service.</p>
 *
 */
export class ListPrivateGraphEndpointsCommand extends $Command<
  ListPrivateGraphEndpointsCommandInput,
  ListPrivateGraphEndpointsCommandOutput,
  NeptuneGraphClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      ApiType: { type: "staticContextParams", value: `ControlPlane` },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListPrivateGraphEndpointsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPrivateGraphEndpointsCommandInput, ListPrivateGraphEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPrivateGraphEndpointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneGraphClient";
    const commandName = "ListPrivateGraphEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonNeptuneGraph",
        operation: "ListPrivateGraphEndpoints",
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
  private serialize(input: ListPrivateGraphEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPrivateGraphEndpointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPrivateGraphEndpointsCommandOutput> {
    return de_ListPrivateGraphEndpointsCommand(output, context);
  }
}
