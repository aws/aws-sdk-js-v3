import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DeleteApplicationMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteApplicationCommandInput = DeleteApplicationMessage;
export declare type DeleteApplicationCommandOutput = __MetadataBearer;
export declare class DeleteApplicationCommand extends $Command<DeleteApplicationCommandInput, DeleteApplicationCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DeleteApplicationCommandInput;
    constructor(input: DeleteApplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteApplicationCommandInput, DeleteApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
