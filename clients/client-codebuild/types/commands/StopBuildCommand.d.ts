import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { StopBuildInput, StopBuildOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopBuildCommandInput = StopBuildInput;
export declare type StopBuildCommandOutput = StopBuildOutput & __MetadataBearer;
export declare class StopBuildCommand extends $Command<StopBuildCommandInput, StopBuildCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: StopBuildCommandInput;
    constructor(input: StopBuildCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopBuildCommandInput, StopBuildCommandOutput>;
    private serialize;
    private deserialize;
}
