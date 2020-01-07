import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutActionRevisionInput, PutActionRevisionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutActionRevisionCommandInput = PutActionRevisionInput;
export declare type PutActionRevisionCommandOutput = PutActionRevisionOutput & __MetadataBearer;
export declare class PutActionRevisionCommand extends $Command<PutActionRevisionCommandInput, PutActionRevisionCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: PutActionRevisionCommandInput;
    constructor(input: PutActionRevisionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutActionRevisionCommandInput, PutActionRevisionCommandOutput>;
    private serialize;
    private deserialize;
}
