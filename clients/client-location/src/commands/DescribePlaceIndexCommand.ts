// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DescribePlaceIndexRequest, DescribePlaceIndexResponse } from "../models/models_0";
import { de_DescribePlaceIndexCommand, se_DescribePlaceIndexCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribePlaceIndexCommand}.
 */
export interface DescribePlaceIndexCommandInput extends DescribePlaceIndexRequest {}
/**
 * @public
 *
 * The output of {@link DescribePlaceIndexCommand}.
 */
export interface DescribePlaceIndexCommandOutput extends DescribePlaceIndexResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the place index resource details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DescribePlaceIndexCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DescribePlaceIndexCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // DescribePlaceIndexRequest
 *   IndexName: "STRING_VALUE", // required
 * };
 * const command = new DescribePlaceIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribePlaceIndexCommandInput - {@link DescribePlaceIndexCommandInput}
 * @returns {@link DescribePlaceIndexCommandOutput}
 * @see {@link DescribePlaceIndexCommandInput} for command's `input` shape.
 * @see {@link DescribePlaceIndexCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 *
 */
export class DescribePlaceIndexCommand extends $Command<
  DescribePlaceIndexCommandInput,
  DescribePlaceIndexCommandOutput,
  LocationClientResolvedConfig
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
  constructor(readonly input: DescribePlaceIndexCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePlaceIndexCommandInput, DescribePlaceIndexCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePlaceIndexCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "DescribePlaceIndexCommand";
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
  private serialize(input: DescribePlaceIndexCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePlaceIndexCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePlaceIndexCommandOutput> {
    return de_DescribePlaceIndexCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
