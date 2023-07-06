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

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { CreateKeyRequest, CreateKeyResponse, CreateKeyResponseFilterSensitiveLog } from "../models/models_0";
import { de_CreateKeyCommand, se_CreateKeyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateKeyCommand}.
 */
export interface CreateKeyCommandInput extends CreateKeyRequest {}
/**
 * @public
 *
 * The output of {@link CreateKeyCommand}.
 */
export interface CreateKeyCommandOutput extends CreateKeyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an API key resource in your Amazon Web Services account, which lets you grant
 *             actions for Amazon Location resources to the API key bearer.</p>
 *          <note>
 *             <p>For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CreateKeyCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CreateKeyCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // CreateKeyRequest
 *   KeyName: "STRING_VALUE", // required
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
 *   Description: "STRING_VALUE",
 *   ExpireTime: new Date("TIMESTAMP"),
 *   NoExpiry: true || false,
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateKeyCommand(input);
 * const response = await client.send(command);
 * // { // CreateKeyResponse
 * //   Key: "STRING_VALUE", // required
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyName: "STRING_VALUE", // required
 * //   CreateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateKeyCommandInput - {@link CreateKeyCommandInput}
 * @returns {@link CreateKeyCommandOutput}
 * @see {@link CreateKeyCommandInput} for command's `input` shape.
 * @see {@link CreateKeyCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request was unsuccessful because of a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The operation was denied because the request would exceed the maximum <a href="https://docs.aws.amazon.com/location/latest/developerguide/location-quotas.html">quota</a>
 *       set for Amazon Location Service.</p>
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
export class CreateKeyCommand extends $Command<
  CreateKeyCommandInput,
  CreateKeyCommandOutput,
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
  constructor(readonly input: CreateKeyCommandInput) {
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
  ): Handler<CreateKeyCommandInput, CreateKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateKeyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "CreateKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: CreateKeyResponseFilterSensitiveLog,
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
  private serialize(input: CreateKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateKeyCommandOutput> {
    return de_CreateKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
