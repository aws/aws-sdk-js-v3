import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ComposeEnvironmentsMessage, EnvironmentDescriptionsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ComposeEnvironmentsCommandInput = ComposeEnvironmentsMessage;
export declare type ComposeEnvironmentsCommandOutput = EnvironmentDescriptionsMessage & __MetadataBearer;
export declare class ComposeEnvironmentsCommand extends $Command<ComposeEnvironmentsCommandInput, ComposeEnvironmentsCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: ComposeEnvironmentsCommandInput;
    constructor(input: ComposeEnvironmentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ComposeEnvironmentsCommandInput, ComposeEnvironmentsCommandOutput>;
    private serialize;
    private deserialize;
}
