import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { StartBuildInput, StartBuildOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartBuildCommandInput = StartBuildInput;
export declare type StartBuildCommandOutput = StartBuildOutput & __MetadataBearer;
export declare class StartBuildCommand extends $Command<StartBuildCommandInput, StartBuildCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: StartBuildCommandInput;
    constructor(input: StartBuildCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartBuildCommandInput, StartBuildCommandOutput>;
    private serialize;
    private deserialize;
}
