import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { AbortEnvironmentUpdateMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AbortEnvironmentUpdateCommandInput = AbortEnvironmentUpdateMessage;
export declare type AbortEnvironmentUpdateCommandOutput = __MetadataBearer;
export declare class AbortEnvironmentUpdateCommand extends $Command<AbortEnvironmentUpdateCommandInput, AbortEnvironmentUpdateCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: AbortEnvironmentUpdateCommandInput;
    constructor(input: AbortEnvironmentUpdateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AbortEnvironmentUpdateCommandInput, AbortEnvironmentUpdateCommandOutput>;
    private serialize;
    private deserialize;
}
