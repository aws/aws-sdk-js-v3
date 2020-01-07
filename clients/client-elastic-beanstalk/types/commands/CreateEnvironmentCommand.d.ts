import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { CreateEnvironmentMessage, EnvironmentDescription } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateEnvironmentCommandInput = CreateEnvironmentMessage;
export declare type CreateEnvironmentCommandOutput = EnvironmentDescription & __MetadataBearer;
export declare class CreateEnvironmentCommand extends $Command<CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: CreateEnvironmentCommandInput;
    constructor(input: CreateEnvironmentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput>;
    private serialize;
    private deserialize;
}
