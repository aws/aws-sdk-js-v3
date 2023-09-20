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

import { MedicalImagingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MedicalImagingClient";
import { GetImageSetRequest, GetImageSetResponse } from "../models/models_0";
import { de_GetImageSetCommand, se_GetImageSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetImageSetCommand}.
 */
export interface GetImageSetCommandInput extends GetImageSetRequest {}
/**
 * @public
 *
 * The output of {@link GetImageSetCommand}.
 */
export interface GetImageSetCommandOutput extends GetImageSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get image set properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, GetImageSetCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, GetImageSetCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * const client = new MedicalImagingClient(config);
 * const input = { // GetImageSetRequest
 *   datastoreId: "STRING_VALUE", // required
 *   imageSetId: "STRING_VALUE", // required
 *   versionId: "STRING_VALUE",
 * };
 * const command = new GetImageSetCommand(input);
 * const response = await client.send(command);
 * // { // GetImageSetResponse
 * //   datastoreId: "STRING_VALUE", // required
 * //   imageSetId: "STRING_VALUE", // required
 * //   versionId: "STRING_VALUE", // required
 * //   imageSetState: "ACTIVE" || "LOCKED" || "DELETED", // required
 * //   imageSetWorkflowStatus: "CREATED" || "COPIED" || "COPYING" || "COPYING_WITH_READ_ONLY_ACCESS" || "COPY_FAILED" || "UPDATING" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETED",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   deletedAt: new Date("TIMESTAMP"),
 * //   message: "STRING_VALUE",
 * //   imageSetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetImageSetCommandInput - {@link GetImageSetCommandInput}
 * @returns {@link GetImageSetCommandOutput}
 * @see {@link GetImageSetCommandInput} for command's `input` shape.
 * @see {@link GetImageSetCommandOutput} for command's `response` shape.
 * @see {@link MedicalImagingClientResolvedConfig | config} for MedicalImagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link MedicalImagingServiceException}
 * <p>Base exception class for all service exceptions from MedicalImaging service.</p>
 *
 */
export class GetImageSetCommand extends $Command<
  GetImageSetCommandInput,
  GetImageSetCommandOutput,
  MedicalImagingClientResolvedConfig
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
  constructor(readonly input: GetImageSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MedicalImagingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetImageSetCommandInput, GetImageSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetImageSetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MedicalImagingClient";
    const commandName = "GetImageSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AHIGatewayService",
        operation: "GetImageSet",
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
  private serialize(input: GetImageSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetImageSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetImageSetCommandOutput> {
    return de_GetImageSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
