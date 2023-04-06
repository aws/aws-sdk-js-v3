// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { CreatePipelineInput, CreatePipelineOutput } from "../models/models_0";
import { de_CreatePipelineCommand, se_CreatePipelineCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreatePipelineCommand}.
 */
export interface CreatePipelineCommandInput extends CreatePipelineInput {}
/**
 * @public
 *
 * The output of {@link CreatePipelineCommand}.
 */
export interface CreatePipelineCommandOutput extends CreatePipelineOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a pipeline.</p>
 *         <note>
 *             <p>In the pipeline structure, you must include either <code>artifactStore</code>
 *                 or <code>artifactStores</code> in your pipeline, but you cannot use both. If you
 *                 create a cross-region action in your pipeline, you must use
 *                     <code>artifactStores</code>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, CreatePipelineCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, CreatePipelineCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // CreatePipelineInput
 *   pipeline: { // PipelineDeclaration
 *     name: "STRING_VALUE", // required
 *     roleArn: "STRING_VALUE", // required
 *     artifactStore: { // ArtifactStore
 *       type: "STRING_VALUE", // required
 *       location: "STRING_VALUE", // required
 *       encryptionKey: { // EncryptionKey
 *         id: "STRING_VALUE", // required
 *         type: "STRING_VALUE", // required
 *       },
 *     },
 *     artifactStores: { // ArtifactStoreMap
 *       "<keys>": {
 *         type: "STRING_VALUE", // required
 *         location: "STRING_VALUE", // required
 *         encryptionKey: {
 *           id: "STRING_VALUE", // required
 *           type: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *     stages: [ // PipelineStageDeclarationList // required
 *       { // StageDeclaration
 *         name: "STRING_VALUE", // required
 *         blockers: [ // StageBlockerDeclarationList
 *           { // BlockerDeclaration
 *             name: "STRING_VALUE", // required
 *             type: "STRING_VALUE", // required
 *           },
 *         ],
 *         actions: [ // StageActionDeclarationList // required
 *           { // ActionDeclaration
 *             name: "STRING_VALUE", // required
 *             actionTypeId: { // ActionTypeId
 *               category: "STRING_VALUE", // required
 *               owner: "STRING_VALUE", // required
 *               provider: "STRING_VALUE", // required
 *               version: "STRING_VALUE", // required
 *             },
 *             runOrder: Number("int"),
 *             configuration: { // ActionConfigurationMap
 *               "<keys>": "STRING_VALUE",
 *             },
 *             outputArtifacts: [ // OutputArtifactList
 *               { // OutputArtifact
 *                 name: "STRING_VALUE", // required
 *               },
 *             ],
 *             inputArtifacts: [ // InputArtifactList
 *               { // InputArtifact
 *                 name: "STRING_VALUE", // required
 *               },
 *             ],
 *             roleArn: "STRING_VALUE",
 *             region: "STRING_VALUE",
 *             namespace: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     ],
 *     version: Number("int"),
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreatePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreatePipelineCommandInput - {@link CreatePipelineCommandInput}
 * @returns {@link CreatePipelineCommandOutput}
 * @see {@link CreatePipelineCommandInput} for command's `input` shape.
 * @see {@link CreatePipelineCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Unable to modify the tag due to a simultaneous update request.</p>
 *
 * @throws {@link InvalidActionDeclarationException} (client fault)
 *  <p>The action declaration was specified in an invalid format.</p>
 *
 * @throws {@link InvalidBlockerDeclarationException} (client fault)
 *  <p>Reserved for future use.</p>
 *
 * @throws {@link InvalidStageDeclarationException} (client fault)
 *  <p>The stage declaration was specified in an invalid format.</p>
 *
 * @throws {@link InvalidStructureException} (client fault)
 *  <p>The structure was specified in an invalid format.</p>
 *
 * @throws {@link InvalidTagsException} (client fault)
 *  <p>The specified resource tags are invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The number of pipelines associated with the AWS account has exceeded the limit
 *             allowed for the account.</p>
 *
 * @throws {@link PipelineNameInUseException} (client fault)
 *  <p>The specified pipeline name is already in use.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The tags limit for a resource has been exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 *
 */
export class CreatePipelineCommand extends $Command<
  CreatePipelineCommandInput,
  CreatePipelineCommandOutput,
  CodePipelineClientResolvedConfig
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
  constructor(readonly input: CreatePipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePipelineCommandInput, CreatePipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "CreatePipelineCommand";
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
  private serialize(input: CreatePipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreatePipelineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePipelineCommandOutput> {
    return de_CreatePipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
