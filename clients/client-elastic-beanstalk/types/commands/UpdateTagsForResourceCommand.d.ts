import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { UpdateTagsForResourceMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateTagsForResourceCommandInput = UpdateTagsForResourceMessage;
export declare type UpdateTagsForResourceCommandOutput = __MetadataBearer;
export declare class UpdateTagsForResourceCommand extends $Command<UpdateTagsForResourceCommandInput, UpdateTagsForResourceCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: UpdateTagsForResourceCommandInput;
    constructor(input: UpdateTagsForResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTagsForResourceCommandInput, UpdateTagsForResourceCommandOutput>;
    private serialize;
    private deserialize;
}
