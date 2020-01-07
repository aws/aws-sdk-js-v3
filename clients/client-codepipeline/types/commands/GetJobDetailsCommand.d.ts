import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { GetJobDetailsInput, GetJobDetailsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetJobDetailsCommandInput = GetJobDetailsInput;
export declare type GetJobDetailsCommandOutput = GetJobDetailsOutput & __MetadataBearer;
export declare class GetJobDetailsCommand extends $Command<GetJobDetailsCommandInput, GetJobDetailsCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: GetJobDetailsCommandInput;
    constructor(input: GetJobDetailsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJobDetailsCommandInput, GetJobDetailsCommandOutput>;
    private serialize;
    private deserialize;
}
