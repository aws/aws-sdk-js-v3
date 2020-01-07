import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { GetPipelineInput, GetPipelineOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPipelineCommandInput = GetPipelineInput;
export declare type GetPipelineCommandOutput = GetPipelineOutput & __MetadataBearer;
export declare class GetPipelineCommand extends $Command<GetPipelineCommandInput, GetPipelineCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: GetPipelineCommandInput;
    constructor(input: GetPipelineCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPipelineCommandInput, GetPipelineCommandOutput>;
    private serialize;
    private deserialize;
}
