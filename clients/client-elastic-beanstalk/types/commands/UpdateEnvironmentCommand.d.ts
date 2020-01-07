import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { EnvironmentDescription, UpdateEnvironmentMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateEnvironmentCommandInput = UpdateEnvironmentMessage;
export declare type UpdateEnvironmentCommandOutput = EnvironmentDescription & __MetadataBearer;
export declare class UpdateEnvironmentCommand extends $Command<UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: UpdateEnvironmentCommandInput;
    constructor(input: UpdateEnvironmentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput>;
    private serialize;
    private deserialize;
}
