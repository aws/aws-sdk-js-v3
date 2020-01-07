import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { GetPipelineStateInput, GetPipelineStateOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPipelineStateCommandInput = GetPipelineStateInput;
export declare type GetPipelineStateCommandOutput = GetPipelineStateOutput & __MetadataBearer;
export declare class GetPipelineStateCommand extends $Command<GetPipelineStateCommandInput, GetPipelineStateCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: GetPipelineStateCommandInput;
    constructor(input: GetPipelineStateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPipelineStateCommandInput, GetPipelineStateCommandOutput>;
    private serialize;
    private deserialize;
}
