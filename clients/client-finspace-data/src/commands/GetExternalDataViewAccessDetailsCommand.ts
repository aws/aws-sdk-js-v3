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

import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import {
  GetExternalDataViewAccessDetailsRequest,
  GetExternalDataViewAccessDetailsResponse,
  GetExternalDataViewAccessDetailsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetExternalDataViewAccessDetailsCommand,
  se_GetExternalDataViewAccessDetailsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetExternalDataViewAccessDetailsCommand}.
 */
export interface GetExternalDataViewAccessDetailsCommandInput extends GetExternalDataViewAccessDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetExternalDataViewAccessDetailsCommand}.
 */
export interface GetExternalDataViewAccessDetailsCommandOutput
  extends GetExternalDataViewAccessDetailsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the credentials to access the external Dataview from an S3 location. To call this API:</p>
 *          <ul>
 *             <li>
 *                <p>You must retrieve the programmatic credentials.</p>
 *             </li>
 *             <li>
 *                <p>You must be a member of a FinSpace user group, where the dataset that you want to access has <code>Read Dataset Data</code> permissions.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, GetExternalDataViewAccessDetailsCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, GetExternalDataViewAccessDetailsCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const input = { // GetExternalDataViewAccessDetailsRequest
 *   dataViewId: "STRING_VALUE", // required
 *   datasetId: "STRING_VALUE", // required
 * };
 * const command = new GetExternalDataViewAccessDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetExternalDataViewAccessDetailsResponse
 * //   credentials: { // AwsCredentials
 * //     accessKeyId: "STRING_VALUE",
 * //     secretAccessKey: "STRING_VALUE",
 * //     sessionToken: "STRING_VALUE",
 * //     expiration: Number("long"),
 * //   },
 * //   s3Location: { // S3Location
 * //     bucket: "STRING_VALUE", // required
 * //     key: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetExternalDataViewAccessDetailsCommandInput - {@link GetExternalDataViewAccessDetailsCommandInput}
 * @returns {@link GetExternalDataViewAccessDetailsCommandOutput}
 * @see {@link GetExternalDataViewAccessDetailsCommandInput} for command's `input` shape.
 * @see {@link GetExternalDataViewAccessDetailsCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceDataServiceException}
 * <p>Base exception class for all service exceptions from FinspaceData service.</p>
 *
 */
export class GetExternalDataViewAccessDetailsCommand extends $Command<
  GetExternalDataViewAccessDetailsCommandInput,
  GetExternalDataViewAccessDetailsCommandOutput,
  FinspaceDataClientResolvedConfig
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
  constructor(readonly input: GetExternalDataViewAccessDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetExternalDataViewAccessDetailsCommandInput, GetExternalDataViewAccessDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetExternalDataViewAccessDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "GetExternalDataViewAccessDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetExternalDataViewAccessDetailsResponseFilterSensitiveLog,
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
  private serialize(
    input: GetExternalDataViewAccessDetailsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetExternalDataViewAccessDetailsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetExternalDataViewAccessDetailsCommandOutput> {
    return de_GetExternalDataViewAccessDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
