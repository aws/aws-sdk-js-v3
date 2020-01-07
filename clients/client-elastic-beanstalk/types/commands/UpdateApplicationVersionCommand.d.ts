import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ApplicationVersionDescriptionMessage, UpdateApplicationVersionMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateApplicationVersionCommandInput = UpdateApplicationVersionMessage;
export declare type UpdateApplicationVersionCommandOutput = ApplicationVersionDescriptionMessage & __MetadataBearer;
export declare class UpdateApplicationVersionCommand extends $Command<UpdateApplicationVersionCommandInput, UpdateApplicationVersionCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: UpdateApplicationVersionCommandInput;
    constructor(input: UpdateApplicationVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateApplicationVersionCommandInput, UpdateApplicationVersionCommandOutput>;
    private serialize;
    private deserialize;
}
