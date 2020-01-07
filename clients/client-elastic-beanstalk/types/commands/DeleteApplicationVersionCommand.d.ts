import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DeleteApplicationVersionMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteApplicationVersionCommandInput = DeleteApplicationVersionMessage;
export declare type DeleteApplicationVersionCommandOutput = __MetadataBearer;
export declare class DeleteApplicationVersionCommand extends $Command<DeleteApplicationVersionCommandInput, DeleteApplicationVersionCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DeleteApplicationVersionCommandInput;
    constructor(input: DeleteApplicationVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteApplicationVersionCommandInput, DeleteApplicationVersionCommandOutput>;
    private serialize;
    private deserialize;
}
