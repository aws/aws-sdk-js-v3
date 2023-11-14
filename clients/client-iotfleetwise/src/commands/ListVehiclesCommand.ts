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

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { ListVehiclesRequest, ListVehiclesResponse } from "../models/models_0";
import { de_ListVehiclesCommand, se_ListVehiclesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListVehiclesCommand}.
 */
export interface ListVehiclesCommandInput extends ListVehiclesRequest {}
/**
 * @public
 *
 * The output of {@link ListVehiclesCommand}.
 */
export interface ListVehiclesCommandOutput extends ListVehiclesResponse, __MetadataBearer {}

/**
 * @public
 * <p> Retrieves a list of summaries of created vehicles. </p>
 *         <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ListVehiclesCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ListVehiclesCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // ListVehiclesRequest
 *   modelManifestArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListVehiclesCommand(input);
 * const response = await client.send(command);
 * // { // ListVehiclesResponse
 * //   vehicleSummaries: [ // vehicleSummaries
 * //     { // VehicleSummary
 * //       vehicleName: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       modelManifestArn: "STRING_VALUE", // required
 * //       decoderManifestArn: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       lastModificationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVehiclesCommandInput - {@link ListVehiclesCommandInput}
 * @returns {@link ListVehiclesCommandOutput}
 * @see {@link ListVehiclesCommandInput} for command's `input` shape.
 * @see {@link ListVehiclesCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 */
export class ListVehiclesCommand extends $Command<
  ListVehiclesCommandInput,
  ListVehiclesCommandOutput,
  IoTFleetWiseClientResolvedConfig
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
  constructor(readonly input: ListVehiclesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVehiclesCommandInput, ListVehiclesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListVehiclesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "ListVehiclesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IoTAutobahnControlPlane",
        operation: "ListVehicles",
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
  private serialize(input: ListVehiclesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListVehiclesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVehiclesCommandOutput> {
    return de_ListVehiclesCommand(output, context);
  }
}
