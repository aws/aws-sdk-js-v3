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
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { GetMapGlyphsRequest, GetMapGlyphsRequestFilterSensitiveLog, GetMapGlyphsResponse } from "../models/models_0";
import { de_GetMapGlyphsCommand, se_GetMapGlyphsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMapGlyphsCommand}.
 */
export interface GetMapGlyphsCommandInput extends GetMapGlyphsRequest {}
/**
 * @public
 */
export type GetMapGlyphsCommandOutputType = Omit<GetMapGlyphsResponse, "Blob"> & {
  Blob?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetMapGlyphsCommand}.
 */
export interface GetMapGlyphsCommandOutput extends GetMapGlyphsCommandOutputType, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves glyphs used to display labels on a map.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetMapGlyphsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetMapGlyphsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // GetMapGlyphsRequest
 *   MapName: "STRING_VALUE", // required
 *   FontStack: "STRING_VALUE", // required
 *   FontUnicodeRange: "STRING_VALUE", // required
 *   Key: "STRING_VALUE",
 * };
 * const command = new GetMapGlyphsCommand(input);
 * const response = await client.send(command);
 * // { // GetMapGlyphsResponse
 * //   Blob: "BLOB_VALUE",
 * //   ContentType: "STRING_VALUE",
 * //   CacheControl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMapGlyphsCommandInput - {@link GetMapGlyphsCommandInput}
 * @returns {@link GetMapGlyphsCommandOutput}
 * @see {@link GetMapGlyphsCommandInput} for command's `input` shape.
 * @see {@link GetMapGlyphsCommandOutput} for command's `response` shape.
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
export class GetMapGlyphsCommand extends $Command<
  GetMapGlyphsCommandInput,
  GetMapGlyphsCommandOutput,
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
  constructor(readonly input: GetMapGlyphsCommandInput) {
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
  ): Handler<GetMapGlyphsCommandInput, GetMapGlyphsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetMapGlyphsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "GetMapGlyphsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMapGlyphsRequestFilterSensitiveLog,
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
  private serialize(input: GetMapGlyphsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMapGlyphsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMapGlyphsCommandOutput> {
    return de_GetMapGlyphsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
