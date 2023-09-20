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
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  GetMapStyleDescriptorRequest,
  GetMapStyleDescriptorRequestFilterSensitiveLog,
  GetMapStyleDescriptorResponse,
} from "../models/models_0";
import { de_GetMapStyleDescriptorCommand, se_GetMapStyleDescriptorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMapStyleDescriptorCommand}.
 */
export interface GetMapStyleDescriptorCommandInput extends GetMapStyleDescriptorRequest {}
/**
 * @public
 */
export type GetMapStyleDescriptorCommandOutputType = Omit<GetMapStyleDescriptorResponse, "Blob"> & {
  Blob?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetMapStyleDescriptorCommand}.
 */
export interface GetMapStyleDescriptorCommandOutput extends GetMapStyleDescriptorCommandOutputType, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the map style descriptor from a map resource. </p>
 *          <p>The style descriptor contains speciﬁcations on how features render on a map. For
 *             example, what data to display, what order to display the data in, and the style for the
 *             data. Style descriptors follow the Mapbox Style Specification.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetMapStyleDescriptorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetMapStyleDescriptorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // GetMapStyleDescriptorRequest
 *   MapName: "STRING_VALUE", // required
 *   Key: "STRING_VALUE",
 * };
 * const command = new GetMapStyleDescriptorCommand(input);
 * const response = await client.send(command);
 * // { // GetMapStyleDescriptorResponse
 * //   Blob: "BLOB_VALUE",
 * //   ContentType: "STRING_VALUE",
 * //   CacheControl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMapStyleDescriptorCommandInput - {@link GetMapStyleDescriptorCommandInput}
 * @returns {@link GetMapStyleDescriptorCommandOutput}
 * @see {@link GetMapStyleDescriptorCommandInput} for command's `input` shape.
 * @see {@link GetMapStyleDescriptorCommandOutput} for command's `response` shape.
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
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 */
export class GetMapStyleDescriptorCommand extends $Command<
  GetMapStyleDescriptorCommandInput,
  GetMapStyleDescriptorCommandOutput,
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
  constructor(readonly input: GetMapStyleDescriptorCommandInput) {
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
  ): Handler<GetMapStyleDescriptorCommandInput, GetMapStyleDescriptorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMapStyleDescriptorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "GetMapStyleDescriptorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMapStyleDescriptorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LocationService",
        operation: "GetMapStyleDescriptor",
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
  private serialize(input: GetMapStyleDescriptorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMapStyleDescriptorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMapStyleDescriptorCommandOutput> {
    return de_GetMapStyleDescriptorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
