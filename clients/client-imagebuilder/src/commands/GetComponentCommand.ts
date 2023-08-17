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

import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetComponentRequest, GetComponentResponse } from "../models/models_0";
import { de_GetComponentCommand, se_GetComponentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetComponentCommand}.
 */
export interface GetComponentCommandInput extends GetComponentRequest {}
/**
 * @public
 *
 * The output of {@link GetComponentCommand}.
 */
export interface GetComponentCommandOutput extends GetComponentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a component object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetComponentCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetComponentCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // GetComponentRequest
 *   componentBuildVersionArn: "STRING_VALUE", // required
 * };
 * const command = new GetComponentCommand(input);
 * const response = await client.send(command);
 * // { // GetComponentResponse
 * //   requestId: "STRING_VALUE",
 * //   component: { // Component
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     version: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     changeDescription: "STRING_VALUE",
 * //     type: "BUILD" || "TEST",
 * //     platform: "Windows" || "Linux",
 * //     supportedOsVersions: [ // OsVersionList
 * //       "STRING_VALUE",
 * //     ],
 * //     state: { // ComponentState
 * //       status: "DEPRECATED",
 * //       reason: "STRING_VALUE",
 * //     },
 * //     parameters: [ // ComponentParameterDetailList
 * //       { // ComponentParameterDetail
 * //         name: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         defaultValue: [ // ComponentParameterValueList
 * //           "STRING_VALUE",
 * //         ],
 * //         description: "STRING_VALUE",
 * //       },
 * //     ],
 * //     owner: "STRING_VALUE",
 * //     data: "STRING_VALUE",
 * //     kmsKeyId: "STRING_VALUE",
 * //     encrypted: true || false,
 * //     dateCreated: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     publisher: "STRING_VALUE",
 * //     obfuscate: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetComponentCommandInput - {@link GetComponentCommandInput}
 * @returns {@link GetComponentCommandOutput}
 * @see {@link GetComponentCommandInput} for command's `input` shape.
 * @see {@link GetComponentCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 */
export class GetComponentCommand extends $Command<
  GetComponentCommandInput,
  GetComponentCommandOutput,
  ImagebuilderClientResolvedConfig
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
  constructor(readonly input: GetComponentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetComponentCommandInput, GetComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetComponentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "GetComponentCommand";
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
  private serialize(input: GetComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetComponentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetComponentCommandOutput> {
    return de_GetComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
