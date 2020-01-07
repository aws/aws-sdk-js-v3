import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { RetrieveEnvironmentInfoMessage, RetrieveEnvironmentInfoResultMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RetrieveEnvironmentInfoCommandInput = RetrieveEnvironmentInfoMessage;
export declare type RetrieveEnvironmentInfoCommandOutput = RetrieveEnvironmentInfoResultMessage & __MetadataBearer;
export declare class RetrieveEnvironmentInfoCommand extends $Command<RetrieveEnvironmentInfoCommandInput, RetrieveEnvironmentInfoCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: RetrieveEnvironmentInfoCommandInput;
    constructor(input: RetrieveEnvironmentInfoCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RetrieveEnvironmentInfoCommandInput, RetrieveEnvironmentInfoCommandOutput>;
    private serialize;
    private deserialize;
}
