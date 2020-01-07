import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { AcknowledgeJobInput, AcknowledgeJobOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AcknowledgeJobCommandInput = AcknowledgeJobInput;
export declare type AcknowledgeJobCommandOutput = AcknowledgeJobOutput & __MetadataBearer;
export declare class AcknowledgeJobCommand extends $Command<AcknowledgeJobCommandInput, AcknowledgeJobCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: AcknowledgeJobCommandInput;
    constructor(input: AcknowledgeJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcknowledgeJobCommandInput, AcknowledgeJobCommandOutput>;
    private serialize;
    private deserialize;
}
