import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { RestartAppServerMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RestartAppServerCommandInput = RestartAppServerMessage;
export declare type RestartAppServerCommandOutput = __MetadataBearer;
export declare class RestartAppServerCommand extends $Command<RestartAppServerCommandInput, RestartAppServerCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: RestartAppServerCommandInput;
    constructor(input: RestartAppServerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestartAppServerCommandInput, RestartAppServerCommandOutput>;
    private serialize;
    private deserialize;
}
