import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { EnvironmentDescription, TerminateEnvironmentMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TerminateEnvironmentCommandInput = TerminateEnvironmentMessage;
export declare type TerminateEnvironmentCommandOutput = EnvironmentDescription & __MetadataBearer;
export declare class TerminateEnvironmentCommand extends $Command<TerminateEnvironmentCommandInput, TerminateEnvironmentCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: TerminateEnvironmentCommandInput;
    constructor(input: TerminateEnvironmentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TerminateEnvironmentCommandInput, TerminateEnvironmentCommandOutput>;
    private serialize;
    private deserialize;
}
