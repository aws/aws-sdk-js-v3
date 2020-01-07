import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ListAvailableSolutionStacksResultMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAvailableSolutionStacksCommandInput = {};
export declare type ListAvailableSolutionStacksCommandOutput = ListAvailableSolutionStacksResultMessage & __MetadataBearer;
export declare class ListAvailableSolutionStacksCommand extends $Command<ListAvailableSolutionStacksCommandInput, ListAvailableSolutionStacksCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: ListAvailableSolutionStacksCommandInput;
    constructor(input: ListAvailableSolutionStacksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAvailableSolutionStacksCommandInput, ListAvailableSolutionStacksCommandOutput>;
    private serialize;
    private deserialize;
}
