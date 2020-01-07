import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { RebuildEnvironmentMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RebuildEnvironmentCommandInput = RebuildEnvironmentMessage;
export declare type RebuildEnvironmentCommandOutput = __MetadataBearer;
export declare class RebuildEnvironmentCommand extends $Command<RebuildEnvironmentCommandInput, RebuildEnvironmentCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: RebuildEnvironmentCommandInput;
    constructor(input: RebuildEnvironmentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebuildEnvironmentCommandInput, RebuildEnvironmentCommandOutput>;
    private serialize;
    private deserialize;
}
