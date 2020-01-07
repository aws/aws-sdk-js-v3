import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ApplicationDescriptionMessage, UpdateApplicationMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateApplicationCommandInput = UpdateApplicationMessage;
export declare type UpdateApplicationCommandOutput = ApplicationDescriptionMessage & __MetadataBearer;
export declare class UpdateApplicationCommand extends $Command<UpdateApplicationCommandInput, UpdateApplicationCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: UpdateApplicationCommandInput;
    constructor(input: UpdateApplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateApplicationCommandInput, UpdateApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
