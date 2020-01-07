import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DeletePlatformVersionRequest, DeletePlatformVersionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeletePlatformVersionCommandInput = DeletePlatformVersionRequest;
export declare type DeletePlatformVersionCommandOutput = DeletePlatformVersionResult & __MetadataBearer;
export declare class DeletePlatformVersionCommand extends $Command<DeletePlatformVersionCommandInput, DeletePlatformVersionCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DeletePlatformVersionCommandInput;
    constructor(input: DeletePlatformVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePlatformVersionCommandInput, DeletePlatformVersionCommandOutput>;
    private serialize;
    private deserialize;
}
