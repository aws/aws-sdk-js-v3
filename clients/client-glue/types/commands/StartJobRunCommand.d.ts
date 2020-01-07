import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartJobRunRequest, StartJobRunResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartJobRunCommandInput = StartJobRunRequest;
export declare type StartJobRunCommandOutput = StartJobRunResponse & __MetadataBearer;
export declare class StartJobRunCommand extends $Command<StartJobRunCommandInput, StartJobRunCommandOutput, GlueClientResolvedConfig> {
    readonly input: StartJobRunCommandInput;
    constructor(input: StartJobRunCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartJobRunCommandInput, StartJobRunCommandOutput>;
    private serialize;
    private deserialize;
}
