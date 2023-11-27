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

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { ListLandingZonesInput, ListLandingZonesOutput } from "../models/models_0";
import { de_ListLandingZonesCommand, se_ListLandingZonesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLandingZonesCommand}.
 */
export interface ListLandingZonesCommandInput extends ListLandingZonesInput {}
/**
 * @public
 *
 * The output of {@link ListLandingZonesCommand}.
 */
export interface ListLandingZonesCommandOutput extends ListLandingZonesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the landing zone ARN for the landing zone deployed in your managed account. This API also
 *          creates an ARN for existing accounts that do not yet have a landing zone ARN. </p>
 *          <p>The return limit is one landing zone ARN. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, ListLandingZonesCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, ListLandingZonesCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * const client = new ControlTowerClient(config);
 * const input = { // ListLandingZonesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListLandingZonesCommand(input);
 * const response = await client.send(command);
 * // { // ListLandingZonesOutput
 * //   landingZones: [ // LandingZoneSummaries // required
 * //     { // LandingZoneSummary
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLandingZonesCommandInput - {@link ListLandingZonesCommandInput}
 * @returns {@link ListLandingZonesCommandOutput}
 * @see {@link ListLandingZonesCommandInput} for command's `input` shape.
 * @see {@link ListLandingZonesCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ControlTowerServiceException}
 * <p>Base exception class for all service exceptions from ControlTower service.</p>
 *
 */
export class ListLandingZonesCommand extends $Command<
  ListLandingZonesCommandInput,
  ListLandingZonesCommandOutput,
  ControlTowerClientResolvedConfig
> {
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
  constructor(readonly input: ListLandingZonesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ControlTowerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLandingZonesCommandInput, ListLandingZonesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLandingZonesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ControlTowerClient";
    const commandName = "ListLandingZonesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSControlTowerApis",
        operation: "ListLandingZones",
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
  private serialize(input: ListLandingZonesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLandingZonesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLandingZonesCommandOutput> {
    return de_ListLandingZonesCommand(output, context);
  }
}
