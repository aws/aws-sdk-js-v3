import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ApplicationVersionDescriptionMessage, CreateApplicationVersionMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateApplicationVersionCommandInput = CreateApplicationVersionMessage;
export declare type CreateApplicationVersionCommandOutput = ApplicationVersionDescriptionMessage & __MetadataBearer;
export declare class CreateApplicationVersionCommand extends $Command<CreateApplicationVersionCommandInput, CreateApplicationVersionCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: CreateApplicationVersionCommandInput;
    constructor(input: CreateApplicationVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateApplicationVersionCommandInput, CreateApplicationVersionCommandOutput>;
    private serialize;
    private deserialize;
}
