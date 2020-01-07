import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { UpdatePipelineInput, UpdatePipelineOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdatePipelineCommandInput = UpdatePipelineInput;
export declare type UpdatePipelineCommandOutput = UpdatePipelineOutput & __MetadataBearer;
export declare class UpdatePipelineCommand extends $Command<UpdatePipelineCommandInput, UpdatePipelineCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: UpdatePipelineCommandInput;
    constructor(input: UpdatePipelineCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePipelineCommandInput, UpdatePipelineCommandOutput>;
    private serialize;
    private deserialize;
}
