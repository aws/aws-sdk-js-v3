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

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import {
  CreateAssetInput,
  CreateAssetInputFilterSensitiveLog,
  CreateAssetOutput,
  CreateAssetOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateAssetCommand, se_CreateAssetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAssetCommand}.
 */
export interface CreateAssetCommandInput extends CreateAssetInput {}
/**
 * @public
 *
 * The output of {@link CreateAssetCommand}.
 */
export interface CreateAssetCommandOutput extends CreateAssetOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates an asset in Amazon DataZone catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateAssetCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateAssetCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // CreateAssetInput
 *   name: "STRING_VALUE", // required
 *   domainIdentifier: "STRING_VALUE", // required
 *   externalIdentifier: "STRING_VALUE",
 *   typeIdentifier: "STRING_VALUE", // required
 *   typeRevision: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   glossaryTerms: [ // GlossaryTerms
 *     "STRING_VALUE",
 *   ],
 *   formsInput: [ // FormInputList
 *     { // FormInput
 *       formName: "STRING_VALUE", // required
 *       typeIdentifier: "STRING_VALUE",
 *       typeRevision: "STRING_VALUE",
 *       content: "STRING_VALUE",
 *     },
 *   ],
 *   owningProjectIdentifier: "STRING_VALUE", // required
 *   predictionConfiguration: { // PredictionConfiguration
 *     businessNameGeneration: { // BusinessNameGenerationConfiguration
 *       enabled: true || false,
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAssetCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssetOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   typeIdentifier: "STRING_VALUE", // required
 * //   typeRevision: "STRING_VALUE", // required
 * //   externalIdentifier: "STRING_VALUE",
 * //   revision: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   firstRevisionCreatedAt: new Date("TIMESTAMP"),
 * //   firstRevisionCreatedBy: "STRING_VALUE",
 * //   glossaryTerms: [ // GlossaryTerms
 * //     "STRING_VALUE",
 * //   ],
 * //   owningProjectId: "STRING_VALUE", // required
 * //   domainId: "STRING_VALUE", // required
 * //   listing: { // AssetListingDetails
 * //     listingId: "STRING_VALUE", // required
 * //     listingStatus: "CREATING" || "ACTIVE" || "INACTIVE", // required
 * //   },
 * //   formsOutput: [ // FormOutputList // required
 * //     { // FormOutput
 * //       formName: "STRING_VALUE", // required
 * //       typeName: "STRING_VALUE",
 * //       typeRevision: "STRING_VALUE",
 * //       content: "STRING_VALUE",
 * //     },
 * //   ],
 * //   readOnlyFormsOutput: [
 * //     {
 * //       formName: "STRING_VALUE", // required
 * //       typeName: "STRING_VALUE",
 * //       typeRevision: "STRING_VALUE",
 * //       content: "STRING_VALUE",
 * //     },
 * //   ],
 * //   predictionConfiguration: { // PredictionConfiguration
 * //     businessNameGeneration: { // BusinessNameGenerationConfiguration
 * //       enabled: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAssetCommandInput - {@link CreateAssetCommandInput}
 * @returns {@link CreateAssetCommandOutput}
 * @see {@link CreateAssetCommandInput} for command's `input` shape.
 * @see {@link CreateAssetCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 */
export class CreateAssetCommand extends $Command<
  CreateAssetCommandInput,
  CreateAssetCommandOutput,
  DataZoneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateAssetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataZoneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAssetCommandInput, CreateAssetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateAssetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "CreateAssetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAssetInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAssetOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "CreateAsset",
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
  private serialize(input: CreateAssetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAssetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAssetCommandOutput> {
    return de_CreateAssetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
