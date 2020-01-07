import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ApplicationDescriptionMessage, CreateApplicationMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateApplicationCommandInput = CreateApplicationMessage;
export declare type CreateApplicationCommandOutput = ApplicationDescriptionMessage & __MetadataBearer;
export declare class CreateApplicationCommand extends $Command<CreateApplicationCommandInput, CreateApplicationCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: CreateApplicationCommandInput;
    constructor(input: CreateApplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateApplicationCommandInput, CreateApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
