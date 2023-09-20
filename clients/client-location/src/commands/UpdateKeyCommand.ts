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

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { UpdateKeyRequest, UpdateKeyResponse } from "../models/models_0";
import { de_UpdateKeyCommand, se_UpdateKeyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateKeyCommand}.
 */
export interface UpdateKeyCommandInput extends UpdateKeyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKeyCommand}.
 */
export interface UpdateKeyCommandOutput extends UpdateKeyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified properties of a given API key resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, UpdateKeyCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, UpdateKeyCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // UpdateKeyRequest
 *   KeyName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ExpireTime: new Date("TIMESTAMP"),
 *   NoExpiry: true || false,
 *   ForceUpdate: true || false,
 *   Restrictions: { // ApiKeyRestrictions
 *     AllowActions: [ // ApiKeyActionList // required
 *       "STRING_VALUE",
 *     ],
 *     AllowResources: [ // GeoArnList // required
 *       "STRING_VALUE",
 *     ],
 *     AllowReferers: [ // RefererPatternList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateKeyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKeyResponse
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyName: "STRING_VALUE", // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateKeyCommandInput - {@link UpdateKeyCommandInput}
 * @returns {@link UpdateKeyCommandOutput}
 * @see {@link UpdateKeyCommandInput} for command's `input` shape.
 * @see {@link UpdateKeyCommandOutput} for command's `response` shape.
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
export class UpdateKeyCommand extends $Command<
  UpdateKeyCommandInput,
  UpdateKeyCommandOutput,
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
  constructor(readonly input: UpdateKeyCommandInput) {
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
  ): Handler<UpdateKeyCommandInput, UpdateKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateKeyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "UpdateKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LocationService",
        operation: "UpdateKey",
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
  private serialize(input: UpdateKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateKeyCommandOutput> {
    return de_UpdateKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
