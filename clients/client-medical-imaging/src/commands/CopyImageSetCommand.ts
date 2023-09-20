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
import { CopyImageSetRequest, CopyImageSetResponse } from "../models/models_0";
import { de_CopyImageSetCommand, se_CopyImageSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CopyImageSetCommand}.
 */
export interface CopyImageSetCommandInput extends CopyImageSetRequest {}
/**
 * @public
 *
 * The output of {@link CopyImageSetCommand}.
 */
export interface CopyImageSetCommandOutput extends CopyImageSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Copy an image set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, CopyImageSetCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, CopyImageSetCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * const client = new MedicalImagingClient(config);
 * const input = { // CopyImageSetRequest
 *   datastoreId: "STRING_VALUE", // required
 *   sourceImageSetId: "STRING_VALUE", // required
 *   copyImageSetInformation: { // CopyImageSetInformation
 *     sourceImageSet: { // CopySourceImageSetInformation
 *       latestVersionId: "STRING_VALUE", // required
 *     },
 *     destinationImageSet: { // CopyDestinationImageSet
 *       imageSetId: "STRING_VALUE", // required
 *       latestVersionId: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CopyImageSetCommand(input);
 * const response = await client.send(command);
 * // { // CopyImageSetResponse
 * //   datastoreId: "STRING_VALUE", // required
 * //   sourceImageSetProperties: { // CopySourceImageSetProperties
 * //     imageSetId: "STRING_VALUE", // required
 * //     latestVersionId: "STRING_VALUE", // required
 * //     imageSetState: "ACTIVE" || "LOCKED" || "DELETED",
 * //     imageSetWorkflowStatus: "CREATED" || "COPIED" || "COPYING" || "COPYING_WITH_READ_ONLY_ACCESS" || "COPY_FAILED" || "UPDATING" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETED",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     imageSetArn: "STRING_VALUE",
 * //   },
 * //   destinationImageSetProperties: { // CopyDestinationImageSetProperties
 * //     imageSetId: "STRING_VALUE", // required
 * //     latestVersionId: "STRING_VALUE", // required
 * //     imageSetState: "ACTIVE" || "LOCKED" || "DELETED",
 * //     imageSetWorkflowStatus: "CREATED" || "COPIED" || "COPYING" || "COPYING_WITH_READ_ONLY_ACCESS" || "COPY_FAILED" || "UPDATING" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETED",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     imageSetArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CopyImageSetCommandInput - {@link CopyImageSetCommandInput}
 * @returns {@link CopyImageSetCommandOutput}
 * @see {@link CopyImageSetCommandInput} for command's `input` shape.
 * @see {@link CopyImageSetCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request caused a service quota to be exceeded.</p>
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
export class CopyImageSetCommand extends $Command<
  CopyImageSetCommandInput,
  CopyImageSetCommandOutput,
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
  constructor(readonly input: CopyImageSetCommandInput) {
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
  ): Handler<CopyImageSetCommandInput, CopyImageSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CopyImageSetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MedicalImagingClient";
    const commandName = "CopyImageSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AHIGatewayService",
        operation: "CopyImageSet",
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
  private serialize(input: CopyImageSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CopyImageSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyImageSetCommandOutput> {
    return de_CopyImageSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
