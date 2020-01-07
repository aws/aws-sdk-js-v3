import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { ConfigureAgentRequest, ConfigureAgentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ConfigureAgentCommandInput = ConfigureAgentRequest;
export declare type ConfigureAgentCommandOutput = ConfigureAgentResponse & __MetadataBearer;
export declare class ConfigureAgentCommand extends $Command<ConfigureAgentCommandInput, ConfigureAgentCommandOutput, CodeGuruProfilerClientResolvedConfig> {
    readonly input: ConfigureAgentCommandInput;
    constructor(input: ConfigureAgentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruProfilerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConfigureAgentCommandInput, ConfigureAgentCommandOutput>;
    private serialize;
    private deserialize;
}
