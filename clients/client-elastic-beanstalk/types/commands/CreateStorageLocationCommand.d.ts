import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { CreateStorageLocationResultMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateStorageLocationCommandInput = {};
export declare type CreateStorageLocationCommandOutput = CreateStorageLocationResultMessage & __MetadataBearer;
export declare class CreateStorageLocationCommand extends $Command<CreateStorageLocationCommandInput, CreateStorageLocationCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: CreateStorageLocationCommandInput;
    constructor(input: CreateStorageLocationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateStorageLocationCommandInput, CreateStorageLocationCommandOutput>;
    private serialize;
    private deserialize;
}
